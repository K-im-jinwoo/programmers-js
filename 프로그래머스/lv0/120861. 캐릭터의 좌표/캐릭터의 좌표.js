function solution(keyinput, board) {
    // 키 입력이 끝난뒤의 좌표 출력하기
    // 입력: str arr, int arr
    // 출력: int arr
    // 입력값: 움직이는 방향, 맵의 크기
    // 출력값: 현재의 좌표
    let answer = [];
    let xCnt = 0;
    let yCnt = 0;
    let xMove = Math.floor(board[0] / 2)
    let yMove = Math.floor(board[1] / 2)

    for(let i=0; i<keyinput.length; i++) {
        if (xMove > Math.abs(xCnt)) {
            if(keyinput[i] === "left") {
                xCnt -= 1
            }
            if(keyinput[i] === "right") {
                xCnt += 1
            } 
        } else if(xMove === xCnt && keyinput[i] === "left") {
            xCnt -= 1
        } else if(-xMove === xCnt && keyinput[i] === "right") {
            xCnt += 1
        }
        
        if(yMove > Math.abs(yCnt)) {
            if(keyinput[i] === "down") {
                yCnt -= 1
            } 
            if(keyinput[i] === "up") {
                yCnt += 1
            }
        } else if(yMove === yCnt && keyinput[i] === "down") {
            yCnt -= 1
        } else if(-yMove === yCnt && keyinput[i] === "up") {
            yCnt += 1
        }
    }
    answer.push(xCnt)
    answer.push(yCnt)
    return answer;
}