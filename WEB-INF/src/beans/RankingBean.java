package beans;

import java.io.Serializable;

public class RankingBean implements Serializable{
	//public class RankingBean7/29表田implements Serializableを追加
	//ランキングナンバー(Column名:RNO)
	private String rno;
	//ランキング用ネーム(Column名:RNAME)
	private String rname;
	//漫才の特典(Column名:SCORE)
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
