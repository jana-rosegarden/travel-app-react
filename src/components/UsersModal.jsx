import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../App";

import { users } from "../data/users.js";

export default function UsersModal(){
    //const {currentUser, setCurrentUser} = useContext(UsersContext);

    const [inputUser, setInputUser] = useState("");
    const [modalMessageUserName, setModalMessageUserName] = useState("");
    //Branch select-form
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    //const [familyMember, setFamilyMember] = useState("");
    const [currentUsername, setCurrentUserName] = useState();
    const [modalMessageTwo, setModalMessageTwo] = useState("");
    const [closeElement, setCloseElement] = useState(false);

    function handleSubmitUsername(e) {
         e.preventDefault();

        if (inputUser.trim() === "") return;
        setCurrentUserName(inputUser);
        //localStorage.setItem("user", inputUser);
        setFamilyMember((prev) => {return {...prev, username: inputUser}});
        
        //Update current User:
        const currentUser = JSON.parse(localStorage.getItem("user"))
        const updatedUser = {...currentUser, username: inputUser};
        localStorage.setItem("user", JSON.stringify(updatedUser));


        //localStorage.setItem("user", JSON.stringify(familyMember))
        const storedUsers = localStorage.getItem("users");
        const usersLocalStorage = JSON.parse(storedUsers);
        //const currentUser = familyMember;
        console.log(updatedUser)
        const updatedUsers = usersLocalStorage.map(item => 
        item.name === updatedUser.name ? {...item, username: inputUser} : item
       );
       localStorage.setItem("users", JSON.stringify(updatedUsers));



       //localStorage.setItem("users", JSON.stringify(updatedUsers))
       //localStorage.setItem("users", "test")
       

        setModalMessageUserName(`Willkommen an Board, ${inputUser}!`);
        setTimeout(()=>{
            setModalMessageUserName("")
        }, 2000);

        setCloseElement(true);
      

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
    

    function toggleElement(){
        
        setCloseElement(true);
        setModalMessageTwo(`Willkommen on Bord, ${familyMember.name}`)
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
                {/*
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
                */}

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
                            
                                    {!closeElement && 
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
                                               onClick={toggleElement}
                                               />
                                        }
                                    </form>
                                    </>
                                  }
                                </article>}
                

                {modalMessageTwo && <h4>{modalMessageTwo}</h4>}
                {modalMessageUserName && <h4>{modalMessageUserName}</h4>}
            </div>
        </>
    )
}