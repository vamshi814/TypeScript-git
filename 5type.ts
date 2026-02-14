//type : type is keyword in ts useful for creates custom name

type strictly_string = string;

//var custName:string = "john"; 
var custName : strictly_string = "john";//instead string we can name it and pass as type custom name
//----------------------------example
type name = string;
type salary = number;
type status = boolean;

var customer_name :name = "haji";
// PersonInfo is a custom type 
type PersonInfo = {
    name : string,
    salary : salary,
    loc : string,
    isAdmin : status
}
var person1 : PersonInfo ={
    name : "mahi",
    salary : 250000,
    loc : "US",
    isAdmin : false
}

// class Person : PersonInfo{   // cannot give reference to class 

// }
//but we can give reference to interfaces.
