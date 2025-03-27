function fibonacci() {
    let num = Number(require("prompt-sync")({ sigint: true })("Enter a number: "));
    let arr = [0, 1];
    let str = ""

    while (arr[arr.length - 1] + arr[arr.length - 2] <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    arr.forEach((value) => str += (value + " "))
    console.log(str.trimEnd());

}

fibonacci();