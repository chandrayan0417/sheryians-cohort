function isHarshad(){
    let num = (require("prompt-sync")({ sigint: true }))("Enter a number : ")
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]) 
    }

    return num % sum === 0 ? "Harshad Number" : "Not Harshad Number"
}
console.log(isHarshad());