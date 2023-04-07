const phones = [
        {name: 'Samsung', price: 2000, storage: '32gb', color: 'black'},
        {name: 'Nokia', price: 22000, storage: '32gb', color: 'red'},
        {name: 'Symphony', price: 5500, storage: '32gb', color: 'blue'},
        {name: 'Iphone', price: 205000, storage: '32gb', color: 'black'},
        {name: 'Itel', price: 25000, storage: '32gb', color: 'black'} ,
]
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i]
        if(phone.price< cheapest.price){
            cheapest = phone
        }
    }
    return cheapest;
}
let cheapestOne = cheapestPhone(phones);
console.log(cheapestOne);