import { useState } from 'react'
import { BrowserRouter, Routes,  Route, Link, NavLink} from 'react-router-dom'

import './App.css'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'

function App() {
  

  return (
      <BrowserRouter>
          <Header />
          <Nav />
      </BrowserRouter>
  )
}

export default App
