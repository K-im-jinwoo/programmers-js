function solution(numbers) {
    //정수 배열 중 제일 큰 값 찾기
    //입력: int arr
    //출력: int
    //입력값: 정수배열
    //출력값: 두수를 곱한 제일 큰 값
    let numArr = numbers.sort((a,b) => (a-b));
    if(numArr[0]*numArr[1] > numArr[numArr.length -1] * numArr[numArr.length - 2]) {
        return numArr[0]*numArr[1]
    }
    if(numArr[0]*numArr[1] < numArr[numArr.length -1] * numArr[numArr.length - 2]) {
        return numArr[numArr.length -1] * numArr[numArr.length - 2]
    }
    return numArr[0]*numArr[1]
}