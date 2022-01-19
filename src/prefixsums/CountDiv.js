/**
 * This is the solution for Prefix Sums > Count Div
 *
 * This is marked as Respectable difficulty
 */

function solution(A, B, K) {
  let nStart = Math.ceil(A / K);
  let nEnd = Math.floor(B / K);
  return nEnd - nStart + 1;
}

function solution2(A, B, K) {
  return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
}
console.log(solution(6, 11, 2));
