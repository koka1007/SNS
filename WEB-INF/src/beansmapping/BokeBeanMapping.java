package beansmapping;

import java.sql.ResultSet;
import java.sql.SQLException;

import beans.BokeBean;

public class BokeBeanMapping implements ResultSetBeanMapping {

	//クエリ内容を取得しbeanにセットする
	public BokeBean createFromResultSet(ResultSet rs) throws SQLException{

			BokeBean bbean = new BokeBean();

			bbean.setBid1(rs.getInt("BID"));
			bbean.setBcontext(rs.getString("BCONTEXT"));
			bbean.setHint(rs.getString("HINT"));
			bbean.setBattri(rs.getInt("BATTRI"));
			bbean.setBscore(rs.getInt("BSCORE"));

			return bbean;
	}

}
