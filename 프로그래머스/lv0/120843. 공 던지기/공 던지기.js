function solution(numbers, k) {
    // 옆사람에게 던지는데 한칸 건너서 던지기 , 마지막으로 던지는 사람은??
    // 입력 int arr
    // 출력 int
    // 입력값 : 정수배열 사람, 던지는 횟수 k
    // 출력값 : 마지막으로 던진 사람
    //ex) [1,2,3,4,5] -> i=0 ,i=2,i=4 인덱스가 기준을 넘었을 때 돌아가는 문제는 보통 나머지 연산자 사용
    var answer = 0;
    let cnt = 1;
    
    for(let i=0; ;i+=2){
        //i가 number 길이보다 커질때 앞으로 돌아가게하기
        i %= numbers.length;
        const item = numbers[i];
        if(cnt === k){
            return item;
        }
        cnt+=1;
    }

}