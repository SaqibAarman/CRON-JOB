//  "type": "module", --> Add this to Package.json if ur using [ import axios from 'axios' ] In this manner

const cheerio = require("cheerio");
const axios = require("axios");

const baseUrl =
  "http://api.scrape.do?token=c8c67eebadef4be089c9e1f6ed6a088c7057588f0db&url=https://au.indeed.com/jobs?q=react+developer%26l=Sydney+NSW%26radius=50%26fromage=7%26vjk=87a155077f8284a0&Render=True&Super=True";

let jobData = [];

// This Function For ANGEL.CO
async function getData(url) {
  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    const title = $("h1").text();
    console.log(title);

    const jobs = $("div.job_seen_beacon");

    jobs.each(function () {
      const jobTitle = $(this).find("h2 > a > span ").text();
      const link =
        `https://au.indeed.com/viewjob?jk=` +
        $(this).find("h2 >  a").attr("data-jk");

      const companyName = $(this).find("span.companyName").text();
      const location = $(this).find("div.companyLocation").text();
      const salary = $(this)
        .find("div.metadata.salary-snippet-container")
        .text();

      const shortDesc = $(this)
        .find("div.job-snippet")
        .text()
        .replace("\n", "");
      const jobPosted = $(this).find("span.date").text().replace("Posted", "");

      jobData.push({
        jobTitle,
        companyName,
        link,
        location,
        salary: salary !== "" ? salary : "NA",
        shortDesc,
        jobPosted,
      });
    });

    /* --- NEXT PAGE FETCH DATA --- */

    // if ($(" div.jobsearch-LeftPane > nav > div:last-child > a").length > 0) {
    //   nxtUrl = $(" div.jobsearch-LeftPane > nav > div:last-child > a").attr(
    //     "href"
    //   );

    //   // console.log(nxtUrl, "ENCODE");
    //   nextPage = `http://api.scrape.do?token=970ffb82fb90471cb9de0740fe0a667e05da505eb49&url=https://au.indeed.com${nxtUrl}&Render=True&Super=True`;
    //   // console.log(nextPage, "[][]");

    //   getData(nextPage);
    // }

    console.log(jobData.length, jobData);
  } catch (error) {
    console.error(error);
  }
}

getData(baseUrl);
