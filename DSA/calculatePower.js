function calculatePower(a, b) {
    if (a == 0 && b == 0) return "Undefined"
    let res = 1;
    for (i = 0; i < b; i++) {
        res = res * a;
    }
    return res;
}

console.log(calculatePower(3,3));