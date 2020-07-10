//canvasのサイズ等設定
function wincanvas(){
	var html = "";
		html += '<canvas id="canvas" width="600px" height="480px" style="background-color:white;">';
		html += 'このブラウザは HTML5 Canvas に対応していません。';
		html += '</canvas>';
		document.write(html);
}

//テキストを使えるようにする
function droptext(){
	//画像をCanvasのサイズに合わせて等倍して画像をcanvasに貼り付ける.
	var canvas_width = 800;
	var canvas_hegiht = 600;

	//テキスト表示用
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    //画像用
    const board = document.querySelector('canvas');
    const img = board.getContext("2d");

    //落ちてくるトロフィの画像パス
    const trophy = new Image();
    trophy.src = "img/win/trophy.png";

    //バックグラウンド用画像のパス
	const background = new Image();
	background.src = "img/win/win_background.png";

    // 数字オブジェクトを作成する
    var Number = function(x, y) {
        // 数字の座標の位置
        this.x = 90;
        this.y = 20;
        this.texty = 20;
        this.width = 300;
        this.rx = 0;
        this.ry = 0;

        //フォント設定
        ctx.font = "70px serif";
	  	ctx.fillStyle = '#000000';

        // 数字の落下速度
        this.vy = 15;

        // 数字の描画
		this.draw = function() {
			this.flow_picture();

		}

		//画像を落とす設定
		this.flow_picture = function(){
			//背景設定
			img.drawImage(background, 0,0,canvas_width, background.height * canvas_width / background.width);

			//トロフィの設定
		  	img.drawImage(trophy, 300, this.y, 200, 200);
		}

		this.flow_text = function(){
			ctx.fillStyle = '#ff8c00';
		  	ctx.font = "23px serif";
			ctx.fillText("YOU WIN", (this.texty +0),(this.x +482));
		}

		// 数字の落下
        this.move = function() {
        	this.y += this.vy;
        }

        this.textmove = function() {
        	this.texty += this.vy;
        }

        // キャンバスの初期化
        this.clear = function() {
            ctx.fillStyle = '#ecf0f1';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

    }

    //インスタンスの生成
    var down = new Number();

    // 数字の落下関数
    function update() {
    	//インターバル作成
        start = setInterval(function() {

        	//画像が落ちる処理
        	if(down.y <= 300){
        		down.clear();
        		down.draw();
	        	down.move();

        	//設定時間待ち処理を行う
        	}else{
            	setTimeout(function() {

            	}, 1000);
            }

        }, 100);


        //文字が流れる処理
        start = setInterval(function() {

            	down.clear();
            	down.draw();
            	down.textmove();
            	down.flow_text();

        }, 100);

    }

    //数字の落下開始
    update();
}