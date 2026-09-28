let users = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jim", age: 25},
    {name: "Jill", age: 35},
    {name: "Jack", age: 30}
];


//console.log(users.find(user => user.age === 30));

users.forEach(user => {
let age = user.age;
if (age === 30){
        console.log(`User ${user.name} is 30 years old.`);
    }
});