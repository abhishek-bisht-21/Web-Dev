// Object -> Group of Key :  Value Pair
// Key : value -> Property
// Key : function -> method

let cap = {

	name : "Steve",
	lastName : "Rogers",
	address: {
		city : "Manhattan",
		state: "New York"
	},
	age : 35,
	isAvenger: true,
	movies: ["first avenger","winter soldier","civil war"],
	sayHi : function(){
		console.log("Cap Says Hi");
	}


};

// GET Objects (Key,Value)
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[1]);
cap.sayHi();

console.log("``````````````````````````````````````````````````");

console.log("cap:" ,cap);
console.log("``````````````````````````````````````````````````");

// SET/UPDATE Objects (Key ,Value)
cap.age = 36;
cap.isAvenger = false;
cap.friends = ["Bruce","Tony","Peter"];

console.log("cap:" ,cap);

console.log("``````````````````````````````````````````````````");

// DELETE Key
delete cap.address;
console.log("cap: ", cap);

console.log("``````````````````````````````````````````````````");

// Looping in Objects
for(let key in cap){
	console.log(key, " : ", cap[key]);
}


// Difference in Square Bracket and Dot operator. Square Bracket puts the value of the variable inside the square bracket.
// Dot operator directly treats it as value.
let propKey = "age";
console.log(cap[propKey]); 