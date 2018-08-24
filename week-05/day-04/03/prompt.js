Done

var inputArr = process.argv;
var fs = require("fs");

var name = "";
var quote = '"';

var index = inputArr.indexOf("said");
console.log(index);

for (var i = 2; i < index; i++) {
    if (i === 2) {
        name += inputArr[i];
    } else {
        name += " " + inputArr[i];
    }
}

console.log("Name: " + name);

for (var i = index + 1; i < inputArr.length; i++) {
    if (i === index + 1) {
        quote += inputArr[i];
    } else {
        quote += " " + inputArr[i];
    }
}
quote += '"';

console.log("Quote: " + quote);

var fullStr = "; " + quote + "-" + name;
console.log(fullStr);
fs.appendFile("quotes.txt", fullStr, function(err) {
    if (err) {
        console.log("Error");
    }
})
