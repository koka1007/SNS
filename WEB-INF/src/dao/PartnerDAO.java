package dao;

import java.sql.SQLException;
import java.util.List;

import beans.PartnerBean;
import beans.PartnerBeanMapping;
import dbmanager.DBManager;
;

public class PartnerDAO {

	public static final String PARTNER_ALL_SELECT = "SELECT * FROM PARTNER WHERE PID =";

//	//クエリ内容の追加
//	public static int insert(RankingBean cbean) throws SQLException{
//		String sql = "INSERT INTO CUSTOMER" +
//					 "(NO,NAME,MONEY) VALUES(" +
//					 "'" + cbean.getRno() + "'," +
//					 "'" + cbean.getRname() + "'," +
//					 cbean.getScore() + ")";
//		return DBManager.simpleUpdate(sql);
//	}

	public static List<PartnerBean> getCustomerList(int aikata) throws SQLException{
		String sql = PARTNER_ALL_SELECT +"'"+aikata+"'";
		return DBManager.findAll(sql, new PartnerBeanMapping());
	}
}
