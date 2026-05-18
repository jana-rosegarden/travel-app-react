import { useState, createContext, useContext, useEffect } from 'react'
import { BrowserRouter, Routes,  Route, Link, NavLink} from 'react-router-dom'

import './App.css'

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';

export const LanguageContext = createContext();

function App() {
  const [lang, setLang] = useState(localStorage.getItem("language") || "de");
  
  useEffect(()=>{
    localStorage.setItem("language", lang)
  }, [lang])

  return (
      <LanguageContext. Provider value={{lang, setLang}}> 
      
      <BrowserRouter>
          <Header />
          <Nav />
          <Main />
      </BrowserRouter>

      </LanguageContext. Provider>
  )
}

export default App
