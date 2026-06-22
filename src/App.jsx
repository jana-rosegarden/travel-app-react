import { useState, createContext, useContext, useEffect } from 'react'
import { BrowserRouter, Routes,  Route, Link, NavLink} from 'react-router-dom'

import './App.css'

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';

import Home from './pages/Home.jsx';
import Hause from './pages/Hause.jsx';
import Kategorieliste from './pages/Kategorieliste.jsx';

export const LanguageContext = createContext();
export const EmergencyTelContex = createContext();

function App() {
  const [lang, setLang] = useState(localStorage.getItem("language") || "de");
  const [showNotfallNummern, setShowNotfallNummern] = useState(false);
  
  useEffect(()=>{
    localStorage.setItem("language", lang)
  }, [lang])

  return (
      <LanguageContext. Provider value={{lang, setLang}}> 
      <EmergencyTelContex.Provider value={{showNotfallNummern, setShowNotfallNummern}}> 
      <BrowserRouter>
          <Header />
          <Nav />
          

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/house/:hause' element={<Hause />}></Route>
            <Route path='/category/:category' element={<Kategorieliste />}></Route>
        </Routes>


      </BrowserRouter>
      </EmergencyTelContex.Provider>
      </LanguageContext. Provider>
  )
}

export default App
