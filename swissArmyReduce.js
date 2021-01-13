//DOING IT WRONG: using Array.reduce as Array.filter
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b"]
const DUBevens = array.reduce((accum, elem) => {
    console.log(accum, elem)
    if (elem % 2 == 0) {//FILTER callback
        accum.push(elem * 2)//MAP might complicate the expression in here
        return accum
    } else {
        return accum
    }
}, [])
console.log(DUBevens)

//MAP AND FILTER RETURNS CAN BE SIMULATED BY THE ACCUMULATOR PARAMETER ADDED IN THE REDUCE FILTER