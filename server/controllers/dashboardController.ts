import UserDashboards from "../models/userDashboards";
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const createErrorObject = (err) => {
  return {
    log: 'Error in dashboardController',
    message: { err: `An error occurred ${err}` },
  }
}
const dashboardController = {

   addUserDashboard: async (userId: string, nodeExporterUId: string, prometheusUId: string, kubeletUId: string, apiServerUId: string) => {
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
      // Returning empty array to tell auth.ts that no user was found
      return [];
    }
  },
  getUserDashboard: async (userId: string) => {
    try {
      const user = await UserDashboards.findOne({ userId })
      console.log("Inside of getUserDashboard!:", user);
      return user;
    } catch (err) {
      createErrorObject(err);
      // Returning empty array to tell auth.ts that no user was found
      return [];
    }
  },

}

export default dashboardController;