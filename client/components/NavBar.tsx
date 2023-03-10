import { Link } from 'react-router-dom'
import '../stylesheets/navbar.css'
import { AiFillHome, AiFillSetting, AiFillDashboard, AiOutlineShareAlt, AiOutlineCluster } from 'react-icons/ai';
import { BsPeopleFill, BsPlusCircle, BsFolder2Open, BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import K8RLogoSquare from '../assets/logoSquare.png'
import { useEffect, useState } from 'react';
import ProfileCreator from './ProfileCreator';
import ProfileSelector from './ProfileSelector'
import ClusterEditor from './ClusterEditor';
import e from 'express';
import ContactModal from './ContactModal';


function NavBar({ setCurrentProfileId, setClustersFetched, showclusterEditor, setShowclusterEditor, setShowLogoutModal, clusters }) {
  const [showProfileCreator, setShowProfileCreator] = useState(false);
  const [showProfileSelector, setShowProfileSelector] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [hoverEffectsAdded, setHoverEffectsAdded] = useState(false);

  useEffect(() => {
    function extend(e) {
      const titles = document.querySelectorAll('.navBarCollapsed')
      titles.forEach((titleDiv) => {
        if (!titleDiv.classList.contains('navBarExtended')) {
          titleDiv.classList.add('navBarExtended');
        }
      })
    }

    function collapse(e) {
      const titles = document.querySelectorAll('.navBarCollapsed')
      titles.forEach((titleDiv) => {
        if (titleDiv.classList.contains('navBarExtended')) {
          titleDiv.classList.remove('navBarExtended');
        }
      })
    }

    const navBarButtons = document.querySelectorAll('.navBarButtonIcon');
    navBarButtons.forEach((navBarButton) => {
      navBarButton.addEventListener('mouseover', extend)
    });
    document.querySelector('.navBar')?.addEventListener('mouseleave', collapse)
    setHoverEffectsAdded(true);
  }, [hoverEffectsAdded])


  return (
    <>
      {showProfileCreator ? <ProfileCreator setShowProfileCreator={setShowProfileCreator} setCurrentProfileId={setCurrentProfileId} /> : null}
      {showProfileSelector ? <ProfileSelector setCurrentProfileId={setCurrentProfileId} setShowProfileCreator={setShowProfileCreator} setShowProfileSelector={setShowProfileSelector} /> : null}
      {showclusterEditor ? <ClusterEditor setClustersFetched={setClustersFetched} setShowclusterEditor={setShowclusterEditor} clusters={clusters} /> : null}
      {showContactModal ? <ContactModal setShowContactModal={setShowContactModal} /> : null}
      <div className="navBar navBarCollapsed">
        <img src={K8RLogoSquare} className="navBarLogo" alt="K8R Logo" />
        <Link to="/" className="navBarButton" onClick={() => setCurrentProfileId('')}>
          <AiFillHome className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Home</div>
        </Link>
        <Link to="/" className="navBarButton" onClick={() => { setShowclusterEditor(true) }}>
          <AiOutlineCluster className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Cluster Editor</div>
        </Link>
        <Link to="/" className="navBarButton" onClick={() => { setShowProfileCreator(true) }}>
          <BsPlusCircle className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Add Profile</div>
        </Link>
        <Link to="/" className="navBarButton" onClick={() => { setShowProfileSelector(true) }}>
          <BsFolder2Open className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Select Profile</div>
        </Link>
        <Link to="/" className="navBarButton" onClick={() => { setShowContactModal(true) }}>
          <BsPeopleFill className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Contact</div>
        </Link>
        {/* <Link to="/" className="navBarButton">
          <AiOutlineShareAlt className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Share</div>
        </Link> */}
        <Link to="/" className="navBarButton" onClick={setShowLogoutModal}>
          <BiLogOut className="navBarButtonIcon" />
          <div className="navBarButtonTitle navBarCollapsed">Log Out</div>
        </Link>
      </div>
    </>
  )
}

export default NavBar;
