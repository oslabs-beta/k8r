import '../stylesheets/logoutModal.css'

function LogoutModal({ setShowLogoutModal }) {
  function modalClick(e) {
    if (e.target.id === 'modalBackground') {
      setShowLogoutModal(false)
    }
  }

  return (
    <div id="modalBackground" onClick={modalClick}>
      <div className="logoutModal">
        <h3>Are you sure you want to log out?</h3>
        <div className="buttonsContainer">
          <a href="/auth/logout">
            <div className="logoutButton button-17">Logout</div>
          </a>
          <div className="cancelButton button-17" onClick={() => { setShowLogoutModal(false) }}>Cancel</div>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal;