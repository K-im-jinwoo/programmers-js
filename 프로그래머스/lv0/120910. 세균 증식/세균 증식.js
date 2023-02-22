function solution(n, t) {
    //n의 마리수만큼 t시간동안 2배 곱해주기
    //입력: int
    //출력: int
    //입력: n마리, t시간
    //출력: 증식한 n 마리수
    let answer = n;
    for(let i=1; i<=t; i++) {
        answer = answer * 2
    }
    return answer;
}