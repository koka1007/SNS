<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>笑撃の新人!まさかの敗北!!</title>

		<!-- JavaScript読み込み開始 -->
			<script type="text/javascript" src="javascript/common/common.js"></script>
			<script type="text/javascript" src="javascript/lose/lose.js"></script>
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
				<script type="text/javascript">losecanvas();</script>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
			<!-- canvas終了 -->

			<script type="text/javascript">droptext();</script><br>

			<font color="white">
				lose<br>
				<a href="<%= request.getContextPath() %>/name">TOPへ</a>
			</font>
		</div><br>
		<!-- メイン画面終了 -->


		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>
