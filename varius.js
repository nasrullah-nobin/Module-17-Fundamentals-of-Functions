function givenStringIsEven(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even number");
    return true;
  } else {
    console.log("odd number");
    return false;
  }
}
const string = givenStringIsEven("even number of characters");
const string1 = givenStringIsEven("I love programming ");
console.log("even num:", string, "odd num", string1);

function doubleOrTriple(number, double) {
  if (double) {
    return number * 2;
  }
  return number * 3;
}

const output = doubleOrTriple(5, true);
const output1 = doubleOrTriple(5, false);
console.log(output, output1);

function numberOfElement(number) {
  return number.length;
}
const array = [1, 2, 3, 4, 5, 67, 88];
const output2 = numberOfElement(array);
console.log(output2);
