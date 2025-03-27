let prompt = require("prompt-sync")({ sigint: true });

function isPrimeFn(n) {
    if (n <= 1) return "Not Prime"
    if (n == 2) return "Prime"
    if (n % 2 == 0) return "Not Prime"
    for (i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) return "Not Prime"
    }
    return "Prime"
}

let number = Number(prompt("Enter a number: "))

console.log(isPrimeFn(number));