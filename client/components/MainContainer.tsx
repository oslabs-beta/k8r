import '../stylesheets/mainContainer.css'
import logoSquareTransparent from '../assets/logoSquareTransparent.png'
import ProfileView from './ProfileView';

function MainContainer() {
  return (
    <div className="mainContainer">
      <img src={logoSquareTransparent} className="logoWatermark" alt="K8R Logo" />
      <div className="profileCard">
        <ProfileView profileId={''} />
      </div>
    </div>
  )
}

export default MainContainer;