<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import = "java.util.*" %>
<%@ page import = "dbmanager.*" %>
<%@ page import = "beans.*" %>
<%@ page import = "dao.*" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>笑撃の新人/結果発表ーー!!</title>

		<!-- JavaScript読み込み開始 -->
			<script type="text/javascript" src="javascript/common/common.js"></script>

		<!-- JavaScript読み込み終了 -->

		<!-- CSS読み込み開始 -->
			<script type="text/javascript">common_link();</script>
		<!-- CSS読み込み終了 -->
	</head>


	<body>
		<!-- ヘッダー部分スタート(function heder()呼び出し) -->
			<script type="text/javascript">header();</script>
		<!-- ヘッダー部分終了 -->


		<!-- メイン画面開始 -->
		<!-- 20200703 加納 centerタグ変更-->
		<div style="text-align: center">
			<!-- canvasの設定開始 -->
				<script type="text/javascript">canvas_func();</script><br>
			<!-- canvas中のテキスト設定 -->
				<script type="text/javascript">var canvas = document.getElementById("canvas");</script>
				<script type="text/javascript">var ctx = canvas.getContext("2d");</script>
				<script type="text/javascript">ctx.font = "25px AXIS";</script>

			<!-- canvasの設定終了 -->
			<script type="text/javascript" src="javascript/ranking/ranking.js"></script>
			<script type="text/javascript">start();</script><br>

			<!-- canvas内にランキング表示! -->
			<!-- 2020/7/7 ランキング上位4～10位を右側に表示するように変更開始  加納 -->
			<%
				List<RankingBean> RankingList = (List<RankingBean>)request.getAttribute("rankingList");
				for(int i = 0; i < RankingList.size(); i++){
					RankingBean rbean = RankingList.get(i);
			%>
					<script type="text/javascript">
					start = setInterval(function() {
						var count  = <%= i  %>;
						var width  = 460;

						if(count <= 2){
							var heigth = (130*(count + 1) -27);
							ctx.font = "40px AXIS"
							ctx.strokeText(count+1,50,heigth);
							ctx.font = "25px AXIS"
							ctx.strokeText("<%= rbean.getRname() %>",105,heigth-5);
							ctx.font = "40px AXIS"
							ctx.strokeText( <%= rbean.getScore() %> ,395,heigth);
						}else{
							var heigth = (78*(count + 1)-230);
							ctx.font = "30px AXIS";
							ctx.strokeText(count+1,45+width,heigth);
							ctx.font = "15px AXIS";
							ctx.strokeText("<%= rbean.getRname() %>",85+width,heigth-5);
							ctx.font = "30px AXIS";
							ctx.strokeText( <%= rbean.getScore() %> ,265+width,heigth);
						}
					}, 100);
					</script>
			<%}%>
			<!-- 2020/7/7 上位4～10位を右側に表示するように変更終了  加納 -->
		</div><br>
		<!-- メイン画面終了 -->
		<div style="text-align: center">
<font color="white">

				<a href="<%= request.getContextPath() %>/name">TOPへ</a>
			</font>
		</div><br>
		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>