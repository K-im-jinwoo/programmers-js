//완주하지 못한 선수의 이름 반환하기
//입력: 모든 선수의 배열 arr , 도착한 선수의 이름 arr , 모두 소문자  
//출력: string 도착하지못한 선수 
//이름이 같은 경우에도 계산해줘야한다. 
function solution(participant, completion) {
    //배열을 정렬 후 하나씩 뽑아서 값 비교하기
    let sortParticipant = participant.sort()
    let sortCompletion = completion.sort()
    
    //만약 participant와 completion이 다르다면 paricipant의 요소를 리턴해주기
    for(let i=0; ;i++){
        if(sortParticipant[i] !== sortCompletion[i]) {
            return sortParticipant[i]
        }
    }
}