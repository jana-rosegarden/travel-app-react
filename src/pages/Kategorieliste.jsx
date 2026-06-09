
import { useParams } from "react-router-dom"
import { useContext } from "react";

import { LanguageContext } from "../App.jsx";

import { categoryData } from "../data/categoryData.js";
import { categoryTranslations } from "../data/translations.js";

import Card from "../components/Card.jsx";

export default function Kategorieliste(){
    const {category} = useParams();

    
    const {lang, setLang } = useContext(LanguageContext);
    const { de, uk } = categoryTranslations;
    

    return(
        <ul>
            <h1>{lang === "de"? `${de[category]} in der Nähe` : `${uk[category]} поблизу`}  </h1>
            {categoryData[category].map(item=>{
                return(
                    <Card
                        key={item.id}
                        name={item.name} 
                        adresse={item.adresse || undefined}
                        entfernung={item.entfernung || undefined}
                        image={item.image || undefined}
                        parken={item.parken || undefined}
                        oeffnungszeiten= {item.oeffnungszeiten || undefined }
                        price= {item.price || undefined}
                        info = {item.info || undefined }
                        alterVon = {item.alterVon || undefined} 
                        eintritt = { item.eintritt || undefined}
                        info= {item.info || undefined }
                        />
                )
            })}
            
        </ul>
    )
}