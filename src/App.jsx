import { useState, createContext, useContext, useEffect } from 'react'
import { BrowserRouter, Routes,  Route, Link, NavLink} from 'react-router-dom'

import './App.css'

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';

import Home from './pages/Home.jsx';
import Hause from './pages/Hause.jsx';
import Kategorieliste from './pages/Kategorieliste.jsx';
import MeineFavoriten from './pages/MeineFavoriten.jsx';

export const LanguageContext = createContext();
export const EmergencyTelContext = createContext();
export const UsersContext = createContext();
export const FavoritesContext = createContext();

function App() {
  
  const [lang, setLang] = useState(localStorage.getItem("language") || "de");
  const [showNotfallNummern, setShowNotfallNummern] = useState(false);
  //const [familyMember, setFamilyMember] = useState(localStorage.getItem("user"));
  
  const [familyMember, setFamilyMember] = useState(()=>{
    const storedUser = localStorage.getItem("user");
    return storedUser ? storedUser : null
  });

  const [favorites, setFavorites] = useState(familyMember? JSON.parse(localStorage.getItem("users")).find(item => item.id === familyMember).favorites : []);
  //console.log(JSON.parse(localStorage.getItem("users")).find(item => item.id === familyMember).favorites);
  console.log(favorites)

  useEffect(()=>{
    localStorage.setItem("language", lang)
  }, [lang])

  return (
      <LanguageContext. Provider value={{lang, setLang}}> 
      <UsersContext. Provider value={{familyMember, 
                                      setFamilyMember}}> 
      <FavoritesContext. Provider value={{favorites, setFavorites}}> 
      <EmergencyTelContext.Provider value={{showNotfallNummern, setShowNotfallNummern}}> 
      
      <BrowserRouter>
          <Header />
          <Nav />
          

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/house/:hause' element={<Hause />}></Route>
            <Route path='/category/:category' element={<Kategorieliste />}></Route>
            <Route path='/favorites/:favorites' element={<MeineFavoriten />}></Route>
        </Routes>


      </BrowserRouter>

      </EmergencyTelContext.Provider>
      </FavoritesContext. Provider>
      </UsersContext.Provider> 
      </LanguageContext. Provider>
  )
}

export default App
