function solution(money) {
    //가지고 있는 돈으로 최대한 많이 살 수있는 커피 잔 수와 잔돈
    //입력 배열 [int]
    //출력 배열 [int]
    //입력 값: 가지고 있는 돈
    //출력 값: [최대한 많이 산 커피 잔 수, 잔돈]
    //ex) 10000 -> 5500 1잔, 4500 , 12000 -> 5500 2잔 , 1000
    const price = 5500;
    const coffee = Math.floor(money/price);
    return [coffee, money%price]
         
}