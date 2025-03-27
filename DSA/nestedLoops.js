function printRightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ")
        }
        console.log();
    }
}

function printRightTriangleNumbers(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j} `)
        }
        console.log();

    }
}

function printRightTriangleAlphabets(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(65 + j) + " ")
        }
        console.log();
    }
}

function printInvertedRightTriangle(n) {
    for (let i = n; i >= 0; i--) {
        for (let j = i; j >= 1; j--) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function printMirroredRightTriangle(n) {
    let tem = n - 1;
    for (let i = 0; i < n; i++) {
        for (let j = tem; j > 0; j--) {
            process.stdout.write("  ");
        }
        for (let j = 0; j <= i; j++) {
            process.stdout.write("* ");
        }
        tem--;
        console.log();
    }
}

function printVShapePattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n * 2) - 1; j++) {
            if (i == j || i + j == n * 2) process.stdout.write("*")
            else process.stdout.write(" ")
        }
        console.log()
    }

}

function printXShapePattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == j || i + j == (n - 1)) process.stdout.write("*")
            else process.stdout.write(" ")
        }
        console.log()
    }
}