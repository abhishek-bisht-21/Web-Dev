// Non-primitive => arrays, function,objects

//function definition --> No return type is needed in the beginning and we can return whatever we want from it.	
function sayHi(param){
	// console.log("Hello from sayHi");
	// console.log("param recieved", param);

	let rval = Math.random() > 0.5 ? true : "Less Than 0.5";
	// return "returned from function";
	return rval;
}


/*
//Function call
//We can pass anything in the argument as well.
sayHi(); 
sayHi(10);
sayHi("Wassupppp My Boiii")
sayHi([10,20,30,40,50]);

*/

let rVal = sayHi();
console.log("rVal",rVal);

