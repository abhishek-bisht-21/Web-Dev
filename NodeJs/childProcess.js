let cp = require("child_process");
//Functions of child process can be used using cp variable.

// console.log("Trying to open calculator");
// cp.execSync("calc");
// console.log("Openned Calculator");

// console.log("Trying to open VS code");
// cp.execSync("code");
// console.log("Openned vs code");


// console.log("Trying to open Instagram");
// cp.execSync("start chrome https://www.instagram.com/");
// console.log("Openned insta");

let output = cp.execSync("node abc.js");
console.log("Output is : " + output);