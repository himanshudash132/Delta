// for (let i = 1; i<= 10; i++) {
//     console.log(i);
// }

// print odd no.
// for (let i=1; i<=15; i=i+2) {
//     console.log(i);
// }
// for (let i=15; i>=1; i=i-2) {
//     console.log(i);
// }

// for (let i=1; i<=15; i++) {
//     if (i%2 != 0) {
//         console.log(i);
//     }
// }

// print even no.
// for (let i=2; i<=10; i=i+2) {
//     console.log(i);
// }

// for (let i=10; i>=2; i=i-2) {
//     console.log(i);
// }

// for (let i=1; i<=15; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//     }
// }



// infinite loops
// for (let i = 1; i >= 0; i++) {
//     console.log(i);
// }
// for (let i = 1; i <=5; i--) {
//     console.log(i);
// }
// for (let i = 1; ; i++) {
//     console.log(i);
// }



// print multiplication table of 5
// let n = prompt("enter a no.");
// n = parseInt(n);
// for (let i=5; i<=50; i=i+5) {
//     console.log(i);
// }
// for (let i=3; i<=30; i=i+3) {
//     console.log(i);
// }


// nested for loop
// for (let i = 1; i <= 3; i++) {
//     console.log("outer loop",i);
//     for (let j = 1; j <=3; j++) {
//         console.log(j);
//     }
// }

// while loops
// let i = 1;
// while(i <= 5) {
//     console.log(i);
//     i++;
// }

// favorite Movie
// let favMovie = "End Game";
// let guess = prompt("guess fav movie");
// while ((guess != favMovie) && (guess != 'quit')){
//     console.log("wrong");
//     guess = prompt("");
// }
// if (guess == favMovie) {
//     console.log("congrats")
// }
// else{
//     console.log("you quit")
// }

// let favMovie = "End Game";
// let guess = prompt("guess fav movie");
// while ((guess != favMovie) ){
//     if (guess == 'quit') {
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong try again ");
// }
// if (guess == favMovie) {
//     console.log("congrats")
// }


// break keyword
// let i = 1;
// while(i <= 5) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }


// loops with arrays
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(let i=0; i< fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
// for(let i=fruits.length - 1; i >= 0; i--) {
//     console.log(i, fruits[i]);
// }


// loops with nested arrays
// let heroes = [["ironman","spiderman","thor"], ["superman", "wonder women","flash"]];

// for (let i = 0; i < heroes.length; i++) {
//     console.log(i, heroes[i], heroes[i].length);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(j, heroes[i][j]);
//     }
// }
// let student = [["aman",95], ["shardha", 94.4], ["karan", 100]];

// for (let i = 0; i < student.length; i++) {
//     console.log(i, student[i], student[i].length);
//     for (let j = 0; j < student[i].length; j++) {
//         console.log(j, student[i][j]);
//     }
// }



// for-of loops
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruits of fruits) {
//     console.log(fruits);
// }
// for(i of fruits) {
//     console.log(i);
// }
// for(char of "himanshudash") {
//     console.log(char);
// }


// nested for-of loop
// let heroes = [["ironman","spiderman","thor"], ["superman", "wonder women","flash"]];

// for (list of heroes) {
//     console.log(list);
//     for (hero of list) {
//         console.log(hero);
//     }
// }

//  To-do App(only JS)
// let todo = [];

// let request = prompt("please enter your request");

// while(true) {
//     if (request == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if(request == "list") {
//         console.log("--------------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i])
//         }
//         console.log("--------------------");
//     }
//     else if (request == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if (request == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }
//     else {
//         console.log("wrong request");
//     }
//     request = prompt("please enter your request");
// }