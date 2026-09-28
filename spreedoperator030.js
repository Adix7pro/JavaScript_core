const cars = {
    modul: "Toyota",
    price: "$ 23000",
    color: "black"
};
const owners = {
    ...cars, // spreed operators
    owner : "Adham Choriyev"
};
console.log(owners)