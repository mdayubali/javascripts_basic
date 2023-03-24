function reverseString(mystring){
    let reversed = ''
    for(let i = mystring.length -1; i>=0; i-- ){
        const result = mystring[i];
        reversed = reversed + result;
        console.log(result, reversed)
    }
    return reversed;
}
const mystring = "I am a good boy"
console.log(reverseString(mystring))