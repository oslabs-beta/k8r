import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/dashboardView.css';

function DashboardView({ clusters }) {
  const [dashboards, setDashboards] = useState<ReactElement[]>([])

  useEffect(() => {
    const newDashboards: ReactElement[] = [];
    if (!clusters) return;
    if (clusters.length) {
      clusters.forEach((cluster) => {
        newDashboards.push(
          // Add extendable/collapsible header here
          <iframe key={uuidv4()} className="dashboard" src={`${cluster.url}/d/${cluster.dashboards.nodeExporterUId}/node-exporter-nodes?orgId=1&refresh=30s&kiosk&theme=light`} />
        )
      })
      setDashboards(newDashboards);
    }
  });

  return (
    <>
      <div className="dashboardContainer">
        {dashboards}
      </div>
    </>
  );
}

export default DashboardView;
