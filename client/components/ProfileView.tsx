import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/profileView.css';

function ProfileView({ profileId }) {
  const [tileLinks, setTileLinks] = useState([]);
  const [tileLinksFetched, setTilesLinksFetched] = useState(false);

  useEffect(() => {
    if (tileLinksFetched) return;
    async function getTileLinks() {
      const fetchResponse = await fetch(`/api/getTileDetails/${profileId}`);
      const parsedResponse = await fetchResponse.json();
      setTileLinks(parsedResponse);
      setTilesLinksFetched(true);
    }
    getTileLinks();
  }, [tileLinksFetched]);

  const tileElements: React.ReactElement[] = [];
  tileLinks.forEach((link) => {
    tileElements.push(
      <div key={uuidv4()}>
        <iframe src={link}></iframe>
      </div>
    );
  });

  return (
    <div className='profileContainer'>
      {/* {tileElements} */}
    </div>
  );
}

export default ProfileView;
