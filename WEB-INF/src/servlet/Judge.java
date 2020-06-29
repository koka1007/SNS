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
import model.ResultJudgeLogic;


@WebServlet("/Judge")
public class Judge extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		Point prepoint = (Point)session.getAttribute("point");
		ResultJudgeLogic rjl = new ResultJudgeLogic();
		boolean result = rjl.judge(prepoint.getPoint());

		if(result) {
			RequestDispatcher dispatcher =
			request.getRequestDispatcher("/view/win.jsp");
			dispatcher.forward(request, response);
		}else {
			RequestDispatcher dispatcher =
			request.getRequestDispatcher("/view/lose.jsp");
			dispatcher.forward(request, response);
		}

	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
