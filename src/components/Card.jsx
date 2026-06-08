import { useContext } from "react";

import { translations  } from "../data/translations.js";
import { LanguageContext } from "../App.jsx";

export default function Card({name, adresse, entfernung, parken, image}){
    const {lang, setLang} = useContext(LanguageContext);
    const { de, ukr } = translations;
    
    if (adresse) {console.log(adresse)};
    console.log(parken)

    const testLang = "uk"
    return(
        <>
            
            <li>
               <h2>{de.name}: {name.de}</h2>
               <img src={image} alt="" />
               
               {adresse && <p> <span>{de.adresse}: </span>   </p>}
               
               <p> <span>{lang === "ukr"? ukr.entfernung : de.entfernung} : </span> {entfernung} km</p>
               <p> <span>{lang === "ukr"? ukr.oeffnungszeiten : de.oeffnungszeiten} : </span>  </p>
               <p> <span>{lang === "ukr" ? ukr.price : de.price} :</span>  </p>
               <p> <span>{lang === "ukr" ? ukr.info : de.info} :</span>  </p>
               <p> <span>{lang === "ukr" ? ukr.alterVon : de.alterVon} : </span>  </p>
               <p> <span>{lang === "ukr" ? ukr.eintritt : de.eintritt} : </span>  </p>
               <p> <span>{lang === "ukr"? ukr.parken : de.parken} : {parken[testLang]}</span>  </p>
               

            </li>
        </>
    )
}