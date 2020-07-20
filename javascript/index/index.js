//キャンバスのサイズを設定する
var SCREEN_WIDTH    = 800;
var SCREEN_HEIGHT   = 600;

//画像の座標を定義
var movie_swich = true;
var conbiX  = 850;
var sunX    = -40;
var sunY    = -40;
var momoX   = 800;
var momoY   = 400;

var riverX  = 547;
var riverY  = 200;
var inuX    = 547;
var inuY    = 200;
var kijiX   = 547;
var kijiY   = 200;
var saruX   = 547;
var saruY   = 200;
var r_moveX = 0;
var r_moveY = 0;

var movesunX = 0;
var movesunY = 0;

//キャンバスがクリックされた数をカウント
var click_count	= -1;
var end_click	= 0;
var movie_count	= 0;

//フォント指定・行の高さ
var fontSize = 20 ;
var lineHeight = 1.1618 ;

//会話文を定義
var kaiwa_arr = [
	"よーし、相方くん！\n今日も気合入れて\n漫才の練習しよかー",
	"\n・・・・・？？",
    "おい、ちょっと待て！\n漫才グランプリが近いのに、\n笑いが太陽に独り占めされてるー！",
    "縁起悪いわー\n俺たち今から漫才するんやから\n先に笑いを持っていくなよー!\n太陽ぉおお！笑いを返せー！",
    //movie_1
    true,
    "うそやーん!\n太陽が笑いを返してくれたー！!\n\n突っ込み方がわからへんて！!",
    "まあいいわ、気を取り直して\n\n「ウエジマNEOグランプリ」に\n向けて漫才の練習しよかー",
    "俺たちコンビの得意漫才\n桃太郎からいくでー\n\nむかーし、昔あるところに",
    "おじいさんとおばあさんが・・・\n\nおばあさんが・・・",
    //movie_2
    true,
    "おばあさんが流れてきたー!?\n\nなんでやねーん！！",
    "普通なら、おばあさんは\n川で洗濯のはずやろ！！\n\nビックリしたわ～",
    "ん？？？\n\n桃がきた？",
    //movie_3
    true,
    //movie_4
    true,
    "手がはえたー！！！\nしかも洗濯物しだしたあーーーー\n\nおばあさんと桃が逆ーー！！",
    //movie_5
    true,
    "えー？\n\n犬も流れてきた・・・？？？",
    //movie_6
    true,
    "お、キジも???\nてか、キジなら飛べよ！\n\nこの流れだと次は…？",
    //movie_7
    true,
    "予想通りサルだけど、\n写真がリアルー！\nそして上目遣い！\nイラスト屋で統一せんかーい!",
    "しかし桃太郎の仲間が次々に…\nこれは鬼の逆襲と考えて\n間違いないだろう…\n俺たちが鬼退治に行くべきか…",
    //movie_8
    true,
    "全然違ったーー!!!\n\n鬼に至ってはバラバラにされた\nうえに流されてるー!!",
    "もうあかん!あかん!\n怖すぎるわ!\n鬼よりやばい奴が\nおるってことやん！",
    "鬼退治に行った桃太郎がふびんやわ\n\nそして鬼退治行こうと思った\n俺はバカだった・・・",
    //movie_9
    true,
    "って、えー?桃が鬼のパーツを\n集めだしたよ?\nおばあちゃんと仲間たちは\n見向きもせずだったくせに???",
    //movie_10
    true,
    "鬼が復活したーーー!?!?!?\n\nわーお！わーお！\nわーお!の安売り!",
    "付き合ってられんわ\n\n来年は必ず優勝したいねんから、\nほっといて漫才の練習するで！",
    //movie_11
    true,
    "\n来年のことを言うと\n鬼が笑うってね！",
    //movie_12
    true,
    "嘘やーん！鬼が笑ったーーー！\n\nと、言うか\nお前今日初めてしゃべったな",
    "付き合ってられへんわ！\n\nもうええわ！\nありがとうございました～"
];

//ムービー終了後の会話
var endkaiwa_arr = [
	"どんだけクリックしても、\nもう何もあらへんで・・・\n\n絶対押すなよ？",
	"やから、クリックしてもないって～\n絶対押すなって言ったやん！\n次は無いからな！\nもう絶対押すなよ!",
	"あなたも好きねーん💛\nちょっとだけよ～ん💛\n\nマッサージしてあげる💛",
	"あかん！あかん！\nついサービスしてもうた!！\n\n仏の顔も三度までやで！",
	"これ以上押すと\n罰ゲームやで！！！\n嘘ちゃうからな！\nラストチャンスやからな 怒"
];


//-------------------画像を読み込むための共通処理開始------------------------
//初期化処理を行う
function start(){
    //キャンバス名を取得する
    canvas  = document.getElementById('canvas');
    ctx     = canvas.getContext('2d');

    //設定した画像を読み込み、すべて読み込み終わったらキャンバスへの描画を始めるようにする
    Asset.loadAssets(function() {
        requestAnimationFrame(update);
    });
}

//毎フレームごとに描画し直す
function update() {
    //画像を描画する
    render_image();

    //会話を表示する
    kaiwa_show();

    //画像の座標をコントロールする
    if(movie_swich == true){
        move_controll();
    }

    //アップデートを繰り返す
    requestAnimationFrame(update);
}

//読み込んだ画像
var Asset = {}
Asset.images = {};

//読み込みたい画像のパスの設定
Asset.assets = [
    //背景人
    { type: 'image', name: 'back',      src: 'img/index/river.png' },
    { type: 'image', name: 'conbi',     src: 'img/index/conbi.png' },
    { type: 'image', name: 'taiyou',    src: 'img/index/taiyou.png' },
    { type: 'image', name: 'taiyou1',   src: 'img/index/taiyou2.png' },
    { type: 'image', name: 'hukidasi',  src: 'img/index/hukidasi.png' },
    //もも
    { type: 'image', name: 'momo',      src: 'img/index/peach.png' },
    { type: 'image', name: 'movemomo',  src: 'img/index/movemomo.png' },
    { type: 'image', name: 'smomo',     src: 'img/index/s_momo.png' },
    { type: 'image', name: 'hmomo',     src: 'img/index/h_momo.png' },
    { type: 'image', name: 'hupmomo',   src: 'img/index/hup_momo.png' },
    //川に流れゆくもの
    { type: 'image', name: 'dog',   	src: 'img/index/dog.png' },
    { type: 'image', name: 'kiji',  	src: 'img/index/kiji.png' },
    { type: 'image', name: 'saru',  	src: 'img/index/saru.jpg' },
    { type: 'image', name: 'obaba', 	src: 'img/index/obaba.png' },
    //鬼
    { type: 'image', name: 'oni',		src: 'img/index/oni.png' },
    { type: 'image', name: 'oni_bara',	src: 'img/index/baraoni.png' },
    { type: 'image', name: 'oni_atume',	src: 'img/index/atume_oni.png' }
];

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

//-------------------画像を読み込むための共通処理終了------------------------

//クリックイベントリスナー
document.getElementById("canvas").onclick = function() {
    if(movie_swich == false && click_count <= kaiwa_arr.length){
        click_count++;
    }
    if(kaiwa_arr.length < click_count){
    	end_click++;
    }
}

//会話を表示する
function kaiwa_show(){

	//kaiwa_arrの中にtrueがある場合ムービースタート
    if(kaiwa_arr[click_count] == true){
        movie_swich = true;
    }

    //kaiwaを表示
    if(movie_swich == false){
        var mozix = 470 ;	// 水平位置
        var moziy = 185 ;	// 垂直位置

        //パスをリセット・フォント指定
        ctx.beginPath () ;
        ctx.font = "bold " + fontSize + "px Arial, meiryo, sans-serif" ;

        //一度だけ相方がしゃべる
        if(movie_count != 12 && click_count < kaiwa_arr.length ){
        	mozi_splite(kaiwa_arr[click_count],mozix,moziy,460);
        }else if(movie_count == 12){
	        ctx.font      	= "32px serif";
	        ctx.fillStyle 	= "rgb(255,0,0)";
	        lineHeight 		= 2.0 ;
	        mozi_splite(kaiwa_arr[click_count],mozix-30,moziy-25,420);
	        ctx.fillStyle 	= "rgb(0,0,0)";
	        ctx.font      	= "bold 20px Arial, meiryo, sans-serif";
	        lineHeight 		= 1.1618 ;
        }
    }

    //メインの会話が終了しているかどうか？
    if(kaiwa_arr.length < click_count){

    	mozi_splite(endkaiwa_arr[end_click - 1],mozix,moziy,460);

    	//会話が終わったらおまけに遷移
    	if(endkaiwa_arr.length <= end_click){
    		move_page();
    	}
    }
}

//ページ遷移を行う
function move_page(){
    location.href = "http://localhost:8080/shougekinosinjin/zenjitu.jsp";
}

//文字分割
function mozi_splite(kaiwa,x,y,hukiX){
	//表示する文字が何行あるか調べる
    var lines=kaiwa.split( "\n" );

    //吹き出しを表示する
    ctx.drawImage(Asset.images['hukidasi'],hukiX,170,340,180);

    // 1行ずつ描画
    for( i=0, l=lines.length; l>i; i++ ) {
        var line = lines[i] ;
    	var addY = fontSize ;

    	// 2行目以降の水平位置は行数とlineHeightを考慮する
    	if ( i ) addY += fontSize * lineHeight * i ;
    	ctx.fillText( line, x + 0, y + addY ) ;
    }
}

//-------------------画像の描画や動きの処理開始------------------------------

//キャンバスへの描画・削除を行う
function render_image() {
    // 全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //背景描画
    ctx.drawImage(Asset.images['back'], 0, 0);

    //川を流れる人たち
    move_river();

    //コンビ描画
    move_conbi();

    //桃の動きを制御
    move_momo();

    //太陽描画
    move_sun();
}

//画像の動きを制御する
function move_controll(){
  //ムービースイッチがオンの時ムービーが動作
  switch(movie_count){
    //コンビの動きを定義
    case 0:
        if(600 <= conbiX){
            conbiX -= 2;
        }
        if(conbiX == 600){
            up_movie_count();
        }
        break;

    //太陽を動かす
    case 1:
        if(sunX < 120){
            sunX += 2;
            sunY += 0.5;
        }else if(120 <= sunX){
            up_movie_count();
        }
        break;

    //おばあちゃんが流れる
    case 2:
        if(440 < riverX){
            riverX -= 1;
            riverY += 1.5;
        }else if(100 < riverX){
            riverX -= 3;
            riverY += 1;
        }else if(riverX <= 100){
            up_movie_count();
        }
        break;

    //桃のフェードイン
    case 3:
        if(540 < momoX){
            momoX -= 2;
            momoY += 0.2;
        }else if(540 <= momoX){
            up_movie_count();
        }
        break;

    //犬の水流し
    case 5:
        if(440 < inuX){
            inuX -= 1;
            inuY += 1.5;
        }else if(200 < inuX){
            inuX -= 3;
            inuY += 0.9;
        }else if(inuX <= 200){
            up_movie_count();
        }
        break;

    //キジ
    case 6:
        if(440 < kijiX){
            kijiX -= 1;
            kijiY += 1.5;
        }else if(280 < kijiX){
            kijiX -= 3;
            kijiY += 0.9;
        }else if(kijiX <= 280){
            up_movie_count();
        }
        break;

    //キジ
    case 7:
        if(440 < saruX){
            saruX -= 1;
            saruY += 1.5;
        }else if(350 < saruX){
            saruX -= 3;
            saruY += 0.9;
        }else if(saruX <= 350){
            up_movie_count();
        }
        break;

    //流れる
    case 8:
        if(r_moveY < 230){
            r_moveY += 1.5;
            r_moveX -= 0.4;
        }else if(230 <= r_moveY){
            up_movie_count();
        }
        break;

    //鬼動く
    case 12:
        if(movesunY < 220){
            movesunY += 1.5;
            movesunX += 1.3;
        }else if(220 <= movesunY){
            up_movie_count();
        }
        break;

    //桃の手が生える・バラバラの鬼登場
    case 4:
    case 9:
    case 10:
    case 11:
        up_movie_count();
        break;

    default:
        break;
  }
}

//ムービーのカウントアップ
function up_movie_count(){
    click_count += 1;
    movie_count += 1;
    movie_swich = false;
}

//太陽の動き
function move_sun(){
    if((1 <= movie_count) && (4 <= click_count)){
        ctx.drawImage(Asset.images['taiyou1'], sunX+movesunX, sunY+movesunY,210,190);
    }else{
        ctx.drawImage(Asset.images['taiyou'], sunX, sunY,270,270);
    }
}

//コンビの動きを定義
function move_conbi(){
    ctx.drawImage(Asset.images['conbi'], conbiX, 350,150,150);
}

//ももの動きを定義
function move_momo(){
    if(movie_count == 3){
        ctx.drawImage(Asset.images['movemomo'],momoX,momoY);
    }else if(4 <= movie_count && movie_count <= 7){
        ctx.drawImage(Asset.images['smomo'],momoX-135,momoY-70,270,270);
    }else if(8 <= movie_count && movie_count <= 9){
        ctx.drawImage(Asset.images['momo'],momoX-95,momoY-30,140,140);
    }else if(10 == movie_count){
        ctx.drawImage(Asset.images['oni_atume'],365,330,350,350);
    }else if(11 <= movie_count){
        ctx.drawImage(Asset.images['hupmomo'],320,300,350,370);
        ctx.drawImage(Asset.images['oni'],320-movesunX,200-movesunY,200,220);
    }
}

//川を流れるものたちの動きを定義
function move_river(){
    if(movie_count < 9){
        //サル登場
        if(7 <= movie_count){
            ctx.drawImage(Asset.images['saru'],(saruX+r_moveX),(saruY+r_moveY),100,100);
        }
        //おばあちゃん
        if(2 <= movie_count){
            ctx.drawImage(Asset.images['obaba'],(riverX+r_moveX),(riverY+r_moveY));
        }
        //犬登場
        if(5 <= movie_count){
            ctx.drawImage(Asset.images['dog'],(inuX+r_moveX),(inuY+r_moveY),100,100);
        }
        //キジ登場
        if(6 <= movie_count){
            ctx.drawImage(Asset.images['kiji'],(kijiX+r_moveX),(kijiY+r_moveY),100,100);
        }
    }
    else if(9 == movie_count){
        //鬼を流す
        ctx.drawImage(Asset.images['oni_bara'],40,300);
    }
}
//-------------------画像の描画や動きの処理終了------------------------------