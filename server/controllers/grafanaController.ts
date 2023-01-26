import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';

import UserDashboards from '../models/userDashboards';
import dashboardController from './dashboardController';
import { DBUIds } from '../../types'

const grafanaUrl = 'http://localhost:3000';
const username = 'admin';
const password = 'prom-operator';

const grafanaController = {
  getDashboards: async (req: Request, res: Response, next: NextFunction) => {
    // Reference: https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/

    // Encode username and password (required to send via fetch)
    const encodedCredentials = btoa(`${username}:${password}`);

    const dashboardSearchStrings = {
      nodeExporterUId: 'Node%20Exporter%20/%20Nodes',
      prometheusUId: 'Prometheus%20/%20Overview',
      kubeletUId: 'Kubernetes%20/%20Kubelet',
      apiServerUId: 'Kubernetes%20/%20API%20Server',
    };

    const dbUIds: DBUIds = {};

    const userId = req.cookies.id;

    const userDashboards = await UserDashboards.findOne({ userId })

    // If user already exists in the UserDashboards db
    if (userDashboards) {
      res.locals.userDbUIds = userDashboards;
    } else {
      // If user does not already exist

      async function fetchFromGrafana() {
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
          catch (error) {
            console.error(`Error searching for ${dashboardSearchStrings[key]}: ${error}`);
          };
        }
        return dbUIds;
      }
      const dbUIds = await fetchFromGrafana();

      const { nodeExporterUId, prometheusUId, kubeletUId, apiServerUId } = dbUIds;
      const userDbUIds = await dashboardController.addUserDashboard(userId, nodeExporterUId, prometheusUId, kubeletUId, apiServerUId);
      res.locals.userDbUIds = userDbUIds;
    }
    next();
  },
};

export default grafanaController;
