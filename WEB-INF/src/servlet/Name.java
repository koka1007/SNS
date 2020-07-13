package servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.AnsBean;
import beans.BokeBean;
import beans.PartnerBean;
import beans.PointBean;
import beans.RegistNameBean;
import dao.AnsDAO;
import dao.BokeDAO;
import dao.PartnerDAO;
import model.Boke;

public class Name extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//h refでdoGet（ここ）に飛んできたやつはTOP(index.jsp)にフォワードする
		RequestDispatcher dispatcher =
		request.getRequestDispatcher("index.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//リクエストパラメータの取得
		//(2020/07/01)Windows-jからUTF-8に変更
		request.setCharacterEncoding("UTF-8");
		String registName = request.getParameter("name");

		//名前の入力がなかった場合”名無田”を名前にする
		//.equals(null)はいかなる場合でもfalseを出す為書き直す20200713表田
		//if(registName.equals(null)||registName.equals("")) {
		if(registName == null||registName.equals("")) {
			registName="無名駄未知子";
		}

		//RegistNameインスタンス（ユーザー情報）の生成（コンストラクタで名前を格納）
		RegistNameBean rname = new RegistNameBean(registName);

		//セッションスコープにNamebeansを入れる
		HttpSession session = request.getSession();
		session.setAttribute("rname", rname);

		//ここでポイントのbeansを作っておく
		PointBean poi = new PointBean(0,0);
		session.setAttribute("point", poi);

		/*ボケ役を呼ぶ（三人から一人ランダムで選ぶ）
		 ここでは数字しか返さないがMainで数字によって発言に変化を
		 持たせる処理を行う。ここでは1,2,3のどれかが返ってくる*/
		Boke boke = new Boke();
		int aikataNumber = boke.aikata_select();

			try {

				//相方の1～3の番号をスコープに入れる。これで誰が相方かを決めることができる。
				List<PartnerBean> PartnerList = PartnerDAO.getPartnerList(aikataNumber);
				session.setAttribute("partnerList", PartnerList);

			} catch (SQLException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			}

			//	以下ボケ取得処理


			try {

				List<PartnerBean> partnerList = (List<PartnerBean>)session.getAttribute("partnerList");
				PartnerBean pbean = partnerList.get(0);
				//Bidを入れてBokeDAOのgetBokeListにわたす
				List<BokeBean> bokeList = BokeDAO.getBokeList(pbean.getBid());
				session.setAttribute("bokeList", bokeList);

			} catch (SQLException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
				System.out.println(e);
			}

			//以下ツッコミ取得処理

			try {

				List<PartnerBean> partnerList = (List<PartnerBean>)session.getAttribute("partnerList");
				PartnerBean pbean = partnerList.get(0);
				//Aidを入れてAnswerDAOのgetAnsListにわたす
				List<AnsBean> AnsList = AnsDAO.getAnsList(pbean.getAid());
				session.setAttribute("ansList", AnsList);

				String forward = "/view/main.jsp";
				RequestDispatcher dispatcher =
				//main.jspに移動
				request.getRequestDispatcher(forward);
				dispatcher.forward(request, response);
			} catch (SQLException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
				System.out.println(e);
			}

	}

}