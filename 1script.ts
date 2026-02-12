
// Typescript : Any typescript file is must be converted to js then only it is understood by browsers
//1.  npm install -g typescript      in terminal
//2.For auto conversion ts to js -> 
// // tsconfig.json ---->>
//{
//     "compileOnSave": true,
//     "compilerOptions": {
//         "target": "ES6",
//         "module": "commonjs",
//         "sourceMap": false
//     }
// }
//3.run build task OR (ctl+shft+b)
//build for single time use
//watch for all time just after saving it will auto builds,modifies js file


var firstName = "John";
console.log(firstName);

let address ={
    "country" : "India",
    "state" : "AP"
}
console.log(address);
