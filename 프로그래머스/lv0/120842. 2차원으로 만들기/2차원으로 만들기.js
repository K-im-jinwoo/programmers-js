function solution(num_list, n) {
    //정수배열을 입력받은 정수만큼 2차원 배열로 나누기
    //입력: int arr
    //출력: int arr
    //입력값: 정수배열, 정수
    //출력값: 2차원 배열
    //ex) [1,2] ,2 -> [[1,2]] 
    //num_list에서 n개만 빼서 배열로 만들기 -> num_list는 n의 배수
    //만든 배열을 배열안에 집어넣기 
    let cnt = 0;
    let arr = [];
    var answer = [];
    while(cnt <= num_list.length) {
        if(arr.length < n) {
            arr.push(num_list[cnt])
            cnt += 1
        }
        else if((arr.length) === n){
            answer.push(arr)
            arr = [];
        } 
        
    }
    
    return answer;
}