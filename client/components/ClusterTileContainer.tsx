import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { linkGenerator } from '../../metrics';
import Tile from './Tile';


function ClusterTileContainer({ cluster, profileDetails }) {
  const [tiles, setTiles] = useState<ReactElement[]>([]);

  function toggleDashboardExtend(e) {
    const dashboard = e.currentTarget.nextSibling;
    dashboard.classList.toggle('collapsed');
    dashboard.classList.toggle('extended');
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
      <div className="profileTitle" onClick={toggleDashboardExtend}>{cluster.clusterName}</div>
      <div className="tileContainer profileExtended">
        {tiles}
      </div>
    </div>
  );
}

export default ClusterTileContainer;
