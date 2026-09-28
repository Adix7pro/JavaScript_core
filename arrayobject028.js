const product = [
    {
        name: "Iphone 14",
        cost: 1000
    },
    {
        name: "Iphone 14 Pro",
        cost: 1200
    },
    {
        name: "Iphone 14 Pro Max",
        cost: 1500
    }
]

console.log(`It's first product: ${product[0].name}`);
product.map(produc => {
    console.log(produc.name);
})