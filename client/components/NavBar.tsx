import { Link } from 'react-router-dom'
import '../stylesheets/navBar.css'
import { AiFillHome, AiFillSetting, AiFillDashboard, AiOutlineShareAlt } from 'react-icons/ai';
import { BsPeopleFill, BsPlusCircle, BsFolder2Open, BsEmojiSmileUpsideDown } from 'react-icons/bs';
import K8RLogoSquare from '../assets/logoSquare.png'
import { useState } from 'react';
import ProfileCreator from './ProfileCreator';
import ProfileSelector from './ProfileSelector'
import ClusterCreator from './ClusterCreator';


function NavBar({ setCurrentProfileId, setClustersFetched, showClusterCreator, setShowClusterCreator }) {
  const [showProfileCreator, setShowProfileCreator] = useState(false);
  const [showProfileSelector, setShowProfileSelector] = useState(false);

  return (
    <>
      {showProfileCreator ? <ProfileCreator setShowProfileCreator={setShowProfileCreator} setCurrentProfileId={setCurrentProfileId} /> : null}
      {showProfileSelector ? <ProfileSelector setCurrentProfileId={setCurrentProfileId} setShowProfileCreator={setShowProfileCreator} setShowProfileSelector={setShowProfileSelector} /> : null}
      {showClusterCreator ? <ClusterCreator setClustersFetched={setClustersFetched} setShowClusterCreator={setShowClusterCreator} /> : null}
      <div className="navBar">
        <img src={K8RLogoSquare} className="navBarLogo" alt="K8R Logo" />
        <Link to="/" className="navBarButton navBarHomeButton" onClick={() => setCurrentProfileId('')}>
          <AiFillHome />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <BsEmojiSmileUpsideDown onClick={() => { setShowClusterCreator(true) }} />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <BsPlusCircle onClick={() => { setShowProfileCreator(true) }} />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <BsFolder2Open onClick={() => { setShowProfileSelector(true) }} />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <BsPeopleFill onClick={() => { setShowProfileSelector(true) }} />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <AiOutlineShareAlt />
        </Link>
        <Link to="/" className="navBarButton navBarSettingsButton">
          <AiFillSetting />
        </Link>
      </div>
    </>
  )
}

export default NavBar;
