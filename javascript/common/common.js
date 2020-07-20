//20200629 フッダー・ヘッダー定義

//共通リンク部分
function common_link(){
	var html = "";
		html += '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">';
		html += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
		html += '<link rel="stylesheet" href="css/common/index.css">';
		html += '<link rel="stylesheet" href="css/main.css">';
		document.write(html);
}

//canvasのサイズ等設定
function canvas_func(){
	var html = "";
		html += '<canvas id="canvas" width="800px" height="600px" style="background-color:white;">';
		html += 'このブラウザは HTML5 Canvas に対応していません。';
		html += '</canvas>';
		document.write(html);
}

//ヘッダー定義
function header(){
    var html = "";
        html += '<div class="w3-container">';
        html += '<div class = "header_size">';
        html += '<a href = "index.jsp">';
        html += '<img src="img/common/title.png" class="img-fluid" width = "200" height="90">';
        html += '</a>';
        html += '<a href="http://localhost:8080/shougekinosinjin/zenjitu.jsp">';
        html += '<img src="img/common/left_hand.png" class="menu layer home" width = "160" height="60">';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        document.write(html);
}

//フッダー定義
//2020/07/16 ページ拡大縮小によるフッターレイアウトの崩れ防止 加納
function footer(){
    var html = "";
    	html += '<br><br>';
        html += '<div class = "footer_setting fixed-bottom">';
        html += '<div class="w3-container">';
        html += '<center>';
        html += '<p>Copyright (c) 笑撃の新人製作委員会.inc </p>';
        html += '</center>';
        html += '</div>';
        html += '</div>';

        document.write(html);
}

