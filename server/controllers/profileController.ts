import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

import Profile from '../models/profileModel';

const createErrorObject = (err) => {
  return {
    log: 'Error in Profile Controller',
    message: { err: `An error occurred ${err}` },
  }
}

const profileController = {
  createProfile: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.cookies.id;
      const { profileName, metrics } = req.body;
      const profileInfo: any = await Profile.create({
        userId: userId,
        profileName: profileName,
        metricsArray: metrics,
      });
      res.locals.profileInfo = profileInfo;
      return next();
    } catch (err) {
      return createErrorObject(err);
    }
  },

}

export default profileController;