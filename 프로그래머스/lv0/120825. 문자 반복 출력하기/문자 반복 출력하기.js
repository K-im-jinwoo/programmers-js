function solution(my_string, n) {
    var answer = '';
    // 문자열을 입력받은 횟수만큼 반복시키기 
    // 입력 : str, int
    // 출력 : str
    // 입력 값: 문자열 my_string, 횟수 n
    // 출력 값: 반복된 문자열
    
    const my_str = my_string.length;
    let my_cnt = "";
    // 입력된 문자열 하나씩 쪼개기
    for (let i = 0; i < my_str; i++) {
        my_cnt = my_string[i]
        // 횟수만큼 반복하기 
        answer = answer + my_cnt.repeat(n)
    }
    
    
    return answer;
}