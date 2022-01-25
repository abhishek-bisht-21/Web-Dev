// print in javascript
console.log("hello js");

// Variable declaration in javascript. 
let a;  // It tells that a variable has been created but doesnot tell which type of variable it is.
console.log(a); // By defaul it has undefined stored in it.

a = 10;
console.log(a);
a = 10.1;
console.log("variable contains ",a);
a = "Hello I am a string";
console.log(a);
a = 'Hello I am also a string';
console.log(a);



// Variable types in javascript -> Primitive Types : number,string,boolean,null




// Loops in Javascript
let number = 10;
for(let i=1;i<=number;i++){
	console.log(i);
}


// Is Prime
let num = 23;
let flag = true;
for(let i=2;i<=num-1;i++){
	if(num % i == 0){
		flag = false;
		break;
	}
}

if(flag == true){
	console.log(num, " is prime");
}else{
	console.log(num, "is not prime");
}

