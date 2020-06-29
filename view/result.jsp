<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="beans.Point"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		Point point = (Point) session.getAttribute("point");
		int resultPoint = point.getPoint();
	%>

	<%=point.getPoint()%>

	<p>
		<a href="<%= request.getContextPath() %>/Judge">結果へ</a>
	</p>


</body>
</html>