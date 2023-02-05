function solution(numbers, num1, num2) {
    //숫자 2개를 받아 배열 자르기
    //입력: int 배열 , int 
    //출력: int 배열
    //입력값: 배열, 자를 index number
    //출력값: 자르고 난 뒤 배열
    var answer = [];
    let cnt = num1;
    while (cnt <= num2){
        answer.push(numbers[cnt])
        cnt += 1
    }
    return answer;
}