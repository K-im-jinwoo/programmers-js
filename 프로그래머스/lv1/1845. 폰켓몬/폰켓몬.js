function solution(nums) {
    const answer = [];
    const max = nums.length / 2;
        
// 배열의 길이만큼 반복
    for(let i = 0; i < nums.length; i++) {
//answer.length가 절반 나눈것보다 작으면서
        if(answer.length < max) {
//배열안에 폰켓몬[i]가 포함되어있지 않으면 push 한다. 
//즉 폰켓몬을 뽑는 수는 한정되어있으니까 배열안에 들어가지 않은 값이 다른 종류라고 볼 수 있다.
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;    
}