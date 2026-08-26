import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { FavoritesContext, LanguageContext, UsersContext } from "../App";

export default function FavoriteCard({name, id}){
  const {lang, setLang} = useContext(LanguageContext);
  const {favorites, setFavorites} = useContext(FavoritesContext);
  const {familyMember, setFamilyMember} = useContext(UsersContext);
  
  function removeFavorite(id){
        
        const currentUserId = familyMember;
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        const currentUser = storedUsers.find(item=> item.id === currentUserId);
        
        const userFavLocalStorage = currentUser.favorites;

        const updatedFavorites = userFavLocalStorage.filter(item =>{
            return item !== id
        });
        const updatedUser = {...currentUser, favorites: updatedFavorites};
        const updatedUsers = storedUsers.map(item=>{
            return (item.id === currentUserId? updatedUser : item)
        })
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setFavorites(updatedFavorites);
    };
  
  return (
    <>   
        <li>
          {name}
          <FaHeart className="add-fav-icon" onClick={()=> removeFavorite(id)}/>
          </li>
    </>
  )
}
