// Functions
// function hello() {
//     console.log("Hello");
// }



function printName() {
    console.log("Himanshu Dash");
}



function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}



function isAdult(age) {
    // let age = 18;
    if (age >= 18){
        // console.log("adult");
        return "adult";
    }
    else {
        // console.log("not adult")
        return "not adult";
    }
}

// isAdult();
// console.log(isAdult(19));
// print1to5();
// printName();
// hello();




// Functions with Arguments

// function printName(name, age) {
//     console.log(name, age);
// }
// printName("himanshu dash", 23);
// printName("Rahul", 23);
// printName("jayash");


// function sum(a, b) {
//     // console.log(a + b);
//     return a + b;
// }

// sum(12,12);
// sum(1222,1222);
// sum(1992,1992);
// sum(1882,88);
// let s = sum(12,12);
// console.log(s);
// console.log(sum(12,12));
// console.log(sum(sum(12,12), 12));
// console.log(sum(sum(1,1), 1));
// return Keyword




// Scope
// let sum = 54; // Global Scope

// function calSum(a, b) {
//     let sum = a + b; // Function Scope
//     console.log(sum);
// }

// calSum(1, 2);
// console.log(sum);



// Block Scope
// {
//     let a = 25;
// }

// console.log(a);

// for (let i = 1; i < 5; i++){
//     console.log(i);
// }

// console.log(i);

// let age = 25;
// if (age >= 18) {
//     let str = "adult";
// }

// console.log(str);








// lexical Scope
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

// outerFunc();

// fuunctions expresions
// const sum = function(a, b) {
//     return a + b;
// }

// let hello = function() {
//     console.log("hello");
// }

// console.log(sum(2, 3));
// console.log(hello());


// Higher Order Functions
// function multipleGreet(func, n) {     // Higher Order Functions
//     for( let i = 1; i <= n; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }
// multipleGreet(greet, 40);

// Higher Order Functions (Returns)
// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n % 2 == 0));
//         }
//     }
//     else if(request == "even") {
//         return function(n) {
//             console.log(n % 2 == 0);
//         }
//     }
//     else {
//         console.log("wrong request");
//     }
// }


// let func = oddEvenTest("odd");
// console.log(func(3));
// let func = oddEvenTest("even");
// console.log(func(2));

// Methods
const calsulator = {
    num: 55,
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
}

console.log(calsulator);
console.log(calsulator.num);
console.log(calsulator.add);
console.log(calsulator.add(2,2));
console.log(calsulator.sub);
console.log(calsulator.sub(2,2));
console.log(calsulator.mul);
console.log(calsulator.mul(2,2));