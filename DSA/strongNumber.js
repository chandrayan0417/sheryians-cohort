let prompt = require("prompt-sync")({ sigint: true });
let num = prompt("Enter a Number : ")
let numCopy = num;
let sum = 0;

function sepDigit(value) {
    return value.toString().split('').map(Number);
}

let arr = sepDigit(num)
for (let i = 0; i < arr.length; i++) {
    let fact = 1;
    for (let j = 1; j <= arr[i]; j++) {
        fact *= j;
    }
    sum += fact;
}

numCopy == sum ? console.log("Strong Number") : console.log("Not a Strong Number");