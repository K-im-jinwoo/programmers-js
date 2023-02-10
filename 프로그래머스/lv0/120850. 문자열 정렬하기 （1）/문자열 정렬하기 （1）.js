function solution(my_string) {
    //my_string안에있는 숫자만 골라 오름차순하기
    //입력:string
    //출력:int arr
    //입력값: 숫자가 담긴 문자열
    //출력값: 오름차순 된 숫자 배열
    var answer = [];
    answer = my_string.match(/[0-9]/g)
    const nuevo = answer.map((i) => Number(i));
    nuevo.sort()
    
    return nuevo;
}