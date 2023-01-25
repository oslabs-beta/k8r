import '../stylesheets/mainContainer.css';
import logoSquareTransparent from '../assets/logoSquareTransparent.png';
import ProfileView from './ProfileView';

function MainContainer({ dashboardUIds }) {
  return (
    <div className='mainContainer'>
      <img
        src={logoSquareTransparent}
        className='logoWatermark'
        alt='K8R Logo'
      />
      <div className='profileCard'>
        <ProfileView dashboardUIds={dashboardUIds} profileId={'63d1a807c4df71aa0b246a7e'} />
      </div>
    </div>
  );
}

export default MainContainer;
