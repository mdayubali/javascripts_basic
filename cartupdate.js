const products = [
    {name: 'shirt', price: 1200, quantity: 2},
    {name: 'pent', price: 1700, quantity: 5},
    {name: 'shoe', price: 2800, quantity: 3},
    {name: 'belt', price: 700, quantity: 4},
]
function totalPrice(totalProduct){
    let sum = 0;
    for(let i = 0; i<products.length; i++){
        const product   = products[i];
        const totalCost = product.price * product.quantity
              sum       = sum + totalCost
    }
    return sum;
}
const expense = totalPrice(products)
console.log('total expense', expense)