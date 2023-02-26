function solution(dots) {
    // 네 꼭짓점의 좌표를 활용해 직사각형 넓이 구하기
    // 입력: int arr
    // 출력: int
    // 입력값: 2차원 배열로 된 각 꼭짓점의 좌표
    // 출력값: 직사각형의 넓이
    let x =[];
    let y = [];
    let maxX = 0;
    let maxY = 0;
    let minX = 0;
    let minY = 0;
    for(let i=0; i<dots.length; i++) {
        x.push(dots[i][0]);
    }
    for(let i=0; i<dots.length; i++) {
        y.push(dots[i][1]);
    }
    maxX = Math.max(...x);
    minX = Math.min(...x);
    maxY = Math.max(...y)
    minY = Math.min(...y)
    
    return (maxX - minX) * (maxY - minY) 
}