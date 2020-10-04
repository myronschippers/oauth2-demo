const express = require('express');
const pool = require('../modules/pool');
const passport = require('passport');

const router = express.Router();

router.get('/auth',
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get('/auth/pass',
  passport.authenticate("google"),
  (req, res) => {
      res.redirect("/profile");
  }
);

module.exports = router;