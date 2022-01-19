function solution(A) {
  var onlyPositiveInt = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      onlyPositiveInt[A[i]] = true;
    }
  }
  for (i = 1; i <= onlyPositiveInt.length; i++) {
    if (!onlyPositiveInt[i]) {
      return i;
    }
  }
  return 1;
}
