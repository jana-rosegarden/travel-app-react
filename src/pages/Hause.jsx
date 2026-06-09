import { useParams } from "react-router-dom";
import { useContext } from "react";

import { LanguageContext } from "../App";
import Card from "../components/Card"
import { kontaktsData } from "../data/kontakts.js";

export default function Hause(){
    const { hause } = useParams();
    const {lang, setLang} = useContext(LanguageContext);
    
    let targetHause = kontaktsData[hause];
    
    return(
        <>
            <h1>Here will be info about houses</h1>
            <Card 
                key={targetHause.id}
                name={targetHause.name[lang]}
                adresse={targetHause.adresse[lang]}
                image={targetHause.image}
                />
        </>
    )
}