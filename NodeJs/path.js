// It was created to give the nodeJS an system independent feel. Cause in windows and in Linux system
// The file paths are written differently, hence to reduce that complexity and give a system independent feel this module is created.


let path = require("path");
let fs = require("fs");

//___________________________ path.join basically does the work for us whether to put forward lash or backward lash. 
for(let i=0;i<=10;i++){
	let dirPathToMake = `lecture-${i}`;
	fs.mkdirSync(dirPathToMake);
	fs.writeFileSync(path.join(dirPathToMake ,"readme.md"), `# readme file for ${dirPathToMake}`);
}

// Gives the extention of the file
let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("extention", ext);

// Gives the basename of the file or folder
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);