let users = ["ali","vali","samuel","john"]
function table(users){
    for (let i = 0; i < users.length; i++){
        console.log(`${i} - Talabaning ismi: ${users[i]}`);
        if (i === users.length - 1){
            console.log("Talabalar ro'yxati tugadi");
        }
    }
}
table(users);