<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import = "java.util.*" %>
<%@ page import = "dbmanager.*" %>
<%@ page import = "beans.*" %>
<%@ page import = "dao.*" %>
<%@ page import = "beansmapping.*" %>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>笑撃の新人/漫才バトル!</title>

		<!-- JavaScript読み込み開始 -->
			<script type="text/javascript" src="javascript/common/common.js"></script>
			<script type="text/javascript" src='http://cdn.rawgit.com/phi-jp/phina.js/v0.2.0/build/phina.js'></script>
			<script type="text/javascript" src="javascript/main.js"></script>

		<!-- JavaScript読み込み終了 -->

		<!-- CSS読み込み開始 -->
			<script type="text/javascript">common_link();</script>
			<link rel="stylesheet" href="css/main.css">
		<!-- CSS読み込み終了 -->


	</head>

	<body>

		<!-- ヘッダー部分スタート(function heder()呼び出し) -->
			<script type="text/javascript">header();</script>
		<!-- ヘッダー部分終了 -->


		<!-- メイン画面開始 -->
		<!-- 20200703 加納 centerタグ変更-->
<!--  -->
		<div style="text-align: center"  class ="parent">
			<!-- canvas開始 -->
				<script type="text/javascript">canvas_func();</script>
				<script type="text/javascript">text_setCanvas();</script>
			<!-- canvas終了 -->




			<font color="white">

			<!--以下確認のため記述、ボケ・ツッコミデータベース連携後削除-->

			<%
				List<PartnerBean> partnerList = (List<PartnerBean>)session.getAttribute("partnerList");
					for(int i = 0; i < partnerList.size(); i++){
					PartnerBean pbean = partnerList.get(i);
			%>

			<br>
			<% RegistNameBean registName = (RegistNameBean)session.getAttribute("rname");
				PointBean point = (PointBean)session.getAttribute("point");%>
			<tr>
				<th><%= pbean.getPid() %></th>
				<th><%= pbean.getPname() %></th>
				<th><%= pbean.getBid() %></th>
				<th><%= pbean.getAid() %></th>
				<th><%= registName.getName() %></th>

			</tr>

	 		<br>
	 		<%
				}
			%>
			<%
				List<BokeBean> bokeList = (List<BokeBean>)session.getAttribute("bokeList");
					for(int i = 0; i < bokeList.size(); i++){
					BokeBean bbean = bokeList.get(i);
			%>

			<script type="text/javascript">drawCircleL("<%=bbean.getBcontext()%>");</script>
	 		<tr>
				<th><%=bbean.getBid()%></th>
				<th><%=bbean.getBcontext()%></th>
				<th><%=bbean.getHint()%></th>
				<th><%=bbean.getBattri()%></th>
				<th><%=bbean.getBscore()%></th>
			</tr>
			<%
				}
			%>


			<%
				List<AnsBean> AnsList = (List<AnsBean>)session.getAttribute("ansList");
				for(int i = 0; i < AnsList.size(); i++){
					AnsBean abean = AnsList.get(i);
			%>
					<script type="text/javascript">drawCircleR("<%=abean.getSanswer()%>");</script>




				<th><%=abean.getAid()%></th>

				<th><%=abean.getAscore()%></th>
			<!-- (2020/7/7)古門　ツッコミをラジオボタンで選択できるようにしてます 以下変更-->

					<div class ="child" style="text-align:left;">


						<form action=" <%= request.getContextPath() %>/main" method="Post" id="answer-check">
							<input type="radio" name="Answer" value="A" class="answer-check">
							1：
								<%=abean.getSanswer()%><br>
							<input type="radio" name="Answer" value="B" class="answer-check">
							2：
								<%=abean.getNanswer()%><br>
							<input type="radio" name="Answer" value="C" class="answer-check" required>
							3：
								<%=abean.getTanswer()%><br>
							<input type="submit"value="突っ込め！！"name="ANSWER">
						</form>
						<script type="text/javascript" id ="tukkomi">
							var element = document.getElementById("answer-check") ;
							var radioNodeList = element.Answer;
							var a = radioNodeList.value;
							var tukkomi="";
							switch(a){
							case A;
								tukkomi = "<%=abean.getSanswer()%>"
								break;
							case B:
								tukkomi = "<%=abean.getNanswer()%>"
									break;
							case C:
								tukkomi = "<%=abean.getTanswer()%>"
									break;
							default:
								return -1;
							}
						</script>

					</div>

				<script type="text/javascript" id ="tukkomi">
				battle(tukkomi);
				</script>


			<!-- (2020/7/7)古門　ツッコミをラジオボタンで選択できるようにしてます 以上変更-->
			<%
				}
			%>

			<!-- 以上まで削除 -->

			</font>
		</div><br>
		<!-- メイン画面終了 -->


		<!-- フッター部分スタート(function footer()呼び出し)-->
			<script type="text/javascript">footer();</script>
		<!-- フッター部分終了-->

	</body>
</html>
