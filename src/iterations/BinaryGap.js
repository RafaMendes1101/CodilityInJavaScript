function solution(number) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (number !== parseInt(number, 10)) return "Input must be an integer";

  //Convert to binary
  const binaryNumber = number.toString(2);

  //creating an array of length of each item
  const arr = binaryNumber.split("1").map((binaryGap, index, binaryArr) => {
    return binaryArr[index + 1] != undefined ? binaryGap.length : 0;
  });

  // calculates the longest gap length
  return Math.max.apply(Math, arr);
}
