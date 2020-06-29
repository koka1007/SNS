package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Point;
import model.BattleLogic;

@WebServlet("/Main")
public class Main extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//リクエストパラメータの取得
		request.setCharacterEncoding("Windows-31j");
		String style = request.getParameter("janken");

		//JudgeLogicの呼び出し
		BattleLogic jl = new BattleLogic();
		 int point = jl.execution(style);

		//pointインスタンス（ポイント合計情報）の生成
		HttpSession session = request.getSession();
		Point prepoint = (Point)session.getAttribute("point");
		int totalpoint = prepoint.getPoint() + point;
		int count = prepoint.getCount()+1;
		Point poi = new Point(totalpoint,count);

		//セッションスコープにpointbeansを入れる

		session.setAttribute("point", poi);



		if(prepoint.getCount()<2) {
		//エントリー結果画面にフォワード
		RequestDispatcher dispatcher =
		request.getRequestDispatcher("/view/main.jsp");
		dispatcher.forward(request, response);
		}else {
			RequestDispatcher dispatcher =
			request.getRequestDispatcher("/view/result.jsp");
			dispatcher.forward(request, response);

		}
	}

}
