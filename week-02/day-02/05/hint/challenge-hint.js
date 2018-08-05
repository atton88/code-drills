// declare the variable we're storing the confirm dialogue in
 var confirmed = false;
var keyPress;
// create a key press listener

document.onkeyup = function(event) {

  keyPress = event.key.toLowerCase();
  console.log(keyPress);

  if (keyPress === "h") {
    confirmed = confirm("you pressed h?");
  }

  if (keyPress === "k" && confirmed) {
    alert("pressed h and k")
  }
}  

  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive


  // console log the key that the user pressed


  // check whether the user pressed the "h" key

    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener



  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
