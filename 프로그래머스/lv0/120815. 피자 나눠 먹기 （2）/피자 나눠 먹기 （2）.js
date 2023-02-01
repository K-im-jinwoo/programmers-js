function solution(n) {
    var answer = 0;
    //1. 같은 수의 피자조각 먹기
    //2. 정수로 입력값 받기 
    //3. 정수의 결과값
    //4. 입력값: 피자를 나눠먹을 사람의 수
    //   출력값: 피자의 개수
    //ex) 1명 -> 피자 6조각 , 2명 -> 각 피자 3조각, 3명 -> 각 피자 2조각 ... 
    //조금더 복잡한 ex) 만약 4명이라면 ?? (6조각 * s개의 피자) % 4 = 0 
    let pizza = 1;
    while(true) {
        if((6*pizza)%n === 0) {
            return pizza;
        } else {
            pizza = pizza + 1;
        }
    }
    return answer;
}