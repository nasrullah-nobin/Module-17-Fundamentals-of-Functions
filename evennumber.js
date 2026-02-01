function evenNumberonly(numbers) {
  if (numbers % 2 === 0) {
    return numbers;
  }
}

const even = evenNumberonly(1,3,5,64,7,0,5,80,5);
console.log(even);
