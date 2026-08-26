import { useContext } from "react";

import { UsersContext, LanguageContext, FavoritesContext } from "../App";

import FavoriteCard from "../components/FavoriteCard";
import { categoryTranslations } from "../data/translations";
import { categoryData } from "../data/categoryData";

export default function MeineFavoriten() {
    const { familyMember, setFamilyMember } = useContext(UsersContext);
    const {lang, setLang} = useContext(LanguageContext);
    const {favorites, setFavorites} = useContext(FavoritesContext);

    const entries = Object.entries(categoryData);

    
    const myFavPlacesInCategories = entries.map(([category, places]) => {

        const favoritePlaces = places.filter(place =>
            favorites.includes(place.id)
        );
        
        return {
            category,
            places: favoritePlaces
        };
    });
    
    const {de, uk } = categoryTranslations;
    

    return (
        <> 
            <h2> Meine Favoriten in Pula </h2>
            {
                myFavPlacesInCategories.map(categoryGroup =>(
                    <section key={categoryGroup.category}> 
                        <h2>{lang === "uk"? uk[categoryGroup.category]: de[categoryGroup.category]}</h2>
                        {categoryGroup.places.map(item=>(
                            <FavoriteCard 
                                key={item.id}
                                name={item.name[lang]}
                                id={item.id}
                            />
                            
                        ))}
                    </section>
                ) )

            }
            
        </>
    )
}