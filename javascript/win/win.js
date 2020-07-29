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

    //棒立ち男の画像パス
    const stand1 = new Image();
    stand1.src = "img/win/stand1_front05_man.png";

    //ジャンプ男の画像パス
    const seikou = new Image();
    seikou.src = "img/win/seikou_banzai_man.png";

    //ふきだしの画像パス
    const hukidasi = new Image();
    hukidasi.src = "img/win/hukidasi.png";

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
        this.xx = 572;
        this.tt = 350;

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
            img.drawImage(background, 0,0,canvas_width,
            background.height * canvas_width / background.width);

        	//トロフィの設定
        	img.drawImage(trophy, 300, this.y, 200, 200);

        }

        this.flow_text = function(){
            ctx.fillStyle = '#ff8c00';
            ctx.font = "23px serif";
            ctx.fillText("YOU WIN", (this.texty),(this.xx));
        }

        this.win_text1 = function(){
            ctx.fillStyle = '#000000';
            ctx.font = "30px serif";
            ctx.fillText("ワイが", 580,170);
        }

        this.win_text2 = function(){
            ctx.fillStyle = '#000000';
            ctx.font = "30px serif";
            ctx.fillText("田端イチの", 580,200);
        }

        this.win_text3 = function(){
            ctx.fillStyle = '#000000';
            ctx.font = "30px serif";
            ctx.fillText("オモシロ", 580,230);
        }

        this.win_text4 = function(){
            ctx.fillStyle = '#000000';
            ctx.font = "30px serif";
            ctx.fillText("MANや！", 580,260);
        }

        this.win_yudou_text = function(){
            ctx.fillStyle = '#000000';
            ctx.font = "32px serif";
            ctx.fillText("画面下部の『ランキング登録』から芸名を登録しよう！", 20,540);
        }


        //人の表示
        this.human = function(){

		//立男の設定
      	img.drawImage(stand1, 420, this.tt, 130, 180);


        }

        //人の表示
        this.human2 = function(){

	      	//跳男の設定
	        img.drawImage(seikou, 400, 250, 180, 200);


        }

        //hukidasiの表示
        this.hukidasi = function(){

        	//hukidasiの設定
	        img.drawImage(hukidasi, 520, 50, 250, 300);

        }



        // 数字の落下
        this.move = function() {
            this.y += this.vy;
        }

        this.clearhuman = function() {
            this.tt += 1000;
        }

        this.textmove = function() {
            this.texty += this.vy;
        }

        this.textmoverest = function() {
            this.texty = 0;
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
        	down.human();
        	if(down.y>=300){
                down.clear();
                down.draw();
                down.textmove();
                down.flow_text();
        		down.human2();
        		down.hukidasi();
        		down.win_text1();
        		down.win_text2();
        		down.win_text3();
        		down.win_text4();
        		down.win_yudou_text();

                if(down.texty >= 900){
                	down.textmoverest();
                }
        	}

        }, 100);

    }


    //数字の落下開始
    update();
}