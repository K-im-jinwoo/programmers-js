function solution(n) {
    //소인수 분해하고 오름차순으로 배열에 담기 중복된 수는 한번만
    //입력: int
    //출력: int arr
    //입력값: 자연수 
    //출력값: n의 소인수를 오름차순으로 담은 배열
    var answer = [];
    for(let i=2; n !== 1; i++) {
        if(n % i === 0){
            while(n % i === 0){
                n /= i;
            }
            answer.push(i)
        }
    }
    
    return answer;
}