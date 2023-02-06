function solution(rsp) {
    // 가위바위보 이기는 경우를 순서대로 문자열로 표현하기
    // 입력: str
    // 출력: str
    // 입력: 가위2 바위0 보5
    // 출력: 가위바위보를 이긴 문자열
    //만약 가위(2) 라면 바위(0), 바위(0)이면 , 보(5), 보(5) -> 가위(2)
    let cnt = 0;
    var answer = '';
    while(cnt < rsp.length){
        if(rsp[cnt]==="2"){
            answer += "0"
            cnt+=1
        }
        else if(rsp[cnt]==="0") {
            answer += "5"
            cnt+=1
        }
        else if(rsp[cnt]==="5") {
            answer += "2"
            cnt+=1
        }    
    }
    return answer;
}