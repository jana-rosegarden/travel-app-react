export const users = [];

let newUser = localStorage.getItem("user");


if(localStorage.getItem("user")){
    users.push({name: localStorage.getItem("user"),
                id: localStorage.getItem("user").toLowerCase(),
                favorites: []
     })
};



