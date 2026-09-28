let person = {
    name: "John",
    lastName: "Wick",
    age: 30,
    job: "Assassin",
    isMarried: false,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

let { name, age } = person; // object destructuring
console.log(name);
console.log(age);