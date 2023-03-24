const elements = [12,232,2,23,24,11,13,14,15,156,9,82]
// slice will create a new array from an existing array and the array elements won't be change
// slice work with start and end index point
const newElement = elements.slice(3,8)
console.log(newElement)
console.log(elements)

// splice will create a new array and these will be delete from the main array as well as the array will be change
// splice work with start point and how many index/element you want to remove or create a new array using splice
// also you can add new elements after count number in the original array at the deleted placed

const newItems = elements.splice(3,4,1,2,3,4,5)
// the above example new array will create from index 3 with 4 number and add the rest element
console.log(newElement)
console.log(elements)