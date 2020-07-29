package beans;

import java.io.Serializable;

public class PartnerBean implements Serializable{
	//public class PartnerBean7/29表田implements Serializableを追加
	private int pid;
	private String pname;
	private int bid1;
	private int bid2;
	private int bid3;
	private int aid1;
	private int aid2;
	private int aid3;
	private int pscore;





	public PartnerBean() {}

	//2020/07/20 古門　以下　コンストラクタに相方倍率をセット、ゲッターセッターを作成

	public PartnerBean(int pid, String pname, int bid1, int bid2, int bid3, int aid1, int aid2, int aid3, int pscore) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.bid1 = bid1;
		this.bid2 = bid2;
		this.bid3 = bid3;
		this.aid1 = aid1;
		this.aid2 = aid2;
		this.aid3 = aid3;
		this.pscore = pscore;
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



	public int getAid1() {
		return aid1;
	}



	public void setAid1(int aid1) {
		this.aid1 = aid1;
	}



	public int getAid2() {
		return aid2;
	}



	public void setAid2(int aid2) {
		this.aid2 = aid2;
	}



	public int getAid3() {
		return aid3;
	}



	public void setAid3(int aid3) {
		this.aid3 = aid3;
	}



	public int getPid() {
		return pid;
	}



	public void setPid(int pid) {
		this.pid = pid;
	}



	public String getPname() {
		return pname;
	}



	public void setPname(String pname) {
		this.pname = pname;
	}



	public int getPscore() {
		return pscore;
	}



	public void setPscore(int pscore) {
		this.pscore = pscore;
	}
	//2020/07/20 古門　以上　コンストラクタに相方倍率をセット、ゲッターセッターを作成

}
