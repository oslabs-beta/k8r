import { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/clusterCreator.css'

function ClusterCreator({ setClustersFetched, setShowClusterCreator, clusters }) {
  const [clusterElements, setClusterElements] = useState<React.ReactElement[]>([]);
  const [clusterElementsGenerated, setClusterElementsGenerated] = useState(false);

  const createNewCluster = async (e) => {
    const name: String = (document.querySelector('.clusterNameInput') as HTMLInputElement).value;
    const url: String = (document.querySelector('.clusterUrlInput') as HTMLInputElement).value;

    const bodyObj = {
      name,
      url
    }

    // Create post request to add new cluster to DB
    const response = await fetch('/api/cluster/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    })
    const parsedResponse = await response.json();

    // Reset clustersFetched to false to immediately re-render the main container dashboards
    setClustersFetched(false);
    setShowClusterCreator(false);
  }

  function deleteProfile(clusterId) {
    return async function deleteCluster() {
      await fetch(`/api/cluster/delete/${clusterId}`, {
        method: 'DELETE'
      })
      setClusterElementsGenerated(false);
    }
  }

  useEffect(() => {
    console.log('clusters in cluster creator use effect ', clusters);
    const newClusterElements: React.ReactElement[] = []
    if (!clusterElementsGenerated) {
      console.log('got in if statement');
      clusters.forEach((cluster) => {
        newClusterElements.push(
          <div key={uuidv4()} className="existingClusterContainer">
            <span className="clusterName">{cluster.clusterName}</span>
            <FaTrash onClick={() => {deleteProfile(cluster._id)}} />
            {/* <div className="deleteButton button-17" onClick={() => { deleteProfile(cluster._id)} }}>Cancel</div> */}
          </div>
        )
      })
      setClusterElements(newClusterElements);
      setClusterElementsGenerated(true)
    }
  }, [clusterElementsGenerated])

  return (
    <div id="modalBackground">
      <div className="clusterCreatorModal">
        <h3>Cluster Creator</h3>
        <input type="text" placeholder="Cluster Name..." className="clusterNameInput" />
        <input type="text" placeholder="Cluster URL..." className="clusterUrlInput" />
        <div className="buttonsContainer">
          <div className="logoutButton button-17" onClick={createNewCluster}>Submit</div>
          <div className="cancelButton button-17" onClick={() => { setShowClusterCreator(false) }}>Cancel</div>
        </div>
        {clusterElements}
      </div>
    </div>
  )
}
export default ClusterCreator;