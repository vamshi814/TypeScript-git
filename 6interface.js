//interface to variable
var PersonInfo = {
    name: "ravi",
    loc: "bglr",
    isAdmin: false,
};
console.log(PersonInfo.name);
//implementing interface
class EmpService {
    getEmployee() {
        return "john";
    }
}
//implements ---> for class to interface
class PermanentEmployee {
    constructor() {
        this.getExperience = "3YOP";
    }
    getBonus() {
        return 50000;
    }
    getNoticePeriod() {
        return 30;
    }
}
var employee1 = new PermanentEmployee();
console.log(employee1.getBonus());
console.log(employee1.getExperience);
console.log(employee1.getNoticePeriod());
class Freelancer {
    constructor() {
        this.getExperience = "1";
    }
    getBonus() {
        return 0;
    }
}
var freelancer1 = new Freelancer();
console.log(freelancer1.getBonus());
console.log("freelancer1 total exp " + " - " + freelancer1.getExperience);
//--------------------------------------------
//functions
function printMsg(id, name1) {
    console.log(id + " " + name1);
}
printMsg(24, "krishna");
//-----
let price;
price = 999;
price = "789";
/////useful for convert one type to another
var prodNumer = 1;
let id = prodNumer;
