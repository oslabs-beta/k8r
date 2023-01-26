import { v4 as uuidv4 } from 'uuid';

function ProfileSelection({ setCurrentProfileId, setShowProfileSelector, profileName, profileId }) {

  function renderNewProfile() {
    setCurrentProfileId(profileId);
    setShowProfileSelector(false);
  }

  return (
    <div key={uuidv4()} className="profileSelection button-17" onClick={renderNewProfile}>{profileName}</div>
  );
}

export default ProfileSelection;

