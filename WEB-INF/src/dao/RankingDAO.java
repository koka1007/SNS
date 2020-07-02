package dao;

import java.sql.SQLException;
import java.util.List;

import beans.RankingBean;
import beans.RankingBeanMapping;
import dbmanager.DBManager;
;

public class RankingDAO {

	public static final String RANKING_ALL_SELECT = "SELECT * FROM RANKING";

	//クエリ内容の追加
	public static int insert(RankingBean cbean) throws SQLException{
		String sql = "INSERT INTO CUSTOMER" +
					 "(NO,NAME,MONEY) VALUES(" +
					 "'" + cbean.getRno() + "'," +
					 "'" + cbean.getRname() + "'," +
					 cbean.getScore() + ")";
		return DBManager.simpleUpdate(sql);
	}

	public static List<RankingBean> getCustomerList() throws SQLException{
		String sql = RANKING_ALL_SELECT;
		return DBManager.findAll(sql, new RankingBeanMapping());
	}
}
