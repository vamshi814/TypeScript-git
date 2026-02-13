// TS = JS + some features
var customerID = 12345;
customerID = 5979;
//customerID = "sdf"; ////type String is not assignable to type number 
// any vs unknown
// we can assign any type variables to other variables
// but unknown type variables cannot be assign to other variables
var customerOne = 123;
var customerTwo = 12222;
let onee = customerOne;
//let twoo:number = customerTwo; is not assignable 
//arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
//numbers.push("ss"); causes error
//readonly 
let constArray = ["john", "robert"];
//constArray.push("dfa"); push doesnot work we cannot add
