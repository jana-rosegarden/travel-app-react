import { Link } from "react-router-dom";
import { useContext } from "react";

import { LanguageContext } from "../App";
import { categoryTranslations } from "../data/translations.js"

export default function Main(){
    const {lang, setLang } = useContext(LanguageContext);
    const {de, uk } = categoryTranslations;

    return(
        <main className="main-haupt">
           <Link to="/category/strands" className="link-haupt-kategorien" role="button"> {lang === "de"? de.strands : uk.strands} </Link>
           <Link to="/category/restaurants" className="link-haupt-kategorien" role="button"> {lang === "de"? de.restaurants : uk.restaurants} </Link>
           <Link to="/category/sehenswuerdigkeiten" className="link-haupt-kategorien" role="button"> {lang === "de" ? de.sehenswuerdigkeiten : uk.sehenswuerdigkeiten } </Link>
           <Link to="category/aquaparks" className="link-haupt-kategorien" role="button"> {lang === "de" ? de.aquaparks : uk.aquaparks }  </Link>
           <Link to="category/shops" className="link-haupt-kategorien" role="button"> {lang === "de" ? de.shops : uk.shops} </Link>
           <Link to="category/spielplatz" className="link-haupt-kategorien" role="button"> {lang === "de" ? de.spielplatz : uk.spielplatz} </Link>
           <Link to="category/aerzte" className="link-haupt-kategorien" role="button"> {lang === "de"? de.aerzte : uk.aerzte } </Link>
           <Link to="category/apotheken" className="link-haupt-kategorien" role="button"> {lang === "de" ? de.apotheken : uk.apotheken } </Link>
        </main>
    )
}