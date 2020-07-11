function battle(element){

				drawCircleR(element);
}



function text_setCanvas(){
	var canvas = document.getElementById("canvas");
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	var ctx = canvas.getContext("2d");
		var x = 390;  //左上の頂点x座標
        var y = 530;  //左上の頂点y座標
        var w = 40;  //横の長さ
        var h = 40;  //縦の長さ
        var r = 10;  //角丸の半径
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

        //相方、プレイヤーの描画
        player();
        partner();
}

//以下プレイヤー作成
function player(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var startAngle = 280 ;
	var endAngle =  380;
	var centerx = 600;
	var centery = 480;

	//右体
	ctx.beginPath();
	ctx.moveTo(centerx,centery); //最初の点の場所
	ctx.lineTo(centerx-50,centery+120); //2番目の点の場所
	ctx.lineTo(centerx+50,centery+120); //3番目の点の場所
	ctx.closePath();	//三角形の最後の線 closeさせる
	ctx.fillStyle='#000000';
	ctx.fill();

	//Yシャツ
	ctx.beginPath();
	ctx.moveTo(580,528); //最初の点の場所
	ctx.lineTo(590,588); //2番目の点の場所
	ctx.lineTo(610,588); //3番目の点の場所
	ctx.lineTo(620,528); //4番目の点の場所
	ctx.closePath();	//三角形の最後の線 closeさせる
	ctx.fillStyle='#ffffff';
	ctx.fill();

	//ネクタイ
	ctx.beginPath();
	ctx.moveTo(centerx,528); //最初の点の場所
	ctx.lineTo(590,540); //2番目の点の場所
	ctx.lineTo(590,588); //3番目の点の場所
	ctx.lineTo(610,588); //4番目の点の場所
	ctx.lineTo(610,540); //6番目の点の場所
	ctx.closePath();	//矢印の最後の線 closeさせる
	ctx.fillStyle='yellow';
	ctx.fill();


	//右頭
	ctx.beginPath () ;
	ctx.arc( centerx, 480, 50, startAngle * Math.PI / 360, endAngle * Math.PI / 360, true );
	ctx.lineTo(centerx, 480);
	ctx.fillStyle='#FBE5D6';
	ctx.fill();
}


//以下パートナー 座標は調整中
function partner(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var startAngle = 0 ;
	var endAngle =  150;

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
}


//以下吹き出し
function drawCircleL(bbean){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var size = 15;		//文字サイズ
    var padding = 5;	//余白
    var w1 = 250;		//コメントの横の長さ
    var h1 = size;		//コメントの縦の長さ
    var r1 = 10;		//四角の角丸の半径
    var text = bbean; 	//テキスト
    var x1 = 280;		//左上の頂点x座標
    var y1 = 320-h1;		//左上の頂点y座標

    //吹き出し作成
	function boke(){
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.fillStyle='white';
		ctx.strokeStyle = 'black';
		ctx.moveTo(x1,y1 + r1);
		ctx.arc(x1+r1,y1+h1-r1,r1,Math.PI,Math.PI*0.5,true);
		ctx.lineTo(x1,y1+h1+r1*2);
		ctx.lineTo(x1+r1+30,y1+h1);
		ctx.arc(x1+w1-r1,y1+h1-r1,r1,Math.PI*0.5,0,1);
		ctx.arc(x1+w1-r1,y1+r1,r1,0,Math.PI*1.5,1);
		ctx.arc(x1+r1,y1+r1,r1,Math.PI*1.5,Math.PI,1);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}

	//吹き出し呼び出し
	boke();


	//テキスト設定
    var limitedWidth =w1-(padding * 2);
	var limitedHeight = h1-(padding * 2);
	ctx.font = size + "px ''";

	//テキスト調整　行に分解
	var lineTextList = text.split("\n");
	var newLineTextList = [];
	lineTextList.forEach(function (lineText) {
	  if (ctx.measureText(lineText).width > limitedWidth) {
	      characterList = lineText.split("");// 1文字ずつ分割
	      var preLineText = "";
	      var lineText = "";
	      characterList.forEach(function (character) {
	          lineText += character;
	          if (ctx.measureText(lineText).width > limitedWidth) {
	              newLineTextList.push(preLineText);
	              lineText = character;
	              //縦枠のリサイズ
	              if(limitedHeight < size){
		        	  h1 += (size*1.6);
		        	  boke();
		          }
	          }
	          //改行
	          preLineText = lineText;

	      });
	  }
	  newLineTextList.push(lineText);
	});

	var lineLength = newLineTextList.length;


	//テキストの描画
	ctx.fillStyle = "#000000";
	newLineTextList.forEach(function (lineText, index) {
	  ctx.fillText(lineText,x1+padding,y1+padding+(size * (index + 1)));
	});


	ctx.save();
	}

function drawCircleR(abean){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var x1 = 280;  			//左上の頂点x座標
    var y1 = 420;  			//左上の頂点y座標
    var size = 15;			//文字サイズ
    var w1 = 250; 			//吹き出しの横の長さ
    var h1 = (size+20);  	//吹き出しの縦の長さ
    var padding = 5;		//余白
    var r1 = 10;  			//四角の角丸の半径
    var text=abean;			//テキスト
    var x1 = 280;  			//左上の頂点x座標
    var y1 = 420;  			//左上の頂点y座標


    //吹き出し作成
    function answer(){
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.fillStyle='white';
		ctx.strokeStyle = 'black';
		ctx.moveTo(x1,y1 + r1);
		ctx.arc(x1+r1,y1+h1-r1,r1,Math.PI,Math.PI*0.5,true);
		ctx.lineTo(x1+w1-30,y1+h1);
		ctx.lineTo(x1+w1,y1+h1+r1*2);
		ctx.arc(x1+w1-r1,y1+h1-r1,r1,Math.PI*0.5,0,1);
		ctx.arc(x1+w1-r1,y1+r1,r1,0,Math.PI*1.5,1);
		ctx.arc(x1+r1,y1+r1,r1,Math.PI*1.5,Math.PI,1);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
    }

    answer();

	//テキスト設定
	var limitedWidth =w1-(padding * 2);
	var limitedHeight = h1-(padding * 2);
	ctx.font = size + "px ''";

	// テキスト調整　行に分解
	var lineTextList = text.split("\n");
	var newLineTextList = [];
	lineTextList.forEach(function (lineText) {
	    if (ctx.measureText(lineText).width > limitedWidth) {
	        characterList = lineText.split("");// 1文字ずつ分割
	        var preLineText = "";
	        var lineText = "";
	        characterList.forEach(function (character) {
	            lineText += character;
	            if (ctx.measureText(lineText).width > limitedWidth) {
	                newLineTextList.push(preLineText);
	                lineText = character;
	                if(limitedHeight < size){
			        	  h1 += (size*1.6);
			        	  answer();
			          }
	            }
	            preLineText = lineText;
	        });
	    }
	    newLineTextList.push(lineText);
	});

	var lineLength = newLineTextList.length;

	ctx.fillStyle = "#000000";
	newLineTextList.forEach(function (lineText, index) {
	    ctx.fillText(lineText,x1+padding,y1+padding+(size * (index + 1)));
	});

	ctx.save();
}



