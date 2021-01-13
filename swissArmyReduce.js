//DOING IT WRONG: using Array.reduce as Array.filter
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b"]
const evens = array.reduce((accum, elem) => {
    console.log(accum, elem)
    if (elem % 2 == 0) {
        accum.push(elem)
        return accum
    } else {
        return accum
    }
}, [])
console.log(evens)