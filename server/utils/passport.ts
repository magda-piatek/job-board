import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as LocalStrategy } from "passport-local";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";

import bcrypt from "bcryptjs";
import passport from "passport";

import User from "../models/user";
import keys from "../config/keys";
import { TUser } from "../../types/user";

//user id stored in cookie
passport.serializeUser((user, done) => {
  done(null, (user as any)._id);
});

// id - retrieving from cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (user === null)
        return done(null, false, { message: "User doesn't exist" });
      if (user.facebookId || user.googleId)
        return done(null, false, {
          message: "User with this email already exists",
        });

      if (user && !user.confirmed)
        return done(null, false, {
          message: "Please confirm your email to login",
        });

      try {
        if (await bcrypt.compare(password, user.password))
          return done(null, user);

        return done(null, false, { message: "Password is not correct" });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.CLIENT_ID_FB,
      clientSecret: keys.CLIENT_SECRET_FB,
      callbackURL: "/api/auth/facebook/callback",
      profileFields: ["email", "first_name", "last_name"],
    },
    async (_, __, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });
      if (existingUser) {
        //passed to serializeUser
        done(null, existingUser);
      } else {
        const existingEmailUser = await User.findOne({
          email: profile._json.email,
        });
        let newUser;
        if (existingEmailUser) {
          newUser = await User.findOneAndUpdate(existingEmailUser.id, {
            facebookId: profile.id,
          });
        } else {
          newUser = await new User({
            facebookId: profile.id,
            firstName: profile._json.first_name,
            lastName: profile._json.last_name,
            email: profile._json.email,
            confirmed: true,
          });
        }

        try {
          await newUser.save();
          done(null, newUser);
        } catch (err) {
          return done(err);
        }
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.CLIENT_ID_GOOGLE,
      clientSecret: keys.CLIENT_SECRET_GOOGLE,
      callbackURL: "/api/auth/google/callback",
    },
    async (_, __, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //passed to serializeUser
        done(null, existingUser);
      } else {
        const existingEmailUser = await User.findOne({
          email: profile._json.email,
        });
        let newUser;
        if (existingEmailUser) {
          newUser = await User.findOneAndUpdate(existingEmailUser.id, {
            googleId: profile.id,
          });
        } else {
          newUser = await new User({
            googleId: profile.id,
            firstName: profile._json.first_name,
            lastName: profile._json.last_name,
            email: profile._json.email,
            confirmed: true,
          });
        }

        try {
          await newUser.save();
          done(null, newUser);
        } catch (err) {
          return done(err);
        }
      }
    }
  )
);
