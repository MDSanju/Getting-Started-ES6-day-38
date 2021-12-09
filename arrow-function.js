// function expression
const add = function add(num1, num2) {
    return num1 + num2;
}

const sum = add(15, 17);
console.log(sum);



// function expression (anonymous)
const add2 = function(number1, number2) {
    return number1 + number2;
}

const sum2 = add2(15, 50);
console.log(sum2);





// most useful this function
// arrow function
const add3 = (digit1, digit2) => digit1 + digit2;

const sum3 = add3(50, 70);
console.log(sum3);