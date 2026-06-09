import { useContext } from "react";

import { translations  } from "../data/translations.js";
import { LanguageContext } from "../App.jsx";

export default function Card({name, adresse, entfernung, parken, image, oeffnungszeiten, price, alterVon, eintritt, info}){
    const {lang, setLang} = useContext(LanguageContext);
    const { de, uk } = translations;
    
    return(
        <>
            
            <li>
               
               {lang === "uk"? <h2> {uk.name} : {name.uk} </h2> : <h2>{de.name}: {name.de}</h2>}
               {image && <img src={image} alt={name[lang]} />}
               {info && <p> <span>{lang === "uk" ? uk.info : de.info} : </span>  {info[lang]} </p>}

               {adresse && <p> <span>{lang === "uk" ? uk.adresse : de.adresse}: </span>  {adresse[lang]} </p>}

               {entfernung && <p> <span>{lang === "uk"? uk.entfernung : de.entfernung} : </span> {entfernung} km</p>}

               {oeffnungszeiten && <p> <span>{lang === "uk"? uk.oeffnungszeiten : de.oeffnungszeiten} : </span> {oeffnungszeiten[lang]} </p> }

               {price && <p> <span>{lang === "uk" ? uk.price : de.price} :</span>  {price[lang]} </p>}

               {alterVon && <p> <span>{lang === "uk" ? uk.alterVon : de.alterVon} : </span>  {alterVon[lang]}</p>}

               {eintritt && <p> <span>{lang === "uk" ? uk.eintritt : de.eintritt} : </span> {eintritt[lang]} </p> }
            
               {parken && <p> <span>{lang === "uk"? uk.parken : de.parken} : </span> {parken[lang]} </p>}
               

            </li>
        </>
    )
}