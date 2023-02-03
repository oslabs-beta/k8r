import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { linkGenerator } from '../../metrics';
import Tile from './Tile';


function ClusterTileContainer({ cluster, profileDetails }) {
  const [tiles, setTiles] = useState<ReactElement[]>([]);

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
      {tiles}
    </div>
  );
}

export default ClusterTileContainer;
