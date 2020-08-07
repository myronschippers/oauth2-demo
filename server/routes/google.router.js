const express = require('express');
const pool = require('../modules/pool');

const router = express.router();

router.get('/', (req, res) => {
  res.send({});
});

module.exports = router;