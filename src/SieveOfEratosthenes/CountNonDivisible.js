function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)

  var result = [];
  var max = 0;
  var i = 0;
  var arr = JSON.parse(JSON.stringify(A));
  arr.sort(function (a, b) {
    return a - b;
  });

  max = arr[arr.length - 1];
  var divs = [];
  var totals = [];

  for (i = 0; i <= max; i++) {
    divs[i] = false;
    totals[i] = 0;
  }

  for (i = 0; i < A.length; i++) {
    var total = 0;
    var j = 0;
    var k = 0;

    divs[A[i]] = true;
    totals[A[i]]++;
  }

  for (i = 0; i < A.length; i++) {
    for (k = 2; A[i] * k <= max; k++) {
      if (divs[A[i] * k]) {
        totals[A[i] * k]++;
      }
    }
  }

  for (i = 0; i < A.length; i++) {
    result.push(A.length - totals[A[i]]);
  }

  return result;
}
