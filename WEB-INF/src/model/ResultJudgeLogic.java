package model;

public class ResultJudgeLogic {

	public boolean judge(int point) {
		//点数が目標に到達しているかを判定している。
		boolean result;
		if(point>20) {
			result=true;
		}else {
			result=false;
		}

		return result;

	}

}
