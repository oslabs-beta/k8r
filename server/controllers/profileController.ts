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
  getAllProfiles: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.cookies.id;
      const allProfiles = await Profile.find({ userId })
      res.locals.allProfiles = allProfiles;
      return next();
    } catch (err) {
      return createErrorObject(err);
    }
  },
  getProfileDetails: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.cookies.id;
      const profileId = req.params.profileId;
      const profileDetails = await Profile.findOne({ profileId })
      res.locals.profileDetails = profileDetails;
      return next();
    } catch (err) {
      return createErrorObject(err);
    }
  }
}

export default profileController;