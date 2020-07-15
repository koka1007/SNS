//キャンバスのサイズを設定する
var SCREEN_WIDTH    = 800;
var SCREEN_HEIGHT   = 600;

//引数で点数とURLを取得する
var score = 10;
var URL;
var pagemove = false;

//render処理の座標設定
var render_height   = 380;
var sikaiX = 0;
var conbiX = 1000;

//カーテンの座標
var kartenX = -400;
var kartenOFF = true;
var resultOFF = true;

//clickのカウント
var count = 0;

//キャンバスID取得用
var canvas;
var ctx;

//吹き出しの文字の配列
var hukidasi_arr = [
    "いや～本当に沸いてましたね～",
    "本当に気持ちよかったっす！",
    "この思いを誰に伝えたいですか？",
    "ゴーストライターの松尾です！",
    "知らん知らん、誰～？",
    "おじいちゃんの友達！",
    "やっぱりしらーん！",
    "近所では有名なんですけどね？",
    "付き合ってられないので",
];


//イベントリスナーを設定(キャンバスを表示する際に自動で呼ばれる)
//window.addEventListener('load', init);

//初期化処理を行う
function start(gamescore,parthURL) {
    //キャンバス名を取得する
    canvas  = document.getElementById('canvas');
    ctx     = canvas.getContext('2d');

    //キャンバスの大きさを設定する
    canvas.width    = SCREEN_WIDTH;
    canvas.height   = SCREEN_HEIGHT;

    //得点を保持する
    score   = gamescore;
    URL     = parthURL;

    //設定した画像を読み込み、すべて読み込み終わったらキャンバスへの描画を始めるようにする
    Asset.loadAssets(function() {
        requestAnimationFrame(update);
    });
}

//毎フレームごとに描画し直す
function update() {
    requestAnimationFrame(update);

    //司会と漫才師の制御をする
    if(sikaiX <= 120){
        sikaiX += 2;
    }else if(120 <= sikaiX && 480 <= conbiX){
        conbiX -= 2;
    }

    //カーテンの制御を行う
    move_carten();

    //画像と文字列を表示する
    render_image();

}

//カーテンの制御を行う
function move_carten(){
    //カーテン閉める()
    if((0 < count) && (kartenOFF == true) && (hukidasi_arr.length <= (count - 1)) && resultOFF ==false){
        if(kartenX < 0){
            kartenX += 2;
        }
    }
    //カーテン一時停止
    if(kartenX == 0){
        setTimeout(function() {
            kartenOFF = false;
        }, 1400);
    }
    //カーテンを再び開ける
    if(kartenOFF == false){
        kartenX -= 2
    }
}

//キャンバスへの描画・削除を行う
function render_image() {
    //コンビ用吹き出し位置
    //司会者用吹き出し位置
    var F_ConbiX = conbiX - 170;
    var F_SikaiX = sikaiX - 125;

    ctx.font        = "32px serif";
    ctx.fillStyle   = '#000000';

    // 全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //背景や画像を表示等のここで表示させたいものの座標を設定する
    //ctx.drawImage(Asset.images['指定した名前'],X座標,Y座標,画像の横幅,画像の縦幅)で使えます！
    ctx.drawImage(Asset.images['back'], 0, 0);
    ctx.drawImage(Asset.images['conbi'],conbiX,render_height,200,200);
    ctx.drawImage(Asset.images['sikai'],sikaiX,render_height,180,200);

    move_hukidasi(F_ConbiX,F_SikaiX);
}

//画面の動きの定義
function move_hukidasi(F_ConbiX,F_SikaiX){
    //自動で入場するときの吹き出し
    if(480 <= conbiX){
        ctx.drawImage(Asset.images['hukidasi'], F_SikaiX, render_height-200,430,200);
        ctx.fillText("初めまして～！", F_SikaiX+40,render_height - 120);
        ctx.fillText("審査員のウエジマです～", F_SikaiX+40,render_height - 90);
    }else if(count == 0){
        ctx.drawImage(Asset.images['hukidasi'], F_ConbiX, render_height-200);
        ctx.fillText("どうも～ウエジマさん！", F_ConbiX+40,render_height - 120);
        ctx.fillText("会場沸かしたりましたよ!", F_ConbiX+40,render_height - 90);
    }

    //カーテン閉じた後
    if(kartenOFF == false){
        //図形の透過度を調整
		ctx.globalAlpha = 1;

        //背景を設定する
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);

        //結果発表表示
        ctx.font      = "60px serif";
        ctx.fillStyle = "#D4B572";
        ctx.fillText("結果発表",(SCREEN_WIDTH/2 - 120),(SCREEN_HEIGHT/4)+20);

        ctx.fillText("・",(SCREEN_WIDTH/2)-25,(SCREEN_HEIGHT/6)*2+50);
        ctx.fillText("・",(SCREEN_WIDTH/2)-25,(SCREEN_HEIGHT/6)*2+70);
        ctx.fillText("・",(SCREEN_WIDTH/2)-25,(SCREEN_HEIGHT/6)*2+90);

        //カーテンが空いたら表示する
        if(kartenX <= -400){
            ctx.font      = "150px serif";
            ctx.fillStyle = "rgb(255,0,0)";
            ctx.fillText(score + "点!!!",(SCREEN_WIDTH/2)-210,(SCREEN_HEIGHT/6)*2+240);

            ctx.font      = "30px serif";
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fillText("クリックで次へ!",(SCREEN_WIDTH/2)-110,(SCREEN_HEIGHT/6)*5);

            //クリックしたら移動？
            var carent = count;
            setTimeout(function() {
                if(carent < count){
                    move_page();
                }
            }, 1500);
        }
    }

    //会話が終わっているかどうかの確認
    if((count - 1) < hukidasi_arr.length ){
        //自動入場後のクリックによる変更
        if(0 < count && (0 == (count % 2))){
            ctx.drawImage(Asset.images['hukidasi'], F_ConbiX, render_height-200);
            ctx.fillText(hukidasi_arr[count-1], F_ConbiX+40,render_height - 105);
        }else if(0 < count && 1 == (count % 2)){
            ctx.drawImage(Asset.images['hukidasi'], F_SikaiX, render_height-200);
            ctx.fillText(hukidasi_arr[count-1], F_SikaiX+30,render_height - 105);
        }
    //会話が終わっている場合
    }else if((kartenX <= 0) || (0 < count)){
    	if(resultOFF == true){
    		ctx.font      = "90px serif";
        	ctx.fillStyle = "#D4B572";
        	ctx.drawImage(Asset.images['hukidasi'],SCREEN_WIDTH/2-400, render_height-225,800,220);
        	ctx.fillText("結果発表～～!！", F_SikaiX+40,render_height - 105);
        	setTimeout(function() {
        		resultOFF = false;
        	}, 3000);
    	}else{
        	ctx.drawImage(Asset.images['l_curtain'], (kartenX-60), 0);
        	ctx.drawImage(Asset.images['r_curtain'], (400-kartenX),0);
    	}
    }
}

var Asset = {}

//読み込みたい画像のパスの設定
Asset.assets = [
    { type: 'image', name: 'back', src: 'img/result/result_back.png' },
    { type: 'image', name: 'conbi', src: 'img/result/conbi.png' },
    { type: 'image', name: 'hukidasi', src: 'img/result/hukidasi.png' },
    { type: 'image', name: 'sikai', src: 'img/result/sikai.png' },
    { type: 'image', name: 'l_curtain', src: 'img/result/left_curtain.jpg' },
    { type: 'image', name: 'r_curtain', src: 'img/result/rigth_curtain.jpg' }
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

//クリックイベントリスナー
document.getElementById("canvas").onclick = function() {
    if(conbiX <= 480){
        count++;
    }
}

//ページ遷移を行う
function move_page(){
    location.href = URL;
}