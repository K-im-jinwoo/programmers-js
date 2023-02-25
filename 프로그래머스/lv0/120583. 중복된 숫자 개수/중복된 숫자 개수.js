function solution(array, n) {
    //정수가 담긴 배열에 원하는 숫자가 몇개있는지 갯수 세기
    //입력:int arr
    //출력: int
    //입력값:정수가 담긴 배열과 원하는 정수
    //출력값: 갯수
    let answer = 0;
    
    for(let i=0;i<array.length;i++){
        if(array[i] === n) {
            answer += 1
        }
    }
    return answer;
}