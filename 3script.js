//tuple : named array
let bankCustomer = [1899, "john", 25000, false];
console.log(bankCustomer[0]);
console.log(bankCustomer[1]);
console.log(bankCustomer[2]);
console.log(bankCustomer[3]);
//destructuring
//extract the files from array or object to variables
//zip-->
//extract files
//array destructuring
var [custID, custName, custBal] = [12345, "abrahim", 40000];
console.log(custID);
console.log(custName);
console.log(custBal);
//object
var person = { name1: "john", age1: 40 };
console.log(person.name1 + "--- " + person.age1);
//object destructuring
var { name1, age1 } = person;
console.log(name1); //can call directly member
console.log(age1);
//structuring- setting type 
var customer_details1 = {
    cust_name1: "kiran",
    cust_age1: 35,
    cust_loc1: "Bangalore",
};
