import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import grafanaController from '../controllers/grafanaController';
import profileController from '../controllers/profileController';

const router = express.Router();

router.get('/getDashboardUIds', grafanaController.getDashboards, (req: Request, res: Response) => {
  res.status(200).json(res.locals.userDbUIds);
})

router.post('/createProfile', profileController.createProfile, (req: Request, res: Response) => {
  res.status(200).json(res.locals.profileInfo);
})

router.get('/getAllProfiles', profileController.getAllProfiles, (req: Request, res: Response) => {
  console.log('in get all profiles ', res.locals.allProfiles)
  res.status(200).json(res.locals.allProfiles);
})

router.get('/getProfileDetails/:profileId', profileController.getProfileDetails, (req: Request, res: Response) => {
  res.status(200).json(res.locals.profileDetails);
})

export default router;