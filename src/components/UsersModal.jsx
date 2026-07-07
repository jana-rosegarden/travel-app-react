import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../App";

import { users } from "../data/users.js";

export default function UsersModal(){
    const {currentUser, setCurrentUser} = useContext(UsersContext);
    const [inputUser, setInputUser] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    

    function handleSubmit(e) {
         e.preventDefault();

        if (inputUser.trim() === "") return;

        setCurrentUser(inputUser);
        localStorage.setItem("user", inputUser);
        
        setModalMessage(`Willkommen an Board, ${inputUser}!`);
        setTimeout(()=>{
            setModalMessage("")
        }, 2000);

        
        const newUser = {
            id: inputUser.trim().toLowerCase(),
            name: inputUser,
            favorites: []
        };
        const storedUsers = localStorage.getItem("users");

        const usersLocalStorage = storedUsers? JSON.parse(storedUsers) : [];

        const alreadyExists = usersLocalStorage.some(item=>{
            return item.id === newUser.id
        });
        if(alreadyExists === false){
            usersLocalStorage.push(newUser)
            localStorage.setItem("users", JSON.stringify(usersLocalStorage))
        };
    };

    {/*
    useEffect(()=>{
        if (!showWelcome) return;
        
        

        let closeMessage= setTimeout(()=>{
            setModalMessage("")
        }, 2000);
        return()=>{
            
            clearTimeout(closeMessage)
        };
    },[currentUser]);
    */}
    return(
        <>
            <div>
                {!currentUser && 
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usersname"> Hallo! Wie heißt du? </label>
                        
                    <input 
                           type="text" 
                           id="usersname"
                           value={inputUser}
                           onChange={(e)=>{setInputUser(e.target.value)
                                           
                           }}/>
                    <input type="submit" 
                           value="Absenden!" 
                           disabled={inputUser.trim()===""}
                           />
                </form>
                }
                {currentUser && <>  
                                <h3>{modalMessage}</h3>
                </>
                }
                
            </div>
        </>
    )
}