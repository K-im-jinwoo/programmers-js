function solution(my_string) {
    var answer = '';
    
    // 문자열 뒤집기
    // 입력 str
    //출력 str
    // 입력값 : 문자열 my_string
    // 출력값 : my_string을 뒤집은 문자열
    //문자열 뒤에서 하나씩 뽑기
    //뽑은 문자를 하나씩 추가하기
    let str_leng = my_string.length;
    for (i in my_string) {
        answer = answer + my_string[str_leng-1]
        str_leng = str_leng - 1
    }
    return answer;
}