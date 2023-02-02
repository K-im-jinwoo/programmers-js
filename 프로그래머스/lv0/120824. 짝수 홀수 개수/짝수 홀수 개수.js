function solution(num_list) {
    // 배열에 담긴 홀수와 짝수 개수구하기
    // 입력 : 배열 , int 
    // 출력 : 배열, int
    // 입력 값 : num_list
    // 출력 값 : [짝수, 홀수]
    
    let hol = 0;
    let jjak = 0;
     // 배열에서 순서대로 값을 하나 씩 뽑아서 나누기
    // 홀수 인지 짝수 인지 구분해서 count 하기 
    for (i in num_list) {
        // 1은 홀수
        if(num_list[i] === 1) {
            hol = hol + 1;
            //홀수 일 때 2로 나누면 나머지가 1
        } else if (num_list[i] % 2 === 1) {
            hol = hol + 1;
            //짝수 일 때 2로 나누면 나머지가 0 
        } else if (num_list[i] % 2 === 0) {
            jjak = jjak + 1;
        }
    }
    return [jjak, hol]
}