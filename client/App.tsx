import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <div className="App">
      {!userAuthenticated
        ? <LandingPage />
        : <>
          <Header />
          <NavBar />
          <MainContainer />
        </>
      }
    </div>
  )
}

export default App
