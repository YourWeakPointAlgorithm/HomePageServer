const express = require('express');
const router = express.Router();
const cron = require("node-cron");
require('expose-gc');

cron.schedule('0 */5 * * * *', () => global.gc());

router.get('/', function (req, res, next) {
  res.send("Hello World!!")
});


module.exports = router;
