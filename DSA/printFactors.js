let prompt = require("prompt-sync")({ sigint: true });
function printFactors(n) {
    let string= "";
    for(i=1; i <= (n/2); i ++){
        if(n%i == 0) string = string + i + " "
    }
    console.log(string + n);

}
let number = Number(prompt("Enter a number: "))
printFactors(number)