import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { linkGenerator } from '../../metrics';
import Tile from './Tile';


function ClusterTileContainer({ cluster, profileDetails }) {
  const [tiles, setTiles] = useState<ReactElement[]>([]);

  function toggleDashboardExtend(e) {
    const dashboard = e.currentTarget.nextSibling;
    dashboard.classList.toggle('profileCollapsed');
    dashboard.classList.toggle('profileExtended');
  }

  useEffect(() => {
    const newTiles: ReactElement[] = [];
    profileDetails.metricsArray.forEach((metric) => {
      const grafanaPanelUrl = linkGenerator(cluster, metric);
      newTiles.push(<Tile key={uuidv4()} grafanaPanelUrl={grafanaPanelUrl} />);
    })
    setTiles(newTiles);
  }, [])
  return (
    <div className="clusterTileContainer">
      <div className="profileTitle" onClick={toggleDashboardExtend}>{`${cluster.clusterName} - ${profileDetails.profileName}`}</div>
      <div className={`profileExtended ${tiles.length > 4 ? 'bigProfile' : 'tileContainer'}`}>
        {tiles}
      </div>
    </div>
  );
}

export default ClusterTileContainer;
