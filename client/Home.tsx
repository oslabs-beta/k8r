import './stylesheets/home.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'

function Home({ username, photo }) {
  const [clusters, setClusters] = useState(null)
  const [clustersFetched, setClustersFetched] = useState(false);
  const [currentProfileId, setCurrentProfileId] = useState('');
  const [showclusterEditor, setShowclusterEditor] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    // Get clusters and store them in state for link population.
    if (!clustersFetched) {
      async function getClusters() {
        const response = await fetch('/api/cluster/getAll/')
        const newClusters = await response.json();
        setClusters(newClusters)
        setClustersFetched(true)
      }
      getClusters()
    }
  }, [clustersFetched])

  return (
    <div className="App">
      <Header username={username} photo={photo} showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />
      <NavBar
        setCurrentProfileId={setCurrentProfileId}
        setClustersFetched={setClustersFetched}
        showclusterEditor={showclusterEditor}
        setShowclusterEditor={setShowclusterEditor}
        setShowLogoutModal={setShowLogoutModal}
        clusters={clusters} />
      <MainContainer clusters={clusters} currentProfileId={currentProfileId} setShowclusterEditor={setShowclusterEditor} />
    </div>
  )
}

export default Home;
