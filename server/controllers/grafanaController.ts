const grafanaUrl = 'http://localhost:3000';
const username = 'admin';
const password = 'prom-operator';

const grafanaController = {
  getDashboards: async () => {
    // Reference: https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/

    // Encode username and password (required to send via fetch)
    const encodedCredentials = btoa(`${username}:${password}`)

    //Create org
    const res = await fetch(`${grafanaUrl}/api/search?query=Node%20Exporter%20/%20Nodes`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
      },
    })
    const parsedRes = await res.json();
    const mainDashboardUId: string = parsedRes[0].uid;
  },

};

module.exports = grafanaController;

grafanaController.getDashboards();