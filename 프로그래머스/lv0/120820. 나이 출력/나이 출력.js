function solution(age) {
    // 2022년 기준으로 몇년도에 태어났는지 구하는 함수
    //입력: int
    //출력: int
    //입력값: age, 기준년도
    //출력값: 태어난 년도
    //ex) : 1살 -> 2022, 2살 -> 2021 3살 -> 2020 
    if (age === 1) {
        return 2022;
    } else {
        return 2022 - age + 1
    }
}