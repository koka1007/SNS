<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>笑撃の新人</title>

		<!-- CSS読み込み開始 -->
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
			<link rel="stylesheet" href="css/common/index.css">
		<!-- CSS読み込み終了 -->

		<!-- JavaScript読み込み開始 -->
			<script type="text/javascript" src="javascript/common/common.js"></script>
		<!-- JavaScript読み込み終了 -->
	</head>


	<body>
		<!-- ヘッダー部分スタート(function heder()呼び出し) -->
			<script type="text/javascript">header();</script>
		<!-- ヘッダー部分終了 -->

		<!-- メイン部分スタート -->
			<div class = "body-margin">
				<center>
					<img src="img/index/stage.jpg" alt="main" style="width:65%" height="470">
					<div style="position:absolute; top:70%; left:37%">
						<form class = "form-control-lg" action="<%= request.getContextPath() %>/name"method="post">
							<input type="text" class="form-control-lg" placeholder="芸名を書き込め！"></br>
							<button class="w3-button w3-xxlarge w3-red btn-color">Let's MANZAI!!</button>
						</form>
					</div>
				</center>
			</div>
		<!-- メイン部分終了 -->

		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>