function solution(strings, n) {
    //정수 각 문자열의 n번째 글자를 기준으로 오름차순으로 정렬
    //입력: string arr, int
    //출력: string arr
    //입력값: 문자열로 구성된 리스트와 정수n
    //출력값: n번째 글자를 기준으로 오름차순 정렬
    let answer = [];
      return strings.sort((a, b) => {

        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;

        else return a > b ? 1 : -1;
      });
}