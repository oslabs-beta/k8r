import { useEffect, useState } from 'react';
import '../stylesheets/profileView.css'

function ProfileView({ profileId }) {
  const [tileLinks, setTileLinks] = useState([]);
  const [tileLinksFetched, setTilesLinksFetched] = useState(false)

  useEffect(() => {
    if (tileLinksFetched) return;
    async function getTileLinks() {
      const fetchResponse = await fetch(`/api/getProfileLinks/${profileId}`);
      const parsedResponse = await fetchResponse.json();
      setTileLinks(parsedResponse);
      setTilesLinksFetched(true)
    }
    getTileLinks();
  }, [tileLinksFetched])

  return (
    <div className="profileContainer">
      {tileLinks}
    </div>
  )
}

export default ProfileView;