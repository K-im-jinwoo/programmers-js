function solution(s) {
    //한번만 등장한 문자열 반환하기
    //입력:string
    //출력:string
    //입력값: 문자열
    //출력값: 한번만 등장한 문자 반환
    if(s.length === 0) return '';
    const count = {};
    let answer = [];
    for(let i =0; i<s.length; i++) {
        let n = s[i];
        count[n] ? count[n] += 1: count[n] = 1;
    }
    const countArr = Object.entries(count);
    for(let i=0;i<countArr.length;i++){
        const item = countArr[i];
        if(item[1] === 1){
            answer.push(item[0])
        }
    }
    const sortAnswer = answer.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
    let result = '';
    for(let i=0; i<sortAnswer.length; i++){
        result += sortAnswer[i]
    }
    //sortAnswer.join('') 사용 시 바로 가능
    
    return result;
}