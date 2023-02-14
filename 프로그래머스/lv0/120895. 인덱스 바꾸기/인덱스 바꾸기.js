function solution(my_string, num1, num2) {
    //2개의 인덱스번호를 받아 자리 바꿔주기
    //입력:string,int
    //출력:string
    //입력값:문자열, 바꿀 인덱스번호 2개
    //출력값: 바뀐 문자열
    let answer = '';
    for(let i=0;i<my_string.length;i++) {
        if(i === num1) {
            answer += my_string[num2];
        } else if(i === num2) {
            answer+= my_string[num1];
        } else {
            answer += my_string[i];
        }
    }
    return answer;
}