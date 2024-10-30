let products = [
    {productId: 1, name: "Шоколадка фістеблс", price: 130.21},
    {productId: 2, name: "Кефір ПростоНаше", price: 40.40}
];

let purchases = [
    {purchaseId: 1, productId: 1, quantity: 100},
    {purchaseId: 2, productId: 2, quantity: 5}
];

function getTotalSales(){
    let sum = [];

    purchases.forEach(purchase => {
        let product = products.find(p => p.productId === purchase.productId)
        if(product){
            sum.push({productName: product.name, price: product.price*purchase.quantity}); 
        }
    });
    console.log(sum);
}

getTotalSales();