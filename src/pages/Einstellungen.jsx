
import { useContext, useState } from "react";
import { UsersContext } from "../App.jsx";
import { FavoritesContext, LanguageContext } from "../App.jsx";
import { users } from "../data/users.js";

import { translations } from "../data/translations.js";

import UsersModal from "../components/UsersModal.jsx";

export default function Enstellungen(){
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    const {favorites, setFavorites} = useContext(FavoritesContext);
    const {lang, setLang } = useContext(LanguageContext);
    

    const [showDataBtnState, setShowDataBtnState] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    
    //wenn User eingeloggt - zeige User
    const currentUserFromLocalStorage = familyMember? JSON.parse(localStorage.getItem("users")).find(item =>{
        return item.id === familyMember
    }) : null;
    console.log(currentUserFromLocalStorage); 

    function showData(){
        console.log("Data opened")
        setShowDataBtnState(prev => !prev)
    };

    let noUserInfoMessage = {
        de: "Noch keiner da. Bitte den Benutzer auswählen",
        uk: "Поки що нема нікого. Будь-ласка, зареєструйтеся "
    };
    //users Info: user - Name: Name, Benutzer Name: Benutzer Name
    
    let userInfoObj = ""
    if (familyMember) {
        userInfoObj = {
        name: currentUserFromLocalStorage.name, 
        benutzerName: currentUserFromLocalStorage.isUserNameRejected ? translations[lang].noChosen : currentUserFromLocalStorage.userName
        }
    };
    //console.log(translations[lang].userName);

    const currentUsersInfo = familyMember? {userInfoObj} : noUserInfoMessage[lang];
    

    function changeUsersName(){
        //setCurrentUser("");
        localStorage.removeItem("user");
        setFamilyMember(null);
        setFavorites([]);
    };
    
    function showModal(){
        setShowUserModal(prev => !prev);
    };
    console.log(familyMember)
    return(
        <>
            <h2>Einstellungen hier</h2>
            <ul>
                <li> 
                    <button onClick={showData}> Aktuellen Benutzer anzeigen   </button>
                    {showDataBtnState && <h4> {familyMember ? 
                        <> 
                           <p> {translations[lang].currentUserName}: {userInfoObj.name}</p> 
                           <p> {translations[lang].userName}: {userInfoObj.benutzerName} </p>
                        </>
                    : currentUsersInfo} </h4> }
                    
                </li>
                <li>
                    <button type="button" onClick={showModal}>Benutzer wechseln </button>
                    {showUserModal && < UsersModal /> }
                </li>
                <li>
                    <button>Benutzername ändern </button>
                </li>
                
            </ul>
            
        </>
    )
}