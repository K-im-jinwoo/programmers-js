function solution(num_list) {
    var answer = [];
    //배열의 순서를 뒤집은 배열 나타내기
    //입력 : 원소가 담긴 배열
    //출력 : 원소가 담긴 배열
    //입력 값: 배열
    //출력 값: 뒤집어진 배열
    //ex) [1,2,3] -> [3,2,1] , [4,2,1] -> [1,2,4]
    //배열의 길이를 선언한다.
    let numLength = num_list.length
    //배열을 마지막 원소를 하나씩 뽑는다. 
    for (i in num_list) {
        answer.push(num_list[numLength - 1]);
        numLength = numLength - 1;
    }
    //새로운 배열에 추가한다.
    return answer;
}