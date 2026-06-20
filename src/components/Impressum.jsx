import { useContext } from "react";
import { LanguageContext } from "../App";

import { footer } from "../data/translations.js";
import { translations } from "../data/translations.js";

export default function Impressum({toggleDaten, toggleImpressum, showDaten, showImpressum}){
    const {lang, setLang} = useContext(LanguageContext);
    //console.log(footer.impressum[lang])

    return(
            <>
                <div > 
                    <h3 onClick={toggleDaten}> {translations[lang].datenschutz} </h3>
                    {showDaten && 
                    <div>
                        {footer.datenschutz[lang].map(item=>{
                            return(
                                <div key={item.id}> 
                                    <p>{item.text}</p>
                                    <div>{item.textData && item.textData.map(data=>{
                                        return(
                                            <p key={data.id}> {data.data} </p>
                                        )
                                    })}</div>
                                </div>
                            )
                        })}
                        
                    </div>
                    }

                    <div > 
                    <h3 onClick={toggleImpressum}> {translations[lang].impressum} </h3>
                    {showImpressum && 
                        <div > 
                            {footer.impressum[lang].map(item =>{
                                return(
                                    <p key={item.id}>{item.text}</p>
                                )
                            })}

                        </div>
                    }
                    </div>

                    <p >&copy; Jana Engenhorst Alle Rechte vorbehalten</p>
                </div>
        </>
    )
};
