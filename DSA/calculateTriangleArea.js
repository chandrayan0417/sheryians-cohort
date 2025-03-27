function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    if (a + b <= c || a + c <= b || b + c <= a) return "Invalid input"
        else{
            return (Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
    }
}

console.log(calculateTriangleArea(3,1,5));