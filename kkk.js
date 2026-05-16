// function sum(a, b) {
//   return a + b;
// }

// function solution(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * solution(n - 1);
// }


function solution(str) {
  if (str === "") {
    return "";
  }

  return solution(str.slice(1)) + str[0];
}