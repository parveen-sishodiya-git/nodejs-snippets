let twoNums = require("./userdefinedmodules/twoNumbers");

console.log("Welcome to node js");
console.log("I am running on node environment...");
console.log(2+3);

let sum = twoNums.add(12,3);
let subtration = twoNums.subtract(12,3);

console.log("Sum is "+sum);
console.log("Substration is "+subtration);