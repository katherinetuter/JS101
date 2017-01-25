//Take the contents of the sonnet div and
// place it in a variable

var element = document.getElementById("sonnet");
console.log("element", element);
var sonnet = element.innerHTML;
console.log(sonnet);

//Find and output the starting position of the 
//word "orphans"

var indexOfOrphans = sonnet;
var n = indexOfOrphans.search("orphans");
console.log("index of orphans: ", n);

//Output the number of characters in the sonnet

console.log("Length of sonnet: ", sonnet.length);

//Replace the first occurance of the string
// "winter" with "yuletide"

var winterSonnet = sonnet.replace("winter", "yuletide");
console.log(winterSonnet);

//Replace all occurances of the string "the"
// with "a large"

var aLargeSonnet = winterSonnet.replace(/the /g, "a large ");
console.log("final sonnet", aLargeSonnet);

//Set the content of the sonnet div 
//with the new string

element.innerHTML = aLargeSonnet;




