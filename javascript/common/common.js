//20200629 フッダー・ヘッダー定義

//ヘッダー定義
function header(){
    var html = "";
        html += '<div class="w3-container ">';
        html += '<div class = "header_size">';
        html += '<img src="img/common/title.png" class="img-fluid" width = "200" height="90">';
        html += '<img src="img/common/left_hand.png" class="menu layer home" width = "160" height="60">';
        html += '</div>';
        html += '</div>';

        document.write(html);
}

//フッダー定義
function footer(){
    var html = "";
        html += '<div class = "footer_setting">';
        html += '<div class="w3-container">';
        html += '<center>';
        html += '<p>Copyright (c) 笑撃の新人製作委員会.inc </p>';
        html += '</center>';
        html += '</div>';
        html += '</div>';

        document.write(html);
}

