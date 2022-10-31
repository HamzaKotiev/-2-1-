
let arr = ['JavaScript','Python','Java','C=','PHP','C#','C','Go','Swift','Dart'];
let accumulator = []

let i = 0;

while (i < arr.length) {

    if (arr[i].length > 3) {
        accumulator.push(arr[i])
         
    }
    i++
}
console.log(accumulator) 
