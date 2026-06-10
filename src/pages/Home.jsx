import { Link } from "react-router-dom";
import { useState } from "react";

import Main from "../components/Main.jsx"
import Impressum from "../components/Impressum.jsx";

export default function Home(){
    const[isOpenDaten, setOpenDaten] = useState(false);
        const [isOpenImpressum, setOpenImpressum] = useState(false);
    
        function handleToggleDaten(){
            setOpenDaten(prev => !prev)
        };
        function handleToggleImpressum(){
            setOpenImpressum(prev => !prev)
        };

    return(
        <>
         <Main />
          <Impressum 
                             toggleDaten={handleToggleDaten}
                             toggleImpressum={handleToggleImpressum}
                             showDaten={isOpenDaten}
                             showImpressum={isOpenImpressum}
            />
        </>
        
    )
}