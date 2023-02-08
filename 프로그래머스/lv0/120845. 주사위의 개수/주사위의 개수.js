function solution(box, n) {
    // 길이가 주어졌을 때 주사위가 들어가는 최대 개수
    // 입력: int[] , int
    // 출력: int
    // 입력값: 상자 길이, 주사위 길이
    // 출력값: 들어가는 최대 개수
    const garo = Math.floor(box[0] / n);
    const sero = Math.floor(box[1] / n);
    const height = Math.floor(box[2] / n);
    return garo * sero * height
}