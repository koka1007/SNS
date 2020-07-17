var talkCount = 0;

function start(partner,me,boke,count){


	switch(count){
	case "0":
		var talk1 = [
		    'はい、どうも～',
		    me+'です',
		    partner+'です',
		    'お願いします～',
		    'ねえねえ、'+me+'くん',
		    'なんだい'+partner+'さん',
		    boke
	    ];
		break;
	case "1":
		var talk1 = [
		      'でもさいきんはコロナがすごいですよね。',
		    'そうですよね。また増えてきてますもんね',
		    '私もね自粛してました',
		    'あ、えらい！',
		    'スーパーも一人で行くんですよ',
		    '人数制限もしてますもんね',
		    boke
	    ];
		break;
	case "2":
		var talk1 =[
			'やっているかいってね',
			'いやいやあれはコロナ対策やし、フェイスガードやから',
			'そうなんか、出会い頭のキス防止かと',
			'欧米か！誰がおばちゃんと出会い頭キスすんねん',
			'そういえばマスクも売ってないですもんね',
			'そうですね、マスク買うのに行列できてましたからね',
			'そういえば先頭の人がわ～わ～言うてましたわ',
			'そりゃ迷惑な人ですね',
			boke
		];
		break;
	default:
		break;
	}


var i =0;
var talk = setInterval( ()=> {
    if(i % 2 ==0){
    	output(talk1[i],"partner");
        i++;
    }else if((i % 2 == 1)){
    	output(talk1[i],"me");
        i++;
    }
    if(i == talk1.length){
    		showFormAnimation();
    		talk1=[];
			clearInterval(talk);
    }

    talkCount++;
}, 1000);
}


function showFormAnimation() {

	document.getElementById("input-field").style.visibility ="visible";
	document.getElementById("hint").style.visibility ="visible";
}

function hideFormAnimation() {

	document.getElementById("input-field").style.visibility ="hidden";
	document.getElementById("hint").style.visibility ="hidden";
}


function output(val,person) {
    // 一番下までスクロール
    const field = document.getElementById('manzai-field');
    field.scroll(0, field.scrollHeight - field.clientHeight);

    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    // このdivにテキストを指定
    const div = document.createElement('div');
    div.textContent = val;
    if(talkCount == 0){
	    if(person == "me"){
		    div.classList.add('chat-right');
		    li.classList.add('right');
		    ul.appendChild(li);
		    li.appendChild(div);
	    }else if(person == "partner"){
			div.classList.add('chat-left');
		    li.classList.add('left');
		    ul.appendChild(li);
		    li.appendChild(div);
		}
    }else{
    	if(person =="me"){
		    div.classList.add('chat-right');
		    li.classList.add('right');
		    ul.appendChild(li);
		    li.appendChild(div);
	    }else if(person == "partner"){
			div.classList.add('chat-left');
		    li.classList.add('left');
		    ul.appendChild(li);
		    li.appendChild(div);
	    }
    }
	field.scroll(0, field.scrollHeight - field.clientHeight);

}




function btnFunc(abb,bcc,cdd,uke){

		hideFormAnimation();
		let Answer = "";
		const tukkomi1 = document.tukkomi.Answer;

		const div = document.getElementById('field');
		for (let i = 0; i < tukkomi1.length; i++){
			if(tukkomi1[i].checked){ //tukkomi[i].checked === true)と同じ
				Answer = tukkomi1[i].value;
				break;
			}
		}

		var gradColor = 0;
			switch(uke){
			case "1":
				if(Answer == "A") {
					gradColor = 1;
				}else if(Answer == "B") {
					gradColor = 2;
				}else {
					gradColor = 3;
				}
				break;

			case "2":
				if(Answer == "A") {
					gradColor = 1;
				}else if(Answer == "C") {
					gradColor = 2;
				}else {
					gradColor = 3;
				}
				break;

			case "3":
				if(Answer == "B") {
					gradColor = 1;
				}else if(Answer == "A") {
					gradColor = 2;
				}else {
					gradColor = 3;
				}
				break;


			case "4":
				if(Answer == "B") {
					gradColor = 1;
				}else if(Answer == "C") {
					gradColor = 2;
				}else {
					gradColor = 3;
				}
				break;

			case "5":
				if(Answer == "C") {
					gradColor = 1;
				}else if(Answer == "A") {
					gradColor = 2;
				}else {
					gradColor = 3;
				}
				break;

			case "6":
				if(Answer == "C") {
					gradColor = 1;
				}else if(Answer == "B") {
					gradColor = 2;
				}else {
					gradColor = 3;
				}
				break;
			default:
				gradColor = 0;
			}


	    switch(Answer){
	    case 'A':
	    		Answer = abb;
	    		break;
	    case 'B':
	    		Answer = bcc;
	    		break;
	    case 'C':
	    		Answer = cdd;
	    		break;
	    default:
	    		return false;
			}

			 setTimeout( ()=> {
			        // 入力内を空欄にする
			        // 一瞬の間でvalueを取得し、ロボットの"Hi!〇〇!"の返信に利用
			        // 送信ボタンを押した瞬間にvalueを消したら、やまびこに失敗した
				 	output(Answer,"me");
			tukkomi1.value = '';
			var gradCount = 0;
			var grad = setInterval( ()=> {
				switch(gradColor){
				case 1:
					div.classList.add('oouke');
					setTimeout( ()=> {
					div.classList.remove('oouke');
					}, 700);
					break;
				case 2:
					div.classList.add('yayauke');
					setTimeout( ()=> {
					div.classList.remove('yayauke');
					}, 700);
					break;
				case 3:
					div.classList.add('suberi');
					setTimeout( ()=> {
					div.classList.remove('suberi');
					}, 700);
					break;
				default:
					break;
				}
				gradCount++

				if(gradCount == 2){
					setTimeout( ()=> {
						document.tukkomi.submit();
					}, 1000);
					clearInterval(grad);
				}
			}, 1000);
				 	 }, 1);


		


	};




/*

function battle(element){
				player();
			    partner();
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

		          }
	          }
	          //改行
	          preLineText = lineText;

	      });
	  }
	  newLineTextList.push(lineText);
	});

	boke();
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

			          }
	            }
	            preLineText = lineText;
	        });
	    }
	    newLineTextList.push(lineText);
	});

	answer();
	var lineLength = newLineTextList.length;

	ctx.fillStyle = "#000000";
	newLineTextList.forEach(function (lineText, index) {
	    ctx.fillText(lineText,x1+padding,y1+padding+(size * (index + 1)));
	});

}

*/

