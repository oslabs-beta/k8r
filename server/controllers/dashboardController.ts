import UserDashboards from "../models/userDashboards";
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const createErrorObject = (err) => {
  return {
    log: 'Error in dashboardController',
    message: { err: `An error occurred ${err}` },
  }
}
const dashboardController = {

  addUserDashboard: async (userId: string, nodeExporterUId?: string, prometheusUId?: string, kubeletUId?: string, apiServerUId?: string) => {
    try {
      console.log('Inside of addUserDashboard!!!');
      const userInfo = await UserDashboards.create({
        userId: userId,
        nodeExporterUId: nodeExporterUId,
        prometheusUId: prometheusUId,
        kubeletUId: kubeletUId,
        apiServerUId: apiServerUId,
      });
      return userInfo;
    } catch (err) {
      createErrorObject(err);
    }
  }
}

export default dashboardController;