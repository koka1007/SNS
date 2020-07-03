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
				<script type="text/javascript">ctx.font = "40px Arial";</script>
			<!-- canvasの設定終了 -->


			<!-- canvas内にランキング表示! -->
			<%
				List<RankingBean> RankingList = (List<RankingBean>)request.getAttribute("rankingList");
				for(int i = 0; i < RankingList.size(); i++){
					RankingBean rbean = RankingList.get(i);	%>

					<script type="text/javascript">
						ctx.strokeText( <%= rbean.getRno()   %> ,10,40);
						ctx.strokeText("<%= rbean.getRname() %>",40,40);
						ctx.strokeText( <%= rbean.getScore() %> ,155,40);
					</script>
			<% } %>
		</div><br>
		<!-- メイン画面終了 -->


		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>
