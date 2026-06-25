import { Link } from "react-router-dom"
import { useState } from "react";

import deLang from "../assets/images/icons/de.webp";
import ukrLang from "../assets/images/icons/ukr.webp"
import { useContext } from "react";

import { LanguageContext } from "../App.jsx";
import { EmergencyTelContext } from "../App.jsx";

import { translations } from "../data/translations.js";

export default function Nav(){
    const {lang, setLang} = useContext(LanguageContext);
    const {showNotfallNummern, setShowNotfallNummern} = useContext(EmergencyTelContext);

    function toggleShowNotfallNummer(){
        setShowNotfallNummern(prev => !prev)
    };
    
    return(
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
    )
}