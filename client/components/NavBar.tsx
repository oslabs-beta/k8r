import { Link } from 'react-router-dom'
import '../stylesheets/navBar.css'
import { AiFillHome, AiFillSetting, AiFillDashboard, AiOutlineShareAlt } from 'react-icons/ai';
import { BsPeopleFill, BsSearch } from 'react-icons/bs';
import K8RLogoSquare from '../assets/logoSquare.png'


function NavBar() {
  return (
    <div className="navBar">
      <img src={K8RLogoSquare} className="navBarLogo" alt="K8R Logo" />
      <Link to="/" className="navBarButton navBarHomeButton">
        <BsSearch />
      </Link>
      <Link to="/" className="navBarButton navBarHomeButton">
        <AiFillHome />
      </Link>
      <Link to="/" className="navBarButton navBarSettingsButton">
        <AiFillDashboard />
      </Link>
      <Link to="/" className="navBarButton navBarSettingsButton">
        <AiOutlineShareAlt />
      </Link>
      <Link to="/" className="navBarButton navBarSettingsButton">
        <BsPeopleFill />
      </Link>
      <Link to="/" className="navBarButton navBarSettingsButton">
        <AiFillSetting />
      </Link>
    </div>
  )
}

export default NavBar;
