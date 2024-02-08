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

// Conditional Statements
// If Statement
var grade;
grade = 20;

if (grade < 40) {
  console.log("You cant go to next calss");
} else if (grade > 40 && grade < 45) {
  console.log("No next class for you, take a class to help");
} else {
  console.log("You can go to the next class");
}

// If a person is under 18, then he/ she cannot enter
// if they are between 18 but under 23 then they can enter but not drink
// older then 23 they can drink
var age;
age = 25;

if (age < 18) {
  console.log("You cant drink here, or come in");
} else if (age < 23) {
  console.log("You can enter, but no drinking");
} else {
  console.log("You can Drink");
}

// Ternary operator:
// Essentially a different way of doing a if/else statement
var grade = 42;

grade < 45
  ? console.log("you can not go to class")
  : console.log("you Can go to class");

var result = grade < 45 ? "failure" : "Success";
console.log(result);

if (grade < 45) {
  result = "failure";
} else {
  result = "success";
}

// Switch Statements
var day;
day = "monday";
switch (day) {
  case "saturday":
    console.log("i like saturday");
    break;
  case "monday":
    console.log("i do not like monday");
    break;
  case "friday":
    console.log("TGIF");
    break;
  default:
    console.log("What day is it?");
    break;
}

var grade = 42;
//  example of switch statement with ranges
switch (true) {
  case grade < 40:
    console.log("cant go to next class");
    break;
  case grade >= 40 && grade < 45:
    console.log("No next class for you, take a class to help");
    break;
  default:
    console.log("You can go to next class");
    break;
}

var alex = (90 + 80 + 95) / 3;
var sara = (89 + 76 + 98) / 3;
var nancy = (42 + 98 + 83) / 3;

console.log(alexAverage, saraAverage, nancyAverage);
if (alex > sara && alex > nancy) {
  console.log("ALex has the highest score");
} else if (sara > alex && sara > nancy) {
  console.log("sara has the highest score");
} else if (nancy > alex && nancy > sara) {
  console.log("nancy has the highest score");
} else {
  console.log("Maybe there was a match");
}
