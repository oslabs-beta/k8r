import { DBUIds } from '../../types';

const createErrorObject = (err) => {
  return {
    log: 'Error in dashboardController',
    message: { err: `An error occurred ${err}` },
  }
}
const dashboardController = {
  getDashboards: async (grafanaUrl: string) => {
    // Reference: https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/
    const username = 'admin';
    const password = 'prom-operator';
    // Encode username and password (required to send via fetch)
    const encodedCredentials = btoa(`${username}:${password}`);

    const dashboardSearchStrings = {
      nodeExporterUId: 'Node%20Exporter%20/%20Nodes',
      prometheusUId: 'Prometheus%20/%20Overview',
      kubeletUId: 'Kubernetes%20/%20Kubelet',
      apiServerUId: 'Kubernetes%20/%20API%20Server',
    };

    const dbUIds: DBUIds = {};
    for (let key in dashboardSearchStrings) {
      // Get dashboard UId from grafana API
      try {
        const response = await fetch(
          `${grafanaUrl}/api/search?query=${dashboardSearchStrings[key]}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Basic ${encodedCredentials}`,
            },
          }
        )
        const parsedResponse = await response.json();
        // For each dashboard, add to dbUids key=dashboard and value=dashboardUid
        dbUIds[key] = parsedResponse[0].uid;
      }
      catch (err) {
        return createErrorObject(err);
      };
    }
    return dbUIds;
  }
};

export default dashboardController;