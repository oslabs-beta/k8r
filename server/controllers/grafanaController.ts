const path = require('path');
const fs = require('fs').promises;

const dbFile = path.resolve(__dirname, '../db/db.json');

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
    const nodeDashboardUId: string = parsedRes[0].uid;

    const dbJson = await fs.readFile(dbFile, 'utf8');
    const db = JSON.parse(dbJson);
    db.nodeDashboardUId = nodeDashboardUId;
    await fs.writeFile(dbFile, JSON.stringify(db));
  },

};

module.exports = grafanaController;

grafanaController.getDashboards();