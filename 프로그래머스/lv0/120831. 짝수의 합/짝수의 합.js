function solution(n) {
    // 정수 n 이하의 짝수를 모두 더하기
    // 입력: int
    // 출력: int
    // 입력 값: 정수 n
    // 출력 값: n이하의 짝수를 더한 값
    //짝수는 2로 나눴을때 0으로 딱 떨어진다. -> 2 % 2 === 0
    //정수 n 이하의 숫자를 뽑기
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i%2 === 0) {
            sum += i
        }
    }
    return sum
}