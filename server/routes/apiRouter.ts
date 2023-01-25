import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import grafanaController from '../controllers/grafanaController';

const router = express.Router();

router.get('/getDashboardUIds', grafanaController.getDashboards, (req: Request, res: Response) => {
  res.status(200).json(res.locals.userDbUIds);
})

export default router;