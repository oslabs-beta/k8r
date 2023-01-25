// import '../stylesheets/tile.css';

function ProfileSelection({ setCurrentProfileId, profileName, profileId }) {

  function clickSelection() {
    setCurrentProfileId(profileId)
  }

  return (
    <div className="profileSelection button-17" onClick={clickSelection}>{profileName}</div>
  );
}

export default ProfileSelection;

