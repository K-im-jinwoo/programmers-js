//자연수 N을 각 자릿수의 합을 구하기
//입력:int
//출력: int
//입력값:정수N
//출력값:각자릿수를 더한 값
function solution(n)
{
    let sum = 0;
    const strN = String(n);
    for(let i=0;i<strN.length; i++) {
        sum += Number(strN[i])
    }
    return sum;
}