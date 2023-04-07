const names = ['babul','abul','kabul','malu','kalu','abul','babul','abul','kabul','jalu','peru'];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const result = removeDuplicate(names)
console.log(result)