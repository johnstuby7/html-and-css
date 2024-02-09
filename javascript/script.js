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

console.log(alex, sara, nancy);
if (alex > sara && alex > nancy) {
  console.log("ALex has the highest score");
} else if (sara > alex && sara > nancy) {
  console.log("sara has the highest score");
} else if (nancy > alex && nancy > sara) {
  console.log("nancy has the highest score");
} else {
  console.log("Maybe there was a match");
}

// Loop examples:
// Print numbers from 1 to 10 on the console
// DRY DO NOT REPEAT YOURSELF
var number = 15;

while (number < 50) {
  console.log(number);
  number++;
}

// print even numbers from 132 to 148 on the console
// print numbers between 25 and 100 divisible by 7 on the console
var number = 132;
while (number < 148) {
  console.log(number);
  number += 2;
}

var number = 132;
while (number <= 148) {
  if (number % 2 === 0) {
    console.log("divisible by 2");
    console.log(number);
  }
  number++;
}

var number = 25;
while (number <= 100) {
  if (number % 7 === 0) {
    console.log("DIvisible by 7");
    console.log(number);
  }
  number++;
}

// For Loop
// for(init; condition; step)
//  If the condition is correct, the code will run
for (var number = 1; number < 11; number++) {
  console.log(number);
}

// Print odd numbers from 132 to 148 on the console

for (var i = 132; i < 148; i++) {
  // If the result of i %2 isnt zero, then print result
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//  print numbers between 25 and 100, divisible by both 7 and 5 to the console.
for (var i = 25; i < 100; i++) {
  // If the result of i %7 or i % 5 is zero, then print result
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// CONTINUE AND BREAK
// Check the numbers from 1 to 10 and just print the numbers that can be divided by 2 on the console
// Continue cleans up the code slightly from above examples

for (var i = 1; i < 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
// Check the numbers from 1 to 10 and just print the first numbesr that can be divided by 2 on the console
console.log("break statement");
for (var i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// Functions:
// Reusable chunks of code
function sayHello() {
  console.log("hello World 55");
}

sayHello();

function doSomething() {
  console.log("Hello");
  console.log("Goodbye");
  console.log("Idiot");
}
doSomething();
doSomething();

// Function with Arguments:
function sayHi(name) {
  console.log("Hi", +" " + name);
}

sayHi("John");

function cube(number) {
  console.log(number * number * number);
}
cube(3);
cube(16);

function bmi(length, weight) {
  console.log(weight / (length * length));
}

bmi(1.8, 85);

// Return Statements
function cube(number) {
  if (number === 25) {
    return 25;
  }
  return number * number * number;
}

var num = cube(25);
console.log("this is num variable" + " " + num);

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var age = calculateAge(1992);
console.log(age);

function enterCafe(Age) {
  if (Age < 18) {
    return " You can not enter cafe";
  }
  return "you can enter cafe";
}

var cafe = enterCafe(17);
console.log(cafe);

// Function Decloration
function calculateAge(birthYear) {
  return 2024 - birthYear;
}

// Function Expression
var calculateAges = function (birthYear) {
  return 2024 - birthYear;
};

var age = calculateAges(1981);
console.log(age);

// Function Quiz
/*
1. Create a function called subtraction, this function takes two arguments, X and Y then subtracts one of these arguments
from the other and returns the result and prints it to console.

2. Declare a function called isOdd, this function takes one argument and it is going to check if the argument is a 
odd number, then return a boolean and console that

3.Declare a  function called addition, it takes one argument then it needs to sum up all numbers from 1 to that arugment
and return the total value . print to console
*/

function subtraction(x, y) {
  return y - x;
}

var result = subtraction(19, 97);
console.log(result);

function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var newResult = isOdd(15);
console.log(newResult);

function addition(number) {
  var res = 0;
  for (var i = 1; i <= number; i++) {
    res = res + i;
  }
  return res;
}

var AddResult = addition(3);
console.log(AddResult);

// Function Scope

function sayName() {
  var Name = "john";
  console.log(name);
}

var Name = "john";
console.log(Name);
sayName();

var Count = 18;
console.log(Count);

// defining something outside of a function, means that we still need to call it inside of the function for it to have access to that var
function writeCount() {
  console.log(Count);
}

// cant reach from child scope to parent scope.

// Nested function example:
// able to access the child scope of saybye by calling sayHi, could assign it to a variable and access it from outside
function sayNew() {
  var myWord = "hi there";
  console.log(myWord);
  sayBye();

  function sayBye() {
    console.log(myWord);
  }
}

sayNew();

// Example of different scopes, by defining var sentence both outside and inside, they both have different scopes,so they
// can have different values, thats why both values get printed
var sentence = "Hello World";
function saySentence() {
  var sentence = "bye bye";
  console.log(sentence);
}

saySentence();
console.log(sentence);

// example of function scope that wont work, second example doesn't have access to myX variable
// function writeNumber() {
//   var myX = 30;
//   console.log(myX);
// }

// function doSomething() {
//   console.log(myX);
// }

// writeNumber();
// doSomething();

// Arrays
var student1 = "claire";
var student2 = "john";
var student3 = "steven";
var student4 = "Bob";
var student5 = "Robert";

// Each element has a index, starting at 0 with claire and ending at 4 with veronica
var students = ["claire", "john", "Dan", "Hope", "veronica"];

console.log(students);
console.log(students[2]);

// TO update a array value:
students[0] = "joseph";
console.log(students);

// adding a new student to the array
students[6] = "Kenny";
console.log(students);

// Different ways of setting up a array of values
var cats = [];
var cats = new Array();

// arrays can hold a variety of data types at once
var commonData = ["john", 25, true, null];
commonData[1];

var test = ["ji", "hello", "goodbye"];
var test_length = test.length;
console.log(test_length);

// Array Methods:
var dogs = [];

var tests = ["ji", "hello", "goodbye"];
tests[3] = "newest";

// Push metho adds a new item to the end of the array
tests.push("dogs");
console.log(tests);

// pop method removes the last item from the end of the array
tests.pop();
console.log(tests);

// unshift adds new item to the beginning of a array
var cats = ["cat1", "mittens", "tiger"];
cats.unshift("cat4");
console.log(cats);

// shift method removes item from begining of array
cats.shift();
console.log(cats);

// IndexOf takes a argument and trys to find it in a array
console.log(cats.indexOf("mittens"));

//  Slice takes the index of values in a array and will return those specific items
var friends = ["timmy", "fred", "calib", "johny"];
var closeFriends = friends.slice(1, 3);
console.log(closeFriends);

/*
Array Quiz
Var books = ['harry potter', 'the hobbit', 'hunger games', 'little prince']
1. access the last element of the books array using the length of the array  and print it ot the console

var films = ['hobbit', 'hobbit2', 'hobbit3', 'lotr1', 'lotr2', 'lotr3', 'godfather1', 'godfather2', 'godfather3']
2. print the godfather3 film from the films array to the console
*/

var books = ["harry potter", "the hobbit", "hunger games", "little prince"];
console.log(books[books.length - 1]);

var films = [
  ["hobbit", "hobbit2", "hobbit3"],
  ["lotr1", "lotr2", "lotr3"],
  ["godfather1", "godfather2", "godfather3"],
];

// returns the last element of the array, then returns the last element of the selected array
console.log(films[2][2]);

// Array Iteration:
var bookList = ["harry potter", "the hobbit", "hunger games", "little prince"];

for (var i = 0; i < bookList.length; i++) {
  console.log(bookList[i]);
}

// Prints to the console for each element in the array, so will have 4 prints containing the entire array
bookList.forEach(function () {
  console.log(bookList);
});

// Array iteration test:
/*
1. create a array which indludes numbers between 0 and 20 by using the push method

2. by using this array you created in first question, you will print the numbers that can be divided by 5
to the console using the foreach method
*/

var numberArray = [];

for (var i = 1; i <= 20; i++) {
  numberArray.push(i);
}

console.log(numberArray);

numberArray.forEach(function (number) {
  if (number % 5 === 0) {
    console.log(number);
  }
});

// Javascript Objects

// one way of making a object
var gothKids = new Object();
gothKids.school;

// this method has a key value pair
var emoKids = {
  name: "Timmy",
  age: 44,
  school: "SAIT",
};
// How to get a certain value from the array
// cant use . notation if the value has a space in the name
console.log(emoKids["name"]);
console.log(emoKids.school);
