function ProfileSelection({ setCurrentProfileId, setShowProfileSelector, profileName, profileId }) {

  function renderNewProfile() {
    setCurrentProfileId(profileId);
    setShowProfileSelector(false);
  }

  return (
    <div className="profileSelection button-17" onClick={renderNewProfile}>{profileName}</div>
  );
}

export default ProfileSelection;

