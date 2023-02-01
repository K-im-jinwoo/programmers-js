function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denum = denom1 * denom2;
    const num = numer1 * denom2 + numer2 * denom1;
    
    let minNumber;
    if(num < denum) {
        minNumber = num;
    }else {
        minNumber = denum;
    }
    
    //나누어 떨어지는 것 
    while(true){
     if(denum % minNumber === 0){
        if(num % minNumber ===0){
            //minNumber은 최대 공약수
            return [num / minNumber, denum /minNumber]
            }
        }
        minNumber = minNumber - 1;   
    }
    
    
    return answer;
}