function solution(n) {
    // 팩토리얼 값 찾기
    // 입력: int 
    // 출력: int
    // 입력값: 팩토리얼 계산이 된 int
    // 출력값: 팩토리얼 
    let result = 1;
    for (let i=1; ; i++){
        result *= i
        if (result > n){
            return i - 1;
        }
        
    }
    
}