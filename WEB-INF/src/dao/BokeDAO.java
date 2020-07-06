package dao;

import java.sql.SQLException;
import java.util.List;

import beans.BokeBean;
import beansmapping.BokeBeanMapping;
import dbmanager.DBManager;

public class BokeDAO {

	//ボケ選択のsql文
	public static final String BOKE_SELECT = "SELECT * FROM BOKE WHERE BID=";

	//クエリ内容の追加

	public static List<BokeBean> getBokeList(int bid) throws SQLException{
		String sql = BOKE_SELECT+"'"+bid+"'";
		return DBManager.findAll(sql, new BokeBeanMapping());
	}
}
