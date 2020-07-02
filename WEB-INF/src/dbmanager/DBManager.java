package dbmanager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import beansmapping.ResultSetBeanMapping;

public class DBManager {

	//DBの種類指定
	static final String DB_TYPE = "org.postgresql.Driver";
	//DBのパス指定
	static final String DB_PATH = "jdbc:postgresql://localhost:5432/SNS";
	//DBのユーザー名
	static final String DB_USER = "postgres";
	//DBのパスワード設定
	static final String DB_PASSWORD = "postgres";

	//DB接続を行う
	public static Connection getConnection() throws SQLException{
		try {
			Class.forName(DB_TYPE);
			Connection con = DriverManager.getConnection(DB_PATH,DB_USER,DB_PASSWORD);
			return con;

		}catch(ClassNotFoundException e) {
			throw new SQLException(e);
		}
	}

	//select文用のメソッド
	//指定されたクエリを発行する
	//戻り値(List)に、対応DAOのSelect文を取得
	public static <T> List<T> findAll(String sql,ResultSetBeanMapping<T> mapping) throws SQLException{
		Connection con 	= null;
		Statement smt 	= null;

		//DBに接続しクエリを発行
		try {
			con = getConnection();
			smt = con.createStatement();
			ResultSet rs = smt.executeQuery(sql);

			List<T> list = new ArrayList<T>();

			while(rs.next()) {
				T bean = mapping.createFromResultSet(rs);
				list.add(bean);
			}
			return list;
		}
		finally {
			//Statementが存在する場合smtを閉じる
			if(smt != null) {
				try {
					smt.close();
				}catch(SQLException e) {
					e.printStackTrace();
				}
			}
			//Connectionがつながっている場合conを閉じる
			if(con != null) {
				try {
					con.close();
				}catch(SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}


	//update用のメソッド
	//指定されたクエリを発行する
	//戻り値(int)は、クエリ実行数を取得
	public static int simpleUpdate(String sql) throws SQLException{
		Connection con 	= null;
		Statement smt 	= null;

		//DBに接続しクエリを発行
		try {
			con = getConnection();
			smt = con.createStatement();
			return smt.executeUpdate(sql);
		}
		finally {
			//Statementが存在する場合smtを閉じる
			if(smt != null) {
				try {
					smt.close();
				}catch(SQLException e) {
					e.printStackTrace();
				}
			}
			//Connectionがつながっている場合conを閉じる
			if(con != null) {
				try {
					con.close();
				}catch(SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}

