var battleCount = 0;

//トークアニメーションスタート
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
					}, 1000);

}

//formを表示するアニメーション
function showFormAnimation() {

	document.getElementById("input-field").style.visibility ="visible";
	document.getElementById("hint").style.visibility ="visible";
}

//formを隠すアニメーション
function hideFormAnimation() {

	document.getElementById("input-field").style.visibility ="hidden";
	document.getElementById("hint").style.visibility ="hidden";
}

//トーク画面にメッセージを表示させるアニメーション
function output(val,person) {
    const field = document.getElementById('manzai-field');
    field.scroll(0, field.scrollHeight - field.clientHeight);

    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    //このdivにテキストを指定
    const div = document.createElement('div');
    div.textContent = val;

    //person値に合わせて表示する場所を変更させる
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
		}else if(person == "conbi"){
			div.classList.add('chat-center');
		    li.classList.add('center');
		    ul.appendChild(li);
		    li.appendChild(div);
		}

    // 一番下までスクロール
	field.scroll(0, field.scrollHeight - field.clientHeight);

}

//ツッコミボタン押下時のアニメーション
function btnFunc(abb,bcc,cdd,uke){

	hideFormAnimation();
	let Answer = "";
	const tukkomi1 = document.tukkomi.Answer;

	//ラジオボタンのバリュー値をAnswerにセット。
	for (let i = 0; i < tukkomi1.length; i++){
		if(tukkomi1[i].checked){ //tukkomi[i].checked === true)と同じ
			Answer = tukkomi1[i].value;
			break;
		}
	}

	//バリュー値で画面表示のパターンを判別
	var gradColor = judge(uke,Answer);


	//ツッコミ本文をバリューにセットし直す
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



    const div = document.getElementById('field');

    setTimeout( ()=> {

    			//選択したツッコミを自分のトークとして表示
			 	output(Answer,"me");

			 	// 入力内を空欄にする
				tukkomi1.value = '';


				/*
				 *gradColorを使用し画面表示を変更
				 *setIntervalにて繰り返しを行う
				 *繰り返しのgradCountが2回繰り返されたら
				 *繰り返しを終了させ、サーブレットに処理を送る。
				 */


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
						if(battleCount == 2){
							output("もうええわ","me");
							output("どうもありがとうございましたー","conbi");
						}
						setTimeout( ()=> {
							document.tukkomi.submit();
						}, 1000);
						battleCount++;
						clearInterval(grad);
					}
						}, 1000);
	}, 1);

};



//ツッコミ判定関数
function judge(uke,Answer){
	switch(uke){
	case "1":
		if(Answer == "A") {
			return  1;
		}else if(Answer == "B") {
			return  2;
		}else {
			return  3;
		}
		break;

	case "2":
		if(Answer == "A") {
			return  1;
		}else if(Answer == "C") {
			return  2;
		}else {
			return  3;
		}
		break;

	case "3":
		if(Answer == "B") {
			return  1;
		}else if(Answer == "A") {
			return  2;
		}else {
			return  3;
		}
		break;


	case "4":
		if(Answer == "B") {
			return  1;
		}else if(Answer == "C") {
			return  2;
		}else {
			return  3;
		}
		break;

	case "5":
		if(Answer == "C") {
			return  1;
		}else if(Answer == "A") {
			return  2;
		}else {
			return  3;
		}
		break;

	case "6":
		if(Answer == "C") {
			return  1;
		}else if(Answer == "B") {
			return  2;
		}else {
			return  3;
		}
		break;
	default:
		return  0;
	}
}