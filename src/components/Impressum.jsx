import { useContext } from "react";
import { LanguageContext } from "../App";

import { footer } from "../data/translations.js";


export default function Impressum({toggleDaten, toggleImpressum, showDaten, showImpressum}){
    const {lang, setLang} = useContext(LanguageContext);
    //console.log(footer.impressum[lang])


    return(
            <>
                <div > 
                    <h3 onClick={toggleDaten}>Datenschutzerklärung</h3>
                    {showDaten && 
                    <div>
                        {footer.datenschutz[lang].map(item=>{
                            return(
                                <p key={item.id}>{item.text}</p>
                            )
                        })}
                        {/*<p>
                            Diese Webseite erhebt keine personenbezogenen Daten und verwendet keine Cookies oder Tracking-Tools.
                            Es werden keine externen Dienste wie Google Analytics, YouTube, Facebook oder ähnliche Anbieter eingebunden.
                        </p>
                        <p>
                            Wenn Sie auf einen Link zu externen Webseiten (z. B. Instagram oder GitHub) klicken, verlassen Sie meine Seite.
                            Für die Inhalte und den Datenschutz dieser externen Seiten bin ich nicht verantwortlich.
                        </p>
                        <p>
                            Verantwortlich für den Inhalt dieser Seite:<br />
                            Jana Engenhorst<br />
                            Josef-Priller-Str. 20<br />
                            86159 Augsburg<br />
                            E-Mail: jana@engenhor.st <br />
                        </p> */}
                    </div>
                    }

                    <div > 
                    <h3 onClick={toggleImpressum}> Impressum </h3>
                    {showImpressum && 
                        <div > 
                            {footer.impressum[lang].map(item =>{
                                return(
                                    <p key={item.id}>{item.text}</p>
                                )
                            })}
                            {/*<p>Jana Engenhorst</p>
                            <p>Josef-Priller-Str. 20, 86159 Augsburg </p>
                            <p>jana@engenhor.st</p> */}
                        </div>
                    }
                    </div>

                    <p >&copy; Jana Engenhorst Alle Rechte vorbehalten</p>
                </div>
        </>
    )
};
