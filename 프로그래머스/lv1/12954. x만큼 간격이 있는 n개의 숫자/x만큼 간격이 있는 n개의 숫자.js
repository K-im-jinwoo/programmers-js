function solution(x, n) {
    // 정수 x와 자연수 n을 입력받는다. 정수 x만큼 증가하는 n개리스트를 반환
    //입력: int
    //출력: int arr
    //입력값: 정수 x, 자연수 n
    //출력값: n개를 가진 배열
    let answer = [];
    for (let i=1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}