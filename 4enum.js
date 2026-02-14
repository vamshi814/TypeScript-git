//enum: is a kind of special class which represents group of constants.
//by default first value is 0 , increase later +1
var custGroup;
(function (custGroup) {
    custGroup[custGroup["Sunday"] = 0] = "Sunday";
    custGroup[custGroup["Monday"] = 1] = "Monday";
    custGroup[custGroup["Tuesday"] = 2] = "Tuesday";
})(custGroup || (custGroup = {}));
console.log(custGroup.Sunday); //it prints 0
console.log(custGroup.Monday); //it prints 1
var NumbertoDay;
(function (NumbertoDay) {
    NumbertoDay[NumbertoDay["Sunday"] = 7] = "Sunday";
    NumbertoDay[NumbertoDay["Monday"] = 0] = "Monday";
    NumbertoDay[NumbertoDay["Tuesday"] = 1] = "Tuesday";
    NumbertoDay[NumbertoDay["Wednesday"] = 2] = "Wednesday";
})(NumbertoDay || (NumbertoDay = {}));
console.log(`value of Sunday ${NumbertoDay.Sunday}`);
//-------real use case 
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["user"] = 2] = "user";
    Roles[Roles["viewer"] = 3] = "viewer";
})(Roles || (Roles = {}));
var myRoleId = 1;
//case1
if (myRoleId == 1) {
    //dooesnot have any meaning
}
//case2
if (myRoleId == Roles.admin) {
    //more understandable
}
