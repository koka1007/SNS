package dao;

import java.sql.SQLException;
import java.util.List;

import beans.PartnerBean;
import beansmapping.PartnerBeanMapping;
import dbmanager.DBManager;
;

public class PartnerDAO {

//	相方選択のsql文
	public static final String PARTNER_ALL_SELECT = "SELECT * FROM PARTNER WHERE PID =";


//	引数のIDで相方テーブルからクエリ内容を取り出す
	public static List<PartnerBean> getCustomerList(int aikata) throws SQLException{
		String sql = PARTNER_ALL_SELECT +"'"+aikata+"'";
		return DBManager.findAll(sql, new PartnerBeanMapping());
	}
}
