// using spread oparator (...) to get all elements from an array
const numbers = [23, 65, 99, 21, 34];
console.log(...numbers);



// use case of spread oparator (...)
const numberList = [56, 89, 78, 25, 44, 36];

const max = Math.max(...numberList);
console.log(max);



// more harder use case

// an array, main
const num = [45, 77, 34, 19, 96];
// we won't get this push element after using spread oparator (...)
num.push(10);
console.log(num);
// creat a new array using main array elements
const num2 = [50, ...num, 82];
console.log(num2);