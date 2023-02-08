function solution(numbers, direction) {
    //배열에서 원하는 방향으로 한칸씩 옮겨주기 
    //입력: int[] ,str[]
    //출력: int[]
    //입력값: 정수가 담긴 배열, 이동할 방향
    //출력값: 이동한 배열
    const answer = [];
    if(direction === 'right') {
        answer.push(numbers[numbers.length - 1]);
        for(let i =0; i<numbers.length-1; i++) {
            answer.push(numbers[i]);
        }
    } else {
        for(let i=1; i<numbers.length; i++) {
            answer.push(numbers[i]);
        }
        answer.push(numbers[0])
    }
    return answer;
}