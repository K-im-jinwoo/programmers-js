function solution(hp) {
    // 최소한의 병력으로 개미 구성하기
    // 입력 : int
    // 출력 : int
    // 입력 값: hp , 장군개미,병정개미,일개미
    // 출력 값 : 최소한의 병력
    // ex) 1 -> 일개미 1 , 5 -> 장군개미 1, 16 -> 장군개미 3, 일개미 1 
    // hp가 5보다 같거나 큰 경우 5로 나누고, 3보다 같거나 큰 경우 3으로 나누고 , 나머지는 그대로 return 해주기 
    let cnt = 0;
        if(hp >= 5) {
            cnt = cnt + Math.floor(hp / 5)
            hp = hp - Math.floor(hp/5) * 5
        }
         if (hp >= 3) {
            cnt = cnt + Math.floor(hp / 3)
            hp = hp - Math.floor(hp /3 ) * 3
        }
        if(hp < 3){
            cnt = cnt + Math.floor(hp/1)
            hp = hp - Math.floor(hp / 1)*1
        }
        return cnt
}