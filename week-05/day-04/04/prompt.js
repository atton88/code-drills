// done
  var string = "ilovetocode";
  var character = "o"
  var output = [];
  
  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
    


// var index = string.indexOf(character)
//     while (index > 0) {

//       //first time through
//       if (!output[0]) {
//         for (var i = 0; i < string.length; i++) {
//           output.push(Math.abs(i - index));
//         }
//       }

//       // Every other time
//       else {
//         for (var j = 0; j < string.length; j++) {
//           if (Math.abs(j - index) < output[j]){
//             output[j] = Math.abs(j - index);
//           }
//         }
//       }
//       index = string.indexOf(character, index + 1);
//     }
//     return output;

// // ==========================================================
//   }
//   console.log("output: " + distanceFrom(string, character))
 

  
    for (var index = string.indexOf(character); index > 0;  index = string.indexOf(character, index + 1)) {

      //first time through
      if (!output[0]) {
        for (var i = 0; i < string.length; i++) {
          output.push(Math.abs(i - index));
        }
      }

      // Every other time
      else {
        for (var j = 0; j < string.length; j++) {
          if (Math.abs(j - index) < output[j]){
            output[j] = Math.abs(j - index);
          }
        }
      }
    }
    return output;

// ==========================================================
  }
  console.log("output: " + distanceFrom(string, character))
 