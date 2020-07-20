package beansmapping;

import java.sql.ResultSet;
import java.sql.SQLException;

import beans.PartnerBean;

public class PartnerBeanMapping implements ResultSetBeanMapping<PartnerBean>{

	//クエリ内容を取得しbeanにセットする
	public PartnerBean createFromResultSet(ResultSet rs) throws SQLException{
		PartnerBean pbean = new PartnerBean();
		pbean.setPid(rs.getInt("PID"));
		pbean.setPname(rs.getString("PNAME"));
		pbean.setBid1(rs.getInt("BID1"));
		pbean.setBid2(rs.getInt("BID2"));
		pbean.setBid3(rs.getInt("BID3"));
		pbean.setAid1(rs.getInt("AID1"));
		pbean.setAid2(rs.getInt("AID2"));
		pbean.setAid3(rs.getInt("AID3"));
		pbean.setPscore(rs.getInt("PSCORE"));
		return pbean;
	}
}
