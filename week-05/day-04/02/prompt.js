// DONE
// ======== You are given NOTHING to start with 😱 ========

var fs = require("fs");

var list = {};

fs.readFile("quotes.txt", "utf8", function(error, data) {


    // If the code experiences any errors it will log the error to the console.
    if (error) {
    return console.log(error);
    }
    
    // split array
    var dataArr = data.split("; ");
    for (var i = 0; i < dataArr.length; i++){
        var tempArr = dataArr[i].split("-");
        list[tempArr[1]] = tempArr[0];
        // console.log(tempArr[1]);
    }
    // console.log(list["Donald Trump"]);
    
    // create string input
    var str = "";
    for (var i = 2; i < process.argv.length; i++) {
        if (i === 2){
            str += process.argv[i];
        }
        else {
            str += " " + process.argv[i];
        }
    }
    console.log(str);
    // console.log(list["Donald Trump"]);
    
    if (list[str]){
        console.log(list[str].toString());
    } else {
        console.log("Quote does not exist")
    }

    });


