//  "type": "module", --> Add this to Package.json if ur using [ import axios from 'axios' ] In this manner

const cheerio = require("cheerio");
const axios = require("axios");

const baseUrl =
  "http://api.scrape.do?token=c8c67eebadef4be089c9e1f6ed6a088c7057588f0db&url=https://www.seek.com.au/junior-react-developer-jobs/in-Sydney-NSW-2000?sortmode=ListedDate&Render=True&Super=True";

let jobData = [];

// This Function For ANGEL.CO
async function getData(url) {
  try {
    const response = await axios.get(url);

    //console.log(response);

    const $ = cheerio.load(response.data);
    const title = $("div > div:nth-child(2) > div > h1").text();
    console.log(title);

    const jobs = $(
      "div.yvsb870._14uh9946j._14uh9947j._14uh9949n._14uh9948n._14uh99482._1cshjhy18._1cshjhy1b._14uh99432._14uh99435 > div"
    );
    // console.log(jobs.length);

    jobs.each(function () {
      const jobTitle = $(this).find("div .yvsb870._14uh994ai > h3 ").text();
      const link =
        `https://www.seek.com.au` +
        $(this).find("div .yvsb870._14uh9944u._14uh9944s > a").attr("href");

      // console.log(link);

      const companyName = $(this)
        .find(
          "div.yvsb870._14uh994r._14uh994p.x5kz590 > div > div > div:nth-child(2) > span > a"
        )
        .text();
      const jobType = $(this)
        .find("div .yvsb870._14uh9945e._14uh9940.k7nppw0 p")
        .text();
      const location = $(this)
        .find("div.yvsb870.v8nw070.v8nw075 > div:nth-child(1) > span > a")
        .text();
      const salary = $(this)
        .find("div .yvsb870.v8nw070.v8nw075 > div > div > span > div")
        .text();

      const shortDesc = $(this)
        .find("div > div:nth-child(4) > div > span")
        .text();
      // .replace("\n", "");
      // // const jobPosted = $(this).find("span.date > span").text();
      const jobPosted = $(this)
        .find(
          "div > div.yvsb870._14uh994r._14uh994fm.x5kz590 > div > div > span > span"
        )
        .text();
      // .replace("Posted", "");

      jobData.push({
        jobTitle,
        companyName,
        jobType,
        link,
        location,
        salary: salary !== "" ? salary : "NA",
        shortDesc,
        jobPosted,
      });
    });

    /* --- NEXT PAGE FETCH DATA --- */

    // if (
    //   $(" nav > ul > li.yvsb870._14uh9949m._14uh9949b._14uh994w > a ").length >
    //   0
    // ) {
    //   nxtUrl = $(
    //     " nav > ul > li.yvsb870._14uh9949m._14uh9949b._14uh994w > a "
    //   ).attr("href");

    //   // console.log(nxtUrl, "ENCODE");
    //   nextPage = `http://api.scrape.do?token=970ffb82fb90471cb9de0740fe0a667e05da505eb49&url=https://www.seek.com.au${nxtUrl}&Render=True&Super=True`;
    //   // console.log(nextPage, "[][]");

    //   getData(nextPage);
    // }

    console.log(jobData.length, jobData);
  } catch (error) {
    console.error(error);
  }
}

getData(baseUrl);
