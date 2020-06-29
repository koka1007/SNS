package model;

import java.util.Random;

public class Boke {

	public int choice() {

		Random random = new Random();
		int randomValue = random.nextInt(3);
		int aikataNumber = randomValue+1;
		return aikataNumber;

	}

}
