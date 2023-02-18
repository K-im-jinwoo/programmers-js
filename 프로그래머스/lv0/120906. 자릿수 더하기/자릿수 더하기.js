function solution(n) {
    // 정수 n의 각 자리 숫자의 합을 반환
    // 입력 : int
    // 출력 : int
    // 입력값 : 정수
    // 출력값 : 각 자리 숫자를 더한 합
    const strN = String(n)
    let answer = 0;
    for (let i = 0; i < strN.length; i++) {
        answer += Number(strN[i])
    }
    return answer;
}