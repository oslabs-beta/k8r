import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import clusterController from '../controllers/clusterController';

const router = express.Router();

router.get('/getAll', clusterController.getClusters, (req: Request, res: Response) => {
  res.status(200).json(res.locals.clusters);
})

router.delete('/delete', clusterController.deleteCluster, (req: Request, res: Response) => {
  res.status(200).json(res.locals.deletedCluster);
})

router.post('/add', clusterController.addCluster, (req: Request, res: Response) => {
  res.status(200).json(res.locals.clusterInfo);
})

export default router;