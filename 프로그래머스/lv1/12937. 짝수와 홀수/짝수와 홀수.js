function solution(num) {
    //정수 num 이 짝수 일경우 Even 홀수일 경우 Odd 반환
    //입력 int
    //출력: str
    //입력값: 짝수인지 홀수인지?
    //출력값: 짝수 -> Even 홀수 -> Odd
    if(num === 0) {
        return "Even"
    } else if(num % 2 === 0) {
        return "Even"
    } else{
        return "Odd"
    }
}