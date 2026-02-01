// Task-1
// function multiply(a, b, c, d) {
//   //   let result = a * b * c * d;
//   //   return result;
//   //short method
//   return a * b * c * d;
// }
// const multi = multiply(20, 4, 3, 78);
// console.log(multi);

// Task-2

// function Task_2(numbers) {
//   let result = 0;
//   if (numbers % 2 !== 0) {
//     result = numbers * 2;
//   } else {
//     result = numbers / 2;
//   }
//   return result;
// }

// const output = Task_2(6);
// console.log(output);

// ternary short method
// function Task_2(numbers) {
//   let result = 0;
//   return numbers % 2 !== 0 ? numbers * 2 : numbers / 2;
// }

// const output = Task_2(6);
// console.log(output);

// Task-3
// function make_avg(numbers) {
//   let sum = 0;
//   let length = numbers.length;
//   for (const number of numbers) {
//     sum = sum + number;
//   }
//   return sum / length;
// }

// const intArray = make_avg([1, 23, 75, 46, 87, 8, 6, 55]);
// console.log(intArray);

// task 4
// function count_zero(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     if (number === "0") {
//       sum++;
//     }
//   }
//   return sum;
// }

// const output = count_zero("1010010");
// console.log(output);

// task 05
function odd_even(number) {
  let ret = "";
  if (number % 2 === 0) {
    ret = "Even";
  } else {
    ret = "Odd";
  }
  return ret;
}
const evenOdd = odd_even(5);
console.log(evenOdd);

console.log(odd_even(90));