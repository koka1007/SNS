package beans;

public class PartnerBean {

	private int pid;
	private String pname;
	private int bid;
	private int aid;



	public PartnerBean() {}



	public PartnerBean(int pid, String pname, int bid, int aid) {
		this.pid = pid;
		this.pname = pname;
		this.bid = bid;
		this.aid = aid;
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



	public int getBid() {
		return bid;
	}



	public void setBid(int bid) {
		this.bid = bid;
	}



	public int getAid() {
		return aid;
	}



	public void setAid(int aid) {
		this.aid = aid;
	};





}
