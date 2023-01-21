import User from '../models/userModel';
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const createErrorObject = (err) => {
  return {
    log: 'Error in User Controller',
    message: { err: `An error occurred ${err}` },
  }
}

const userController = {

  getUser: async (googleId: string): Promise<[]> => {
    try {
      // TODO: fix type any
      const userInfo: any = await User.find({ googleId: googleId });
      console.log('user info ', userInfo)
      return userInfo;
    } catch (err) {
      createErrorObject(err);
      // Returning empty array to tell auth.ts that no user was found
      return [];
    }

  },
  addUser: async (profile) => {
    try {
      const userInfo = await User.create({
        googleId: profile.sub,
        email: profile.email,
        displayName: profile.displayName,
        profilePhoto: profile.picture,
      });
      return userInfo;
    } catch (err) {
      createErrorObject(err);
      // Returning empty array to tell auth.ts that no user was found
      return [];
    }
  }

}

export default userController;