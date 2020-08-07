const express = require('express');
const pool = require('../modules/pool');

const router = express.router();

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