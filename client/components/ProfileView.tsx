import { ReactComponentElement, ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { linkGenerator } from '../../metrics';
import Tile from './Tile';
import '../stylesheets/profileView.css';

function ProfileView({ profileId, dashboardUIds }) {

  const [tiles, setTiles] = useState<ReactElement[]>([])

  // const [tileLinks, setTileLinks] = useState([]);
  // const [tileLinksFetched, setTilesLinksFetched] = useState(false);

  // useEffect(() => {
  //   if (tileLinksFetched) return;
  //   async function getTileLinks() {
  //     const fetchResponse = await fetch(`/api/getTileDetails/${profileId}`);
  //     const parsedResponse = await fetchResponse.json();
  //     setTileLinks(parsedResponse);
  //     setTilesLinksFetched(true);
  //   }
  //   getTileLinks();
  // }, [tileLinksFetched]);

  // const tileElements: React.ReactElement[] = [];
  // tileLinks.forEach((link) => {
  //   tileElements.push(
  //     <div key={uuidv4()}>
  //       <iframe src={link}></iframe>
  //     </div>
  //   );
  // });

  const metrics = ['cpuUsage', 'loadAverage']

  useEffect(() => {
    if (dashboardUIds) {
      const newTiles: ReactElement[] = [];
      metrics.forEach((metric) => {
        const link = linkGenerator(dashboardUIds, metric)
        newTiles.push(<Tile key={uuidv4()} link={link} />)
      })
      setTiles(newTiles)
    }
  }, [dashboardUIds])

  return (
    <div className='profileContainer'>
      {tiles}
    </div>
  );
}

export default ProfileView;
