console.log("day3");

//objects

//should be able to do quiz with just the info below, not with the for in loop below that

var myCat = {
	tail: "long",
	age: 29,
	color: "blue",
	friends: ["zoe", "callan", "lauren"]
}
console.log("myCat before", myCat); //before adding new value and key to object

myCat.owner = "zoe"
console.log("myCat after", myCat); //displaying myCat array after adding owner object to it

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);

for(var myKey in myCat){
	console.log("myKey", myKey);
	console.log("values", myCat[myKey]);
}