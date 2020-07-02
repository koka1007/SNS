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

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String forwardURL = null;
		try {
			List<RankingBean> customerList = RankingDAO.getCustomerList();
			request.setAttribute("customerList", customerList);
			forwardURL = "/view/ranking.jsp";

			RequestDispatcher dispatcher =
				//ranking.jspに移動
				request.getRequestDispatcher(forwardURL);
				dispatcher.forward(request, response);
		} catch (SQLException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
			System.out.println(e);
		}
	}
}
