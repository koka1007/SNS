package beans;

import java.io.Serializable;

public class AnsBean implements Serializable{
	//public class AnsBean7/29表田implements Serializableを追加
	private int aid1;
	private int aid2;
	private int aid3;
	private String sanswer;
	private String nanswer;
	private String tanswer;
	private int ascore;

	public AnsBean() {}

	public AnsBean(int aid1,int aid2,int aid3,String sanswer,String nanswer,String tanswer,int ascore) {
		this.aid1=aid1;
		this.aid2=aid2;
		this.aid3=aid3;
		this.sanswer=sanswer;
		this.nanswer=nanswer;
		this.tanswer=tanswer;
		this.ascore=ascore;

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

	public String getSanswer() {
		return sanswer;
	}

	public void setSanswer(String sanswer) {
		this.sanswer = sanswer;
	}

	public String getNanswer() {
		return nanswer;
	}

	public void setNanswer(String nanswer) {
		this.nanswer = nanswer;
	}



	public String getTanswer() {
		return tanswer;
	}

	public void setTanswer(String tanswer) {
		this.tanswer = tanswer;
	}

	public int getAscore() {
		return ascore;
	}

	public void setAscore(int ascore) {
		this.ascore = ascore;
	}
}



