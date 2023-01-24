import '../stylesheets/mainContainer.css'
import logoSquareTransparent from '../assets/logoSquareTransparent.png'

function MainContainer() {
  return (
    <div className="mainContainer">
      {/* <iframe src="http://localhost:3000/d-solo/HePDRGo4k/node-exporter-nodes?orgId=1&refresh=30s&panelId=5" width="450" height="200"></iframe> */}
      <img src={logoSquareTransparent} className="logoWatermark" alt="K8R Logo" />
      <div className="tileContainer"></div>
    </div>
  )
}

export default MainContainer;
