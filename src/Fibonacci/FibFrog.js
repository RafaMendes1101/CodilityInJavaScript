function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)

  var fib = [];
  var N = A.length + 1;
  var i = 1;
  var steps = [];
  var arr = [];

  arr[0] = 1;
  for (i = 1; i <= A.length; i++) {
    arr[i] = A[i - 1];
  }

  if (N < 3) {
    return 1;
  }

  fib[0] = 0;
  fib[1] = 1;

  i = 1;

  while (fib[i++] < N) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  steps[0] = 1;
  for (i = 1; i <= N; i++) {
    steps[i] = 0;
  }

  var base = 0;
  var nextBase = 1;
  i = 2;

  var result = -1;

  while (i < fib.length && base <= N) {
    var nextPos = base + fib[i];

    if (steps[base] === 0) {
      base++;
    } else if (nextPos > N) {
      base++;
      i = 2;
    } else {
      if (nextPos === N) {
        if (base === 0) {
          return 1;
        } else {
          if (result < 0) {
            result = steps[base] + 1;
          } else {
            result = Math.min(result, steps[base] + 1);
          }
        }
      } else if (arr[nextPos] === 1) {
        if (steps[nextPos] === 0) {
          if (base === 0) {
            steps[nextPos] = 1;
          } else {
            steps[nextPos] = steps[base] + 1;
          }
        } else {
          steps[nextPos] = Math.min(steps[nextPos], steps[base] + 1);
        }
      }

      i++;
    }
  }

  return result;
}
