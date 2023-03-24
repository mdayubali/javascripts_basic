function reverseWord(myword){
    const words = myword.split(' ')
    // console.log(words)
    const result = []
    for(let i = words.length-1; i>=0; i--){
        const element = words[i]
        result.push(element)
    }
    const reversed = result.join(' ')
    return reversed;
}
const myword = "My name is Ayub"
console.log(reverseWord(myword))