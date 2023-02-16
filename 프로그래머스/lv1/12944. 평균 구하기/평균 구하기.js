function solution(arr) {
    //정수를 담고있는 배열의 평균 값
    //입력: int arr
    //출력: int
    //입력값: 정수가담긴 배열
    //출력값: 평균값.
    let answer = 0;
    let len = arr.length
    for (let i=0;i<len;i++) {
        answer += arr[i]
    }
    answer /= len
    return answer;
}