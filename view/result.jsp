<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="beans.PointBean"%>

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
			<!-- canvas開始 -->
				<script type="text/javascript">canvas_func();</script>
				<script type="text/javascript" src = "javascript/result/result.js"></script>
			<!-- canvas終了 -->

			<!-- データベースから情報取得 -->
			<%
				PointBean point = (PointBean) session.getAttribute("point");
				int resultPoint = point.getPoint();
			%><br>

			<!-- start(点数,次のパス)関数でキャンバス移動 -->
			<script type="text/javascript">
				start(<%=point.getPoint()%>,"<%= request.getContextPath() %>/Judge");
			</script>

		</div><br>
		<!-- メイン画面終了 -->


		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->

	</body>
</html>
