package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Point;
import beans.RegistName;

public class Name extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		RequestDispatcher dispatcher =
		request.getRequestDispatcher("index.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//リクエストパラメータの取得
		request.setCharacterEncoding("Windows-31j");
		String registName = request.getParameter("name");

		//RegistNameインスタンス（ユーザー情報）の生成
		RegistName rname = new RegistName(registName);

		//セッションスコープにNamebeansを入れる
		HttpSession session = request.getSession();
		session.setAttribute("rname", rname);

		//ここでポイントのビーンズを作っておく
		Point poi = new Point(0,0);
		session.setAttribute("point", poi);

		//エントリー結果画面にフォワード
		RequestDispatcher dispatcher =
		request.getRequestDispatcher("/view/main.jsp");
		dispatcher.forward(request, response);
	}

}
