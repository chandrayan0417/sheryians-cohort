function calculateElectricityBill(unit) {
    if(unit <=0) "invalid input"
    let bill = 0;

    if(unit > 400){
        bill = bill + ((unit - 400) * 13)
        unit = 400;
    }
    if(unit > 200 && unit <= 400){
        bill = bill + ((unit -200) * 8)
        unit = 200;
    }
    if(unit > 100 && unit <= 200){
        bill = bill + ((unit - 100) * 6)
        unit = 100;
    }
    if(unit > 0 && unit <= 100){
        bill = bill + (unit * 4.2)
        unit = 0;
    }
    return bill.toFixed(1)
}

console.log(calculateElectricityBill(150));