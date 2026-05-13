import { useState } from 'react'
import { BrowserRouter, Routes,  Route, Link, NavLink} from 'react-router-dom'

import './App.css'

import Header from './components/Header.jsx'

function App() {
  

  return (
      <BrowserRouter>
          <Header />
      </BrowserRouter>
  )
}

export default App
