// import '../stylesheets/tile.css';

function ProfileSelection({ setCurrentProfileId, profileName, profileId }) {

  function clickSelection() {
    setCurrentProfileId(profileId)
  }

  return (
    <div className="profileSelection" onClick={clickSelection} className="button-17">{profileName}</div>
  );
}

export default ProfileSelection;

