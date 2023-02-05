function solution(age) {
    //외계행성의 나이로 바꾸기 -> 0 = a, 24 = ce
    //입력: int
    //출력: string
    //입력값: age
    //출력값: 외계행성 나이
    //24 -> 2와 4를 구분해야함 24 % 10 = Math.floor(2.4)
    //이렇게하면 복잡하니 숫자에다가 string타입으로 변환해서 하나씩 뽑아쓰기
    var answer = '';        
    const stringAge = String(age);
    let cnt = 0;
    while (cnt < stringAge.length) {
        answer = answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49)
        cnt += 1
    }
    
    return answer;
}