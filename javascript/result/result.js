//キャンバスのサイズを設定する
var SCREEN_WIDTH    = 800;
var SCREEN_HEIGHT   = 600;

//render処理の座標設定
var render_height   = 380;
var sikaiX = 0;
var conbiX = 600;

//キャンバスID取得用
var canvas;
var ctx;

//イベントリスナーを設定(キャンバスを表示する際に自動で呼ばれる)
window.addEventListener('load', init);

//初期化処理を行う
function init() {
    //キャンバス名を取得する
    canvas  = document.getElementById('canvas');
    ctx     = canvas.getContext('2d');

    //キャンバスの大きさを設定する
    canvas.width    = SCREEN_WIDTH;
    canvas.height   = SCREEN_HEIGHT;

    //設定した画像を読み込み、すべて読み込み終わったらキャンバスへの描画を始めるようにする
    Asset.loadAssets(function() {
        requestAnimationFrame(update);
    });
}

//毎フレームごとに描画し直す
function update() {
    requestAnimationFrame(update);
    if(sikaiX <= 120){
        sikaiX += 1;
        conbiX -= 1;
    }
    render();
}

//キャンバスへの描画・削除を行う
function render() {

    //コンビ・司会者の吹き出し位置
    var F_ConbiX = conbiX - 170;
    var F_SikaiX = sikaiX - 125;

    //フォントの指定
    ctx.font        = "32px serif";
    ctx.fillStyle   = '#000000';

    // 全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //背景や画像を表示等のここで表示させたいものの座標を設定する
    //ctx.drawImage(Asset.images['指定した名前'],X座標,Y座標,画像の横幅,画像の縦幅)で使えます！
    ctx.drawImage(Asset.images['back'], 0, 0);
    ctx.drawImage(Asset.images['conbi'],conbiX,render_height,200,200);
    ctx.drawImage(Asset.images['sikai'],sikaiX,render_height,180,200);

    //司会者用吹き出し
    if(480 <= conbiX){
        ctx.drawImage(Asset.images['hukidasi'], F_SikaiX, render_height-200,430,200);
        ctx.fillText("どうぞ～お入りください!", F_SikaiX+40,render_height - 110);
    //ボケ用
    }else{
        ctx.drawImage(Asset.images['hukidasi'], F_ConbiX, render_height-200);
        ctx.fillText("どうも～!!", F_ConbiX+40,render_height - 120);
        ctx.fillText("精一杯やらせてもらいました", F_ConbiX+40,render_height - 90);
    }
}

var Asset = {}

//読み込みたい画像のパスの設定
Asset.assets = [
    { type: 'image', name: 'back', 		src: 'img/result/result_back.png' },
    { type: 'image', name: 'conbi', 	src: 'img/result/conbi.png' },
    { type: 'image', name: 'hukidasi', 	src: 'img/result/hukidasi.png' },
    { type: 'image', name: 'sikai', 	src: 'img/result/sikai.png' }
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