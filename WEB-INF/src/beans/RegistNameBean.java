package beans;

import java.io.Serializable;

public class RegistNameBean implements Serializable {
	private String name;


	public RegistNameBean() {}
	public RegistNameBean(String registName) {
		this.name = registName;
	}

	public String getName() {return name;}
}
