function solution(A, B) {
  // write your code in JavaScript (Node.js 4.0.0)

  var i = 0;
  var result = [];
  var max = 0;
  var steps = [];
  var stepsSum = [];
  var maxB = 0;

  steps[0] = 1;
  steps[1] = 1;

  for (i = 0; i < A.length; i++) {
    max = Math.max(max, A[i]);
    maxB = Math.max(maxB, B[i]);
  }

  i = 1;
  while (i++ <= max) {
    steps[i] = (steps[i - 1] + steps[i - 2]) % Math.pow(2, maxB);
  }

  for (i = 0; i < A.length; i++) {
    var div = steps[A[i]] & (Math.pow(2, B[i]) - 1);
    result.push(div);
  }

  return result;
}
