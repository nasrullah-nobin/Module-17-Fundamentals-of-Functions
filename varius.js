function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}
// console.log(evenSizedString("Dhaka"));
// console.log(evenSizedString("faka"));

function doubleOrTriple(number, doDouble) {
  if (doDouble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(5,false));

function getArraylength(number) {
  const get = number.length;
  return get;
}

// console.log(getArraylength([1,3,4,5]));

