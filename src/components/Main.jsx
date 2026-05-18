import { Link } from "react-router-dom";


export default function Main(){
    return(
        <main className="main-haupt">
           <Link to="/category/straende" className="link-haupt-kategorien" role="button"> Strände</Link>
           <Link to="/category/essen" className="link-haupt-kategorien" role="button"> Essen </Link>
           <Link to="/category/sehenswuerdigkeiten" className="link-haupt-kategorien" role="button"> Sehenswürdigkeiten</Link>
           <Link to="category/aquaparks" className="link-haupt-kategorien" role="button"> Aquaparks </Link>
           <Link to="category/shops" className="link-haupt-kategorien" role="button"> Shops </Link>
           <Link to="category/parks" className="link-haupt-kategorien" role="button"> Parks & Spielplätze</Link>
           <Link to="category/aerzte" className="link-haupt-kategorien" role="button"> Ärtzte</Link>
           <Link to="category/apotheken" className="link-haupt-kategorien" role="button"> Apotheken </Link>
        </main>
    )
}