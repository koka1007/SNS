package model;

import java.util.Random;

public class Boke {
	//	(2020/07/02)メソッド名をchoice()からaikata_select()に変更
	public int aikata_select() {
		//ランダムでボケ役を生成
		Random random = new Random();
		int randomValue = random.nextInt(3);
		int aikataNumber = randomValue+1;
		return aikataNumber;

	}

}
