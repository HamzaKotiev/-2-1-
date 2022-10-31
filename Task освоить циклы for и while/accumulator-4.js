let arr = ['Адам','Исмаил','Аббас','Ильяс','Рамзан','Султан','Тама','Ибрагим','Алаудин','Борз']

let accumulator = []


for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 'А') {
        accumulator.push(arr[i])
    }
    
}

console.log(accumulator) 



