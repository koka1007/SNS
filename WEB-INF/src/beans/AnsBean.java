package beans;

public class AnsBean {
	private int aid;
	private String sanswer;
	private String nanswer;
	private String tanswer;
	private int ascore;

	public AnsBean() {}

	public AnsBean(int aid,String sanswer,String nanswer,String tanswer,int ascore) {
		this.aid=aid;
		this.sanswer=sanswer;
		this.nanswer=nanswer;
		this.tanswer=tanswer;
		this.ascore=ascore;

	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
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



