import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { FavoritesContext, LanguageContext, UsersContext } from "../App";

import { categoryTranslations } from "../data/translations";

export default function FavoriteCard(){
  const {lang, setLang} = useContext(LanguageContext);
  
  
  
  return (
    <>   
        
        
        <li>Name zwei. Herz</li>
        
    </>
  )
}
