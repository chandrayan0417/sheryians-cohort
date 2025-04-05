// selection short

let arr= [1,63,42,5,7,3,2];

for(let i = 0 ; i < arr.length- 1; i++){
    let temp = i;
    for(let j= i + 1; j < arr.length; j++){
        if(arr[temp] > arr[j]){
            temp = j
        }
    }
    if(i != temp){
        let k =  arr[i]
        arr[i] = arr[temp]
        arr[temp] = k
    }
}
console.log(arr);
