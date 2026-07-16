import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { translations  } from "../data/translations.js";
import { LanguageContext } from "../App.jsx";
import { UsersContext } from "../App.jsx";

export default function Card({id, name, adresse, entfernung, parken, image, oeffnungszeiten, price, alterVon, eintritt, info, telefons}){
    const {lang, setLang} = useContext(LanguageContext);
    const {familyMember, setFamilyMember} = useContext(UsersContext);
    
    const { de, uk } = translations;
    const {category} = useParams();
    const {hause } = useParams();
    const [pickFavorite, setPickFavorite] = useState(false)
    

    function addFavorite(id){
        if(!familyMember) return
        setPickFavorite(true)
        
        const userLocalStorage = JSON.parse(localStorage.getItem("user"));
        const userFavLocalStorage = JSON.parse(localStorage.getItem("user")).favorites;

        const favoriteAlreadyExists = userFavLocalStorage.includes(id);

        if(!favoriteAlreadyExists){
            userFavLocalStorage.push(id)
            const updatedUser = {... userLocalStorage, favorites: userFavLocalStorage }
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        
    }

    function removeFavorite(id){
        setPickFavorite(false)
        
        const userLocalStorage = JSON.parse(localStorage.getItem("user"));
        const userFavLocalStorage = JSON.parse(localStorage.getItem("user")).favorites;

        const updatedFavorites = userFavLocalStorage.filter(item =>{
            return item !== id
        });
        const updatedUser = {...userLocalStorage, favorites: updatedFavorites};
        localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    return(
        <>

            {category && 
            <li>
               {pickFavorite === false && <FaRegHeart className="test-icon" onClick={()=> addFavorite(id)}   id={id}/> }
               {pickFavorite === true && <FaHeart className="test-icon-2" onClick={()=> removeFavorite(id)} id={id}/>}

               {lang === "uk"? <h2> {uk.name} : {name.uk} </h2> : <h2>{de.name}: {name.de}</h2>}
               {image && <img src={image} alt={name[lang]} />}
               {info && <p> <span>{lang === "uk" ? uk.info : de.info} : </span>  {info[lang]} </p>}
               {adresse && <p> <span>{lang === "uk" ? uk.adresse : de.adresse}: </span>  {adresse[lang]} </p>}
               {entfernung && <p> <span>{lang === "uk"? uk.entfernung : de.entfernung} : </span> {entfernung} km</p>}
               {oeffnungszeiten && <p> <span>{lang === "uk"? uk.oeffnungszeiten : de.oeffnungszeiten} : </span> {oeffnungszeiten[lang]} </p> }
               {price && <p> <span>{lang === "uk" ? uk.price : de.price} :</span>  {price[lang]} </p>}
               {alterVon && <p> <span>{lang === "uk" ? uk.alterVon : de.alterVon} : </span>  {alterVon[lang]}</p>}
               {eintritt && <p> <span>{lang === "uk" ? uk.eintritt : de.eintritt} : </span> {eintritt[lang]} </p> }
               {parken && <p> <span>{lang === "uk"? uk.parken : de.parken} : </span> {parken[lang]} </p>}
        
            </li>
            }
            {hause && 
              <li> 
                <h2> { lang === "de"?  `Haus von ${name}` : `Будинок  ${name}`  } </h2>
                <h4> {adresse} </h4>
                <h5 className="testIcon">♡ Zu </h5>
                <img src={image} alt={adresse} />
                <ul>
                    {telefons.map(item=>{
                        return(
                            <li key={item.id}> 
                                <h5>{item.person[lang]}</h5>
                                <h6><a href={`tel:${item.telefon}`}>{item.telefon}</a>{} </h6>
                            </li>
                        )
                    })}
                </ul>
              </li>
              
            }
            
        </>
    )
}