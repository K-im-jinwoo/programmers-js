function solution(dot) {
    // 4분면에 속하는 위치 찾기
    // 입력: int
    // 출력: int
    // 입력값: x,y좌표
    // 출력값: 4분면에서 위치하는 곳
    //만약 둘다 양수면 1
    const x = dot[0]
    const y = dot[1]
    if(x >0 && y > 0) {
        return 1
    }
    //만약 x 음수, y 양수 -> 2
    if(x < 0 && y > 0) {
        return 2
    }
    //만약 둘다 음수 -> 3
    if(x < 0 && y < 0) {
        return 3
    }
    //만약 x 양수 y 음수 -> 4
    if(x > 0 && y < 0) {
        return 4
    }
}