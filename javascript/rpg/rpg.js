//噴き出しの高さ調整
var HUKIDASI_Y = -30;
var BAR_Y = 5;

//キャンバスがクリックされた数をカウント
var click_count	= -1;
var drink_count =  0;

//フォント指定・行の高さ
var fontSize = 20 ;
var lineHeight = 1.1618 ;

//HP・MP管理
var P_HP = 150;
var P_MP = 25;
var SYA_HP = 285;
var SYA_MP = 20;
var att = 0;

//攻撃力設定
var P_ATT = 1;
var P_ATTMAX = 0;
var P_ATTMIN = 0;
var SYA_ATT = 1.2;

//セレクト関係
var select = 0;
var sentou_select = 0;
var kaiwa_count = 0;
var battle_ctn  = -1;
var battle_type = 0;

//文字とセレクトを切り替える
var strSwitch = false;
var loseSwitch = false;
var damageSwich = false;
var sdamageSwith = false;
var winSwitch = false;

//社長の攻撃文字
var returnSya = "";

//endroll
var potisionY = 0;

//選択用の座標
var arrayStr = [
    [80, 405],
    [435,405],
    [80, 485],
    [435,485]
];

//startテキスト
var kaiwaArr = [
    "主人公\n\nそれカルパッチョやないかーーーい！！！\n・・・・・\n\nあら、どこだここは・・・？？？\n俺はウエジマNEOグランプリで漫才をやっていたはず・・・",
    "主人公\n\nそれカルパッチョやないかーーーい！！！\nで会場は爆笑の渦に包まれるはずだったのに 怒\n\n笑い1つ損したやんけーーーーーー！",
    "主人公\n\nそれにしてもさっきから感じる異様な雰囲気はなんだ！\nここで感じる異様な魔力はなんだ？？？？\n\nまるでボールが当たる直前のボーリング場のピンのような気分だ！",
    "?????\n\nよくぞ、ここまで来たなぁぁああああ！！！\nただ一言、言っておくお前の漫才なんかクソくらえだー！！！\n\nなんだ？そのカルパッチョやないかーーいと言うちんけなツッコミは？",
    "主人公\n\nだ、だれだぁああああ\n極上のツッコミやろ！！お客さんうけてたやろー！！\n隠れてないで正体をあらわさんかーーーい！",
    "?????\n\n私がウエジマNEOグランプリの主催者ウエジマだ!!\n\n私ならばあのタイミングでバッキンガム宮殿とツッコンだ！！",
    "主人公\n\nしゃ、社長・・・！！！\nなんて完璧なツッコミなんだ！！！流石社長だぜ・・・\nと、言うか漫才グランプリの主催者だったんですか!?!?!?",
    "ウエジマ社長\n\nいかにも！！\nさあ、かかってこい！！！\nつまらぬ新入社員よ！！！！",
    "主人公\n\n(えぇえええええ・・・社長と戦うの？？？)"
]

//エンドロール
var endArr = [
    "GAME CLEAR",
    "",
    "あなたのおかげで",
    "世界に平和が訪れました！",
    "",
    "ところで、プレイヤーはと言うと、無事に",
    "元の世界に戻ることができ",
    "カルパッチョやないかーい！！",
    "とツッコミを入れることが出来たそうです",
    "","",
    "あ、残念ながら、もちろん滑ったそうです",
    "","",
    "それから遊んでくれて",
    "本当に、本当に","",
    "サンキューでーす！！",
    "","",
    "笑撃の新人製作委員会",
    "スタッフロール","","",
    "シナリオ作成","",
    "オモテダ　ユウ",
    "コカド　ユウキ",
    "カノウ　ショウタ","","",
    "ゲーム作成","",
    "オモテダ　ユウ",
    "コカド　ユウキ",
    "カノウ　ショウタ","","",
    "サンキューフォープレイング！","",
    "社長へ、無断でゲームに",
    "登場させてすいません","","",
    "それからクイックの皆さん!",
    "ちょっと早いですが、",
    "2か月間",
    "ありがとうございました!",
    "またいつかお会いしましょう!",
    "","",
    "それではグッバイ！","またいつか！","",
    "笑撃の新人製作委員会.inc",
    "Copyright (c)"
]

//battle会話
var battleArr = [
    //逃げる(0)
    [   "主人公\n\nくぅ…悔しいが俺の漫才では社長を笑わせることが出来ない・・・\n流石社長だ・・・すいませんでしたぁあああ！",
        "ウエジマ社長\n\nワハハハハ!!!\nサンキューでーす！"],
    //攻撃・ツッコミ(1)
    [   "主人公のツッコミ攻撃\n\nなんでやねん！なんでやねん！なんでやねん！\n社長にAのダメージ\n(なぜか攻撃力があがった！)",
        "S"],
    //攻撃・ハリセン(2)
    [   "主人公のハリセンでペシン\n\nペシン！ペシン！ペシン！！！\n社長にAのダメージ\n(しかし、社長をこんなに叩いて大丈夫だろうか・・・攻撃力がダウン)",
        "S"],
    //攻撃・ボケ倒す(3)
    [   "主人公はボケ倒した\n\n布団が吹っ飛ばなーい！\n\n社長にAのダメージ\n(なんでこれでダメージを受けているんだ・・・\nまあいいか(攻撃力が元に戻った))",
        "S"],
    //まほう・ファイヤ(4)
    [   "主人公はファイヤと叫びながら木の棒で火の粉を起こした！！！\n\nアーチチーアチ♪燃えてるんだぁろーかぁー♪\n社長にAのダメージ\n(MPを15消費した)",
        "S"],
    //まほう・サンダー(5)
    [   "主人公はぴーけー3だー！と言いながら下敷きで髪をこすり静電気を産んだ！！！\n\n雷鳴がとどろくぜよ！(一瞬小さくばちっとした)\n社長にAのダメージ\n(MPを25消費した)",
        "S"],
    //まほう・ひんやり(6)
    [   "主人公は氷魔法をくらえといいながら、冷蔵庫からこんにゃくを取り出した！\n\n社長の背中にこんにゃくを入れた！！！\n社長はひんやりしAのダメージ!\n(でも冷蔵庫があるなら氷の方がひんやりするのでは？？MPを40消費した)",
        "S"],
    //魔法・MPが足りない(7)
    [   "主人公は魔法を繰り出す！！\n\nマハラジャ・マハラジャ・カノジョ・ホシイ\nシャチョウ・ゲームニ・ツカッテゴメンナサイ\n\n言ってはみたものの\nMPが足りなくて呪文が唱えられなかった！！！",
        "S"],
    //アイテム・ウィスキ(8)
    [   "主人公はウィスキーを飲んだ！！！\n\nウィスキーがお好きでしょ？もうすこーし、しゃべりましょ♪\nありふれーた話でしょ♪\nウィーーーーーー♪\n(MPが10回復した！！！)",
        "S"],
    //アイテム・ホッピー(9)
    [   "主人公はホッピーを飲んだ！！！\n\n説明しよう！\nホッピーとは焼酎をホッピーという割り材で割ってのむのだ！\nちなみに焼酎は「中」、ホッピーを「外」と言う！\n\n(なぜか攻撃力が2.1倍になった！)",
        "S"],
    //アイテム・ビール(10)
    [   "主人公はビールを飲んだ！！！\n\nうまい！！！社長もどうですか？\n一緒に飲んだ！！！\n(攻撃力がお互い元に戻った！！！)",
        "S"],
    //飲みすぎエンド(11)
    [   "主人公\n\nウィ～～～～～～～～～\nのーみすーぎたぁーーーーーー！\nウィ～～～～～～～～～\nウィ～～～～～～～～～～～～",
        "ウエジマ社長\n\n飲みすぎは良くないねぇ～～～\n\nゲームオーバーだ！"],
    //勝利(12)
    [   "社長\n\nば、ばかなぁああああああ！！！\nこの私が、この私がぁあああああああ",
        "主人公\n\nか、勝ったのか？？？\n俺は元の世界に戻れるのか？？？？\nあの漫才の世界に？？？",
        ""
    ]
]

//画面に表示する技
var defStr = [
    ["こうげき","まほう","アイテム","にげる"],
    ["ツッコミ","はりせん","ボケ倒す","もどる"],
    ["ファイヤ","サンダー","ひんやり","もどる"],
    ["ウィスキ","ホッピー","ビール","もどる"]
]

//-------------------画像を読み込むための共通処理開始------------------------

//canvasの初期処理を行う
function start(){
    //キャンバス名を取得する
    canvas  = document.getElementById('canvas');
    ctx     = canvas.getContext('2d');

	ctx.fillStyle 	= "rgb(255,255,255)";

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
    requestAnimationFrame(update);
}

//読み込んだ画像
var Asset = {}
Asset.images = {};

//読み込みたい画像のパスの設定
Asset.assets = [
    //背景人
    { type: 'image', name: 'rpghuki',   src: 'img/rpg/rpghuki.png' },
    { type: 'image', name: 'syatyo',    src: 'img/rpg/syatyo.png' },
    { type: 'image', name: 'bar',       src: 'img/rpg/bar.png'},
    { type: 'image', name: 'butai',     src: 'img/rpg/butai.png'},
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


//--------------------------キーボード操作開始-----------------------------
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'a') {
            select--;
        }
        if (event.key === 'd') {
            select++;
        }
        if (event.key === 'w') {
            select = select -2;
        }
        if (event.key === 's') {
            select = select +2;
        }
        if (event.key === 'k') {
            if(kaiwa_count < kaiwaArr.length){
                kaiwa_count   = kaiwa_count + 1;
            }else{
                attack_select();
            }
        }

        if(select < 0){
            select = 0;
        }
        if(3 < select){
            select = 3;
        }
    }
);
//--------------------------キーボード操作終了-----------------------------

//キャンバスへの描画・削除を行う
function render_image() {

    // 全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //背景設定
    background();

    //会話を表示
    if(kaiwa_count < kaiwaArr.length){
        mozi_splite(kaiwaArr[kaiwa_count],60,390);
        ctx.fillText( "A,W,D,Sキー  ：  ← ↑ → ↓ 　　　　  Kキー：決定",170,585 + BAR_Y) ;
    }
    else if(strSwitch == false && loseSwitch == false && winSwitch == false){
        //セレクト
        select_sentou(select);

        //戦闘文字
        sentou(sentou_select);

        //バーの文字を表示する
        ctx.drawImage(Asset.images['bar'],      25, 10);
        ctx.drawImage(Asset.images['bar'],      25, 555 + BAR_Y);
        ctx.drawImage(Asset.images['syatyo'],   300, 80);
        barStr();
    }
    else if(strSwitch == true || loseSwitch == true){
         //バーの文字を表示する
         ctx.drawImage(Asset.images['bar'],      25, 10);
         ctx.drawImage(Asset.images['bar'],      25, 555 + BAR_Y);
         ctx.drawImage(Asset.images['syatyo'],   300, 80);
         barStr();

        mozi_splite(randomAtt(battleArr[battle_type][battle_ctn],P_ATTMIN,P_ATTMAX),60,390);
    }
    else if(winSwitch == true){
        if( battle_ctn< battleArr[battle_type].length -1){
            mozi_splite(randomAtt(battleArr[battle_type][battle_ctn],P_ATTMIN,P_ATTMAX),60,390);
        }else{

            if(potisionY < 3130){
                potisionY = potisionY + 1;
            }else{
                setTimeout(function() {
                    move_indexpage();
                },1000);
            }
            endGame();
        }
    }
}

//背景描画
function background(){

	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 800, 600);

	ctx.fillStyle = 'black';
	ctx.fillRect(2, 2, 796, 596);

	ctx.fillStyle = 'white';

    if(winSwitch == false){
        ctx.drawImage(Asset.images['rpghuki'],  25, 380 + HUKIDASI_Y);
    }else if(battle_ctn< battleArr[battle_type].length -1){
        ctx.drawImage(Asset.images['rpghuki'], 25, 380 + HUKIDASI_Y);
    }else{
        ctx.drawImage(Asset.images['butai'], 0 , 0);
    }
}

//戦闘シーン文字
function sentou(sentou_select){
    ctx.font = "54px serif";
    ctx.fillText( defStr[sentou_select][0],100,460 + HUKIDASI_Y) ;
    ctx.fillText( defStr[sentou_select][1],460,460 + HUKIDASI_Y) ;
    ctx.fillText( defStr[sentou_select][2],100,540 + HUKIDASI_Y) ;
    ctx.fillText( defStr[sentou_select][3],460,540 + HUKIDASI_Y) ;
}

//文字を選択する
function select_sentou(selectnum){
    ctx.clearRect(arrayStr[selectnum][0],arrayStr[selectnum][1] + HUKIDASI_Y,260,70);
}

//barの文字表示
function barStr(){
    ctx.font = "20px serif";
    ctx.fillText( "ウエジマ社長　　HP :　" + SYA_HP + "　MP :　" + SYA_MP ,200,32) ;
    ctx.fillText( "プレイヤー　　　HP :　" + P_HP + "　MP :　" + P_MP ,200,580 + BAR_Y) ;
}

//攻撃を選択
function attack_select(){

    //攻撃を選択
    if(sentou_select == 1){
        //ツッコミ
        if(select == 0){
            battle_type = 1;
            strSwitch   = true;
            damageSwich = true;
            P_ATTMAX = 13;
            P_ATTMIN = 5;
            P_ATT = P_ATT * 1.15;
        }
        //ハリセン
        if(select == 1){
            battle_type = 2;
            strSwitch   = true;
            damageSwich = true;
            P_ATTMAX = 60;
            P_ATTMIN = 30;
            P_ATT = P_ATT * 0.6;
        }
        //ボケ倒す
        if(select == 2){
            battle_type = 3;
            strSwitch   = true;
            damageSwich = true;
            P_ATTMAX = 20;
            P_ATTMIN = 20;
            P_ATT = 1;
        }
    }

    //魔法を選択
    if(sentou_select == 2){
        //ファイヤ
        if(select == 0){
            if(15 <= P_MP){
                battle_type = 4;
                P_ATTMAX = 60;
                P_ATTMIN = 30;
                P_MP = P_MP -15;
            }else{
                battle_type = 7;
            }
            strSwitch   = true;
            damageSwich = true;
        }
        //サンダー
        if(select == 1){
            if(25 <= P_MP){
                battle_type = 5;
                P_ATTMAX = 80;
                P_ATTMIN = 40;
                P_MP = P_MP -25;
            }else{
                battle_type = 7;
            }
            strSwitch   = true;
            damageSwich = true;
        }
        //ヒンヤリ
        if(select == 2){
            if(40 <= P_MP){
                battle_type = 6;
                P_ATTMAX =  999;
                P_ATTMIN = -500;
                P_MP = P_MP -40;
            }else{
                battle_type = 7;
            }
            strSwitch   = true;
            damageSwich = true;
        }
    }

    //アイテムを選択
    if(sentou_select == 3){
        //ウィスキー
        if(select == 0){
            sentou_select = -1;
            battle_type = 8;
            strSwitch   = true;
            damageSwich = true;
            P_MP = P_MP + 10;
            drink_count++;
        }
        //ホッピー
        if(select == 1){
            sentou_select = -1;
            battle_type = 9;
            strSwitch   = true;
            damageSwich = true;
            P_ATT *= 2.1;
            drink_count++;
        }
        //ビール
        if(select == 2){
            sentou_select = -1;
            battle_type = 10;
            strSwitch   = true;
            damageSwich = true;
            P_ATT　= 1;
            SYA_ATT = 1;
            drink_count++;
        }
    }

    //デフォルト表示
    if(sentou_select == 0){

        if(select == 0){
            sentou_select = 1;
        }
        if(select == 1){
            sentou_select = 2;
        }
        if(select == 2){
            sentou_select = 3;
        }
        if(select == 3){
            battle_type = 0;
            loseSwitch = true;
        }
    }

    //社長のHP0で勝利
    if((SYA_HP < 0) && (winSwitch == false)){
        strSwitch = false;
        battle_ctn = -1;
        battle_type = 12;
        sentou_select = -1;
        winSwitch = true;
    }

    //プレイヤーHP減少で敗北
    if((P_HP < 0) && (loseSwitch == false)){
        strSwitch = false;
        battle_ctn = -1;
        battle_type = 0;
        sentou_select = -1;
        loseSwitch = true;
    }

    //飲みすぎで敗北
    if((3 < drink_count) && (loseSwitch == false)){
        strSwitch = false;
        battle_ctn = -1;
        battle_type = 11;
        sentou_select = -1;
        loseSwitch = true;
    }

    //会話が始まっている場合
    if(strSwitch == true){
        if(battle_ctn < battleArr[battle_type].length -1 ){
            battle_ctn++;
        }else{
            battle_ctn = -1;
            select = 0;
            sentou_select = 0;
            strSwitch = false;
        }
    }

    //勝ち・負けフラグがたった場合
    if(loseSwitch == true || winSwitch == true){
        if(battle_ctn < battleArr[battle_type].length -1 ){
            battle_ctn++;
        }else if(loseSwitch == true){
            move_losepage();
        }else if(winSwitch == true){

        }
    }

    //戻るを選択
    if(select == 3 && 0 < select){
        sentou_select = 0;
    }
}

//文字分割して表示する
function mozi_splite(kaiwa,x,y){

    //表示する文字が何行あるか調べる
    var lines=kaiwa.split( "\n" );

    //font設定
    ctx.font = "bold 20px Arial, meiryo, sans-serif";

    // 1行ずつ描画
    for( i=0, l=lines.length; l>i; i++ ) {
        var line = lines[i] ;
    	var addY = fontSize ;

    	// 2行目以降の水平位置は行数とlineHeightを考慮する
    	if ( i ) addY += fontSize * lineHeight * i ;
    	ctx.fillText( line, x + 0, y + addY + HUKIDASI_Y ) ;
    }
}

//ページ遷移を行う
function move_losepage(){
    location.href = "http://localhost:8080/shougekinosinjin/lose.jsp";
}

//ページ遷移を行う
function move_indexpage(){
    location.href = "http://localhost:8080/shougekinosinjin/index.jsp";
}

//ランダムな攻撃を返す
function randomAtt(str,min,max){

    //文字列にAが含まれるときダメージ
    if(-1 != str.indexOf('A')){
        var lines = str.split('A');

        //ダメージは一度だけ与える
        if(damageSwich == true){
            att =  parseInt((Math.floor( Math.random() * (max + 1 - min) ) + min) * P_ATT) ;
            SYA_HP = SYA_HP - att;
            damageSwich = false;
            sdamageSwith = true;
        }
        return (lines[0] + att +lines[1]);

    }else if(-1 != str.indexOf('S')){
        return SyatyoAtt();
    }else{
        sdamageSwith = true;
        return str;
    }
}

//社長の攻撃を定義する
function SyatyoAtt(){
    var max = 3;
    var min = 0;
    var att_type = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    //ダメージを一度だけ与える
    if(sdamageSwith == true){
        if(att_type == 0){
            max = 30;
            min = 15;
            returnSya = "社長の攻撃\n\n普通の攻撃\nAのダメージ";
        }else if(att_type == 1){
            max = 70;
            min = 45;
            returnSya = "社長の会心の攻撃\n\nクリティカルヒット!!!\n歯磨き粉はクリティカ！！\n\nAのダメージ";
        }
        else if(att_type == 2){
            max = 80;
            min = 20;
            returnSya = "社長は謎のドリンクを飲んだ！！\n\nヤミーヤミー！！\n社長のHPがA回復した";
        }
        else if(att_type == 3){
            max = 5;
            min = 2;
            returnSya = "社長は力をためている\n\n小松菜はパワーの源ぉおお！！！\n社長の攻撃力がA倍になった！！！";
        }

        //ダメージ決定
        att = Math.floor( Math.random() * (max + 1 - min) ) + min ;

        //ダメージを与える
        if(att_type == 2){
            SYA_HP = SYA_HP + att;
        }else if(att_type == 3){
            SYA_ATT = att;
        }else{
            att = parseInt(att * SYA_ATT);
            P_HP = P_HP - att;
        }

        //表示する文字を設定
        var lines = returnSya.split('A');
        returnSya = lines[0]+ att +lines[1];
        sdamageSwith = false;
    }

    return returnSya;
}

//エンドロール
function endGame(){
    //図形の透過度を調整
    if(potisionY < 2900){
        ctx.globalAlpha = 1;
    }else{
        ctx.globalAlpha = (3130 - potisionY)/230;
    }

	//背景を設定する
	ctx.fillStyle = "black";
    ctx.fillRect(0,0,800,600);

    ctx.globalAlpha = 1;
    ctx.font = "100px 'Impact'";

    var textWidth = ctx.measureText( endArr[0] ).width ;
    ctx.strokeText(endArr[0], (800 - textWidth) / 2, (650 - potisionY));

    //文字の色設定
    ctx.fillStyle = "#d2b071";
	ctx.fillText(endArr[0],(800 - textWidth) / 2, (650 -potisionY));

    //文字を表示
    for(var i = 1; i < endArr.length; i++){
        ctx.font = "32px 'Impact'";
        textWidth = ctx.measureText( endArr[i] ).width ;
        ctx.strokeText(endArr[i], (800 - textWidth) / 2, (650 + (50 * i)) - potisionY);

        //文字の色設定
        ctx.fillStyle = "#ffffff";
	    ctx.fillText(endArr[i],(800 - textWidth) / 2, (650 + (50 * i))-potisionY);
    }
}
