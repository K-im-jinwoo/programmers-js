function solution(emergency) {
    //응급도가 높은 순서대로 진료순서 정해주기
    //입력: int 배열
    //출력: int 배열
    //입력 값: emergency
    //출력 값: 진료순서를 정한 배열 
    //내림차순으로 정렬 후 순서대로 번호 매겨주기
    //번호 매겨준 뒤 원래 자리로 다시 옮겨주기
    let loc = [];
    let cnt = 0;
    while (cnt < emergency.length) {
        loc.push({value: emergency[cnt], idx: cnt})
        cnt += 1;
    }
    loc.sort((a,b) => b.value - a.value)
    var answer = new Array(emergency.length);
    
    cnt = 0;
    while (cnt < loc.length) {
        let item = loc[cnt];
        answer[item.idx] = cnt + 1
        cnt = cnt + 1;
    }
    return answer;
}