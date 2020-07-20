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
			<script type="text/javascript" src="javascript/main/main.js"></script>
		<!-- JavaScript読み込み終了 -->

		<!-- CSS読み込み開始 -->
			<script type="text/javascript">common_link();</script>
			<script type="text/javascript">main_link();</script>
		<!-- CSS読み込み終了 -->


	</head>

	<body>

		<!-- ヘッダー部分スタート(function heder()呼び出し) -->
			<script type="text/javascript">header();</script>
		<!-- ヘッダー部分終了 -->


		<!-- メイン画面開始 -->
		<!-- 20200703 加納 centerタグ変更-->

		<div style="text-align: center"  class ="parent">




			<%-- <!-- canvas開始 -->
				<script type="text/javascript">canvas_func();</script>
				<script type="text/javascript">text_setCanvas();</script>
			canvas終了  --%>


			<div id ="field">
			<div id ="combi">
				<div id= "manzai-field">
					<ul id= "chat-ul"></ul>
				</div>
			</div>
			</div>


			<font color="white">

			<!--以下確認のため記述、ボケ・ツッコミデータベース連携後削除-->

			<!-- 2020/7/20 古門 以下セッションスコープよりデータ取得-->
			<%
				//登録名の取得
				RegistNameBean registName = (RegistNameBean)session.getAttribute("rname");
				String player = registName.getName();

				//表示回数の取得
				PointBean point = (PointBean)session.getAttribute("point");
				int battleCount = point.getCount();

				//相方、ボケ、ツッコミの取得（ボケおよびツッコミの値はバトルの表示回数で変更させている）
				List<PartnerBean> partnerList = (List<PartnerBean>)session.getAttribute("partnerList");
				List<BokeBean> bokeList = (List<BokeBean>)session.getAttribute("bokeList"+battleCount);
				List<AnsBean> AnsList = (List<AnsBean>)session.getAttribute("ansList"+battleCount);


				//以下、上記リストの展開および取得値の命名
				for(int i = 0; i < partnerList.size(); i++){
					PartnerBean pbean = partnerList.get(i);
					String aikata = pbean.getPname();
			%>


			<%-- 2020/7/20 不要のためコメントアウト　古門
			<tr>
				<th><%= pbean.getPid() %></th>
				<th><%= pbean.getPname() %></th>
				<th><%= pbean.getBid1() %></th>
				<th><%= pbean.getAid1() %></th>
				<th><%= pbean.getBid2() %></th>
				<th><%= pbean.getAid2() %></th>
				<th><%= pbean.getBid3() %></th>
				<th><%= pbean.getAid3() %></th>
				<th><%= registName.getName() %></th>
			</tr>
	 		<br>
 			--%>



			<%
					for(int j = 0; j < bokeList.size(); j++){
					BokeBean bbean = bokeList.get(j);

					String hint = bbean.getHint();
					String boke = bbean.getBcontext();
					int zokusei = bbean.getBattri();

			%>
			<%--	2020/7/20 不要のためコメントアウト　古門
	 		<tr>
				<th><%=bbean.getBid1()%></th>
				<th><%=bbean.getBid2()%></th>
				<th><%=bbean.getBid3()%></th>
				<th><%=bbean.getBcontext()%></th>
				<th><%=bbean.getBattri()%></th>
				<th><%=bbean.getBscore()%></th>
			</tr>

			 --%>

			<%
				for(int l = 0; l < AnsList.size(); l++){
					AnsBean abean = AnsList.get(l);
					String tukkomiA = abean.getSanswer();
					String tukkomiB = abean.getNanswer();
					String tukkomiC = abean.getTanswer();
			%>

			<%--	2020/7/20 不要のためコメントアウト　古門
				<tr>
					<th><%=abean.getAid1()%></th>
					<th><%=abean.getAid2()%></th>
					<th><%=abean.getAid3()%></th>

					<th><%=abean.getAscore()%></th>
	 		--%>

			<!-- 2020/7/20 古門　以下　ヒント吹き出しの追加 -->

					<div id ="hint"style="text-align:right"><%=hint%></div>

			<!-- 2020/7/20 古門　以上　ヒント吹き出しの追加 -->

 			<!-- (2020/7/7)古門　ツッコミをラジオボタンで選択できるようにしてます 以下変更-->
			<!-- 2020/7/20 古門　以下　ラジオボタン選択後の挙動の追加 -->

					<div class ="child" id ="input-field" style="text-align:left">
						<form action=" <%= request.getContextPath() %>/main" method="Post" name='tukkomi' id="answer-check" >
							<input type="radio" name="Answer" value="A" id="answer-check">
							1：
								<%=tukkomiA%><br>
							<input type="radio" name="Answer" value="B" id="answer-check">
							2：
								<%=tukkomiB%><br>
							<input type="radio" name="Answer" value="C" id="answer-check" required>
							3：
								<%=tukkomiC%><br>
							<input type="button" value="突っ込め！！" name="ANSWER" id= "chat-button"
							onclick="btnFunc('<%=tukkomiA%>','<%=tukkomiB%>','<%=tukkomiC%>','<%=zokusei%>')">
							</form>
					</div>

			<!-- (2020/7/7)古門　ツッコミをラジオボタンで選択できるようにしてます 以上変更-->
			<!-- 2020/7/20 古門　以上　ラジオボタン選択後の挙動の追加 -->


			<!-- 2020/7/20 古門　以下　吹き出しアニメーションの呼び出し　 -->
			<script type="text/javascript">start("<%=aikata%>","<%=player%>","<%=boke%>","<%=battleCount%>");</script>
			<!--  2020/7/20 古門　以上　吹き出しアニメーションの呼び出し　 -->


			<%
				}
			%>
			<%
				}
			%>
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
