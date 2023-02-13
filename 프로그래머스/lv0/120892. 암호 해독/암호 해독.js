function solution(cipher, code) {
    // 암호화된 문자열 중 코드의 배수 번째 글자만 반환하기
    // 입력: str , int
    // 출력: str
    // 입력값: 암호문, 코드번호
    // 출력값: 해독한 암호문
    let result = '';
    for(let i =code-1; i<cipher.length; i+=code){
        result += cipher[i]
    }
    return result;
}