function solution(n) {
    // 정수가 제곱수면 1 아니면 2
    //입력: int
    //출력: int
    //입력값: 정수 n
    //출력값: 1또는 2
    let answer = 0;
    for(let i=1; ;i++) {
        answer = i * i
        if(answer > n) {
            return 2
        }
        if(answer === n) {
            return 1
        }
    }
    
    return answer;
}