function solution(n, numlist) {
    //정수 배열 numlist에서 n의 배수가 아닌것을 제거하세요
    //입력: int, int arr
    //출력: int arr
    //입력값: 배수n, 정수배열
    //출력값: 배수n이 담긴 정수배열
    let answer = [];
    for(let i =0; i < numlist.length; i++) {
        if(numlist[i] % n === 0) {
            answer.push(numlist[i])
        }
    }
    return answer;
}