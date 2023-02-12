function solution(s) {
    // 문자열을 입력 받아서 z가 나오면 바로 전에 더했던 숫자 빼기
    // 입력: string
    // 출력: int
    // 입력값: string으로 된 숫자와 문자z, 공백
    // 출력값: 계산한 결과
    let numbers = [];
    let collectNumber = ''
    for (let i = 0 ; i < s.length; i++){
        const item = s[i]
        if(item === 'Z') {
            numbers.pop();
        } else if(item === ' ') {
            numbers.push(Number(collectNumber))
            collectNumber = '';
        } else {
            collectNumber += item;
        }
    }
    if(collectNumber !== '') {
        numbers.push(Number(collectNumber))
    }
    let sum = 0;
    for (let i = 0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}