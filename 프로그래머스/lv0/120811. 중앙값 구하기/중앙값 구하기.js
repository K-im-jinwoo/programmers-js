function solution(array) {
    var answer = 0;
    const lth = array.length
    const loc = Math.trunc(lth/2)
    array.sort(function(a, b)  {
  return a - b;
});
    answer = array[loc];
    return answer;
}