package beansmapping;

import java.sql.ResultSet;
import java.sql.SQLException;

import beans.RankingBean;

public class RankingBeanMapping implements ResultSetBeanMapping<RankingBean>{

	//クエリ内容を取得しbeanにセットする
	//変数名cbean→rbeanに変更2020/07/03
	@Override
	public RankingBean createFromResultSet(ResultSet rs) throws SQLException{
		RankingBean rbean = new RankingBean();
		rbean.setRno(rs.getString("RID"));
		rbean.setRname(rs.getString("RNAME"));
		rbean.setScore(rs.getInt("SCORE"));
		return rbean;
	}
}
