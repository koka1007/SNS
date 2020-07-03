package beans;

import java.sql.ResultSet;
import java.sql.SQLException;

import dbmanager.ResultSetBeanMapping;

public class PartnerBeanMapping implements ResultSetBeanMapping<PartnerBean>{

	//	クエリ内容を取得しbeanにセットする
	public PartnerBean createFromResultSet(ResultSet rs) throws SQLException{
		PartnerBean pbean = new PartnerBean();
		pbean.setPid(rs.getInt("PID"));
		pbean.setPname(rs.getString("PNAME"));
		pbean.setBid(rs.getInt("BID"));
		pbean.setAid(rs.getInt("AID"));

		return pbean;
	}
}
