function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort();
  for (let i = 0; i, A.length; i += 2) {
    if (A[i] != A[i + 1]) {
      return A[i];
    }
  }
}
