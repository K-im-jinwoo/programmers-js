function solution(order) {
    // 3,6,9 가 있을때 박수의 횟수
    // 입력: int => string으로 바꿔서 for문 돌리기
    // 출력: int
    // 입력값: 말해야하는 숫자
    // 출력값: 박수치는 횟수
    let result = 0;
    order = String(order)
    for (let i =0; i < order.length; i++){
        // if (order[i] === '3') {
        //     result += 1
        // }
        // if (order[i] === '6') {
        //     result += 1
        // }
        // if (order[i] === '9') {
        //     result += 1
        // }
        if(order[i] === '3' || order[i] === '6' || order[i] === '9') {
            result +=1 
        }
    }
    var answer = 0;
    return result;
}