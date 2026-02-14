//interface :   one kind of contract for a class to make sure every member of interface is used/implemented in class.
interface IPersonInfo {
  name: string;
  loc: string;
  isAdmin: boolean;
}
//interface to variable
var PersonInfo: IPersonInfo = {
  name: "ravi",
  loc: "bglr",
  isAdmin: false,
};
console.log(PersonInfo.name);

//-------------------interface-class------------------------
//interface
interface IEmpService {
  getEmployee(): string;
  getName: string;
}
//implementing interface
class EmpService implements IEmpService {
  getName: "peter";
  getEmployee(): string {
    return "john";
  }
}
//-----------multiple interfaces implementing class------------------
interface IBonusService {
  getBonus(): number;
}
interface IPromotion {
  getExperience: string;
}
interface INoticePeriod {
  getNoticePeriod(): number;
}
//extends --- > for interface to interface
interface IEmployeeService extends IBonusService, IPromotion{

}
//implements ---> for class to interface
class PermanentEmployee implements IBonusService, IPromotion, INoticePeriod {
  getBonus(): number {
    return 50000;
  }
  getExperience = "3YOP";
  getNoticePeriod(): number {
    return 30;
  }
}
var employee1 = new PermanentEmployee();
console.log(employee1.getBonus());
console.log(employee1.getExperience);
console.log(employee1.getNoticePeriod());

class Freelancer implements IEmployeeService{
    getBonus(): number {
        return 0;
    }
    getExperience: string = "1";

}
var freelancer1 = new Freelancer();
console.log(freelancer1.getBonus());
console.log("freelancer1 total exp " + " - " +freelancer1.getExperience);

//--------------------------------------------
//functions
function printMsg(id:number,name1:string):void{
 console.log(id + " " + name1);
}
printMsg(24,"krishna");
//-----
let price:number | string ;
price=999;
price="789";

/////useful for convert one type to another
var prodNumer:unknown=1;
let id= prodNumer as number;