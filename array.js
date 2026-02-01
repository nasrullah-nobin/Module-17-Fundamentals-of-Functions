function sumOfArray(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  return sum;
}
const output = sumOfArray([1, 3, 4, 5, 67, 89]);
console.log(output);
