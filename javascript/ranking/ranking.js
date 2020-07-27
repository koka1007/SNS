//clickのカウント
var count = 0;
var swich = false;


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
	canvas_kaiwa();
}

//-------------------------テキストを使えるようにする-------------------------------------------

//-------------------------テキストを使えるようにする-------------------------------------------


//クリックイベントリスナー
document.getElementById("canvas").onclick = function() {
	count++;
	canvas_kaiwa();
}

//会話表示機能
function canvas_kaiwa(){

	ctx.drawImage(Asset.images['huki'],180, 430, 300, 220);

	ctx.fillStyle = '#000000';
    ctx.font = "20px serif";

	if(count==0){
        ctx.fillText("ここにあるのは戦いの記録だ", 190,550);
	}else if(count == 1){
        ctx.fillText("みてみて！この上腕二頭筋", 200,550);
	}else if(count == 2){
        ctx.fillText("あれは吹雪の中の", 220,535);
        ctx.fillText("ことじゃった……", 220,560);
	}else if(count == 3){
        ctx.fillText("え？続き気になる？", 220,535);
        ctx.fillText("気になる？オシエナーイ!", 220,560);
	}else if(count == 4 && (swich == true)){
		ctx.fillText("え？しかたないなぁ", 220,537);
        ctx.fillText("そのまえに！！", 220,562);
	}else if(count == 5 && (swich == true)){
		ctx.fillText("俺の一発ギャグを", 220,537);
        ctx.fillText("聞いてくれぇーーい！", 220,562);
	}else if(count == 6 && (swich == true)){
		ctx.fillText("面白すぎて腰抜かすぜ！", 220,537);
        ctx.fillText("それ、カルパ・・・", 220,562);

    //社長との最終決戦へ
	}else if(count == 7 && (swich == true)){
		location.href = "http://localhost:8080/shougekinosinjin/rpg.jsp";
	}else{
		count_reset();
		swich = true;
	}
}

count_reset = function() {
    this.count=-1;
}