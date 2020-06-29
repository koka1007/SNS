<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="beans.RegistName" %>
<%@page import="beans.Point"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
RegistName registName = (RegistName)session.getAttribute("rname");
Point point = (Point)session.getAttribute("point");
 %>
<%= registName.getName() %>
<%= point.getPoint() %>
<form action="/s-jin_shitagaki/Main"method="post">
グー：<input type="radio" name="janken"value="0"><br>
チョキ：<input type="radio" name="janken"value="1"><br>
パー：<input type="radio" name="janken"value="2"><br>
<input type="submit"value="pon">
</form>
</body>
</html>