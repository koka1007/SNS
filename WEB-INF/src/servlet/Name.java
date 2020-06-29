package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Aikata;
import beans.Point;
import beans.RegistName;
import model.Boke;

public class Name extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//h refでdoGet（ここ）に飛んできたやつはTOPにフォワードする
		RequestDispatcher dispatcher =
		request.getRequestDispatcher("index.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//リクエストパラメータの取得
		request.setCharacterEncoding("Windows-31j");
		String registName = request.getParameter("name");

		//RegistNameインスタンス（ユーザー情報）の生成（コンストラクタで名前を格納）
		RegistName rname = new RegistName(registName);

		//セッションスコープにNamebeansを入れる
		HttpSession session = request.getSession();
		session.setAttribute("rname", rname);

		//ここでポイントのビーンズを作っておく
		Point poi = new Point(0,0);
		session.setAttribute("point", poi);

		/*ボケ役を呼ぶ（三人から一人ランダムで選ぶ）
		 ここでは数字しか返さないがMainで数字によって発言に変化を
		 持たせる処理を行う。ここでは1,2,3のどれかが返ってくる*/
		Boke boke = new Boke();
		int aikataNumber = boke.choice();

		//相方の1～3の番号をスコープに入れる。これで誰が相方かを決めることができる。
		Aikata aikata = new Aikata(aikataNumber);
		session.setAttribute("aikata", aikata);


		//エントリー結果画面にフォワード
		RequestDispatcher dispatcher =
		request.getRequestDispatcher("/view/main.jsp");
		dispatcher.forward(request, response);
	}

}