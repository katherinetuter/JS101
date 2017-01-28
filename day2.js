// //switch statement

// //var day = "Friday";

// //switch(day){
// 	//case "Monday":
// 		//console.log("Booo");
// 		//break;
// 	//case "Friday":
// 		//console.log("party");
// 		//break;
// 	//default: 
// 	//	console.log("not Monday");
// //}

// //if(day === "Monday"){
// //	console.log("Booo");
// //}else if(day === "Friday"){
// //console.log("party");	
// //} else{
// //console.log("not Monday");
// //}

// var fruit = ["cherries", "apples", "bananas"]
// var fruitString = fruit.join();
// console.log("fruitString", fruitString);

// var catColors = 'green,red,yellow,black';
// var catColorsArray = catColors.split("yellow");
// console.log("catColorsArray", catColorsArray);

// var reverseFruit = fruit.reverse();
// console.log(reverseFruit);

// var alphaFruit = fruit.sort();
// console.log(alphaFruit);

// var nums = [9,6,8,2,4,11,66] //2,4,6,8,9,11,66
// var numSort = nums.sort(
// 	function(a,b){
// 		return a-b;
// }
// );
// console.log("numSort", numSort);

// var mixedCrap = ["r", "m", 33,9];
// console.log("???", mixedCrap.sort());

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// console.log("animals index", animals.indexOf("fish"));

// var animals2 = animals.slice(2,4);
// console.log("animals2", animals2);

// animals.splice(1,1);
// console.log("no turtles", animals);
// ;
// var colors = ["red", "blue", "gold", "pink", "orange"];
// //sort, reverse, then make a string
// //sort
// colors.sort();
// console.log(colors);

// //reverse
// colors.reverse();
// console.log(colors);

// //join with cat
// colors.join("cat");
// console.log(colors);


// //same as code above but chained together
// var finalAnswer = colors.sort().reverse().join("cat");
// console.log(finalAnswer);

// for(var i=0; i<5; i++){
// 	console.log("i", i);
// }
// //for loop pattern is for(var letter=index#, .length, letter++)

// var fruit = ["cherries", "apples", "bananas"];
// for(var j=0; j<fruit.length; j++){
// 	console.log("fruit", fruit[j]);
// }

//write a for loop that increments by 10 each time = 10, 20, 30, 40...100

for(var i=0; i<101; i+=10){
	console.log("i plus 10", i);
}






