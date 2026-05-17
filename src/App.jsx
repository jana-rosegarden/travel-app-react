import { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes,  Route, Link, NavLink} from 'react-router-dom'

import './App.css'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'

export const LanguageContext = createContext();

function App() {
  
    const [lang, setLang] = useState("de");

  return (
      <LanguageContext. Provider value={{lang, setLang}}> 
      
      <BrowserRouter>
          <Header />
          <Nav />
      </BrowserRouter>

      </LanguageContext. Provider>
  )
}

export default App
