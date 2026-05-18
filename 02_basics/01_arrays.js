//array

const myArr = [0, 3, 1, 4, 5, 6] // can be mix of different datatypes i.e. integer, boolean, string etc.
const myHeroes = ["doga", "nagraj"]

const myArr2 = new Array(1, 2, 4, 6, 0) // another way of declaring array

// console.log(myArr[3]);
// console.log(myHeroes[1]);
// console.log(myArr2[3]);


// Array Methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// myArr.push(6) // Adds element in array
// console.log(myArr);
// myArr.push(7) // Adds element in array --> in end
// console.log(myArr);
// myArr.pop() // Removes element from array --> from end
// console.log(myArr);

myArr.unshift(0) // adds elements at start of array // not a good practice as elements index shifts 
// console.log(myArr);
myArr.shift() // removes elements at start of array // not a good practice as elements index shifts 
// console.log(myArr);

// console.log(myArr.includes(6)); // True
// console.log(myArr.includes(9)); // False
// console.log(myArr.indexOf(9)); // -1 --> becouse no such value exists in this array
// console.log(myArr.indexOf(6)); // 5

// const myNewArr = myArr.join()
// console.log(myArr);
// console.log(myNewArr); // 0,3,1,4,5,6 --> binds the elements and changes to  string
// console.log(typeof myNewArr); // string

// slice, splice ~~~~~~~~~~~

console.log("A ", myArr); // A  [ 0, 3, 1, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3) // returns a copy of section of an array
console.log(myn1); //  [3, 1 ]

console.log("B ", myArr); // B  [ 0, 3, 1, 4, 5, 6 ]

const myn2 = myArr.splice(1, 3) // returns a copy of section of an array
console.log(myn2); //  [3, 1, 4] //
console.log("C ", myArr); // C  [ 0, 5, 6 ] --> elements are removed
