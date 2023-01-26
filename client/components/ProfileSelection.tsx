import '../stylesheets/profileSelection.css'
import { v4 as uuidv4 } from 'uuid';
import { FaTrash } from 'react-icons/fa';

function ProfileSelection({ setCurrentProfileId, setShowProfileSelector, setprofileElementsGenerated, profileName, profileId }) {

  function renderNewProfile() {
    setCurrentProfileId(profileId);
    setShowProfileSelector(false);
  }

  async function deleteProfile() {
    await fetch(`/api/deleteProfile/${profileId}`, {
      method: 'DELETE'
    })
    setprofileElementsGenerated(false);
  }

  return (
    <div className="profileSelectionContainer">
      <div key={uuidv4()} className="profileSelection button-17" onClick={renderNewProfile}>{profileName}</div>
      <FaTrash onClick={deleteProfile} />
    </div>
  );
}

export default ProfileSelection;

