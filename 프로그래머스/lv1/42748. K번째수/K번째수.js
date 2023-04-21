// commands로 받은 2차원 배열에서 i번째부터 j번째까지 자른 후 정렬 k번째 수를 새로운 배열에 넣어서 전부다 계산후 하나의 배열에 담아 return 해주기
//입력 : array와 i,j,k가 담긴 2차원 배열 
//출력: 뽑은 값이 담긴 arr
function solution(array, commands) {
    const answer = [];
    let sliceArr = [];
    let start;
    let end;
    let pick;
    //2차원 배열에서 하나씩 뽑아오기
    for(let i=0; i < commands.length; i++) {
        start = commands[i][0]
        end = commands[i][1]
        pick = commands[i][2]
        
        for(let j=start-1; j<end; j++){
            sliceArr.push(array[j])
            
            if(sliceArr.length === end-(start-1)) {
                sliceArr.sort((a, b) => a - b)
                answer.push(sliceArr[pick-1])
                sliceArr = []
            }
        }
    }
    return answer;
}