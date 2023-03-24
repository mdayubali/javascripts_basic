function maxInArray(numbers){
        // console.log(numbers)
        let largest = numbers[0];
        for(let i = 0; i<numbers.length; i++){

            const index = i
            const element = numbers[index]
            if(element > largest){
                largest = element
            }
           
        }
        
        return largest;
       
}
let number = [2,244,41,4314,451,524];
console.log(maxInArray(number));