const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
function solution(letter) {
    // 문자열을 모스부호보고 소문자로 바꾼 문자열 출력
    // 입력 : str
    // 출력 : str
    // 입력 값 : 모스부호
    // 출력 값 : 해석한 문자열
    let currentMorse = '';
    let answer = '';
    for (let i=0; i <letter.length; i++){
        const item = letter[i];
        if (item === ' '){ //공백을 만나면 지금까지 쌓은 모스부호를 해당 문자열을 획득한다.
            answer += morse[currentMorse];
            currentMorse = '';
        } else { // 공백이 아니라면 문자 연결해주기 
            currentMorse += item
        }
    }
    //마지막 남은 문자는 반복문이 안돌기 때문에 따로 추가해주기
    answer += morse[currentMorse]
    return answer
}