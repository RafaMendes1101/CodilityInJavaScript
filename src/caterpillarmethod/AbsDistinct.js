function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)

  var left = 0;
  var right = left;
  var i = 0;
  var total = 1;
  var lastVal = 0;
  var newVal = 0;

  for (i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      left = i;
      right = left;
      break;
    } else {
      A[i] *= -1;
    }
  }

  if (A.length === 1) {
    return 1;
  }

  lastVal = A[left];
  newVal = lastVal;

  while (left >= 0 && right <= A.length - 1) {
    if (A[left] !== A[right] && lastVal !== newVal) {
      total++;
    }

    if (left > 0 && A[left] < A[right]) {
      lastVal = A[left];
      left--;
      newVal = A[left];
    } else if (right < A.length - 1 && A[right] < A[left]) {
      lastVal = A[right];
      right++;
      newVal = A[right];
    } else if (left > 0) {
      lastVal = A[left];
      left--;
      newVal = A[left];
    } else if (right < A.length - 1) {
      lastVal = A[right];
      right++;
      newVal = A[right];
    } else {
      lastVal = A[left];
      left--;
    }
  }

  return total;
}
