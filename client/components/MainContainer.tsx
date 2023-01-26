import '../stylesheets/mainContainer.css';
import logoSquareTransparent from '../assets/logoSquareTransparent.png';
import ProfileView from './ProfileView';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function MainContainer({ dashboardUIds, currentProfileId }) {
  const [profileViewArr, setProfileViewArr] = useState<React.ReactElement[]>([])

  useEffect(() => {
    const newProfileViewArr: React.ReactElement[] = [];
    newProfileViewArr.push(
      <ProfileView key={uuidv4()} dashboardUIds={dashboardUIds} profileId={currentProfileId} />
    )
    setProfileViewArr(newProfileViewArr!);
  }, [currentProfileId, dashboardUIds])

  return (
    <div className='mainContainer'>
      <img
        src={logoSquareTransparent}
        className='logoWatermark'
        alt='K8R Logo'
      />
      <div className='profileCard'>
        {profileViewArr}
      </div>
    </div>
  );
}

export default MainContainer;
