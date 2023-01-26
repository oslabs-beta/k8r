import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/profileCreator.css'
import allMetrics from '../../metrics'

function ProfileCreator({ setShowProfileCreator, setCurrentProfileId }) {

  const metricsOptionsElements: React.ReactElement[] = [];

  // For each metric
  Object.keys(allMetrics).forEach((metric) => {
    // Pull the name of the metric
    const metricName = allMetrics[metric].fullName

    //Push a checkbox with that name to the metricsOptionsElements array to be rendered
    metricsOptionsElements.push(
      <div key={uuidv4()} className="checkboxContainer">
        <input type="checkbox" id={metricName} name={metricName} value={metric} />
        <label htmlFor={metricName}>{metricName}</label>
      </div>
    );
  });

  const createNewProfile = async (e) => {
    // Array of checked boxes
    const checkedBoxes: HTMLInputElement[] = Array.from(document.querySelectorAll('input:checked'));
    const profileName: String = (document.querySelector('.profileNameInput') as HTMLInputElement).value;

    // Metrics will be an array of metric objects
    const metrics: String[] = [];
    checkedBoxes.forEach((checkedBoxElement) => {
      metrics.push(checkedBoxElement.value)
    })

    const bodyObj = {
      profileName,
      metrics
    }

    // Create post request to add new profile to DB
    const response = await fetch('/api/createProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    })
    const parsedResponse = await response.json();

    //Profile ID of the new profile just created
    const profileId = parsedResponse._id;

    // Reset current profile ID to immediately render new profile to Profile View component
    setCurrentProfileId(profileId);

    // Close ProfileCreator component.
    setShowProfileCreator(false);
  }

  return (
    <div id="modalBackground">
      <div className="profileCreatorModal">
        <h3>Profile Creator</h3>
        <input type="text" placeholder="New Profile Name..." className="profileNameInput" />
        <div className="checkboxesContainer">
          {metricsOptionsElements}
        </div>
        <div className="buttonsContainer">
          <div className="logoutButton button-17" onClick={createNewProfile}>Submit</div>
          <div className="cancelButton button-17" onClick={() => { setShowProfileCreator(false) }}>Cancel</div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCreator;