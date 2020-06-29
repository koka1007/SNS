package beans;

import java.io.Serializable;

public class Point implements Serializable {
	private int point;
	private int count;


	public Point() {}
	public Point(int point,int count) {
		this.point = point;
		this.count = count;
	}

	public int getPoint() {return point;}
	public int getCount() {return count;}





}
