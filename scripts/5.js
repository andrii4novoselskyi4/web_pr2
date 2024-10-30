let orders = [
    {
        orderId: 1,
        customer: {name: "Андрій", email: "andrii.novoselskyi-pi2102@kep.nung.edu.ua"},
        items: ["Milka", "Revo"],
        total: 123.45
    },
    {
        orderId: 2,
        customer: {name: "Петро", email: "petruhalol@gmail.com"},
        items: ["яблука", "помідори", "огірки", "барабуля"],
        total: 44.95
    }
];

console.log(orders);

function getTotalSpentByCustomer(){
    let name = prompt("Покупець:");
    let customer = orders.filter(order => order.customer.name === name);
    let totalspent = customer.reduce((total, order) => total + order.total, 0);
    alert(totalspent)
}

getTotalSpentByCustomer();