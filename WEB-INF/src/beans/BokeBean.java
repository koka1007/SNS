package beans;

public class BokeBean {

	private int bid;
	private String bcontext;
	private String hint;
	private int battri;
	private int bscore;

	public BokeBean() {}

	public BokeBean(int bid,String bcontext,String hint,int battri,int bscore) {
		this.bid=bid;
		this.battri=battri;
		this.hint=hint;
		this.battri=battri;
		this.bscore=bscore;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
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


