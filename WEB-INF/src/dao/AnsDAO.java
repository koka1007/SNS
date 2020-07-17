package dao;

import java.sql.SQLException;
import java.util.List;

import beans.AnsBean;
import beansmapping.AnsBeanMapping;
import dbmanager.DBManager;

public class AnsDAO {
		//ボケ選択のsql文
		public static final String ANSWER_SELECT = "SELECT * FROM ANSWER WHERE AID IN (";

		//クエリ内容の追加

		public static List<AnsBean> getAnsList(int aid1,int aid2,int aid3) throws SQLException{
			String sql = ANSWER_SELECT+"'"+aid1+"','"+aid2+"','"+aid3+"')";
			return DBManager.findAll(sql, new AnsBeanMapping());
		}

}
