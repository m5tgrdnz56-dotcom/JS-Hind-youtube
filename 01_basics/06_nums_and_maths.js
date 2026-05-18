const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //fixes to 2 decimalas...best practice for E-Commerce websites

const anotherNumber = 123.13231314
// console.log(anotherNumber.toPrecision(3)); // Returns 123
// console.log(anotherNumber.toPrecision(2)); // Returns 1.2e+2

const hundreds = 1000000000
// console.log(hundreds.toLocaleString()); // defaulgt US --> returns 1,000,000,000
// console.log(hundreds.toLocaleString('en-IN')); // Indian format --> 1,00,00,00,000



//++++++++++++++++++ MATHS +++++++++++

// console.log(Math); //run in browser console and see the values provided by this object function
// console.log(Math.abs(-4.2)); //Positive integer
// console.log(Math.round(4.6)); // rounded value
// console.log(Math.ceil(4.2)); // ceiling or top value
// console.log(Math.floor(4.87)); // floor or low value
// console.log(Math.max(2,5,9,0));
// console.log(Math.min(2,5,9,0));
// console.log(Math.PI);

console.log(Math.random()); // Always Value comes between 0-1 ie.:- 01., 0.4332434, 0.6424244 etc
console.log(Math.random()*10); // Between 0-9   //But can be "0" ie.:- 0(also), 3, 4.3453454, 8.2344 etc
console.log(Math.floor(Math.random()*10)  + 1); //Always greater than "0"  // "()" guaratees the value as per the BODMAS //And foor Enshures value comes in Whole

//******Formulae for value between two numbers **************

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)
// max - min ---> Range, + 1 ---> to avoide "0", + min --> for minimum value
