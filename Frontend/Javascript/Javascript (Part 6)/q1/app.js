function printPoem() {
    console.log("The quiet pause before the sun,\nwhen the sky is not quite blue.\nA whisper of light on the eastern edge,\na world still cloaked in dew.\nThe streetlights hold their yellow vigil,\nfading against the coming glow,\nand the last of the city’s deep quiet\nis a soft and secret flow.\nThen, the world begins to sharpen.\nA far-off bird, a single note,\na shifting in the slumbering earth\nlike a breath from a waiting throat.\nThis is not the day’s arrival,\nbut the prelude, soft and slow.\nThe promise held in waiting air,\nthat everything will grow.");
}

function avg(a, b, c) {
    console.log((a + b + c)/3)
}

function rollDice() {
    let rand = Math.floor(Math.random()*6) + 1;
    console.log(rand)
}

function multiplicationTable(n) {
    for (let i = 1; i<= 10; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}
 
function sun1toN(n) {
    sum = 0
    for (let i = 1; i<= n; i++) {
        sum += i
    }
    return sum;
}
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i]
    }
    return result;
}











// rollDice();

// avg(1,2,3);

// printPoem();

// multiplicationTable(13);

// console.log(sun1toN(100));

// console.log(concat(["a","b","c","d","e","a","b","c","d","e","a","b","c","d","e"]));


let greet = "hello"; // Global scope

function changeGreet() {
    let greet = "namaste";  // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); // lexical scope
    }
}

console.log(greet);
changeGreet();