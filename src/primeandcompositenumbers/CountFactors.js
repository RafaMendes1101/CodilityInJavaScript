function solution(N) {
  let result = 0;
  let i = 1;
  while (i * i < N) {
    if (N % i === 0) {
      result += 2;
    }
    i++;
  }
  if (i * i === N) {
    result++;
  }

  return result;
}
