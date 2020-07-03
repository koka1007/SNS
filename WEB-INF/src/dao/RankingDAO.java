package dao;

import java.sql.SQLException;
import java.util.List;

import beans.RankingBean;
import beansmapping.RankingBeanMapping;
import dbmanager.DBManager;
;

public class RankingDAO {

	public static final String RANKING_ALL_SELECT = "SELECT * FROM RANKING";

	//クエリ内容の追加
	//変数名cbean→rbeanに変更2020/07/03
	public static int insert(RankingBean rbean) throws SQLException{
		String sql = "INSERT INTO CUSTOMER" +
					 "(NO,NAME,MONEY) VALUES(" +
					 "'" + rbean.getRno() + "'," +
					 "'" + rbean.getRname() + "'," +
					 rbean.getScore() + ")";
		return DBManager.simpleUpdate(sql);
	}


	//2020/7/3 加納 getCustomerList() → getLankingList()に変更
	//sql文でデータベースからクエリ内容を取得
	public static List<RankingBean> getRankingList() throws SQLException{
		String sql = RANKING_ALL_SELECT;
		return DBManager.findAll(sql, new RankingBeanMapping());
	}
}
