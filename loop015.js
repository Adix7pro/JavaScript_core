function loopes(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0){
            console.log(i);
        }
        else{
            console.log(i + " - bu toq son");
        }
    }
}

loopes(10);