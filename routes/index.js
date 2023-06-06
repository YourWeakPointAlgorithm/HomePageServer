const express = require('express');
const router = express.Router();
const cron = require("node-cron");
const {Client} = require("@notionhq/client");
require('dotenv').config();
require('expose-gc');

const notion = new Client({auth: process.env.NOTION_API_KEY});

const todayProblemDatabaseId = "4fd55fa459684f4f82e6fc6684c2940b";

cron.schedule('0 */5 * * * *', () => global.gc());

router.get('/', function (req, res, next) {
  res.send('hello world!')
});

module.exports = router;
