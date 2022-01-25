
let singleQuotes = 'single quotes ki string';
let doubleQuotes = "double quotes ki string";

console.log(singleQuotes);
console.log(doubleQuotes);

let char = singleQuotes.charAt(4);
let subStr = singleQuotes.substring(2,8);
let ascii = singleQuotes.charCodeAt(4);
console.log(char);
console.log(subStr);
console.log(ascii);

console.log("``````````````````````````````````````````````````````````````````````````````````````");

// split and join

let arrStr = singleQuotes.split("i");
console.log(arrStr);
arrStr = singleQuotes.split(" "); // Split the string on basis of spaces
console.log(arrStr);
let str = arrStr.join("$"); // joined the string by inserting "$"
console.log(str);

console.log("``````````````````````````````````````````````````````````````````````````````````````");

// Trim -> removes the extra white spaces
let str1 = "                   How are you             ";
str1 = str1.trim();
console.log(str1);

