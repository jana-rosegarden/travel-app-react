import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import Main from "../components/Main.jsx"
import Impressum from "../components/Impressum.jsx";
import Liste from "../components/Liste.jsx";
import UsersModal from "../components/UsersModal.jsx";

import { EmergencyTelContext } from "../App.jsx";

export default function Home(){
    const[isOpenDaten, setOpenDaten] = useState(false);
        const [isOpenImpressum, setOpenImpressum] = useState(false);
        const {showNotfallNummern, setShowNotfallNummern} = useContext(EmergencyTelContext);

        function handleToggleDaten(){
            setOpenDaten(prev => !prev)
        };
        function handleToggleImpressum(){
            setOpenImpressum(prev => !prev)
        };

    return(
        <>
         
         {showNotfallNummern && <Liste />}
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