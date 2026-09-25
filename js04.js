const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

rl.question("Enter your age: ", (age) => {
    checkAge(Number(age));
    rl.close();
});