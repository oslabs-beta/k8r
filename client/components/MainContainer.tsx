import '../stylesheets/mainContainer.css';
import logoSquareTransparent from '../assets/logoSquareTransparent.png';
import ProfileView from './ProfileView';
import DashboardView from './DashboardView';
import { v4 as uuidv4 } from 'uuid';

function MainContainer({ clusters, currentProfileId }) {
  return (
    <div className='mainContainer'>
      <img
        src={logoSquareTransparent}
        className='logoWatermark'
        alt='K8R Logo'
      />
      {currentProfileId ?
        <ProfileView key={uuidv4()} clusters={clusters} profileId={currentProfileId} />
        :
        <DashboardView key={uuidv4()} clusters={clusters} />
      }
    </div>
  );
}

export default MainContainer;
