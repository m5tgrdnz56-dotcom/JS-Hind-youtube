const name = "Chandu"
const repoCount = 2

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// Another way to declare String with key value pair, lenth and methods etc.
// Note:- can be seen in brouser console

const gameName = new String('Chandu-Gamer-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); /* for using methods. to see the list of methods paste "const gameName = new String('ChanduTheGamer')" in browser cosole
*/

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 7) //last/ 5th character is not included and does not obey negetive value
console.log(newString); 

const anotherString = gameName.slice(-9, 5) // obeys negetive value starts from behind and here also last character is not included
console.log(anotherString);

const newStringOne = "      Chandu     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chandu.com/chandu%20nikunj" //browser converts the space itno %20(urln coading)
console.log(url);

console.log(url.replace('%20',"-"));
console.log(url.includes('chandu'));
console.log(url.includes('shekhar'));

console.log(gameName.split('-'));