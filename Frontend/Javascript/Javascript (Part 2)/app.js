// console.log("Hello world")
// console.log("Himanshu dash")
// let a = 10;
// let b = 5;
// let c = 2
// console.log("sum is : ", a + b + c);

// let pencilPrice = 10;
// let erasorPrice = 5;
// // let output = "total price is : " + (pencilPrice + erasorPrice) + " Pupees.";
// let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.` // back ticks
// console.log(output); 

// Arthmetic Operators
// let a = 10;
// console.log(a++); // 10
// console.log(++a); // 12

// Operators 
// let a = 10;
// let b =5;
// b = a;
// console.log(b);

// comparison operators
// let age = 18;
// console.log(age > 18);
// console.log(age >= 18);
// console.log(age < 18); 
// console.log(age <= 18); 
// console.log(age == 18); 
// console.log(age != 18); 
// let n = 5;
// let str = '5';
// console.log(n == str)
// console.log(n === str)

// Conditional Statements
// console.log("before my if statement");
// let age = 23;
// if (age >= 18){
//     console.log("you can vote");
// }
// if (age < 18){
//     console.log("you cannot vote")
// }
// console.log("after my if statement");

// let firstName = "aman";
// if (firstName == "shradha") {
//     console.log(`Welcome${firstName}`);
// }

// let age = 14;
// if (age >= 18) {
//     console.log("you can vote");
// }
// else if (age >= 18 ) {
//     console.log("you cannot vote");
// }
// else if (age < 18 ) {
//     console.log("you cannot vote2") ;
// }

// let marks = 75;

// if (marks >= 80) {
//     console.log("A+");
// }
// else if (marks >= 60) {
//     console.log("A");
// }
// else if (marks >= 33) {
//     console.log("B");
// }
// else if (marks < 33) {
//     console.log("F");
// }

// let age = 18;
// if (age >= 18) {
//     console.log("you can vote");
// }
// else {
//     console.log("you cannot vote");
// }


// let color = "red";

// //  Traffic Light System
// if (color === "red") {
//     console.log("stop! light color is red");
// }
// else if (color === "yellow") {
//     console.log("slow down. light color is yellow");
// }
// else if (color === "green") {
//     console.log("go. light color is green");
// }
// else {
//     console.log("traffic light is broken");
// }

// let marks = 45;

// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80 ) {
//         console.log("Grade : 0")
//     }
//     else {
//         console.log("Grade : A")
//     }
// }
// else {
//     console.log("Beter lusck next Time!")
// }

//  logical Operators
// let marks = 75;

// if (marks >= 33 && marks >= 80) {
//     console.log("pass");
//     console.log("A+");
// }
// if (marks >= 33 || marks >= 80) {
//     console.log("pass");
//     console.log("A+");
// }
// if (!(marks < 33)) {
//     console.log("pass")
//     console.log("A+");
// }
// if ((marks < 33 && marks <= 80) || !false) {
//     console.log("pass") ;
// }

// truthy & falsy
// if (false) {
//     console.log("it has true value");
// }
// else {
//     console.log("it has flase value");
// }
// if (true) {
//     console.log("it has true value");
// }
// else {
//     console.log("it has flase value");
// }
// if (0) {
//     console.log("it has true value");
// }
// else {
//     console.log("it has flase value");
// }
// if (1) {
//     console.log("it has true value");
// }
// else {
//     console.log("it has flase value");
// }

// Falsy values
// false, 0, -0, On (BigInt value), "" (empty string), null, undefined, NaN

// Truthy values
// Everything else

// let num = 0;

// if (num) {
//     console.log("num is not equal to 0");
// }
// else {
//     console.log("num is equal to 0");
// }

// Switch Statment

// let color = "red";

// switch(color) {
//     case "red" :
//         console.log("stop");
//         break;
//     case "yellow" :
//         console.log("slow down");
//         break;
//     case "green" :
//         console.log("GO");
//         break;
//     default :
//         console.log("Broken Light");
// }

// Alert & Prompt
// console.log("this is a simple log")
// console.error("this is a error msg")
// console.warning("this is a warning msg")
// alert("something is wrong!")
// let firstName = prompt("enter a name.")
// console.log(firstName)

// let firstName = prompt("enter first name")
// let lastName = prompt("enter last name")
// let msg = "Welcome" + firstName + lastName + "!";
// alert(msg);


let name = prompt("enter username")
let age = prompt("enter age")
alert(`${name} is  ${age} years old.`)