//enum: is a kind of special class which represents group of constants.
//by default first value is 0 , increase later +1
enum custGroup{
    Sunday,
    Monday,
    Tuesday,
}
console.log(custGroup.Sunday);//it prints 0
console.log(custGroup.Monday);//it prints 1

enum NumbertoDay{
    Sunday = 7,
    Monday = 0,
    Tuesday = 1,
    Wednesday = 2
}
console.log(`value of Sunday ${NumbertoDay.Sunday}`);
//-------real use case 
enum Roles{
    admin =1 ,
    user=2,
    viewer=3
}
var myRoleId=1;
//case1
if(myRoleId==1){
    //dooesnot have any meaning
}
//case2
if(myRoleId==Roles.admin){
    //more understandable
}