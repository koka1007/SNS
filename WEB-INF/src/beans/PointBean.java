package beans;

import java.io.Serializable;

public class PointBean implements Serializable {
	private int point;
	private int count;


	public PointBean() {}
	public PointBean(int point,int count) {
		this.point = point;
		this.count = count;
	}

	public int getPoint() {return point;}
	public int getCount() {return count;}





}
