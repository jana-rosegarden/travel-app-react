import { useContext, useState } from "react";
import { UsersContext } from "../App";

export default function UsersModal(){
    const {currentUser, setCurrentUser} = useContext(UsersContext);
    const [isUserSubmit, setIsUserSubmit] = useState(false);
    
    function getUser(e){
        setCurrentUser(e.target.value)
        e.target.value = ""
    };

    function showUsersName(){
        setIsUserSubmit(true)
    };
    function changeUsersName(){
        setIsUserSubmit(false)
        setCurrentUser("")
    };

    localStorage.setItem("user", currentUser);

    
    return(
        <>
            <div>
                {!isUserSubmit && 
                <form>
                    <label htmlFor="usersname"> Hallo! Wie heißt du? </label>
                        
                    <input 
                           type="text" 
                           id="usersname"
                           value={currentUser }
                           onChange={getUser}/>
                    <input type="button" 
                           value="Absenden!" 
                           onClick={showUsersName}
                           />

                </form>
                }
                {isUserSubmit && <> 
                                <h3>Willkommen an Board, {currentUser}! </h3> 
                                <button type="button"
                                onClick={changeUsersName}
                                >Name ändern</button>
                </>
                }
                
            </div>
        </>
    )
}