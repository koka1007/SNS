<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="beans.RegistNameBean" %>
<%@page import="beans.PointBean"%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>笑撃の新人/漫才バトル!</title>

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
		<center>
			<!-- canvas開始 -->
				<script type="text/javascript">canvas_func();</script>
			<!-- canvas終了 -->


			<font color="white">
				<%
					RegistNameBean registName = (RegistNameBean)session.getAttribute("rname");
									PointBean point = (PointBean)session.getAttribute("point");
				%><br>

				<%= registName.getName() %>
				<%= point.getPoint() %>

				<form action="<%= request.getContextPath() %>/main"method="post">
					グー：<input type="radio" name="janken"value="0"><br>
					チョキ：<input type="radio" name="janken"value="1"><br>
					パー：<input type="radio" name="janken"value="2"><br>
					<input type="submit"value="pon">
				</form>
			</font>
		</center><br>
		<!-- メイン画面終了 -->


		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->

	</body>
</html>