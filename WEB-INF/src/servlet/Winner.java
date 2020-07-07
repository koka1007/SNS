package servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.PointBean;
import beans.RankingBean;
import beans.RegistNameBean;
import dao.RankingDAO;


@WebServlet("/Winner")
public class Winner extends HttpServlet {

	private static final long serialVersionUID = 1L;
	static final String RANKING_URL = "/view/ranking.jsp";

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//2020/7/7 ランキングに登録できるように変更 加納
		try {
			//データベースに登録されている人数を取得する
			int rCount = RankingDAO.MaxNumber();

			//データベースから人数を取得できた場合のみランキング登録する
			if(rCount != -1) {
				//セッションより名前とスコアを取得する
				HttpSession session = request.getSession();
				RegistNameBean rname = (RegistNameBean)session.getAttribute("rname");
				PointBean score = (PointBean)session.getAttribute("point");

				//受け取った情報をRankingテーブルに登録(nro,rname,score)
				RankingBean rbean = new RankingBean(String.valueOf(rCount+1),rname.getName(),score.getPoint());
				RankingDAO.insert(rbean);
			}

			//Rankingテーブルからランキング情報取得
			List<RankingBean> rankingList = RankingDAO.getRankingList();
			request.setAttribute("rankingList", rankingList);

			//ranking.jspに移動
			RequestDispatcher dispatcher =request.getRequestDispatcher(RANKING_URL);
			dispatcher.forward(request, response);

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
