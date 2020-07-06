package beansmapping;

import java.sql.ResultSet;
import java.sql.SQLException;

import beans.AnsBean;

public class AnsBeanMapping implements ResultSetBeanMapping {

	public AnsBean createFromResultSet(ResultSet rs) throws SQLException{

		//クエリ内容を取得しbeanにセットする

		AnsBean abean = new AnsBean();

		abean.setAid(rs.getInt("AID"));
		abean.setSanswer(rs.getString("SANSWER"));
		abean.setNanswer(rs.getString("NANSWER"));
		abean.setTanswer(rs.getString("TANSWER"));
		abean.setAscore(rs.getInt("ASCORE"));

		return abean;
	}

}
