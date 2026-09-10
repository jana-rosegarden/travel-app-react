
import { useContext, useState } from "react";
import { UsersContext } from "../App.jsx";
import { FavoritesContext } from "../App.jsx";
import { users } from "../data/users.js";

export default function Enstellungen(){
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    const {favorites, setFavorites} = useContext(FavoritesContext);

    const [showDataBtnState, setShowDataBtnState] = useState(false);

    const currentUser = familyMember;
    
    const currentUserFromLocalStorage = JSON.parse(localStorage.getItem("users")).filter(item =>{
        return item.id === familyMember
    });
    

    function showData(){
        console.log("Data opened")
        setShowDataBtnState(prev => !prev)
    };


    return(
        <>
            <h2>Einstellungen hier</h2>
            <ul>
                <button onClick={showData}>{showDataBtnState && "Aktuellen Benutzer anzeigen"} Aktuellen Benutzer anzeigen </button>
                <button>Benutzer wechseln </button>
                <button>Benutzername ändern </button>
            </ul>
            
        </>
    )
}