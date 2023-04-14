const axios = require("axios");
const api_url = "https://api.diffbot.com/v3/list";

// The following example will show how to scrape 5 pages of job postings from Indeed.com


const token = '9824b399ffb2c30129f03eed50279344'
console.log(token);
let url = 'https://ca.indeed.com/jobs?q=react+js&l=Toronto%2C+ON&from=searchOnHP&vjk=5b0a1e904a636832'
// const payload = {
//   api_key: token,
//   real_browser: false,
//   batch: {
//     urls: "https://ca.indeed.com/jobs?q=react+js&l=Toronto%2C+ON&from=searchOnHP&vjk=5b0a1e904a636832",
//     concurrency: 1,
//     merge_results: true,
//   },
//   parse: {
//     jobs: [
//       {
//         _parent: ".resultContent",
//         url: "a >> href",
//         title: "h2.jobTitle >> text",
//         company: ".companyName >> text",
//         location: ".companyLocation >> text",
//         rating: ".ratingNumber span[aria-hidden=true] >> text",
//         additional_info: [".metadata div >> text"],
//       },
//     ],
//   },
// };

axios
  .get(api_url, token, url)
  .then((res) => {
    console.log(JSON.stringify(res.data, null, "  "));
  })
  .catch((err) => {
    console.error(err);
  });
