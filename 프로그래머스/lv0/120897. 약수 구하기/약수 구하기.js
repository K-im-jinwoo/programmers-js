function solution(n) {
    //약수 구하기
    //입력: int
    //출력: arr
    //입력값: 정수 n
    //출력값: 약수를 오름차순으로 담은 배열 
    var answer = [];
    for(let i=1; i<=n; i++) {
        if(n % i === 0) {
            answer.push(i);
        }
    }
    return answer;
}