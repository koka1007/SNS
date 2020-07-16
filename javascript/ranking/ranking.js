//clickのカウント
var count = 0;

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

    //アップデートを繰り返す
    //requestAnimationFrame(update);
}

//読み込んだ画像
var Asset = {}
Asset.images = {};

//読み込みたい画像のパスの設定
Asset.assets = [
    //背景人
    { type: 'image', name: 'back',      src: 'img/ranking/ranking.png' },
    { type: 'image', name: 'huki',      src: 'img/ranking/hukidasi.png' }
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

function render_image(){
	ctx.drawImage(Asset.images['back'],0,0);
	ctx.drawImage(Asset.images['huki'],180, 430, 300, 220);
}

//-------------------------テキストを使えるようにする-------------------------------------------

//-------------------------テキストを使えるようにする-------------------------------------------


//クリックイベントリスナー
document.getElementById("canvas").onclick = function() {
	count++;

	ctx.clearRect(190,533,260, 25);
	ctx.clearRect(230,512,200, 60);
	ctx.clearRect(425,530,30, 30);
	ctx.fillStyle = '#000000';
    ctx.font = "20px serif";

	if(count==1){
        ctx.fillText("ここにあるのは戦いの記録だ", 190,550);
	}else if(count==2){
        ctx.fillText("みてみて！この上腕二頭筋", 200,550);
	}else if(count==3){
        ctx.fillText("あれは吹雪の中の", 230,535);
        ctx.fillText("ことじゃった……", 230,560);
	}else if(count==4){
        ctx.fillText("え？続き気になる？", 230,535);
        ctx.fillText("気になる？オシエナーイ!", 230,560);
	}else{
		count_reset();
	}
}

count_reset = function() {
    this.count=0;
}