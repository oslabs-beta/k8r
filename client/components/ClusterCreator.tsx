import '../stylesheets/clusterCreator.css'

function ClusterCreator({ setClustersFetched, setShowClusterCreator }) {

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
  }

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
      </div>
    </div>
  )
}
export default ClusterCreator;