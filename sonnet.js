var element = document.getElementById("sonnet");

var sonnet = element.innerHtml;

console.log(sonnet);

var string = element.innerHtml;
var n = str.search(string);
console.log(n);

console.log("Length of sonnet: ", sonnet.length);

var newSonnet = sonnet.replace("winter", "yuletide");
console.log(newSonnet);

var newSonnet = sonnet.replace(/the/g, "a large");



