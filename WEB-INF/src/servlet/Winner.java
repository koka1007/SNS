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

import beans.RankingBean;
import dao.RankingDAO;


@WebServlet("/Winner")
public class Winner extends HttpServlet {

	private static final long serialVersionUID = 1L;
	static final String RANKING_URL = "/view/ranking.jsp";

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		try {
			//rankingテーブルよりランキング情報取得
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
