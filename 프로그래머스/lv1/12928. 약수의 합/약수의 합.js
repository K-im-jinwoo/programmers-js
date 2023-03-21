// 약수를 모두 더한 값을 구하기
// 입력: int
// 출력: int
//입력값: 정수 n
//출력값: 정수n의 약수를 다 더한 값
function solution(n) {
    let arr = [];
    let sum = 0;
    for(let i=1; i<=n; i++) {
        if(n % i === 0) {
            arr.push(i)
        }
    }
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}