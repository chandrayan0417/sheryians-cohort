function isbnNum() {
    let prompt = require("prompt-sync")({ sigint: true });
    let num = prompt("Enter 10 digit number : ")

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += (parseInt(num[i]) * (i + 1))
    }

    if(num.length == 10) return sum % 11 == 0 ? "Valid ISBN" : " Invalid ISBN"
    else return "type a valid number"
}

console.log(isbnNum());
