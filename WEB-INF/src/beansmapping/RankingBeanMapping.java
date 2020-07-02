package beansmapping;

import java.sql.ResultSet;
import java.sql.SQLException;

import beans.RankingBean;

public class RankingBeanMapping implements ResultSetBeanMapping<RankingBean>{

	public RankingBean createFromResultSet(ResultSet rs) throws SQLException{
		RankingBean cbean = new RankingBean();

		cbean.setRno(rs.getString("RID"));
		cbean.setRname(rs.getString("RNAME"));
		cbean.setScore(rs.getInt("SCORE"));

		return cbean;
	}
}
