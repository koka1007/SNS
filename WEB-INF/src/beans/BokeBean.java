package beans;

import java.io.Serializable;

public class BokeBean implements Serializable{
	//public class BokeBean7/29表田implements Serializableを追加
	private int bid1;
	private int bid2;
	private int bid3;
	private String bcontext;
	private String hint;
	private int battri;
	private int bscore;

	public BokeBean() {}

	public BokeBean(int bid1,int bid2,int bid3,String bcontext,String hint,int battri,int bscore) {
		this.bid1=bid1;
		this.bid2=bid2;
		this.bid3=bid3;
		this.battri=battri;
		this.hint=hint;
		this.battri=battri;
		this.bscore=bscore;
	}



	public int getBid1() {
		return bid1;
	}

	public void setBid1(int bid1) {
		this.bid1 = bid1;
	}

	public int getBid2() {
		return bid2;
	}

	public void setBid2(int bid2) {
		this.bid2 = bid2;
	}

	public int getBid3() {
		return bid3;
	}

	public void setBid3(int bid3) {
		this.bid3 = bid3;
	}

	public String getBcontext() {
		return bcontext;
	}

	public void setBcontext(String bcontext) {
		this.bcontext = bcontext;
	}

	public String getHint() {
		return hint;
	}

	public void setHint(String hint) {
		this.hint = hint;
	}

	public int getBattri() {
		return battri;
	}

	public void setBattri(int battri) {
		this.battri = battri;
	}

	public int getBscore() {
		return bscore;
	}

	public void setBscore(int bscore) {
		this.bscore = bscore;
	}
}


