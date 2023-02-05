function solution(angle) {
    // 예각,직각,둔각,평각을 반환해주기
    //입력: int
    //출력: int
    //입력값: angle
    //출력값: 1,2,3,4
    //만약 0 < angle < 90 = 1
    if(0 < angle && angle < 90) {
      return 1;  
    } //만약 angle = 90 -> 2
    else if(angle === 90) {
        return 2;
    } // 만약 90 < angle < 180 -> 3
    else if(90 < angle && angle < 180) {
        return 3;
    } // 만약 angle = 180 -> 4
    else if(angle === 180) {
        return 4;    
    }
}