import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../App";

import { users } from "../data/users.js";
import { translations } from "../data/translations.js";

import { LanguageContext } from "../App";

export default function UsersModal(){
    //const {currentUser, setCurrentUser} = useContext(UsersContext);
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    const {lang, setLang} = useContext(LanguageContext);

    const {de, uk} = translations;
    
    const [inputUser, setInputUser] = useState("");
    const [userName, setUserName] = useState("");
    const [modalMessageUserName, setModalMessageUserName] = useState("");
    
    //Branch select-form
    
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
        }, 1500);

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
                    <label htmlFor="familyMember">{translations[lang].grussFormUser}</label>
                    <select 
                    id="familyMember"
                    value=""
                    onChange={handleSelectFamilyMember}>
                        <option value="" disabled hidden>👤 {translations[lang].chooseNameFormUser} </option>
                        <option value={translations[lang].userAndi}>{translations[lang].userAndi}</option>
                        <option value={translations[lang].userJana}>{translations[lang].userJana}</option>
                        <option value={translations[lang].userMarian}>{translations[lang].userMarian}</option>
                        <option value={translations[lang].userVera}>{translations[lang].userVera}</option>
                        <option value={translations[lang].userIhor}>{translations[lang].userIhor}</option>
                        <option value={translations[lang].userNazar}>{translations[lang].userNazar}</option>
                    </select>
                </form>
                }
                
                
                {familyMember && <article>
                            
                                    {showUsernameForm && 
                                    <>
                                    <h4>{`${translations[lang].gruss}, ${familyMember.name}!`}</h4>
                                    <h5>{translations[lang].frageUserName}</h5>
                                    <form onSubmit={handleSubmitUsername}>
                                        <label htmlFor="benutzerName"> {translations[lang].userNameInput}: </label>
                        
                                        <input 
                                            type="text" 
                                            id="benutzerName"
                                            value={inputUser}
                                            onChange={(e)=>{setInputUser(e.target.value)      
                                            }}/>
                                        <input type="submit" 
                                            value={translations[lang].absendenBtn} 
                                            disabled={inputUser.trim()===""}
                                            />
                                        {inputUser.trim()==="" && 
                                        <input type="button" 
                                               value={translations[lang].userNameAblehnenBtn}
                                               onClick={noUserNameWished}
                                               />
                                        }
                                    </form>
                                    </>
                                  }
                                </article>}
                

                
                {modalMessageUserName && <h4>{modalMessageUserName}</h4>}
            </div>
        </>
    )
}