function solution(numbers) {
    var answer = 0;
    let sum = 0;
    //정수 배열의 평균값 구하기
    //정수로 입력
    //정수로 출력
    //입력값: 정수인 배열 입력
    //출력값: 정수인 배열의 평균값
    //ex) [1,2,3] => 1+2+3 /3 , [1,2,3,4,5] => 1+2+3+4+5 /5
    // [1,2,3,4,5...n] => 1+2+3+4+5+...+n / n
    for (i in numbers){
        sum = sum + numbers[i]
    }
    answer = sum / numbers.length
    return answer;
}