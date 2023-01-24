import '../stylesheets/header.css'

function Header({ username, photo }) {
  return (
    <div className="headerDiv">
      <div className="userProfileContainer">
        <h3 className="userName">{username}</h3>
        <img className="userPhoto" src={photo} alt="User Profile" referrerPolicy="no-referrer" />
      </div>
    </div>
  )
}

export default Header;
