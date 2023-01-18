import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import grafanaController from '../controllers/grafanaController';

const router = express.Router();

router.get('/', grafanaController.getDashboards, (req: Request, res: Response) => {
  console.log('SUCCESSFULLY IN GRAFANA ROUTER');
  res.status(200).json('SUCCESSFULLY GOT DASHBOARDS!');
})

export default router;