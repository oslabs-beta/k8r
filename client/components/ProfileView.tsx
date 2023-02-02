import React, { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/profileView.css';
import ClusterTileContainer from './ClusterTileContainer';

function ProfileView({ profileId, clusters }) {
  const [clusterTileContainers, setClusterTileContainers] = useState<ReactElement[]>([])

  useEffect(() => {
    // Function to fetch metrics for the particular profile from backend and generate Tile components
    async function generateClusterTileContainers() {
      const response = await fetch(`/api/profile/getDetails/${profileId}`)
      const profileDetails = await response.json();
      const newClusterContainers: ReactElement[] = [];
      clusters.forEach((cluster) => {
        newClusterContainers.push(
          <ClusterTileContainer key={uuidv4()} cluster={cluster} profileDetails={profileDetails} />
        )
      })
      setClusterTileContainers(newClusterContainers);
    }
    generateClusterTileContainers();
  }, [clusterTileContainers]);

  return (
    <>
      {clusterTileContainers}
    </>
  );
}

export default ProfileView;
