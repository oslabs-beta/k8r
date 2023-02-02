import '../stylesheets/profileSelector.css';
import { ReactElement, useEffect, useState } from 'react';
import ProfileSelection from './ProfileSelection'
import { v4 as uuidv4 } from 'uuid';

function ProfileSelector({ setCurrentProfileId, setShowProfileSelector, setShowProfileCreator }) {
  const [profileElements, setProfileElements] = useState<React.ReactElement<typeof ProfileSelection>[]>([])
  const [profileElementsGenerated, setprofileElementsGenerated] = useState(false)

  useEffect(() => {
    async function getProfiles() {
      // Retrieve all profiles from back end db
      const response = await fetch('/api/profile/getAll');
      const profiles = await response.json();

      // Create array to render all profile options
      const newProfileElements: React.ReactElement<typeof ProfileSelection>[] = [];

      // Add a 'Create New Profile' option as the first element
      newProfileElements.push(
        <div className="newProfileSelectionContainer">
          <div className="newProfileSelector button-17" onClick={() => {
            setShowProfileSelector(false);
            setShowProfileCreator(true);
          }}>- Create New Profile -</div>
        </div>
      )

      // For each profile, add a new ProfileSelection component
      profiles.forEach((profile) => {
        newProfileElements.push(
          <ProfileSelection
            setCurrentProfileId={setCurrentProfileId}
            setShowProfileSelector={setShowProfileSelector}
            setprofileElementsGenerated={setprofileElementsGenerated}
            profileName={profile.profileName}
            profileId={profile._id}
          />)
      });
      // Set profileElements to the new array of ProfileSelection components
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
