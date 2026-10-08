
import { useContext, useState } from "react";
import { UsersContext } from "../App.jsx";
import { FavoritesContext, LanguageContext } from "../App.jsx";
import { users } from "../data/users.js";

export default function Enstellungen(){
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    const {favorites, setFavorites} = useContext(FavoritesContext);
    const {lang, setLang } = useContext(LanguageContext);
    console.log(familyMember)
    
    //console.log(users) // für was????

    const [showDataBtnState, setShowDataBtnState] = useState(false);

    const currentUser = familyMember;
    
    const currentUserFromLocalStorage = JSON.parse(localStorage.getItem("users")).filter(item =>{
        return item.id === familyMember
    });
    

    function showData(){
        console.log("Data opened")
        setShowDataBtnState(prev => !prev)
    };

    let usersInfoMessage = {
        de: "Noch keiner da. Bitte den Benutzer auswählen",
        uk: "Поки що нема нікого. Будь-ласка, зареєструйтеся "
    };
    
    
    // 8.10
    const currentUsersInfo = familyMember? familyMember : usersInfoMessage[lang];

    console.log(currentUsersInfo);

    return(
        <>
            <h2>Einstellungen hier</h2>
            <ul>
                <li> 
                    <button onClick={showData}> Aktuellen Benutzer anzeigen   </button>
                    {showDataBtnState && <h4> {currentUsersInfo} </h4> }
                    
                </li>
                <li>
                    <button>Benutzer wechseln </button>
                </li>
                <li>
                    <button>Benutzername ändern </button>
                </li>
                
            </ul>
            
        </>
    )
}