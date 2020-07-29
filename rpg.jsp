<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>笑撃の新人</title>

		<!--JavaScript読み込み開始 -->
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

		<!-- メイン部分スタート -->
        <div style="text-align: center" class = "parent">

			<canvas id="canvas" width="800px" height="600px" style="background-color:black;">
                'このブラウザは HTML5 Canvas に対応していません。'
            </canvas>

			<!-- キャンバス内の動きを呼び出し開始 -->
				<script type="text/javascript" src="javascript/rpg/rpg.js"></script>
				<script type="text/javascript">start();</script>
			<!-- キャンバス内の動きを呼び出し終了 -->

		</div>
		<!-- メイン部分終了 -->


		<!-- フッター部分スタート(function footer()呼び出し) -->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>