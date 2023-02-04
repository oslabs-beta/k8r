import '../stylesheets/mainContainer.css';
import logoSquareTransparent from '../assets/logoSquareTransparent.png';
import ProfileView from './ProfileView';
import DashboardView from './DashboardView';
import { v4 as uuidv4 } from 'uuid';

function MainContainer({ clusters, currentProfileId, setShowclusterEditor }) {
  return (
    <div className='mainContainer'>
      <img src={logoSquareTransparent} className='logoWatermark' alt='K8R Logo' />
      {(!clusters) || (!clusters.length) ?
        <div className="noClustersNotice">
          <span>You currently have no clusters.</span>
          <div className="addClusterButton button-17" onClick={() => { setShowclusterEditor(true) }}>Add Cluster</div>
        </div>
        :
        <>
          {currentProfileId ?
            <ProfileView clusters={clusters} profileId={currentProfileId} />
            :
            <DashboardView clusters={clusters} />
          }
        </>
      }
    </div>
  );
}

export default MainContainer;
