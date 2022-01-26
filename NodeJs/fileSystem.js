// Anything we can do with a file. Create Update and Delete

let fs = require("fs");

// _________________________________________ READ_________________________________________________________________

let buffer = fs.readFileSync("abc.js"); // Will give us the data in a binary data format
console.log("Binary data:", buffer);
// To convert binary data into string use "+"
console.log("String data:"+buffer)



// ______________________________________CREATE__________________________________________________________________

fs.openSync("abc.txt",'w'); // It will create a file named abc.txt empty file

// If no file is there then will create a file. Basically it can Create/Write in a file.
// If a file exist then it will replace its content with the current given content.
fs.writeFileSync("abc.txt","Hum aaj boht khush hai") 


// ________________________________________UPDATE_____________________________________________________________
fs.appendFileSync("abc.txt","Bhai aaj itna khush kyun hai");





// ______________________________________ Folders/Directory________________________________________________

// ___________________________________________________Create____________________________________
// fs.mkdirSync("meriDirectory");
// fs.writeFileSync("meriDirectory/meriFile.txt","Mera content");

// _________________________________________DELETE______________________________________________

let content = fs.readdirSync("meriDirectory"); // Will give the name of the files inside the folder meriDirectory.
console.log(content); // Will print those file names
for(let i = 0;i<content.length;i++){ // One by one visit those files and later delete them.
	console.log("file ", content[i], "is removed");
	fs.unlinkSync("meriDirectory/"+content[i]); // for deleting the files, inside a folder.
}

// For deleting the complete folder
fs.rmdirSync("meriDirectory");




// fs.existSync -> If a file exist at a particular path or not, returns a boolean answer.
let doesPathExist = fs.existsSync("abc.txt");
console.log(doesPathExist);
doesPathExist = fs.existsSync("abcd.txt");
console.log(doesPathExist);
// fs.lstatSync -> Tells the given path is of a folder or a file.
let detailsObj = fs.lstatSync(__dirname+ "\\fileSystem.js");
let ans = detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirector();
console.log(ans);
