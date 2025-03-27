function currencyBreakdown(amount) {
    let currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
    const currencyCount = {}
    for (let note of currency) {
        currencyCount[note] =
            Math.floor(amount / note)
        amount %= note
    }

    for (let note of currency) {
        console.log(`₹${note} X ${currencyCount[note]}`);

    }
}
currencyBreakdown(4327)