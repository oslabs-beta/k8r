import './stylesheets/home.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'

function Home({ username, photo }) {
  const [dashboardUIds, setDashboardUIds] = useState(null)
  const [dashboardUIdsFetched, setDashboardUIdsFetched] = useState(false)

  useEffect(() => {
    // Get dashboard UIds and store them in state for link population.
    async function getDashboardUIds() {
      const response = await fetch('/api/getDashboardUIds/')
      const dbUIds = await response.json();
      setDashboardUIds(dbUIds)
      setDashboardUIdsFetched(true)
    }
    getDashboardUIds()
  }, [dashboardUIdsFetched])

  return (
    <div className="App">
      <Header username={username} photo={photo} />
      <NavBar />
      <MainContainer dashboardUIds={dashboardUIds} />
    </div>
  )
}

export default Home;
