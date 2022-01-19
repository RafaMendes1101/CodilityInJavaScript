function solution(A) {
  A.sort();
  for (let i = 1; i <= A.length; i++) {
    if (A[i - 1] != i) {
      return 0;
    }
  }
  return 1;
}
