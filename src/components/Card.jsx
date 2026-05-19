import { translations  } from "../data/translations.js"

export default function Card({name, adresse, entfernung, image}){

    const { de, ukr } = translations;
    
    console.log(adresse)

    return(
        <>
            
            <li>
               <h2>{de.name}: {name.de}</h2>
               <img src={image} alt="" />
               
               {adresse && <p> <span>{de.adresse}: </span>   </p>}
               
               <p> <span>Entfernung: </span> {entfernung}</p>
               <p> <span>Oeffnungszeiten: </span>  </p>
               <p> <span>Preise:</span>  </p>
               <p> <span>Info:</span>  </p>
               <p> <span>AlterVon: </span>  </p>
               <p> <span>Eintritt: </span>  </p>
               <p> <span>Parken: </span>  </p>
               

            </li>
        </>
    )
}