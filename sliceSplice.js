const elements = [12,232,2,23,24,11,13,14,15,156,9,82]
// slice will create a new array from an existing array and the array elements won't be change
const newElement = elements.slice(3,8)
console.log(newElement)
console.log(elements)

// splice will create a new array and these will be delete from the main array as well as the array will be change

const newItems = elements.splice(3,8)
console.log(newElement)
console.log(elements)