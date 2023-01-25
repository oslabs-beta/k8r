import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { linkGenerator } from '../../metrics';
import Tile from './Tile';
import '../stylesheets/profileView.css';

function ProfileView({ profileId, dashboardUIds }) {
  const [tiles, setTiles] = useState<ReactElement[]>([])

  useEffect(() => {

    // Function to fetch metrics for the particular profile from backend and generate Tile components
    async function generateTiles() {
      const response = await fetch(`/api/getProfileDetails/${profileId}`)
      const profileDetails = await response.json();
      const newTiles: ReactElement[] = [];
      profileDetails.metricsArray.forEach((metric) => {
        const grafanaPanelUrl = linkGenerator(dashboardUIds, metric);
        newTiles.push(<Tile key={uuidv4()} grafanaPanelUrl={grafanaPanelUrl} />);
      })
      setTiles(newTiles);
    }

    // If dashboardUids fetch has completed, then generate tiles
    if (dashboardUIds) {
      generateTiles();
    }

  }, [dashboardUIds]);

  return (
    <div className='profileContainer'>
      {tiles}
    </div>
  );
}

export default ProfileView;
