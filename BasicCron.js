const express = require("express");
const cron = require("node-cron");

app = express();


cron.schedule("*/10 * * * * *", () => {
  console.log("CRON JOB RUNNING EVERY ---> 10 Seconds");
});

app.listen(3001);
