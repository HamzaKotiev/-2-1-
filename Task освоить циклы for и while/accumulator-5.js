let arr = [23,354,525,141,149,1245,13,15,87,78]

let accumulatorEven = []

for (let i = 0; i < arr.length; i++) {
    const numbers = arr[i] % 2 ;
    if (numbers == 0) {
       accumulatorEven.push(arr[i])
    }
    
}
console.log(accumulatorEven)
