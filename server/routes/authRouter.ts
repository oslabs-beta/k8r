import express from 'express';
const router = express.Router();
import passport from 'passport';
import '../auth/auth';

// router.get('/user', (req, res) => {
//   // req.user is the parsed jwt containing user information
//   //console.log('user info', req.user);
//   req.user ? res.cookie('id', req.user.id) : null;
//   res.status(200).json(req.user ? req.user : null);
// });

router.get('/google', passport.authenticate('google', { scope: ['email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    // Success
    return res.redirect('/home');
  }
);

router.get('/failure', (request, response) => {
  response.send('authentication failed...');
});
// TODO: add comments about login, logout being set by passport
// https://www.passportjs.org/concepts/authentication/login/
router.get('/logout', (request, response) => {
  request.logout(() => {
    // https://stackoverflow.com/questions/72336177/error-reqlogout-requires-a-callback-function
    console.log('logging out');
    // request.session.destroy(); // destroy cookie?
    response.redirect('/');
  });
});

export default router;
