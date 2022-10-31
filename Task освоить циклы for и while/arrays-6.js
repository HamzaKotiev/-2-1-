let arr = [23,354,525,141,149,1245,13,15,87,78]

for (let i = 0; i < arr.length; i++) {
    const numbers = arr[i] % 2 ;
    if (numbers == 0) {
        console.log(arr[i])
    }
    
}
let i = 0
 while (i < arr.length) {
    const numberstwo = arr[i] % 2
    if(numberstwo > 0) {
        console.log(arr[i])
    }
    i++
 }
