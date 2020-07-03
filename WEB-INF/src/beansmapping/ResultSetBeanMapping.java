package beansmapping;

import java.sql.ResultSet;
import java.sql.SQLException;

//BeanMapping用のインターフェース
public interface ResultSetBeanMapping<T> {
	public T createFromResultSet(ResultSet rs) throws SQLException;
}
