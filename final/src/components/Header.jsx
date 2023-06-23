import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import "./Header.css"
export const Header = () => {
  return (
    <BrowserRouter>
    <header className='contenedor-cab'>
        <NavLink to="Home">
           <li>Home</li>
        </NavLink>
        <NavLink to="About">
        <li>About</li>
        </NavLink>
        <NavLink to="Dashboard">
        <li>Dashboard</li>
  </NavLink>
      </header>
      <Routes>
        <Route path='Home' element={ <Home/> } />
       <Route path='About' element={ <About/> } />
        <Route path='Dashboard' element={ <Dashboard/> } />
      </Routes>
    </BrowserRouter>
    
  )
}