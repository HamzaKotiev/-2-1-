

let arr = [1,-2,15,-4,13,-6,7,8,9]
let accumulator = 0

let i = 0;

while (i < arr.length) {

    if (arr[i] > 0) {
       let sum = accumulator + arr[i];
     accumulator = sum    
    }
    i++
}

console.log(accumulator) 