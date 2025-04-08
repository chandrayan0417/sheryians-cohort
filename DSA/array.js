let arr = [14, 5, 8, 63, 78, 78, 69, 75]

//find max value
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i] // for min <
    }
    return max;
}

//number to arr 555 = [5,5,5]
function sepDigit(value) {
    return value.toString().split('').map(Number);
}

//find max and sec max value
function maxSecMax(arr) {
    let max = Math.max(arr[0], arr[1]);
    let secMax = Math.min(arr[0], arr[1]);;
    for (let i = 2; i < arr.length; i++) {
        if (max < arr[i]) {
            secMax = max;
            max = arr[i]
        } else if (secMax < arr[i] && arr[i] !== max) {
            secMax = arr[i]
        }
    }
    return [max, secMax]
}

//revers the array in two way
function reversArr1(arr) {
    let revArr = new Array()
    arr.forEach(element => {
        revArr.unshift(element)
    });
    return revArr
}

function reversArr2(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++
        j--
    }
    return arr;
}

//Array left Rotation by 1
function arrRotationL(arr) {
    let a = arr[0];
    arr.shift();
    arr.push(a)
    return arr
}

//Array Right Rotation by 1
function arrRotationR(arr) {
    let tem = arr[arr.length - 1];
    arr.pop()
    arr.unshift(tem);
    return arr
}

//Multi-Dimensional Arrays
function towDArr(num,size){
    let arr = Array.from({length:num}, ()=> Array(size).fill("hello"))
    console.log(arr);
}

//Jagged Array
function jaggedArr(num) {
    let prompt = require('prompt-sync')({ sigint: true })
    let arr = new Array(num)
    for (let i = 0; i < arr.length; i++) {
        let size = Number(prompt((i + 1.) + " Enter size: "))
        arr[i] = new Array(size)
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Number(prompt(`Enter ${j + 1} elements in ${i + 1} array`))
        }
    }
}

//Diagonal Sum of Array
function diagonalSum(mat) {
    let sum = 0
    for(let i = 0; i< mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(i==j || i+j == mat.length-1) sum += mat[i][j]
        }
    }
    return sum
}

//twoSum
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) return [i, j]
        }
    }
};