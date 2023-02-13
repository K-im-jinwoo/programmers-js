function solution(my_string) {
    //대문자는 소문자로, 소문자는 대문자로 변환
    //입력: string
    //출력: string
    //입력값: 대소문자
    //출력값: 바뀐 대소문자
    // 대소문자 바꿀 때는 아스키 코드 사용
    let answer = '';
    
    for(let i=0;i<my_string.length; i++) {
        const ch = my_string[i]
        //아스키코드a보다 작으면 대문자이다.
        const up = ch < 'a';
        if(up) {
            answer += ch.toLowerCase();
        } else {
            answer += ch.toUpperCase();
        }
    }
    return answer;
}