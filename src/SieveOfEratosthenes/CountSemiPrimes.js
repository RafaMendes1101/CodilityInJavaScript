function solution(N, P, Q) {
  // write your code in JavaScript (Node.js 4.0.0)

  var i = 0;
  var primes = [];
  var subprimes = [];
  var count = [];
  var result = [];

  primes[0] = false;
  primes[1] = false;

  subprimes[0] = false;
  subprimes[1] = false;

  for (i = 2; i < N; i++) {
    primes[i] = true;
    subprimes[i] = false;
  }

  for (i = 2; i <= parseInt(Math.sqrt(N)); i++) {
    for (var j = i; j * i <= N; j++) {
      primes[j * i] = false;
      if (primes[i] && primes[j]) {
        subprimes[j * i] = true;
      } else {
        subprimes[j * i] = false;
      }
    }
  }

  for (i = 0; i < subprimes.length; i++) {
    if (i === 0) {
      count[i] = 0;
    } else {
      count[i] = count[i - 1];
    }

    if (subprimes[i]) {
      count[i]++;
    }
  }

  //console.log('count:', count);

  for (i = 0; i < P.length; i++) {
    result.push(count[Q[i]] - count[P[i] - 1]);
  }

  //console.log('result:', result);

  return result;
}
