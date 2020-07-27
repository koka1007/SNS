
let screen_w = window.innerWidth;
let screen_h = window.innerHeight;
//紙吹雪の量を指定
const KAMI_MAX = 150;

var canvas = document.createElement("canvas"),
ctx = canvas.getContext("2d");
//色の種類を指定
const COLORS =
["#f55","#55f","#5c5","#fa5","#5af"];

function rand(min,max)
{
    return (Math.floor(Math.random()*(max-min+1)+min));
}

class Kami{
    constructor()
    {
        //新しいdivをhtmlに生成
        this.elm = document.createElement("div");
        //親ノードと子ノードにelmを自動追加する
        document.body.appendChild(this.elm);

        this.sty = this.elm.style;

        //画面いっぱいをランダム指定
        this.x = rand(0,screen_w);
        this.y = rand(-100,100);

        //下に落ちる速さ横に流れる速さをランダムで指定
        this.vx = rand(-10,10);
        this.vy = rand(5,10);

        this.ang = 0;

        //回転のスピードを指定
        this.spd = rand(15,40);

        //紙、一枚一枚の向きを指定
        this.rX = rand(0,10)/10;
        this.rY = rand(0,10)/10;
        this.rZ = rand(0,10)/10;

        this.sty.position = "fixed";

        //widthとheightが紙吹雪の長さと幅を指定
        this.sty.width = "20px";
        this.sty.height = "10px";
        //指定した色の中からランダムで色をつける
        this.sty.backgroundColor = COLORS[
            rand(0,COLORS.length)];
    }
    update()
    {
        //ランダムで指定された縦横方向のスピードで落ちる
        this.x+=this.vx;
        this.y+=this.vy;

        //紙が画面に行った時画面ちょっと上に移動
        if(this.y>=screen_h)
        {
            this.x = rand(0,screen_w);
            this.y = -20;
        }
        this.ang += this.spd;
        //left topは紙吹雪が降ってくる位置を指定している
        this.sty.left = this.x + "px";
        this.sty.top =this.y + "px";
        //rotate3D(xの方向ベクトル,yの方向ベクトル,zの方向ベクトル,回転角度)
        this.sty.transform = "rotate3D("
            + this.rX +"," + this.rY +"," + this.rZ +"," +
            this.ang + "deg)";
    }
}

//作った紙の枚数分kami[]配列に入れる
let kami = [];
for(let i=0;i<KAMI_MAX;i++)
    kami.push( new Kami() );


//紙の中にあるupdateメソッドを呼び出す
setTimeout(function() {
	setInterval(mainLoop,1000/20);
	function mainLoop()
	{
	    for(let i=0;i<KAMI_MAX;i++)
	    kami[i].update();
	}
}, 3500);
