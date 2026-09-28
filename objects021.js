// Object
// Object — ma'lumotlarni key-value ko‘rinishida saqlaydi.

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
delete person.isMarried; // delete — object ichidagi propertyni o‘chiradi.
// BU YERDA 
// name, age, job — property.

console.log(person.name);
console.log(person.age);
console.log(person.job);