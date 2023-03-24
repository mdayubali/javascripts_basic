// Check typeof array or not
const checkArray = [2,4,1,5]
console.log(Array.isArray(checkArray))
// to check the element in the array 
const friends = [12,14,242,42]
console.log(friends.includes(12))
// another way
if(friends.indexOf(112) !==-1){
    console.log(true)
}else{
    console.log(false)
}
// Merge two array together
console.log(friends.concat(checkArray))