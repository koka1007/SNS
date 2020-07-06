package dao;

import java.sql.SQLException;
import java.util.List;

import beans.AnsBean;
import beansmapping.AnsBeanMapping;
import dbmanager.DBManager;

public class AnsDAO {
		//ボケ選択のsql文
		public static final String ANSWER_SELECT = "SELECT * FROM ANSWER WHERE AID=";

		//クエリ内容の追加

		public static List<AnsBean> getAnsList(int aid) throws SQLException{
			String sql = ANSWER_SELECT+"'"+aid+"'";
			return DBManager.findAll(sql, new AnsBeanMapping());
		}

}
