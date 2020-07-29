package servlet;

import java.io.IOException;
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

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//h refでdoGet（ここ）に飛んできたやつはTOP(index.jsp)にフォワードする
		RequestDispatcher dispatcher =
		request.getRequestDispatcher("index.jsp");
		dispatcher.forward(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		//リクエストパラメータの取得
		//(2020/07/01)Windows-jからUTF-8に変更
		request.setCharacterEncoding("UTF-8");
		String registName = request.getParameter("name");

		//名前の入力がなかった場合”名無田”を名前にする
		//.equals(null)はいかなる場合でもfalseを出す為書き直す20200713表田
		//if(registName.equals(null)||registName.equals("")) {
		if(registName == null || registName.equals("")) {
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

			//以下ボケ取得処理
			//List<PartnerBean> partnerList = (List<PartnerBean>)session.getAttribute("partnerList");
			PartnerBean pbean = PartnerList.get(0);

			//Bid1～3を配列に格納
			int bokeNum[] = {pbean.getBid1(),pbean.getBid2(),pbean.getBid3()};

			//for文で配列の値でBokeDAOのgetBokeListに渡し、配列の番号でセッションスコープにセット
			for(int i = 0 ; i < bokeNum.length;i++){
				List<BokeBean> bokeList = BokeDAO.getBokeList(bokeNum[i]);
				bokeList.get(0).setBcontext(use_name_boke(bokeList.get(0).getBcontext(),registName));
				session.setAttribute("bokeList"+i, bokeList);

				//以下ツッコミ取得処理
				//Aid1~3を入れて配列に格納
				int ansNum[] = {pbean.getAid1(),pbean.getAid2(),pbean.getAid3()};
				//for文で配列の値でAnsDAOのgetAnsListに渡し、配列の番号でセッションスコープにセット
				//for内の変数iをjに変更7/29表田
				for(int j = 0 ; j < ansNum.length;j++) {
					List<AnsBean> AnsList = AnsDAO.getAnsList(ansNum[j]);
					session.setAttribute("ansList"+j, AnsList);
				}

				String forward = "/view/main.jsp";
				RequestDispatcher dispatcher =
				//main.jspに移動
				request.getRequestDispatcher(forward);
				dispatcher.forward(request, response);


			}

		//} catch (SQLException e) { 7/29全てのエラーをキャッチするために変更
			} catch (Exception e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
			System.out.println(e);
		}

	}

	String use_name_boke(String bokeSTR,String name) {
		//Stringの宣言
		String split[] 		= null;
		String split1[] 	= null;
		String str  		= null;
		//ボケに名前を入れる
		str = bokeSTR;
		//指定した文字列が存在するか確認
		if (str.contains("<%=registName.getName()%>"))
		{
			split	= str.split("<");
			split1 	= split[1].split(">");
			str 	= split[0] + name + split1[1];
		}
		return str;
	}



}