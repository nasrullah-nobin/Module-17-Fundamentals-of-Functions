function onlyEvenNumber(numbers) {
  let even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
}
// const array = [2, 455, 54, 78, 9, 7865, 89, 44];
// const output = onlyEvenNumber(array);
// console.log(output);

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (number of numbers) {
    if (number % 2 === 0) {
      sum = number + sum;
    }
  }
  return sum;
}
const output1 = sumOfEvenNumbers([2, 455, 54, 78, 9, 7865, 89, 44]);
console.log(output1);
