function solution(balls, share) {
    //구슬을 나누어 줄 수 있는 짝의 갯수
    // 입력: int
    // 출력: int
    // 입력 값 : 가지고있는 갯수, 나눠줄 갯수
    // 출력 값 : 나눠줄 수 있는 짝의 갯수
    // n! / (n-m)! * m!
    // 팩토리얼 공식
    const n = balls;
    const m = share;
    let answer = 0;
    
    let one = 1;
    for (let i = n; i >= n-m+1; i--){
        one *= i;
    }
    let three = 1;
    for (let i = m; i >= 1; i--){
        three *= i
    }
    answer = Math.floor(one / three)
    return answer;
         
}