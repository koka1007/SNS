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
		<center>
			<!-- canvas開始 -->
				<script type="text/javascript">canvas_func();</script><br>
			<!-- canvas終了 -->

			<font color="white">

		<%
			List<RankingBean> customerList = (List<RankingBean>)request.getAttribute("customerList");
			for(int i = 0; i < customerList.size(); i++){
				RankingBean cbean = customerList.get(i);
		%>

			<tr>
				<th><%= cbean.getRno() %></th>
				<th><%= cbean.getRname() %></th>
				<th><%= cbean.getScore() %></th>
			</tr>
		<%
			}
		%>
			</font>

		</center><br>
		<!-- メイン画面終了 -->


		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->
	</body>
</html>