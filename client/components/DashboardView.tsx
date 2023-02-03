import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/dashboardView.css';

function DashboardView({ clusters }) {
  const [dashboards, setDashboards] = useState<ReactElement[]>([])
  const [dashboardsFetched, setDashboardsFetched] = useState(false)

  useEffect(() => {
    const newDashboards: ReactElement[] = [];
    if (!clusters) return;
    if (clusters.length) {
      clusters.forEach((cluster) => {
        newDashboards.push(
          // Add extendable/collapsible header here
          <div className="dashboard">
            <div className="dashboardTitle">{cluster.clusterName}</div>
            <iframe key={uuidv4()} className="grafanaDashboard" src={`${cluster.url}/d/${cluster.dashboards.nodeExporterUId}/node-exporter-nodes?orgId=1&refresh=30s&kiosk&theme=light`} />
          </div>
        )
      })
      setDashboards(newDashboards);
      setDashboardsFetched(true)
    }
  }, [dashboardsFetched]);

  return (
    <>
      <div className="dashboardsContainer">
        {dashboards}
      </div>
    </>
  );
}

export default DashboardView;
