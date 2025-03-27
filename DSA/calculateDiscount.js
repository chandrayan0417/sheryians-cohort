function calculateDiscount(amount) {
    return amount < 0 ? "invalid input"
    : amount <= 5000 ? amount
    : amount <= 7000 ? amount * 0.95
    : amount <= 9000 ? amount * 0.90
    : amount * 0.80
}

console.log(calculateDiscount(7362));