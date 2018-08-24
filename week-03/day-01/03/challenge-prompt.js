// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

delay1 = setTimeout(function() {
    alert("Question 1")}, 5000
);

delay1();
console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

delay2 = setTimeout(function() {
    alert("Question 1")}, 15000
);

delay2();

// Remove the timer you just made for Question 2

clearTimeout(delay2);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

delay3 = setTimeout(function() {
    alert("Question 1")}, 15000
);

delay3();

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds

delay4 = setTimeout(function() {
    alert("Question 1")}, 16000
);

delay4();

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(delay3);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
delay5 = setTimeout(function() {
    alert("Question 5 Completed")}, 11000
);


