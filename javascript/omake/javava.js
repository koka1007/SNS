//canvasのサイズ等設定
function canvas_func(){
	var html = "";
		html += '<canvas id="canvas" width="800px" height="600px" style="background-color:white;">';
		html += 'このブラウザは HTML5 Canvas に対応していません。';
		html += '</canvas>';
		document.write(html);
}

//キャンバスのサイズを設定する
var SCREEN_WIDTH    = 800;
var SCREEN_HEIGHT   = 600;


function start() {
    //テキスト表示用
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

     //キャンバスの大きさを設定する
     canvas.width    = SCREEN_WIDTH;
     canvas.height   = SCREEN_HEIGHT;

    //設定した画像を読み込み、すべて読み込み終わったらキャンバスへの描画を始めるようにする
    Asset.loadAssets(function() {
        requestAnimationFrame(canvas_game);
    });
}


function canvas_game(){

     //背景を灰色にしてグランプリ前日と表示する
     function canvas_zenzitu(){

     ctx.fillStyle = '#696969';

     ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
     ctx.fill();
     ctx.stroke();

     ctx.fillStyle = 'white';
     ctx.font = "30px serif";
     ctx.fillText("グランプリ前日", SCREEN_WIDTH/2-130,SCREEN_HEIGHT/2);

     }

     // キャンバスの初期化、場面転換で使う
     function clear() {
        ctx.fillStyle = '#ecf0f1';
        ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }



    // 寝る前の処理
    function canvas_zenzitu_nerumae() {
            // キャンバスの初期化、場面転換で使う



        //背景を暗く
        ctx.fillStyle = '#696969';
        ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.font = "25px serif";
        //横になってる男とセリフを表示
        ctx.drawImage(Asset.images['okiteru'], 0, 100,700,700);

        setTimeout(function() {
            ctx.drawImage(Asset.images['hukidasi'],400,100,350,350);
            ctx.fillText('明日はグランプリ当日', 440, 290);
        }, 1000);

        setTimeout(function() {
            ctx.drawImage(Asset.images['hukidasi'],400,100,350,350);
            ctx.fillText('早く寝て明日に備えよう', 430, 290);
        }, 3000);

        setTimeout(function() {
            ctx.fillStyle = '#696969';
            ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            ctx.fill();
            ctx.stroke();
            ctx.drawImage(Asset.images['neteru'], 0, 100,700,700);
        }, 5000);

        setTimeout(function() {
            ctx.fillStyle = '#696969';
            ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            ctx.fill();
            ctx.stroke();
            ctx.drawImage(Asset.images['neteru'], 0, 100,700,700);
            var context = canvas.getContext('2d');
		    //図形の透過度を調整
			context.globalAlpha = 0.8;
		    //背景を設定する
		    context.fillStyle = "black";
		    context.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
        }, 7000);


    }

    // 起きたあとの処理
    function canvas_touzitu_okitesugu() {
        ctx.fillStyle = '#696969';
        ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'white';
        ctx.font = "30px serif";
        ctx.fillText("グランプリ当日", SCREEN_WIDTH/2-130,SCREEN_HEIGHT/2);

        setTimeout(function() {
            var context = canvas.getContext('2d');
		    //図形の透過度を調整
			context.globalAlpha = 1;
            ctx.fillStyle = '#ecf0f1';
            ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        }, 1000);
        let i =0;
        let hikaru =1000;
        let hikaranai = 1500;
        while(i<4){
            setTimeout(function() {
                ctx.drawImage(Asset.images['neteru'], 0, 100,700,700);
            }, hikaru);
            setTimeout(function() {
                ctx.drawImage(Asset.images['coal'], 0, 100,700,700);
            }, hikaranai);
            i++;
            hikaru+=2000;
            hikaranai+=2000;
        }
        setTimeout(function() {
            ctx.drawImage(Asset.images['okiteru'], 0, 100,700,700);
        }, 8000);

        setTimeout(function() {
            ctx.fillStyle = 'black';
            ctx.font = "50px serif";
            ctx.fillText("・", 430,240);
        }, 8500);

        setTimeout(function() {
            ctx.fillStyle = 'black';
            ctx.font = "50px serif";
            ctx.fillText("・", 460,240);
        }, 9500);

        setTimeout(function() {
            ctx.fillStyle = 'black';
            ctx.font = "50px serif";
            ctx.fillText("・", 490,240);
        }, 10500);

    }

    function canvas_touzitu_tikokunikiduku() {
        ctx.fillStyle = '#b0e0e6';
        ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        ctx.fill();
        ctx.stroke();
        ctx.drawImage(Asset.images['komaru'], 230, 320,300,300);

        setTimeout(function() {
            ctx.fillStyle = 'black';
            ctx.font = "30px serif";
            ctx.fillText("予定よりも1時間遅く起きてしまった！", 20,30);
        }, 1000);

        setTimeout(function() {
            ctx.fillStyle = 'black';
            ctx.font = "30px serif";
            ctx.fillText("このままじゃ遅刻してしまう！！", 20,80);
        }, 4500);

        setTimeout(function() {
            ctx.fillStyle = 'black';
            ctx.font = "30px serif";
            ctx.fillText("こうなったら！！！", 20,130);
        }, 8000);

        setTimeout(function() {
            ctx.fillStyle = 'red';
            ctx.font = "50px serif";
            ctx.fillText("田端まで走るしかない！！！！", 20,200);
        }, 11500);
    }
    function canvas_touzitu_rurusetumei() {
        ctx.fillStyle = 'black';
        ctx.font = "30px serif";
        ctx.fillText("ルール説明", 300,30);
        ctx.fillText("大切な予定があるにも関わらず寝坊してしまった！", 20,80);
        ctx.fillText("制限時間以内に田端に到着しよう！", 20,130);
        ctx.fillText("車に轢かれると回復に5分かかる", 20,230);
        ctx.fillText("小松菜ハイボールを飲むと3分時間を巻き戻せる", 20,280);
        ctx.fillText("20km走ると田端に到着する", 20,330);
        ctx.fillText("60分経過すると遅刻になる", 20,380);
        ctx.fillText("spaceでジャンプ（どのキーでもいい）", 20,430);
        ctx.fillText("クリックでスタート", 250,530);

        //クリックイベントリスナー
        document.getElementById("canvas").onclick = function() {
            clear();
            canvas_main_game();
        }
    }

    function canvas_win() {
        ctx.drawImage(Asset.images['post'], 200, 300,200,200);
        ctx.drawImage(Asset.images['hukidasi'],450,250,320,320);
        ctx.fillStyle = 'black';
        ctx.font = "30px serif";

        ctx.fillText("おめでとう", 20,30);

        ctx.fillText("アナタは時間内に会場に到着した", 20,80);

        ctx.fillText("しかし、本当の戦いはまだ始まってもいない！", 20,130);

        ctx.fillText("左上のタイトルマークからメニューにもどって", 20,180);

        ctx.fillText("グランプリに挑戦しよう！", 20,230);

        ctx.fillText("You are JavaKing", 487,427);
    }

    function canvas_lose() {
        ctx.drawImage(Asset.images['post'], 200, 300,200,200);
        ctx.drawImage(Asset.images['hukidasi'],450,250,320,320);
        ctx.fillStyle = 'black';
        ctx.font = "30px serif";

        ctx.fillText("ゲームが", 20,30);

        ctx.fillText("苦手な場合", 20,80);

        ctx.fillText("お父さんかお母さんに", 20,130);

        ctx.fillText("代わりにプレイしてもらおう", 20,180);

        ctx.fillText("左上のタイトルマークからメニューにもどれるよ", 20,230);

        ctx.fillText("You are Thumaranai", 470,427);
    }

    canvas_zenzitu();
    setTimeout(clear,1000);
    setTimeout(canvas_zenzitu_nerumae,1000);
    setTimeout(clear,9500);
    setTimeout(canvas_touzitu_okitesugu,9500);
    setTimeout(clear,21500);
    setTimeout(canvas_touzitu_tikokunikiduku,21500);
    setTimeout(clear,35000);
    setTimeout(canvas_touzitu_rurusetumei,35000);

    var car =[];
    car[0]={
        x : SCREEN_WIDTH,
        y : 0
    };
    var hY =335;
    var hX =0;
    var sx =SCREEN_WIDTH;
    var sy =-150;
    var point =0;
    var plus_point=0.004;
    var time =60;
    var heruzikan =0.01;
    var rand_cspeed =Math.floor(Math.random()*4)+2;
    var rand_sspeed =Math.floor(Math.random()*4)+2;
    var mutekizikan =0;
    var sakusya_mutekizikan=0;

    // キーボード操作
    document.addEventListener("keydown",moveUp);
    function moveUp(e){
        //二段ジャンプ防止
        if(hY>=335){
        hY -= 125;
        }
    }



    function canvas_main_game() {

        ctx.drawImage(Asset.images['bg'], 0, 0,800,600);
        ctx.drawImage(Asset.images['man'], hX, hY,150,150);

        for(var j=0; j < car.length;j++){
            console.log('car.length:' + car.length);
            ctx.drawImage(Asset.images['car'], car[j].x, car[j].y+375,120,120);
            ctx.drawImage(Asset.images['sake'], sx, sy+375,120,120);
            //車の移動スピード
            car[j].x -=rand_cspeed;
            //ハイボールのスピード
            sx -=rand_sspeed;
            // console.log('car[j].x:'+car[j].x);

            //この処理がないとオブジェクトにあたった時背景が透ける
            var context = canvas.getContext('2d');
            context.globalAlpha = 1;

            //車のあたり判定と当たったときの処理
            if(hX >=car[j].x-30 && hX <=car[j].x+30 &&hY>=car[j].y+335&&mutekizikan==0&&Math.floor(point)<20&&Math.floor(time)>0){
                time-=5;
                mutekizikan=1;
                ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

                var context = canvas.getContext('2d');

                //当たったら赤くする
                context.globalAlpha = 0.7;
			    context.fillStyle = "#FF0000";
	    	    context.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
            }

            //ハイボールのあたり判定と当たったときの処理
            if(hX >=sx-30 && hX <=sx+30 &&hY>=sy+335&&hY<=sy+370&&sakusya_mutekizikan==0){
                time+=3;
                sakusya_mutekizikan=1;

                var context = canvas.getContext('2d');

                //当たったら緑くする
                context.globalAlpha = 0.7;
                context.fillStyle = "#00FF00";
                context.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
            }

            if(Math.floor(time)>0){
                point+=plus_point;
            }
            if(Math.floor(point)<20){
                time-=heruzikan;
            }
            //車が画面外に行くとx座標を初期値に戻してもう一回走らせる
            if(car[j].x<0){
                car[j].x=SCREEN_WIDTH;
                rand_cspeed=Math.floor(Math.random()*7)+4;
                mutekizikan=0;
            }
            //ハイボールが画面外かつ車のスピードが７の時（再出現する）
            if(sx<=0&&rand_cspeed==7){
                sx=SCREEN_WIDTH;
                rand_sspeed=Math.floor(Math.random()*10)+7;
                sakusya_mutekizikan=0;
            }



        }
        //重力
        if(hY<335){
            hY+=2;
        }

        ctx.fillStyle = 'black';
        ctx.font = "30px serif";
        ctx.fillText(Math.floor(point)+"km", 20,30);

        ctx.fillStyle = 'black';
        ctx.font = "30px serif";
        ctx.fillText("残り"+Math.floor(time)+"分", 650,30);


        if(Math.floor(point)>20&&Math.floor(time)>=0){

            clear();
            canvas_win();

        }

        if(Math.floor(time)<0&&Math.floor(point)<=20){

            clear();
            canvas_lose();
        }

        requestAnimationFrame(canvas_main_game);


    }







}

var Asset = {}

//読み込みたい画像のパスの設定
Asset.assets = [
    { type: 'image', name: 'okiteru', src: 'img/omake/notSleep.png' },
    { type: 'image', name: 'neteru', src: 'img/omake/sleep.png' },
    { type: 'image', name: 'hukidasi', src: 'img/omake/hukidasi.png' },
    { type: 'image', name: 'coal', src: 'img/omake/sleep_coal.png' },
    { type: 'image', name: 'komaru', src: 'img/omake/komaru.png' },
    { type: 'image', name: 'bg', src: 'img/omake/bg.png' },
    { type: 'image', name: 'man', src: 'img/omake/guruguru_man.png' },
    { type: 'image', name: 'car', src: 'img/omake/car_black.png' },
    { type: 'image', name: 'post', src: 'img/omake/yuubin_post.png' },
    { type: 'image', name: 'sake', src: 'img/omake/K_haiboru.png' },
];

// 読み込んだ画像
Asset.images = {};

// アセットの読み込み
Asset.loadAssets = function(onComplete) {
    //アセットの合計数
    //読み込み完了したアセット数
    var total     = Asset.assets.length;
    var loadCount = 0;

    //アセットが読み込み終わった時に呼ばれるコールバック関数
    var onLoad = function() {
        loadCount++; // 読み込み完了数を1つ足す
            if (loadCount >= total) {
                // すべてのアセットの読み込みが終わった
                onComplete();
            }
        };

    // すべてのアセットを読み込む
    Asset.assets.forEach(function(asset) {
        switch (asset.type) {
            case 'image':
                Asset._loadImage(asset, onLoad);
                break;
        }
    });
};

// 画像の読み込み
Asset._loadImage = function(asset, onLoad) {
    var image = new Image();
    image.src = asset.src;
    image.onload = onLoad;
    Asset.images[asset.name] = image;
};

