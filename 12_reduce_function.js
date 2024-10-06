// Task: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview



let shoe = [
    { price: 2, quantity: 2 },
    { price: 3, quantity: 3 },
    { price: 2, quantity: 1 },
];

function calculateTotal(product) {
    const total = product.reduce((acc, prod) => {
        acc = acc + (prod.price * prod.quantity)
        return acc
    }, 0)
    return total
}

console.log(calculateTotal(shoe));