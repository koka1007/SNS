//canvasのサイズ等設定
function losecanvas(){
	var html = "";
		html += '<canvas id="canvas" width="600px" height="480px" style="background-color:white;">';
		html += 'このブラウザは HTML5 Canvas に対応していません。';
		html += '</canvas>';
		document.write(html);
}

//テキストを使えるようにする
function droptext(){
	//画像をCanvasのサイズに合わせて等倍して画像をcanvasに貼り付ける.
	var canvas_width = 600;
	var canvas_hegiht = 480;

	//20200709 ランダムに笑い声を出す必要がなくなったため削除 加納
	//var max = 500;
	//var min = 0;

	//テキスト表示用
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    //画像用
    const board = document.querySelector('canvas');
    const img = board.getContext("2d");

    //落ちてくる人の画像パス
    const chara = new Image();
    chara.src = "img/lose/lose.png";

    //バックグラウンド用画像のパス
	const background = new Image();
	background.src = "img/lose/lose_background.gif";

    // 数字オブジェクトを作成する
    var Number = function(x, y) {
        // 数字の座標の位置
        this.x = 90;
        this.y = 20;
        this.width = 300;
        this.rx = 0;
        this.ry = 0;

        //フォント設定
        ctx.font = "70px serif";
	  	ctx.fillStyle = '#7B7787';

        // 数字の落下速度
        this.vy = 15;

        // 数字の描画
		this.draw = function() {
			this.fall_picture();
		}

		//画像を落とす設定
		this.fall_picture = function(){
			//背景設定
			img.drawImage(background, 0,0,canvas_width, background.height * canvas_width / background.width);
			//文字表示
			ctx.fillStyle = '#FB1711';
		  	ctx.font = "90px serif";
		  	ctx.fillText("お", (this.x + this.width), (this.y-70));
		  	ctx.fillText("笑", (this.x + this.width), this.y+30);
		  	ctx.fillText("失", this.x, this.y+20);
		  	ctx.fillText("格", this.x, this.y + 120);
		  	//落ちてくる人の設定
		  	img.drawImage(chara, 210, this.y, 200, 200);
		}

		//ワハハを表示する
		this.Wahaha = function(){
			var xpoint = 70;
			var ypoint = 245;

			//3回笑う！
			for(var i = 0; i < 3; i++){
				setTimeout(function() {
					//文字の縁取りの表示
					ctx.lineWidth = "6";
					ctx.fillStyle = '#C1C7C9';
					ctx.font = "110px serif";
					ctx.strokeText("ワ", (xpoint), (ypoint));
					ctx.strokeText("ハ", (xpoint+100), (ypoint-10));
					ctx.strokeText("ハ", (xpoint+200), (ypoint-20));

					//中身の文字の表示
					ctx.fillStyle = "#ffffff";
					ctx.fillText("ワ", (xpoint), (ypoint));
					ctx.fillText("ハ", (xpoint+100), (ypoint-10));
					ctx.fillText("ハ", (xpoint+200), (ypoint-20));

					//座標計算
					xpoint = xpoint + 80;
					ypoint = ypoint + 70;
				}, 1000);
			}
		}

		//GameOverを表示
		this.gameover = function(){
			//文字の座標
			xpoint = 50;
			ypoint = 120;

			//縁取りの設定
			ctx.globalAlpha = 1;
			ctx.lineWidth = "8";
			ctx.fillStyle = "#242424";
			ctx.font = "110px 'Impact'";
			ctx.strokeText("Game Over", xpoint, ypoint);

			//文字の色設定
			ctx.fillStyle = "#ffffff";
			ctx.fillText("Game Over",xpoint,ypoint);
		}

		//半透明な画像表示
		this.backdark = function(){
			var context = canvas.getContext('2d');
		    //図形の透過度を調整
			context.globalAlpha = 0.1;
		    //背景を設定する
		    context.fillStyle = "rgb(200, 0, 0)";
		    context.fillRect(0,0,canvas_width, background.height * canvas_width / background.width);
		}

        // 数字の落下
        this.move = function() {
        	this.y += this.vy;
        }


        /*20200709 ランダムに数字を出す必要がなくなったため削除 加納
        //ランダムで数字を出す
		this.random = function(){
			this.rx = Math.floor( Math.random() * (max + 1 - min) ) + min ;
			this.ry = Math.floor( Math.random() * (max + 1 - min) ) + min ;
		}
		*/

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
        	if(down.y <= 250){
	        	down.clear();
	        	down.draw();
	        	down.move();
        	//設定時間待ち処理を行う
        	}else{
            	setTimeout(function() {
            		down.backdark();
            		down.gameover();
            		down.Wahaha();
            	}, 1000);
            	setTimeout(function() {
        			btn_visible();
        			clearInterval(start);
        		}, 3000);
            }
        }, 100);
    }
    //数字の落下開始
    update();
}

//ボタンの表示を行う
function btn_visible(){
	document.getElementById("btn").style.visibility ="visible";
}



