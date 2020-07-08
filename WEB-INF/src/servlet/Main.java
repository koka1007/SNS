package servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.BokeBean;
import beans.PointBean;
import model.BattleLogic;

@WebServlet("/Main")
public class Main extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


	//result.jspにフォワード
	RequestDispatcher dispatcher =
	request.getRequestDispatcher("/view/result.jsp");
	dispatcher.forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//リクエストパラメータの取得
		//(2020/07/01)Windows-jからUTF-8に変更
		request.setCharacterEncoding("UTF-8");
		String style = request.getParameter("Answer");

		//(2020/7/7)古門　セッションスコープからボケ属性取得　BattleLogicへ　以下追加

		HttpSession session = request.getSession();
		List<BokeBean> bokeList = ((List<BokeBean>)session.getAttribute("bokeList"));
		BokeBean bbean = bokeList.get(0);

		//(2020/7/7)古門　以上追加


		//BattleLogicの呼び出し(2020/07/02)変数がjlだったのでblに変更
		BattleLogic bl = new BattleLogic((int)bbean.getBattri());
		 int point = bl.execution(style);

		//pointインスタンス（ポイント合計情報）の生成

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
		}else if(prepoint.getCount()==2){
			//Main.javaのdoGetへフォワード（リロードの問題解決のため）
			response.sendRedirect("/shougekinosinjin/Main");
		}else {
			//戻るを押して選択し直すとポイントが増える問題をcountが3以上の場合はTOPに戻ることで解決
			//しかし、意図せずループバグを起こしてしまう場合もあるので少し不親切かもしれない
			//話あって挙動を調整したいとおもっています。
			RequestDispatcher dispatcher =
			request.getRequestDispatcher("/index.jsp");
			dispatcher.forward(request, response);
		}
	}

}
