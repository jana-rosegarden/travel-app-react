import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { LanguageContext } from "../App";
import Card from "../components/Card";
import Impressum from "../components/Impressum.jsx";
import { kontaktsData } from "../data/kontakts.js";

export default function Hause(){
    const { hause } = useParams();
    const {lang, setLang} = useContext(LanguageContext);

    const[isOpenDaten, setOpenDaten] = useState(false);
    const [isOpenImpressum, setOpenImpressum] = useState(false);

    function handleToggleDaten(){
        setOpenDaten(prev => !prev)
    };
    function handleToggleImpressum(){
        setOpenImpressum(prev => !prev)
    };

    let targetHause = kontaktsData[hause];
    
    return(
        <>
            <Card 
                key={targetHause.id}
                name={targetHause.name[lang]}
                adresse={targetHause.adresse[lang]}
                image={targetHause.image}
                telefons= {targetHause.telefons}
                />
             <Impressum 
                    toggleDaten={handleToggleDaten}
                    toggleImpressum={handleToggleImpressum}
                    showDaten={isOpenDaten}
                    showImpressum={isOpenImpressum}
             />
        </>
    )
}