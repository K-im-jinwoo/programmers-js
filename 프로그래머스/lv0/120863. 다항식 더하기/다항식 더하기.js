function solution(polynomial) {
    // 동류항끼리 더해주기
    // 입력: 다항식
    // 출력: 줄인 다항식
    // 입력값: str
    // 출력값: str
    if(polynomial ==="x"){
        return "x" 
    }
    let arr = polynomial.split(' + ')
    let xArr = [];
    let xNum = 0;
    let yNum = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i].includes('x')) {
            if(arr[i] === "x"){
                arr[i] = "1";
                xArr.push(arr[i])
            } else {
                xArr.push(arr[i].replace('x', ''))
            }
        } else {
            yNum += Number(arr[i])
        }
    }
    for(let i=0; i<xArr.length; i++) {
        xNum += Number(xArr[i])
    }

    if(yNum === 0) {
        xNum = xNum + "x"
        return xNum
    }
    if(xNum === 0) {
        return String(yNum)
    }
    if(xNum === 1) {
        return "x + " + yNum
    }
    
    xNum = xNum + "x" + " + " + yNum
    return xNum
}