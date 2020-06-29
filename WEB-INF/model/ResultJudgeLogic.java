package model;

public class ResultJudgeLogic {

	public boolean judge(int point) {

		boolean result;
		if(point>20) {
			result=true;
		}else {
			result=false;
		}

		return result;

	}

}
