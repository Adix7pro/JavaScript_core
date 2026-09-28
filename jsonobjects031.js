const user = {
    name: "Adi",
    age: 22
}

const fs = require("fs");
const data = fs.readFileSync("user.json", "utf8");
const customuser = JSON.parse(data);


console.log(customuser);
console.log(customuser.name);
console.log(customuser.skills);