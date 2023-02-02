import React, { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { linkGenerator } from '../../metrics';
import Tile from './Tile';
import '../stylesheets/profileView.css';

function ProfileView({ profileId, clusters }) {
  const [tiles, setTiles] = useState<ReactElement[]>([])
  const [dashboards, setDashboards] = useState<ReactElement[]>([])

  useEffect(() => {
    // Function to fetch metrics for the particular profile from backend and generate Tile components
    async function generateTiles() {
      const response = await fetch(`/api/profile/getDetails/${profileId}`)
      const profileDetails = await response.json();
      const newTiles: ReactElement[] = [];
      profileDetails.metricsArray.forEach((metric) => {
        const grafanaPanelUrl = linkGenerator(clusters, metric);
        newTiles.push(<Tile key={uuidv4()} grafanaPanelUrl={grafanaPanelUrl} />);
      })
      setTiles(newTiles);
    }
    // If dashboardUids fetch has completed
    if (clusters) {
      // If a profileId is supplied, generate tile
      if (profileId.length) {
        generateTiles();
      }
      // If no profileId is supplied, display default dashboard
      else {
        const dashboardEl = <iframe className="dashboard" src={`http://localhost:3000/d/${clusters.nodeExporterUId}/node-exporter-nodes?orgId=1&refresh=30s&kiosk&theme=light`} />
        const newDashboards: ReactElement[] = [];
        newDashboards.push(dashboardEl);
        setDashboards(newDashboards);
      }

    }

  }, [clusters]);

  return (
    <>
      {profileId ?
        <div className='profileContainer'>
          {tiles}
        </div>
        :
        <div className="dashboardContainer">
          {dashboards}
        </div>
      }
    </>
  );
}

export default ProfileView;
