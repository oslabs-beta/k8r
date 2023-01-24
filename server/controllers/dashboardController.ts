import UserDashboards from "../models/userDashboards";
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const createErrorObject = (err) => {
  return {
    log: 'Error in dashboardController',
    message: { err: `An error occurred ${err}` },
  }
}
const dashboardController = {

  updateUserDashboard: async (userId: string, dashboardUId: string): Promise<[]> => {
    try {
      // TODO: fix type any
      const filter = { userId: userId };
      const update = {  }
      const userInfo: any = await UserDashboards.findOneAndUpdate(filter, update, {
        new: true,
      });
      return userInfo;
    } catch (err) {
      createErrorObject(err);
      // Returning empty array to tell auth.ts that no user was found
      return [];
    }

  },
  addUserDashboard: async (userId: string, dashboardUId: string) => {
    try {
      const userInfo = await UserDashboards.create({
        userId: userId,
        dashboardUId: dashboardUId,
      });
      return userInfo;
    } catch (err) {
      createErrorObject(err);
      // Returning empty array to tell auth.ts that no user was found
      return [];
    }
  },

}

export default dashboardController;