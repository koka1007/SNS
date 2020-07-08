window.onload = function() {
	text_setCanvas();
};


function text_setCanvas(){
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");



		var startAngle = 0 ;
		var endAngle =  150;
		var x = 390;  //左上の頂点x座標
        var y = 530;  //左上の頂点y座標
        var w = 40;  //横の長さ
        var h = 40;  //縦の長さ
        var r = 10 ;  //角丸の半径
        var color = '#767171';  //塗りつぶし色

		//真ん中
		ctx.fillStyle='#2F5597';
		ctx.fillRect(200, 0,400,600);

		//マイク

		//棒
		ctx.fillStyle= color;
		ctx.fillRect(400, 550,20,50);

		//マイク下
        ctx.beginPath();
        ctx.fillStyle = '#BFBFBF';
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.moveTo(x,y + r);  //←①
        ctx.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);  //←②
        ctx.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,1);  //←③
        ctx.arc(x+w-r,y+r,r,0,Math.PI*1.5,1);  //←④
        ctx.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,1);  //←⑤
        ctx.closePath();  //←⑥
        ctx.stroke();  //←⑦
        ctx.fill();  //←⑧


        //マイク上
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.fillStyle =color;
        ctx.moveTo(x,y+r+h/2);  //←①
        ctx.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);  //←②
        ctx.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,1);  //←③
        ctx.arc(x+w-r,y+r+h/2,r,0,Math.PI*1.5,1);  //←④
        ctx.arc(x+r,y+r+h/2,r,Math.PI*1.5,Math.PI,1);  //←⑤
        ctx.closePath();  //←⑥
        ctx.stroke();  //←⑦
        ctx.fill();  //←⑧

		//左体
		ctx.beginPath();
		ctx.moveTo(200,480); //最初の点の場所
		ctx.lineTo(150,600); //2番目の点の場所
		ctx.lineTo(250,600); //3番目の点の場所
		ctx.closePath();	//三角形の最後の線 closeさせる
		ctx.fillStyle='#000000';
		ctx.fill();

		//Yシャツ
		ctx.beginPath();
		ctx.moveTo(180,528); //最初の点の場所
		ctx.lineTo(190,588); //3番目の点の場所
		ctx.lineTo(210,588); //5番目の点の場所
		ctx.lineTo(220,528); //2番目の点の場所
		ctx.closePath();	//三角形の最後の線 closeさせる
		ctx.fillStyle='#ffffff';
		ctx.fill();






		//ネクタイ
		ctx.beginPath();
		ctx.moveTo(200,518); //最初の点の場所
		ctx.lineTo(190,540); //3番目の点の場所
		ctx.lineTo(190,588); //4番目の点の場所
		ctx.lineTo(210,588); //5番目の点の場所
		ctx.lineTo(210,540); //6番目の点の場所
		ctx.closePath();	//矢印の最後の線 closeさせる
		ctx.fillStyle='red';
		ctx.fill();


		//左頭
		ctx.beginPath () ;
		ctx.arc( 200, 480, 50, (startAngle-60) * Math.PI / 360, (endAngle-60) * Math.PI / 360, true ) ;
		ctx.lineTo(200, 480);
		ctx.fillStyle='#FBE5D6';
		ctx.fill();




		//右体
		ctx.beginPath();
		ctx.moveTo(600,480); //最初の点の場所
		ctx.lineTo(550,600); //2番目の点の場所
		ctx.lineTo(650,600); //3番目の点の場所
		ctx.closePath();	//三角形の最後の線 closeさせる
		ctx.fillStyle='#000000';
		ctx.fill();

		//Yシャツ
		ctx.beginPath();
		ctx.moveTo(580,528); //最初の点の場所
		ctx.lineTo(590,588); //3番目の点の場所
		ctx.lineTo(610,588); //5番目の点の場所
		ctx.lineTo(620,528); //2番目の点の場所
		ctx.closePath();	//三角形の最後の線 closeさせる
		ctx.fillStyle='#ffffff';
		ctx.fill();

		//ネクタイ
		ctx.beginPath();
		ctx.moveTo(600,528); //最初の点の場所
		ctx.lineTo(590,540); //3番目の点の場所
		ctx.lineTo(590,588); //4番目の点の場所
		ctx.lineTo(610,588); //5番目の点の場所
		ctx.lineTo(610,540); //6番目の点の場所
		ctx.closePath();	//矢印の最後の線 closeさせる
		ctx.fillStyle='yellow';
		ctx.fill();


		//右頭
		ctx.beginPath () ;
		ctx.arc( 600, 480, 50, (startAngle+280) * Math.PI / 360, (endAngle+280) * Math.PI / 360, true ) ;
		ctx.lineTo(600, 480);
		ctx.fillStyle='#FBE5D6';
		ctx.fill();


}





