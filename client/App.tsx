import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContainer />
    </div>
  )
}

export default App
