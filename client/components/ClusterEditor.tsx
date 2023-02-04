import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/clusterEditor.css'

function ClusterEditor({ setClustersFetched, setShowclusterEditor, clusters }) {
  const [clusterElements, setClusterElements] = useState<React.ReactElement[]>([]);
  const [clusterElementsGenerated, setClusterElementsGenerated] = useState(false);

  const createNewCluster = async (e) => {
    const name: String = (document.querySelector('.clusterNameInput') as HTMLInputElement).value;
    let url: String = (document.querySelector('.clusterUrlInput') as HTMLInputElement).value;

    // Url verifier
    if (url.slice(0, 7) != 'http://' && url.slice(0, 8) != 'https://') {
      url = 'http://' + url;
    }
    while (url.slice(-1) === '/') {
      url = url.slice(0, -1)
    }

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
    setShowclusterEditor(false);
  }

  async function deleteCluster(clusterId) {
    async function asyncDeleteCluster(clusterId) {
      return await fetch(`/api/cluster/delete/${clusterId}`, {
        method: 'DELETE'
      })
    }
    const deletedCluster = await asyncDeleteCluster(clusterId);
    setClustersFetched(false);
    setShowclusterEditor(false);
  }

  useEffect(() => {
    const newClusterElements: React.ReactElement[] = []
    if (!clusterElementsGenerated) {
      clusters.forEach((cluster) => {
        newClusterElements.push(
          <div key={uuidv4()} className="existingClusterContainer">
            {/* <span className="clusterName">{cluster.clusterName}</span> */}
            {/* <FaTrash onClick={() => {deleteCluster(cluster._id)}} /> */}
            <div className="deleteButton button-45" onClick={() => deleteCluster(cluster._id)}>{`DELETE: ${cluster.clusterName}`}</div>
          </div>
        )
      })
      setClusterElements(newClusterElements);
      setClusterElementsGenerated(true)
    }
  }, [clusterElementsGenerated])

  return (
    <div id="modalBackground">
      <div className="clusterEditorModal">
        <h3>Cluster Editor</h3>
        <div className="clusterEditor">
          <div className="addClusterContainer">
            <h5>Add Cluster</h5>
            <input type="text" placeholder="Cluster Name..." className="clusterInput clusterNameInput" />
            <input type="text" placeholder="Cluster URL..." className="clusterInput clusterUrlInput" />
            <div className="buttonsContainer">
              <div className="logoutButton button-17" onClick={createNewCluster}>Submit</div>
              <div className="cancelButton button-17" onClick={() => { setShowclusterEditor(false) }}>Cancel</div>
            </div>
          </div>
          <div className="verticalLine"></div>
          <div className="deleteClusterContainer">
            <h5>Delete Cluster</h5>
            {clusterElements}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClusterEditor;