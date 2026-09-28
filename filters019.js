let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(number){
    let evenNumber = number % 2 === 0;
    if (evenNumber === true) {
        console.log(`${number} is even: ${evenNumber}`);
    }
        else {console.log(`${number} is even: ${evenNumber}. But it is not even.`)
    }
}); 