console.log("Hello from other file");

var nameValue = "John";

console.log(nameValue);
var age = 20;

var isRegistered = true;
console.log(isRegistered);

// Example of undefined variable and assigning a value to it
var job;
console.log(job);

job = "serial killer";
console.log(job);

// using multiple variables
console.log(nameValue + " " + age);

// Example to declare multiple variables on one line
var course, coursePass;
course = "Computer Science";
coursePass = false;
console.log(course, coursePass);

// javascript variable mutation

age = 34;
console.log(age);

age = "thirty four";
console.log(age);

// Alert: prints text to screen in a popup
alert(nameValue, age);

// Prompt popup example, has some text and buttons to interact with
var age = prompt("How old is he?");
console.log(age);

// Basic Operators:
var totalDistance, distanceJohn, distanceGuinness;

totalDistance = 20;
distanceJohn = totalDistance - 12;
console.log(distanceJohn);
distanceGuinness = totalDistance - 7;
console.log(distanceGuinness);
console.log(distanceGuinness * 2);
console.log(distanceGuinness / 3);

// Logical Operators:
var distanceToPub, distanceToHome;
distanceToPub = 5;
distanceToHome = 25;

var isCloser = distanceToPub < distanceToHome;
console.log(isCloser);

var a = 15;
var b = 9;

// Shows how to use && !! and !
var c = a > b || !(b != "9" && a == "15");
console.log(c);
