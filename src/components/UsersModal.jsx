import { useContext, useState } from "react";
import { UsersContext } from "../App";

import { users } from "../data/users.js";

export default function UsersModal(){
    const {currentUser, setCurrentUser} = useContext(UsersContext);
    const [inputUser, setInputUser] = useState("");
    

    function handleSubmit(e) {
         e.preventDefault();

        if (inputUser.trim() === "") return;

        setCurrentUser(inputUser);
        localStorage.setItem("user", inputUser);
    };

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
                                <h3>Willkommen an Board, {currentUser}! </h3> 
                                
                </>
                }
                
            </div>
        </>
    )
}