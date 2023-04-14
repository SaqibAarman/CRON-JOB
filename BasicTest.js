const axios = require("axios");
const express = require("express");
const cron = require("node-cron");

app = express();

cron.schedule("*/10 * * * * *", () => {
    console.log("CRON JOB RUNNING EVERY ---> 10 Seconds ");
  getData();
});

const getData = async () => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response));

  return data;
};

app.listen(3001);
