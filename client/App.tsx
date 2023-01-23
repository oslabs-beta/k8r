import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './stylesheets/App.css'
import LandingPage from './pages/LandingPage'
import Home from './Home';

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    //Declare function and invoke separately in order to use async in useEffect
    const getUserData = async () => {
      const response = await fetch('/auth/user')
      const parsedResponse = await response.json();
      if (parsedResponse) {
        setUsername(parsedResponse.username);
        setPhoto(parsedResponse.photo)
        setUserAuthenticated(true);
      }
    }
    getUserData();
  }, [userAuthenticated]);

  return (
    <>
      {/* If username is null, user has not been authenticated, redirect to LandingPage for login */}
      {!userAuthenticated ?
        <LandingPage />
        :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App;