// Math.max(); Math.min()

function maxNumber(one,two, three){
    
    if(one>two && one> three){
        // let result = one;
        console.log(one)
    }
    else if(two>three && two> one){
        // let result = one;
        console.log(two)
    }else{
        console.log(three)
    }

}

maxNumber(1,2,3)

function maxiNumber(one,two, three){
    
    let result = Math.max(one,two, three)
    return result;

}
let finalResult = maxiNumber(1,2,5)
console.log(finalResult)