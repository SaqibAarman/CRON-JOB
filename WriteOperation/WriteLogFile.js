const express = require("express");
const fs = require("fs");
const cron = require("node-cron");

app = express();

cron.schedule("*/10 * * * * *", () => {
  // Data to write on file  ---> With Current Date And Time
  let data = `${new Date().toUTCString()}: Server Is Working...\n`;

  // Appending The Data ---> (log.txt) file
  fs.appendFile("WriteOperation/log.txt", data, (err) => {
    if (err) throw err;

    console.log("Status Logged.");
  });
});

app.listen(3001);
