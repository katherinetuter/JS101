var element = document.getElementById("sonnet");

var sonnet = element.innerHTML;

console.log(sonnet);

var string = sonnet;
var n = string.search("orphans");
console.log(n);

console.log("Length of sonnet: ", sonnet.length);

var newSonnet = sonnet.replace("winter", "yuletide");
console.log(newSonnet);

var newSonnet = sonnet.replace(/the/g, "a large");
console.log(newSonnet);



