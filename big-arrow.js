// single parameter arrow function writting system
const fiveTimes = x => x * 5;

const result = fiveTimes(7);
console.log(result);



// no parameter arrow function writting system
const myName = () => 'MD Sanju';

const getName = myName();
console.log(getName);





// multiple lines codes arrow function writting system
const doMath = (a, b) => {
    const sum = a + b;
    const diff = a - b;
    const multiplication = sum * diff;
    const output = multiplication * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);






// event handler writting system using arrow function
document.getElementById('submit-button').addEventListener(event => {

});