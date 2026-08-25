import { useContext } from "react";

import { UsersContext, LanguageContext, FavoritesContext } from "../App";

import FavoriteCard from "../components/FavoriteCard";
import { categoryTranslations } from "../data/translations";
import { categoryData } from "../data/categoryData";

export default function MeineFavoriten() {
    const { familyMember, setFamilyMember } = useContext(UsersContext);
    const {lang, setLang} = useContext(LanguageContext);

    const categories = Object.values(categoryTranslations[lang])
    
    const allPlaces = Object.values(categoryData).flat();
    console.log(allPlaces)
    return (
        <> 
            <h2> Meine Favoriten in Pula </h2>
            {categories.map(item=>{
                return (
                    <h3>{item}</h3>
                )
            })}

            
        </>
    )
}