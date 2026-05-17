
import { Link } from "react-router-dom"

import deLang from "../assets/images/icons/de.webp";
import ukrLang from "../assets/images/icons/ukr.webp"

export default function Nav(){
    return(
        <nav className="nav-haupt">
            <div className="div-hauses">
                <Link> Home </Link>
                <Link> Haus Monte Paradiso</Link>
                <Link> Haus Mattea Benussia </Link>
            </div>

            <div className="div-lang">
                <button
                  className="button-lang"
                >
                    <img src={deLang} 
                    alt="Deutsch" 
                    className="button-lang__img"/>
                </button>

                <button
                    className="button-lang"
                >
                    <img src={ukrLang} 
                    alt="Українська" 
                    className="button-lang__img"/>
                </button>
            </div>
        </nav>
    )
}