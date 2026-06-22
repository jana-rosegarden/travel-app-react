
import { useParams } from "react-router-dom"
import { useContext, useState } from "react";

import { LanguageContext } from "../App.jsx";

import { categoryData } from "../data/categoryData.js";
import { categoryTranslations } from "../data/translations.js";

import Card from "../components/Card.jsx";
import Impressum from "../components/Impressum.jsx";

export default function Kategorieliste(){
    const {category} = useParams();

    const {lang, setLang } = useContext(LanguageContext);
    const { de, uk } = categoryTranslations;
    
    const[isOpenDaten, setOpenDaten] = useState(false);
    const [isOpenImpressum, setOpenImpressum] = useState(false);

    function handleToggleDaten(){
        setOpenDaten(prev => !prev)
    };
    function handleToggleImpressum(){
        setOpenImpressum(prev => !prev)
    };

    return(
        <> 
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
           
            <Impressum 
                toggleDaten={handleToggleDaten}
                toggleImpressum={handleToggleImpressum}
                showDaten={isOpenDaten}
                showImpressum={isOpenImpressum}
            />
        </>
    )
}