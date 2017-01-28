console.log("day3");

//objects

//should be able to do quiz with just the info below, not with the for in loop below that

// var myCat = {
// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["zoe", "callan", "lauren"]
// }
// console.log("myCat before", myCat); //before adding new value and key to object

// myCat.owner = "zoe"
// console.log("myCat after", myCat); //displaying myCat array after adding owner object to it

// console.log("Age of cat: ", myCat.age);
// console.log("Color of cat: ", myCat["color"]);

// for(var myKey in myCat){
// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);
// }

var nuggetElement = document.getElementById("nuggetShack");
var availElement = document.getElementById("availForPurchase");
console.log("nuggetElement", nuggetElement);
console.log("availElement", availElement);

console.log("nuggetShack", nuggetShack);

//functions are supposed to be reusable
function nuggetMaker(animal){
	var myNugget = "breading " + animal + " breading";
	return myNugget; //return gets whatever you assigned to return out of the function
}

function shackMaker(typeOfNugget){
	availElement.innerHTML += typeOfNugget;
}

var chickenNuggets = nuggetMaker("chicken");
shackMaker(chickenNuggets);

var lobsterNuggets = nuggetMaker("lobster");
shackMaker(lobsterNuggets);

var tablets = nuggetMaker("myComputer");
shackMaker(tablets);

var shackName = "callan's shack";
nuggetElement.innerHTML += shackName;






//defining the function
// function myLooper(myArray){
// 	for(var i = 0; i < myArray.length; i++){
// 		console.log(myArray[i]);
// 	}
// }

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// var colors = ["red", "blue", "gold", "pink", "orange"]

// //calling the function myLooper
// myLooper(animals);
// myLooper(colors);

