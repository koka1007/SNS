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
	static final String RANKING_URL 	= "/view/ranking.jsp";
	static final String INDEX_URL 	= "index.jsp";

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//2020/07/07 ランキングに登録できるように変更 加納
		//2020/07/14 index.jspよりランキング画面に遷移できるよう変更 加納
		//2020/07/16 どの画面から飛んでもランキング登録できていなかったため変更 加納
		try {
			//セッションから前ページのURL取得
			HttpSession session = request.getSession();
			session.setAttribute("referer", request.getHeader("REFERER"));
			String referer_url = (String)session.getAttribute("referer");

			//データベースに登録されている人数を取得する
			int rCount = RankingDAO.MaxNumber();

			//2020/07/16 下記の通り変更 加納
			//リロードによるデータの二重登録防止(win画面からのみ登録可能)
			if(rCount != -1 && (false==referer_url.contains(INDEX_URL)) &&
					session.getAttribute("rname") != null && session.getAttribute("point") != null) {

				//セッションより名前とスコアを取得する
				RegistNameBean rname 	= (RegistNameBean)session.getAttribute("rname");
				PointBean score 		= (PointBean)session.getAttribute("point");

				//受け取った情報をRankingテーブルに登録(nro,rname,score)
				RankingBean rbean = new RankingBean(String.valueOf(rCount+1),rname.getName(),score.getPoint());
				RankingDAO.insert(rbean);

				//登録が出来たらセッションからポイントと名前を削除
				session.removeAttribute("point");
				session.removeAttribute("rname");
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
