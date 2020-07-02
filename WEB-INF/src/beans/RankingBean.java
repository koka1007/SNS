package beans;

public class RankingBean {

	private String rno;
	private String rname;
	private int score;

	public RankingBean() {}

	public RankingBean(String rno,String rname,int score) {
		this.rno = rno;
		this.score = score;
		this.rname = rname;
	}

	public String getRno() {
		return rno;
	}
	public void setRno(String rno) {
		this.rno = rno;
	}
	public String getRname() {
		return rname;
	}
	public void setRname(String rname) {
		this.rname = rname;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
}
