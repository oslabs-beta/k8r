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

export default router;