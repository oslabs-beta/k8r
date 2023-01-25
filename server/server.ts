import express, { Express, Request, Response, NextFunction } from 'express';
import apiRouter from './routes/apiRouter';
import authRouter from './routes/authRouter';
import connectDB from './db/db';
import passport from 'passport'
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';

connectDB();

const port: number = Number(process.env.EXPRESS_PORT) || 8880;
const app: Express = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.authenticate('session'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use('/auth', authRouter);
app.use('/api', apiRouter);


//route for url not existed
app.use((req: Request, res: Response) => {
  res.status(404).send('This is not the page you\'re looking for...')
})

// Express global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
