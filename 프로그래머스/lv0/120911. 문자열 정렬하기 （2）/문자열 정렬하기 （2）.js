function solution(my_string) {
    //소문자로 바꾸고 정렬하기
    //입력: str
    //출력: str
    //입력값: 대소문자
    //출력값: 소문자, 정렬
    let answer = '';
    answer = my_string.toLowerCase()
    return answer.split('').sort().join('');
}