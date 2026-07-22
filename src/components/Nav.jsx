import { Link } from "react-router-dom"
import { useState, useContext } from "react";

import deLang from "../assets/images/icons/de.webp";
import ukrLang from "../assets/images/icons/ukr.webp"

import { LanguageContext } from "../App.jsx";
import { EmergencyTelContext } from "../App.jsx";
import { UsersContext } from "../App.jsx";

import UsersModal from "./UsersModal.jsx";

import { translations } from "../data/translations.js";

export default function Nav(){
    const {lang, setLang} = useContext(LanguageContext);
    const {showNotfallNummern, setShowNotfallNummern} = useContext(EmergencyTelContext);
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    
    //const [isUserSubmit, setIsUserSubmit] = useState(localStorage.getItem("isUserSubmit") === "true");

    function toggleShowNotfallNummer(){
        setShowNotfallNummern(prev => !prev)
    };

    const usersFromLocalStorage = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null ;
    const currentUser = usersFromLocalStorage? usersFromLocalStorage.find(item=>{
        return item.id === familyMember
    }) : null;

    
    {/* 
    function submitUsersName(){
        
        setIsUserSubmit(true)
        localStorage.setItem("isUserSubmit", true)
        localStorage.setItem("user", currentUser)
    };
    */}
    
    function changeUsersName(){
        //setCurrentUser("");
        localStorage.removeItem("user");
        setFamilyMember(null);
    };
    
    
    return(
        <>
            <nav className="nav-haupt">
            <div className="div-hauses">
                <Link to="/"> {lang === "de" ? "Home" : "Головна"} </Link>
                <Link to="/house/paradiso"> {lang === "de" ? "Haus Monte Paradiso" : "Будинок Monte Paradiso: Яна та Анді"} </Link>
                <Link to="/house/benussia"> {lang === "de" ? "Haus Mattea Benussia" : "Будинок Mattea Benussia: Назар та батьки"}  </Link>
            </div>
            <button
                onClick={toggleShowNotfallNummer}
            > {translations[lang].notruf}
            </button>

            {currentUser && <>
                                <h2>{translations[lang].gruss}, {currentUser.username ? currentUser.username : currentUser.name}!</h2>
                                <button type="button"
                                onClick={changeUsersName}
                                >{translations[lang].changeUserBtn}</button>
                            </>
            }
            

            <div className="div-lang">
                <button
                  className="button-lang"
                  onClick={()=> setLang("de")}
                >
                    <img src={deLang} 
                    alt="Deutsch" 
                    className="button-lang__img"/>
                </button>

                <button
                    className="button-lang"
                    onClick={()=>setLang("uk")}
                >
                    <img src={ukrLang} 
                    alt="Українська" 
                    className="button-lang__img"/>
                </button>
            </div>
        </nav>
        <UsersModal 
             

        />
        </>
        
    )
}