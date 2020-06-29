package beans;

import java.io.Serializable;

public class RegistName implements Serializable {
	private String name;


	public RegistName() {}
	public RegistName(String registName) {
		this.name = registName;
	}

	public String getName() {return name;}
}
