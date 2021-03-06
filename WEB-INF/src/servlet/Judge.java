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
import model.ResultJudgeLogic;


@WebServlet("/Judge")
public class Judge extends HttpServlet {
	private static final long serialVersionUID = 1L;


	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//Pointから得点を受け取り合格基準を達成しているか判定する。
		HttpSession session = request.getSession();
		//(2020/07/02)変数名がprepointだと変なのでresultPointに変更。
		PointBean resultPoint = (PointBean)session.getAttribute("point");
		ResultJudgeLogic rjl = new ResultJudgeLogic();
		boolean result = rjl.judge(resultPoint.getPoint());

		//より省略された形へ書き直し20200713表田
		//勝ちならtrue負けならfalseをResultJudgeLogic.judgeから受け取っている
		RequestDispatcher dispatcher;
		if(result) {
			 dispatcher = request.getRequestDispatcher("/view/win.jsp");
			//dispatcher.forward(request, response);
		}else {
			 dispatcher = request.getRequestDispatcher("/view/lose.jsp");
			//dispatcher.forward(request, response);
		}
		dispatcher.forward(request, response);

	}

}
