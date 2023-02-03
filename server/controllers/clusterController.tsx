import Cluster from '../models/clusterModel';
import dashboardController from './dashboardController'
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const createErrorObject = (err) => {
  return {
    log: 'Error in clusterController',
    message: { err: `An error occurred ${err}` },
  }
}
const clusterController = {
  addCluster: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.cookies.id;
      const { name, url } = req.body;

      const dashboards = await dashboardController.getDashboards(url);
      const clusterInfo = await Cluster.create({
        userId: userId,
        clusterName: name,
        url: url,
        dashboards: dashboards,
      });
      res.locals.clusterInfo = clusterInfo;
      return next();
    } catch (err) {
      return next(createErrorObject(err));
    }
  },
  deleteCluster: async (req: Request, res: Response, next: NextFunction) => {
    const { clusterId } = req.body;
    try {
      const deletedCluster = await Cluster.findOneAndDelete({ clusterId });
      res.locals.deletedCluster = deletedCluster;
      return next();
    }
    catch (err) {
      return next(createErrorObject(err));
    }
  },
  getClusters: async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.cookies.id;
    try {
      const clusters = await Cluster.find({ userId });
      res.locals.clusters = clusters;
      return next();
    }
    catch (err) {
      return next(createErrorObject(err));
    }
  }
};

export default clusterController;