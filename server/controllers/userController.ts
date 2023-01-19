import User from '../models/userModel';
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const userController = {
  signup: (req: Request, res: Response, next: NextFunction) => {
    //console.log('Should see username and password info: ', req.body);
    //destructuring from req.body
    const { username, password } = req.body;
    try {
      User.create({ username, password }, (err, newUser) => {
        if (err) {
          return next({
            log: 'Mongoose create handler error',
            status: 400,
            message: { err: `${err}` }
          })
        } else {
          res.locals.newUser = newUser;
          return next();
        }
      })
    } catch (err) {
      return next({
        log: 'Express error handler caught userController.signup middleware error',
        status: 400,
        message: { err: `${err}` }
      })
    }
  }

userController.signup = (req, res, next) => {
    //console.log('Should see username and password info: ', req.body);
    //destructuring from req.body
    const { username, password } = req.body;
    try {
      User.create({ username, password }, (err, newUser) => {
        if (err) {
          return next({
            log: 'Mongoose create handler error',
            status: 400,
            message: { err: `${err}` }
          })
        } else {
          res.locals.newUser = newUser;
          return next();
        }
      })
    } catch (err) {
      return next({
        log: 'Express error handler caught userController.signup middleware error',
        status: 400,
        message: { err: `${err}` }
      })
    }
  }

userController.login = (req, res, next) => {
    console.log('login');
    const { username, password } = req.body;

    try {
      User.findOne({ username, password }, (err, currUser) => {
        if (err) {
          return next({
            log: 'Mongoose findOne handler error',
            status: 400,
            message: { err: `${err}` }
          });
        } else {
          // if username and password are found and matched in database, proceed to the next middleware
          if (currUser) {
            req.session.user = currUser.username;
            req.session.save();
            res.locals.validate = { success: true };
            // res.locals.currUser = currUser;
            // return next({
            //   log: 'Express error handler caught userController.login middleware error',
            //   status: 400,
            //   message: {err: `${err}`}
            // });
          } else {
            //if findOne return a null, then the username and password not matching, return status 404 for not found
            res.locals.validate = { success: false };
            //status code 401 means 'unauthenticated' or 'unauthorized'
            // return res.status(401).json();
          }
          next();
          // res.next();
        }
      })
    } catch (err) {
      return next(err);
    }
  }


userController.createProject = (req, res, next) => {
    // console.log('should get project info', req.body)
    const { projectName, projectDescription, members, creator } = req.body;
    try {
      User.findOne({ username: creator })
        .then((user) => {
          console.log('USER: ', user);
          console.log('CREATOR: ', creator);
          Project.create({ projectName, projectDescription, members, creator: user.id }, (err, currProject) => {
            if (err) {
              return next({
                log: 'Mongoose Project.create handler error',
                status: 400,
                message: { err: `${err}` }
              });
            } else {
              res.locals.currProject = currProject;
              User.findOneAndUpdate(
                { username: creator },
                { $push: { projects: currProject.id } },
                (err, success) => {
                  if (err) console.log(err);
                  if (success) console.log(success);
                })
              next();
            }
          })
        })
    } catch (err) {
      return next({
        log: 'Express error handler caught userController.createProject middleware error',
        status: 400,
        message: { err: `${err}` }
      })
    }
  }

userController.getProjects = async (req, res, next) => {
    const user = await User.findOne({ username: req.session.user });
    let projects = [];
    if (user) {
      projects = await Project.find({ '_id': { $in: user.projects } });
    }
    res.locals.projects = projects.map((project) => project.projectName);
    next();
  };

  userController.createTask = (req, res, next) => {
    console.log('inside create Task');
    console.log('req.query: ', req.query);
    const { project, description, responsibleBy, startDate, deadline, stage } = req.query;

    try {
      Card.create({ project, description, responsibleBy, startDate, deadline, stage }, (err, currTask) => {
        if (err) {
          return next({
            log: 'Mongoose creatTask error',
            status: 400,
            message: { err: `${err}` }
          })
        } else {
          console.log(currTask);
          res.locals.currTask = currTask;
          return next()
        }
      })
    } catch (err) {
      return next({
        log: 'Express error handler caught userController.createTask middleware error',
        status: 400,
        message: { err: `${err}` }
      })
    }

  }

userController.deleteTask = (req, res, next) => {
    // console.log('req.body: ', req.body);
    try {
      Card.findOneAndDelete({ _id: req.body.id }, (err, deletedTask) => {
        if (err) console.log(err);
        else {
          // console.log(deletedTask);
          res.locals.deletedTask = deletedTask;
          return next();
        }
      })
    } catch (err) {
      return next({
        log: 'Express error handler caught userController.deleteTask middleware error',
        status: 400,
        message: { err: `${err}` }
      })
    }
  }

userController.changeStage = (req, res, next) => {
    // console.log(req.body.data);
    // console.log('req.body.data typeof: ',typeof req.body.data)
    const dataArr = req.body.data.split(',');
    // console.log(dataArr);
    try {
      Card.findOneAndUpdate({ _id: dataArr[0] }, { stage: parseInt(dataArr[1]) + 1 }, { new: true }, (err, updatedTask) => {
        if (err) console.log(err);
        else {
          // console.log(updatedTask.stage);
          res.locals.updatedTask = updatedTask;
          return next();
        }
      })
    } catch (err) {
      return next({
        log: 'Express error handler caught userController.changeState middleware error',
        status: 400,
        message: { err: `${err}` }
      });
    }
  }



userController.getUsers = (req, res, next) => {
    User.find({}, (error, users) => {
      // todo: better error handling
      if (error) return next(error);
      res.locals.users = users;
      return next();
    });
  }

userController.getTasks = (req, res, next) => {
    // console.log('inside getTasks');
    Card.find({}, (error, card) => {
      // todo: better error handling
      if (error) return next(error);
      res.locals.card = card;
      // console.log('res.locals.card: ', res.locals.card);
      return next();
    });
  }

export default userController;
