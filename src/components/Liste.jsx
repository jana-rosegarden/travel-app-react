import { useContext } from "react";

import { LanguageContext } from "../App";
import Minicard from "./Minicard.jsx";

import { notfallNummer } from "../data/kontakts.js";

export default function Liste(){
    const {lang, setLang} = useContext(LanguageContext);
    return(
        <ul>
            {notfallNummer.map(item=>{
                return(
                    <Minicard 
                    key={item.id}
                    name={item.name[lang]}
                    image={item.image}
                    telefon={item.telefon}
                    />
                )
            })}
        </ul>
    )
}