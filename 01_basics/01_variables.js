const accountId =144553
let accountEmail = "chandu@gmail.com"
var accountPassword = "12345"
accountCity = "Raipur" // can be used but not prefferred
let accountState;// andefined assign value
// accountId = 2 // not allowed
accountEmail = "chandu2@mail"
accountPassword = "21213"
accountCity = "Bilaspur"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
*/