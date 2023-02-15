function solution(s1, s2) {
    //두 배열의 유사한 원소 개수세기
    //입력: arr 2개
    //출력: int
    //입력값: 문자배열
    //출력값: 유사한 원소 개수
    let count = 0;
    for(let i =0; i < s1.length; i++){
        for(let j=0; j < s2.length; j++){
            if(s1[i] === s2[j]){
                count += 1
            }
        }
    }
    return count;
}