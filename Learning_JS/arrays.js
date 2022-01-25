
// In JS Array can hold any kind of value -> number, boolean and string in the same array. Heterogeneous in nature

//  Array Declaration
let a = [1,2,3,4,5];
// array Printing
console.log(a);
console.log(a.length);

let i = 0;
while(i < a.length){
	console.log("element at idx", i ," is " ,a[i]);
	i++;
}

console.log("`````````````````````````````````````````````````````````````````````````````");

// Array Manipulations

//Push -> To add at the End and Unshift -> To add at the starting.
a.push("Last Value");
a.unshift("first Value");
console.log(a);

console.log("`````````````````````````````````````````````````````````````````````````````");

// Pop -> Delete from the  End and shift ->  Delete from the start
a.pop();
a.shift();
console.log(a);


console.log("`````````````````````````````````````````````````````````````````````````````");

//Slice
//start idx,ending idx. Original array will remain the same. It just returns an copy of original array
let partOfAnArray = a.slice(2,4);
console.log(partOfAnArray);
partOfAnArray = a.slice(2); // When we donot mention the end Index it returns from that idx till the end of the array
console.log(partOfAnArray);


// Splice
// It is a kind of generic delete. We are passing the index and from that idx how many ele we want to delete.
// It actually changes the original Array.
let afterDelete = a.splice(2,3);
console.log(a);

