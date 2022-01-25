// To interact with the operating system and give the features of operating system.
// js is just for instruction giving and the main work is performed by these modules.
let os = require("os");

// Architecture of the system we are using
console.log(os.arch())

// Platform which we are using
console.log(os.platform())

//Wifi Information
console.log(os.networkInterfaces());

// To know the load on the server
console.log(os.cpus());