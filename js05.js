let name = "Adham";
let city = "Tashkent";
let age = 25;
let prise = 1000;
let temperature = -30;


console.log(`Hello ${name} from ${city} !`);
console.log("Hello " + name + " from " + city + " !");
console.log(typeof name);//string
console.log(typeof city);//string
console.log(typeof age); //number
console.log(typeof prise); //number
console.log(typeof temperature); //number
console.log(typeof city);//string

// int float bitta narsa. ular javascriptda number deb ataladi.
let isStudent = true;
let isMarried = false;
console.log(typeof isStudent);
console.log(typeof isMarried);

let age1 = 22;
console.log(typeof age1); //number
console.log(age1<18);
console.log(age1>18);
if (age1<18){
    console.log("You are a minor.");
}
else{
        console.log("You are an adult.");
}
