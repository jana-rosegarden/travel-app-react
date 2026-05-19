
import { useParams } from "react-router-dom"
import { useContext } from "react";

import { LanguageContext } from "../App.jsx";

import { categoryData } from "../data/categoryData.js";
import { categoryTranslations } from "../data/translations.js";

import Card from "../components/Card.jsx";

export default function Kategorieliste(){
    const {category} = useParams();

    
    const {lang, setLang } = useContext(LanguageContext);
    const { de, ukr } = categoryTranslations;
    

    return(
        <ul>
            <h1>{lang === "de"? `${de[category]} in der Nähe` : `${ukr[category]} поблизу`}  </h1>
            {categoryData[category].map(item=>{
                return(
                    <Card
                        key={item.id}
                        name={item.name} 
                        adresse={item.adresse || undefined}
                        entfernung={item.entfernung}
                        image={item.image}
                        />
                )
            })}
            
        </ul>
    )
}