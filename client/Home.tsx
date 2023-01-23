import { useState, useEffect } from 'react'
import './stylesheets/App.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  console.log('home')
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContainer />
    </div>
  )
}

export default Home;
