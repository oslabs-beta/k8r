import express from 'express';
import clusterRouter from './clusterRouter'
import profileRouter from './profileRouter'

const router = express.Router();

router.use('/cluster', clusterRouter);
router.use('/profile', profileRouter);

export default router;