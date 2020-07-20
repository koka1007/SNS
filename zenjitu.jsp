<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>rensyu</title>
		<!-- JavaScript読み込み開始 -->
			<script type="text/javascript" src="javascript/common/common.js"></script>
			<script type="text/javascript" src="javascript/omake/omake.js"></script>
		<!-- JavaScript読み込み終了 -->


		<!-- CSS読み込み開始 -->
			<script type="text/javascript">common_link();</script>
		<!-- CSS読み込み終了 -->

	</head>


	<body>

		<!-- ヘッダー部分スタート(function heder()呼び出し) -->
			<script type="text/javascript">header();</script>
		<!-- ヘッダー部分終了 -->
		<div style="text-align:center">
	        <!-- canvasの設定開始 -->
			<script type="text/javascript">canvas_func();</script><br>
			<!-- canvasの設定終了 -->
			<script type="text/javascript">start();</script><br>
		</div>
        <!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>