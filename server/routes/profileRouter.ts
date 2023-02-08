import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import profileController from '../controllers/profileController';

const router = express.Router();

router.post('/add', profileController.addProfile, (req: Request, res: Response) => {
  res.status(200).json(res.locals.profileInfo);
})

router.get('/getAll', profileController.getAllProfiles, (req: Request, res: Response) => {
  res.status(200).json(res.locals.allProfiles);
})

router.get('/getDetails/:profileId', profileController.getProfileDetails, (req: Request, res: Response) => {
  res.status(200).json(res.locals.profileDetails);
})

router.delete('/delete/:profileId', profileController.deleteProfile, (req: Request, res: Response) => {
  res.status(200).json(res.locals.deletedProfile);
})

export default router;