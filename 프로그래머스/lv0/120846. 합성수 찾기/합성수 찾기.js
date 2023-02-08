function solution(n) {
    //n 이하의 합성수의 개수 구하기
    // 입력: int
    // 출력 : int
    // 입력값 : 자연수 n
    // 출력값 : 합성수의 개수
    let answer = 0;
    for(let i = n; i >= 1; i--) {
        //i가 합성수인지 비교해야하는 숫자
        let isCount = false;
        for(let num = 2; num < i -1; num ++){
            if(i % num ===0) {
                isCount = true;
            }
        }
        if(isCount) {
            answer += 1;
        }   
    }
    
    
    return answer
}