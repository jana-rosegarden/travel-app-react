import { Link } from "react-router-dom";


export default function Main(){
    return(
        <main className="main-haupt">
           <Link className="link-haupt-kategorien" role="button"> Strände</Link>
           <Link className="link-haupt-kategorien" role="button"> Essen </Link>
           <Link className="link-haupt-kategorien" role="button"> Sehenswürdigkeiten</Link>
           <Link className="link-haupt-kategorien" role="button"> Aquaparks </Link>
           <Link className="link-haupt-kategorien" role="button"> Shops </Link>
           <Link className="link-haupt-kategorien" role="button"> Parks & Spielplätze</Link>
           <Link className="link-haupt-kategorien" role="button"> Ärtzte</Link>
           <Link className="link-haupt-kategorien" role="button"> Apotheken </Link>
        </main>
    )
}