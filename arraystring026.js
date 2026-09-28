let products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];

console.log(products);
console.log(products.length);
console.log(products[0]);
console.log(products[products.length - 1]);
console.log(products[2]);

console.log(products.indexOf("Tablet"));
products.push("Headphones");
products.push("Webcam");
console.log(products);
products.pop();
console.log(products);
let Prices = [1000, 500, 300, 200, 50, 30];
console.log(Prices);
console.log(Prices.map(price => price * 1.2));
