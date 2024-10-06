// Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.




function transformation(customer) {
    customer.map((cs) => {
        if (cs.purchases > 5) {
            cs.loyaltyPoints = cs.loyaltyPoints * 2
        }
    })
    return customer
}

const customer = [
    { name: "Emon", purchases: 10, loyaltyPoints: 5 },
    { name: "Karim", purchases: 4, loyaltyPoints: 3 },
    { name: "Halim", purchases: 6, loyaltyPoints: 1 },
];

console.log(transformation(customer));

