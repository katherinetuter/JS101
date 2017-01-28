//Take the contents of the sonnet div and
// place it in a variable

var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;

//Find and output the starting position of the 
//word "orphans"

var indexOfOrphans = sonnet;
var n = indexOfOrphans.search("orphans");
console.log("indexOfOrphans", indexOfOrphans)

//Output the number of characters in the sonnet

console.log("Length of sonnet: ", sonnet.length);

//Replace the first occurance of the string
// "winter" with "yuletide"

var winterSonnet = sonnet.replace("winter", "yuletide");

//Replace all occurances of the string "the"
// with "a large"

var aLargeSonnet = winterSonnet.replace(/the /g, "a large ");

//Set the content of the sonnet div 
//with the new string

element.innerHTML = aLargeSonnet;





