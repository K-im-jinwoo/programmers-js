function solution(n, k) {
    var answer = 0;
    // 양꼬치 10인분 일때 음료수 1개가 공짜 그렇다면 양꼬치 n인분과 음료수 k개의 가격구하기
    // 입력 : int
    // 출력 : int
    // 입력 값: 음료수 k개와 양꼬치 n인분 (양꼬치 1인분 12000원, 음료수 1개 2000원)
    // 출력 값: 총 가격 
    //ex) 15인분 -> 10을 나누면 몫은 -> 1.5 즉, 10 ~ 19인분 1 ~ 1.9 몫의 나머지 버리기
    //ex) 20인분 ~ 29인분 -> 2 ~ 2.9 
    let drink = 0;
    if (k <= Math.floor(n / 10)) {
        drink = 0;
        return n * 12000
    } else {
        drink = k - Math.floor(n / 10)
        return n*12000 + drink*2000
    }
    
    
    return answer;
}