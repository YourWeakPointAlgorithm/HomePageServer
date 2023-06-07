const {Client} = require("@notionhq/client");
const {monthAgoFromNow} = require("../utils/date");
require('dotenv').config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

const todayProblemDatabaseId = "4fd55fa459684f4f82e6fc6684c2940b";

async function getTodayProblemPages(filter) {
  return await notion.databases.query({
    database_id: todayProblemDatabaseId,
    filter: filter
  }).then(r => r.results)
}

async function getPageContents(id) {
  return await notion.blocks.children.list({block_id: id}).then(r => r.results)
}
