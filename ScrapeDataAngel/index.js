//  "type": "module", --> Add this to Package.json if ur using [ import axios from 'axios' ] In this manner

const cheerio = require("cheerio");
const axios = require("axios");

const baseUrl =
  "http://api.scrape.do?token=c8c67eebadef4be089c9e1f6ed6a088c7057588f0db&url=https://angel.co/role/l/software-engineer/boston&Render=True&Super=True";

let jobData = [];

// This Function For ANGEL.CO
async function getData(url) {
  try {
    const response = await axios.get(url);

    //console.log(response);

    const $ = cheerio.load(response.data);
    const title = $("h1").text();
    console.log(title);

    const jobs = $("div.styles_result__rPRNG");
    // console.log(jobs.length);

    jobs.each(function () {
      // console.log(element);
      let title, link, location;
      const companyName = $(this).find("h4.styles_name__rSxBl").text();

      const subTitle = $(this).find("span.styles_subheader__WPhHT").text();
      const companySize = $(this)
        .find("div.styles_startupHeader__BGncB > div > div > div > span")
        .text();

      const availJobs = $(this)
        .find("div.styles_jobListingList__32RYX")
        .toArray()
        .map((element) => {
          title = $(element).find("div .styles_jobListing__PLqQ_ a").text();
          // console.log(title,'[]');
          link =
            "https://angel.co" +
            $(element).find("div .styles_jobListing__PLqQ_ a").attr("href");
          location = $(element)
            .find("span.styles_locationAndCompensation__vDfgW")
            .text();
          // jobData.push({ title, location, link });

          // return {title, link,location}
        });
      // console.log(availJobs);

      // const job = $(availJobs).find('div.styles_jobListing__PLqQ_').text()
      // console.log(job);

      jobData.push({
        companyName,
        subTitle,
        title,
        link,
        location,
        companySize,
      });
    });

    /* --- NEXT PAGE FETCH DATA --- */

    // if ($(".styles_next__Dugw4 a").length > 0) {
    //   nxtUrl = $(".styles_next__Dugw4 a").attr("href");
    //   // // nextPageUrl = decodeURI(nxtUrl.toString());
    //   // console.log(nextPageUrl,'ENCODE');
    //   nextPage = `http://api.scrape.do?token=b6abd1c24ce145ab85cb21aeacafe92e07172e279d1&url=https://angel.co${nxtUrl}&render=true`;

    //   console.log(nextPage, "[][]");

    //   getData(nextPage);
    // }

    console.log(jobData);
  } catch (error) {
    console.error(error);
  }
}

getData(baseUrl);
