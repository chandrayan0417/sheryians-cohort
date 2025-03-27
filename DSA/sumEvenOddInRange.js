function sumEvenOddInRange(start, end) {
    if (start > end) [start, end] = [end, start]
    let even = 0;
    let odd = 0;
    for (i = start; i <= end; i++) {
        i % 2 == 0 ? even += i : odd += i;
    }
    return [start, end]
}

console.log(sumEvenOddInRange(1, 10));