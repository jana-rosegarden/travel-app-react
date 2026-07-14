import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../App";

import { users } from "../data/users.js";

export default function UsersModal(){
    //const {currentUser, setCurrentUser} = useContext(UsersContext);
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    const [inputUser, setInputUser] = useState("");
    const [userName, setUserName] = useState("");

    const [modalMessageUserName, setModalMessageUserName] = useState("");
    //Branch select-form
    const [modalMessageFamilyMember, setModalMessageFamilyMember] = useState("");
    //const [familyMember, setFamilyMember] = useState("");
    

    const showUsernameForm =
    familyMember &&
    !familyMember.username &&
    !familyMember.isUserNameRejected;

    function handleSubmitUsername(e) {
         e.preventDefault();

        if (inputUser.trim() === "") return;
        
        setFamilyMember((prev) => {return {...prev, username: inputUser}});
        
        //Update current User:
        const currentUser = JSON.parse(localStorage.getItem("user"))
        const updatedUser = {...currentUser, username: inputUser};
        localStorage.setItem("user", JSON.stringify(updatedUser));
        //Update Users:
        const storedUsers = localStorage.getItem("users");
        const usersLocalStorage = JSON.parse(storedUsers);
        
        const updatedUsers = usersLocalStorage.map(item => 
        item.name === updatedUser.name ? {...item, username: inputUser} : item
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));


        setModalMessageUserName(`Willkommen an Board, ${inputUser}!`);
        setTimeout(()=>{
            setModalMessageUserName("")
        }, 2000);

        /*const newUser = {
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
        */
       
       
    };
    

    function handleSelectFamilyMember(e){
        const newUser = {
            id: e.target.value.toLowerCase(),
            name: e.target.value,
            isUserNameRejected: false,
            username: "",
            favorites: []
        };
        setFamilyMember(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));

        const storedUsers = localStorage.getItem("users");
        const usersLocalStorage = storedUsers? JSON.parse(storedUsers) : [];
        
        const userAlreadyExists = usersLocalStorage.some(item => {return item.id === newUser.id});

        if(userAlreadyExists === false){
            usersLocalStorage.push(newUser)
            localStorage.setItem("users", JSON.stringify(usersLocalStorage))
        };
    };
    
     function noUserNameWished(){
        
        const updatedUser = {
            ...familyMember,
            isUserNameRejected: true
       };

       setFamilyMember(updatedUser);

       localStorage.setItem(
        "user",
         JSON.stringify(updatedUser)
        );
     }

    
    return(
        <>
            <div>
                
                {!familyMember &&
                <form >
                    <label htmlFor="familyMember">Hallo! Wie heißt du?</label>
                    <select 
                    id="familyMember"
                    value=""
                    onChange={handleSelectFamilyMember}>
                        <option value="" disabled hidden>👤 Bitte wähle deinen Namen aus</option>
                        <option value="Andi">Andi</option>
                        <option value="Jana">Jana</option>
                        <option value="Marian">Marian</option>
                    </select>
                </form>
                }
                
                
                {familyMember && <article>
                            
                                    {showUsernameForm && 
                                    <>
                                    <h4>{`Hallo, ${familyMember.name}!`}</h4>
                                    <h5>Möchtest du Benutzername auswählen?</h5>
                                    <form onSubmit={handleSubmitUsername}>
                                        <label htmlFor="benutzerName"> Dein Benutzername hier: </label>
                        
                                        <input 
                                            type="text" 
                                            id="benutzerName"
                                            value={inputUser}
                                            onChange={(e)=>{setInputUser(e.target.value)      
                                            }}/>
                                        <input type="submit" 
                                            value="Absenden!" 
                                            disabled={inputUser.trim()===""}
                                            />
                                        {inputUser.trim()==="" && 
                                        <input type="button" 
                                               value="Nein, danke"
                                               onClick={noUserNameWished}
                                               />
                                        }
                                    </form>
                                    </>
                                  }
                                </article>}
                

                {modalMessageFamilyMember && <h4>{modalMessageFamilyMember}</h4>}
                {modalMessageUserName && <h4>{modalMessageUserName}</h4>}
            </div>
        </>
    )
}