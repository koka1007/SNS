package model;

public class ResultJudgeLogic {

	public boolean judge(int point) {
		//点数が目標に到達しているかを判定している。
		boolean result;

		if(point>50) {
		//if(point>20) { 勝利に必要なpointを20から50に変更7/29表田
			result=true;
		}else {
			result=false;
		}

		return result;

	}

}
