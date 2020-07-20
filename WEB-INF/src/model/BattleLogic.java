package model;

public class BattleLogic {
	//古門　2020/07/06　以下ボケ属性を定義、コンストラクタでセット
	//古門　2020/07/20　以下得点倍率のコンストラクタを作成、セットを追加

	private int battri;
	private int score;




	public BattleLogic(int battri , double score[]){
		this.battri = battri;
		double totalScore = 0;
		for(int i= 0;i<score.length;i++) {
			totalScore+=score[i];
		}
		this.score = (int)totalScore;
	}

	//古門　2020/07/06　以上ボケ属性を定義、コンストラクタでセット
	//古門　2020/07/20　以下得点倍率のコンストラクタを作成、セットを追加

	public int execution(String style) {
		//古門　2020/07/06　不要コードのため以下コメントアウト
		//return 10;
		//古門　2020/07/06　不要コードのため以上コメントアウト



		//古門　2020/07/06バトル時　以下得点計算の変更
		//古門　2020/07/20バトル時の相方得点倍率　以下追加

		switch(battri){
		case 1:
			if(style.equals("A")) {
				return 2 * score;
			}else if(style.equals("B")) {
				return 1 * score;
			}else {
				return 0 * score;
			}

		case 2:
			if(style.equals("A")) {
				return 2 * score;
			}else if(style.equals("C")) {
				return 1 * score;
			}else {
				return 0 * score;
			}

		case 3:
			if(style.equals("B")) {
				return 2 * score;
			}else if(style.equals("A")) {
				return 1 * score;
			}else {
				return 0 * score;
			}

		case 4:
			if(style.equals("B")) {
				return 2 * score;
			}else if(style.equals("C")) {
				return 1 * score;
			}else {
				return 0 * score;
			}

		case 5:
			if(style.equals("C")) {
				return 2 * score;
			}else if(style.equals("A")) {
				return 1 * score;
			}else {
				return 0 * score;
			}

		case 6:
			if(style.equals("C")) {
				return 2 * score;
			}else if(style.equals("B")) {
				return 1 * score;
			}else {
				return 0 * score;
			}
		default:
			return 0;
		}

		//古門　2020/07/06バトル時　以上得点計算の変更
		//古門　2020/07/20 バトル時の相方得点倍率　以上追加

	}

}
