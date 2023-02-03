import express from 'express';
const router = express.Router();
import passport from 'passport';
import '../auth/auth';

router.get('/user', (req, res) => {
  // req.user is the parsed jwt containing user information
  let userId = null;
  if (req.user) {
    userId = req.user[0]._id
  }
  userId ? res.cookie('id', userId) : null;
  res.status(200).json(req.user ? req.user[0] : null);
});

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

router.get('/logout', (request, response) => {
  request.logout(() => {
    // Destroy cookie and then redirect to the home page
    request.session.destroy(() => {
      response.redirect('/');
    });
  });
});

export default router;
