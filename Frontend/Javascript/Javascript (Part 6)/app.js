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
const sum = function(a, b) {
    return a + b;
}

let hello = function() {
    console.log("hello");
}

console.log(sum(2, 3));
console.log(hello());


// Higher Order Functions




// Higher Order Functions (Returns)




// Methods