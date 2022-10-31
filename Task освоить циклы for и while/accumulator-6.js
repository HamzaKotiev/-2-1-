let arr = [23,354,525,141,149,1245,13,15,87,78];

let accumulatorEven = [];

let i = 0
 while (i < arr.length) {
    const numberstwo = arr[i] % 2
    if(numberstwo > 0) {
        accumulatorEven.push(arr[i])
    }
    i++
 }

 console.log(accumulatorEven)
