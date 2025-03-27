function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? "Leap Year" : "Not a Leap Year";
}
console.log(isLeapYear(2100));