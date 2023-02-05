function solution(n) {
    // 두 숫자의 곱이 n인 자연수 순서쌍의 개수구하기
    // 입력 : int
    // 출력 : int
    // 입력 값: 자연수 n
    // 출력 값: 쌍(a,b)
    var answer = 0;
    let cnt = 1;
    while(cnt <= n) {
        if (n % cnt ===0) {
            answer += 1
        }
        cnt += 1
    }
    return answer;
}