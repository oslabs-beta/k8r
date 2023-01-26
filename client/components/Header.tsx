import { useState } from 'react';
import '../stylesheets/header.css'
import LogoutModal from './LogoutModal';

function Header({ username, photo }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  return (
    <>
      {/* If showLogoutModal is true, then render LogoutModal, else render nothing */}
      {showLogoutModal ? <LogoutModal setShowLogoutModal={setShowLogoutModal} /> : null}
      <div className="headerDiv">
        <div className="userProfileContainer" onClick={() => setShowLogoutModal(true)}>
          <h3 className="userName">{username}</h3>
          <img className="userPhoto" src={photo} alt="User Profile" referrerPolicy="no-referrer" />
        </div>
      </div>
    </>
  )
}

export default Header;
