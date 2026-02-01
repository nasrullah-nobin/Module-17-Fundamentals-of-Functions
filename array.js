function sumOfArray(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number
    }
    return sum
}
const arr = [1,3,4,56,789,0];
const sum = sumOfArray(arr);
console.log(sum)