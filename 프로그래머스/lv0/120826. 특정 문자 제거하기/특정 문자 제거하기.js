function solution(my_string, letter) {
    var answer = '';
    //문자열에서 원하는 문자 제거하기
    //입력 : string 
    //출력 : string
    //입력값: my_string, 지워야 할 문자
    //출력값 : 지워지고 난 후 문자열 
    let cnt = 0;
    
    while(cnt < my_string.length) {
        //my_string이 letter와 다르면 answer에 문자를 하나씩 추가
        if (my_string[cnt] !== letter) {
            answer = answer + my_string[cnt]
        }
        cnt += 1;
    }
    
    return answer;
}