function abundantNumber(){
    let num = Number((require("prompt-sync")({ sigint: true }))("Enter a number : "))
    let sum = 0;
    for(let i=1; i <= (num/2); i ++){
        do{
            if(num % i == 0) sum += i
        }while(sum < num)
    }
    return sum > num ? "Abundant Number" : "Not A Abundant Number"
}

console.log(abundantNumber());