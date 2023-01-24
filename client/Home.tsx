import './stylesheets/home.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'

function Home({ username, photo }) {
  return (
    <div className="App">
      <Header username={username} photo={photo} />
      <NavBar />
      <MainContainer />
    </div>
  )
}

export default Home;
