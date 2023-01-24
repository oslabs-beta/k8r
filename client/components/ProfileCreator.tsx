import '../stylesheets/profileCreator.css'
import metricDetails from '../../metrics'

function ProfileCreator({ setShowProfileCreator }) {



  return (
    <div id="modalBackground">
      <div className="profileCreatorModal">
        <h3>Profile Creator</h3>
        <input type="text" placeholder="New Profile Name..." className="profileNameInput" />
        <div className="checkboxesContainer">
          {metricsOptionsElements}
        </div>
        <div className="buttonsContainer">
          <div className="logoutButton button-17">Submit</div>
          <div className="cancelButton button-17" onClick={() => { setShowProfileCreator(false) }}>Cancel</div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCreator;