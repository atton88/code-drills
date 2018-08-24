// done

// Given a number, create a function that console.logs every number up until that number. If a number is a multiple of three, console.log("fizz"). If it is a multiple of five, console.log("buzz"). If it is a number of both, console.log("fizzbuzz").

// Run your script through the command line using process.argv to pass whatever number you choose.

function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
var str = "";
for (var i = 1; i <= n; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        str = "fizzbuzz";
    }

    else if (i % 3 === 0) {
        str = "fizz";
    }

    else if (i % 5 === 0) {
        str = "buzz";
    }
    console.log(i + " " + str);    

}


// ==========================================================
  
}

fizzBuzz(process.argv[2]);

