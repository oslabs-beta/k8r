import '../stylesheets/profileCreator.css'
import metricDetails from '../../metrics'

function ProfileCreator({ setShowProfileCreator }) {

  const metricsOptionsElements: React.ReactElement[] = [];

  // For each dashboard in metrics obj
  Object.keys(metricDetails).forEach((dashboard) => {
    // For each metric inside that dashboard
    Object.keys(metricDetails[dashboard]).forEach((metric) => {
      // Pull the name of the metric
      const metricName = metricDetails[dashboard][metric].name

      //Push a checkbox with that name to the metricsOptionsElements array to be rendered
      metricsOptionsElements.push(
        <div className="checkboxContainer">
          <input type="checkbox" id={metricName} name={metricName} value={metric} data-dashboardName={dashboard} />
          <label htmlFor={metricName}>{metricName}</label>
        </div>
      );
    });
  })

  const createNewProfile = async (e) => {
    // Array of checked boxes
    const checkedBoxes: HTMLInputElement[] = Array.from(document.querySelectorAll('input:checked'));

    // Metrics will be an arry of objects with keys 'metric' and 'dashboard'
    const metrics: {}[] = [];
    checkedBoxes.forEach((checkedBoxElement) => {
      metrics.push({
        metric: checkedBoxElement.value,
        dashboard: checkedBoxElement.dataset.dashboardname,
      })
    })

    // Create post request to add new profile to DB
    const response = await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(metrics)
    })

    // TODO: Take response from, redirect to render the new profile.
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