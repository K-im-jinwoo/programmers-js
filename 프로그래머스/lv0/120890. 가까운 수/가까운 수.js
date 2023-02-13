function solution(array, n) {
    // n과 가장 가까운 수 찾기
    // 입력: int arr
    // 출력: int
    // 입력값: 정수가 들어있는 arr와 n의 정수
    // 출력값: arr안에서 n과 가장 가까운 정수 찾기
    let min = 999;
    let answer = 0;
    const arr = array.sort((a,b) => a-b)
    if(array.length === 1) {
        return array[0]
    }
    for(let i=0; i < arr.length; i++){
        const item = arr[i];
        if(min > Math.abs(n - item)){
            min = Math.abs(n - item);
            answer = item;
        }
    }
    
    return answer;
}