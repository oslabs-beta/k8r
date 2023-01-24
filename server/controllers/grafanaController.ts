import path from 'path';
import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import UserDashboards from '../models/userDashboards';
import dashboardController from './dashboardController';
// import { readFile, writeFile } from 'fs/promises'
// const fsTemp = fs.promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbFile = path.resolve(__dirname, '../db/db.json');

const grafanaUrl = 'http://localhost:3000';
const username = 'admin';
const password = 'prom-operator';

const grafanaController = {
  getDashboards: async (req: Request, res: Response, next: NextFunction) => {
    // Reference: https://grafana.com/docs/grafana/latest/developers/http_api/dashboard/

    // Encode username and password (required to send via fetch)
    const encodedCredentials = btoa(`${username}:${password}`);

    //Create org
    const dbRes = await fetch(
      `${grafanaUrl}/api/search?query=Node%20Exporter%20/%20Nodes`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );
    const parsedRes = await dbRes.json();
    const nodeDashboardUId: string = parsedRes[0].uid;
    const userId = req.cookies.id;
    console.log('res.cookies: ', req.cookies.id);
    console.log('checking return value of UserDashboards.findOne:', await UserDashboards.findOne({ userId }));
    if(await UserDashboards.findOne({ userId }) === null) {
      console.log('inside conditional!');
      const userInfo = dashboardController.addUserDashboard(userId, nodeDashboardUId);
      res.locals.userInfo = userInfo;
    } 
    // else {
    //   const userInfo = dashboardController.updateUserDashboard(userId, nodeDashboardUId);
    // }
    const dbJson = await fs.readFile(dbFile, 'utf8');
    const db = JSON.parse(dbJson);
    db.nodeDashboardUId = nodeDashboardUId;
    await fs.writeFile(dbFile, JSON.stringify(db));
    next();
  },
};

export default grafanaController;
