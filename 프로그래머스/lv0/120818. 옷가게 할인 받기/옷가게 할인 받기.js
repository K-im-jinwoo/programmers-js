function solution(price) {
    // 10만원부터 5프로, 30만원 이상 10프로, 50만원 이상 20프로 할인
    //입력 : int
    //출력 : int
    //입력 값 : price 
    //출력 값 : 할인된 가격 
    //ex) 100000 - (100000 * 0.05) , 300000 - (300000 * 0.1), 500000 - (500000 * 0.2)
    if (price < 100000) {
        return Math.floor(price);
    } else if ( 100000 <= price && price < 300000) {
        return Math.floor(price - (price * 0.05));
    } else if (300000 <= price && price < 500000) {
        return Math.floor(price - (price * 0.1));
    } else {
        return Math.floor(price - (price * 0.2));
    }
}