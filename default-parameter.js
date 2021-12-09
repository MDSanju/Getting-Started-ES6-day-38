// default parameter of function two old options before coming es6
function add(num1, num2) {
    // old system - 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    // old system - 2
    num2 = num2 || 0;

    const total = num1 + num2;
    return total;
}
const result = add(50);
console.log(result);



// default parameter setting es6 option
function calc(number1, number2 = 0) {
    const sum = number1 + number2;
    return sum;
}

const sumTotal = calc(15);
console.log(sumTotal);


// default value string
function fullName(first, last = 'Islam') {
    const name = first + ' ' + last;
    return name;
}

const putName = fullName('Mominul');
console.log(putName);