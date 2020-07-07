package model;

public class BattleLogic {
	//古門　2020/07/06　以下ボケ属性を定義、コンストラクタでセット

	private int battri;

	public BattleLogic(int battri){
		this.battri = battri;
	}

	//古門　2020/07/06　以上ボケ属性を定義、コンストラクタでセット


	public int execution(String style) {
		//古門　2020/07/06　不要コードのため以下コメントアウト
		//return 10;
		//古門　2020/07/06　不要コードのため以上コメントアウト



		//古門　2020/07/06バトル時　以下得点計算の変更

		switch(battri){
		case 1:
			if(style.equals("A")) {
				return 10;
			}else if(style.equals("B")) {
				return 5;
			}else {
				return 0;
			}

		case 2:
			if(style.equals("A")) {
				return 10;
			}else if(style.equals("C")) {
				return 5;
			}else {
				return 0;
			}

		case 3:
			if(style.equals("B")) {
				return 10;
			}else if(style.equals("A")) {
				return 5;
			}else {
				return 0;
			}

		case 4:
			if(style.equals("B")) {
				return 10;
			}else if(style.equals("C")) {
				return 5;
			}else {
				return 0;
			}

		case 5:
			if(style.equals("C")) {
				return 10;
			}else if(style.equals("A")) {
				return 5;
			}else {
				return 0;
			}

		case 6:
			if(style.equals("C")) {
				return 10;
			}else if(style.equals("B")) {
				return 5;
			}else {
				return 0;
			}
		default:
			return 0;
		}

		//古門　2020/07/06バトル時　以上得点計算の変更


	}

}
