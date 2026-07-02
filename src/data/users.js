export const users = [];

let newUser = localStorage.getItem("user");
console.log(newUser)

if(localStorage.getItem("user")){
    users.push({name: localStorage.getItem("user"),
                id: localStorage.getItem("user").toLowerCase(),
                favorites: []
     })
};

console.log(users)

