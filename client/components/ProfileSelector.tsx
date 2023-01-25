import '../stylesheets/profileSelector.css';
import { ReactElement, useEffect, useState } from 'react';
import ProfileSelection from './ProfileSelection'
import { v4 as uuidv4 } from 'uuid';

function ProfileSelector({ setCurrentProfileId, setShowProfileSelector }) {
  const [profileElements, setProfileElements] = useState<React.ReactElement<typeof ProfileSelection>[]>([])
  const [profileElementsGenerated, setprofileElementsGenerated] = useState(false)

  useEffect(() => {
    async function getProfiles() {
      const response = await fetch('/api/getAllProfiles');
      const profiles = await response.json();
      console.log('profiles ', profiles)
      const newProfileElements: React.ReactElement<typeof ProfileSelection>[] = [];
      profiles.forEach((profile) => {
        console.log('profile ', profile);
        newProfileElements.push(<ProfileSelection setCurrentProfileId={setCurrentProfileId} profileName={profile.profileName} profileId={profile._id} />)
      });
      setProfileElements(newProfileElements);
      setprofileElementsGenerated(true)
    }
    if (!profileElementsGenerated) {
      getProfiles();
    }
  }, [profileElementsGenerated])

  return (
    <div id="modalBackground">
      <div className="profileSelectorModal">
        {profileElements}
        <div className="buttonsContainer">
          <div className="cancelButton button-17" onClick={() => { setShowProfileSelector(false) }}>Cancel</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelector;
