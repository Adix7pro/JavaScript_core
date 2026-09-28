let numbers = [1,2,3,4,5,6,7,8,9,10];
let doubleNumbers = numbers.map(function(number){
    console.log(number);
    return number * 2;
});
console.log(doubleNumbers);