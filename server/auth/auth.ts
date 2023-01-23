import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import user from '../controllers/userController'
import dotenv from 'dotenv';

dotenv.config();

// this function takes an OAuth profile and searches the database for
// a matching user. If found, the function returns the user info. If
// not found, the function adds user to the database and returns user
// info.
const cb = async (request, accessToken, refreshToken, profile, done) => {
  const userInfo = await user.getUser(profile.sub);
  // check if user is found
  if (userInfo.length) {
    // the first  argument of done is err. You must set err to null or else
    // user will not be authenticated
    return done(null, userInfo);
  } else {
    // user not found so add user to db
    // profile._json contains the following fields:
    const _id = await user.addUser(profile);
    return done(null, { ...profile.picture, _id });
  }
};

const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: process.env.GOOGLE_CALLBACKURL as string,
    passReqToCallback: true,
  },
  cb
);

passport.use(strategy);

// these functions are used to to generate jwt token containing
// user data
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user as false);
});
