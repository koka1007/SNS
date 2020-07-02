package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.PointBean;
import model.BattleLogic;

@WebServlet("/Main")
public class Main extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//リクエストパラメータの取得
		//(2020/07/01)Windows-jからUTF-8に変更
		request.setCharacterEncoding("UTF-8");
		String style = request.getParameter("janken");

		//BattleLogicの呼び出し(2020/07/02)変数がjlだったのでblに変更
		BattleLogic bl = new BattleLogic();
		 int point = bl.execution(style);

		//pointインスタンス（ポイント合計情報）の生成
		HttpSession session = request.getSession();
		PointBean prepoint = (PointBean)session.getAttribute("point");
		//前回までのポイントの合計と今回のポイントを足す
		int totalpoint = prepoint.getPoint() + point;
		//前回までのカウントに1を足す
		int count = prepoint.getCount()+1;
		PointBean poi = new PointBean(totalpoint,count);

		//セッションスコープにpointbeansを入れる
		session.setAttribute("point", poi);



		if(prepoint.getCount()<2) {
		//main.jspにフォワード
			RequestDispatcher dispatcher =
			request.getRequestDispatcher("/view/main.jsp");
			dispatcher.forward(request, response);
		}else {
			//result.jspにフォワード
			RequestDispatcher dispatcher =
			request.getRequestDispatcher("/view/result.jsp");
			dispatcher.forward(request, response);

		}
	}

}
