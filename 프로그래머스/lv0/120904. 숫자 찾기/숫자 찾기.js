function solution(num, k) {
    //num중 k가 있으면 그 숫자가있는 자리 수를 반환, 없으면 -1
    //입력: int
    //출력: int
    //입력값: num과 찾고자하는 k
    //출력값: 그 자리수
    let numStr = String(num)
    const kStr = String(k)
    let answer = 0;
    for(let i =0; i < numStr.length; i++) {
        if(numStr[i] === kStr){
            return i+1;
        }
    }
    return -1
}