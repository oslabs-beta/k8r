import e from 'express';
import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/dashboardView.css';

function DashboardView({ clusters }) {
  const [dashboards, setDashboards] = useState<ReactElement[]>([])
  const [dashboardsFetched, setDashboardsFetched] = useState(false)

  function toggleDashboardExtend(e) {
    const dashboard = e.currentTarget.nextSibling;
    dashboard.classList.toggle('collapsed');
    dashboard.classList.toggle('dashboardExtended');
  }

  useEffect(() => {
    const newDashboards: ReactElement[] = [];
    if (!clusters) return;
    if (clusters.length) {
      clusters.forEach((cluster) => {
        newDashboards.push(
          <div key={uuidv4()} className="dashboard">
            <div className="dashboardTitle" onClick={toggleDashboardExtend}>{cluster.clusterName}</div>
            <iframe className="grafanaDashboard dashboardExtended" src={`${cluster.url}/d/${cluster.dashboards.nodeExporterUId}/node-exporter-nodes?orgId=1&refresh=30s&kiosk&theme=light`} />
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
