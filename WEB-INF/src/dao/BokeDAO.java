package dao;

import java.sql.SQLException;
import java.util.List;

import beans.BokeBean;
import beansmapping.BokeBeanMapping;
import dbmanager.DBManager;

public class BokeDAO {

	//ボケ選択のsql文
	public static final String BOKE_SELECT = "SELECT * FROM BOKE WHERE BID IN (";

	//クエリ内容の追加

	public static List<BokeBean> getBokeList(int bid1,int bid2,int bid3) throws SQLException{
		String sql = BOKE_SELECT+"'"+bid1+"','"+bid2+"','"+bid3+"')";
		return DBManager.findAll(sql, new BokeBeanMapping());
	}
}
