package dao;

import java.sql.SQLException;
import java.util.List;

import beans.RankingBean;
import beansmapping.RankingBeanMapping;
import dbmanager.DBManager;
;

public class RankingDAO {

	//得点をランキングに登録する
	public static final String RANKING_INSERT = "INSERT INTO RANKING VALUES(";

	//現在ランキングテーブルに登録されている人数取得
	public static final String RANKING_COUNT = "SELECT COUNT(*) FROM RANKING";

	//得点順に上位10名を呼び出す。得点が同率の場合は登録が早い順に順位付けする。
	public static final String RANKING_ALL_SELECT =
				"SELECT * FROM RANKING ORDER BY SCORE DESC,RID ASC OFFSET 0 LIMIT 10;";


	//クエリ内容の追加
	//2020/07/03 変数名cbean→rbeanに変更 古門
	//2020/07/07 RANKING_INSERTを使ってクエリを定義 加納
	public static void insert(RankingBean rbean) throws SQLException{
		String sql = RANKING_INSERT + "'" +
					 rbean.getRno() + "','" +
					 rbean.getRname() + "'," +
					 rbean.getScore() + ")";
		DBManager.simpleInsert(sql);
	}

	//2020/7/3 加納 getCustomerList() → getLankingList()に変更
	//sql文でデータベースからクエリ内容を取得
	public static List<RankingBean> getRankingList() throws SQLException{
		String sql = RANKING_ALL_SELECT;
		return DBManager.findAll(sql, new RankingBeanMapping());
	}

	//2020/7/7 ランキングデータベースに登録している人数取得(取得に失敗した場合 -1を返す) 加納
	public static int MaxNumber() {
		try {
			return DBManager.Count(RANKING_COUNT);
		} catch (SQLException e) {
			return -1;
		}
	}
}
