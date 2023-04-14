const { getJobsList, getJobsPDF } = require("indeed-job-scraper");
const fs = require("fs");
const path = require("path");

//get job list data
getJobsList({
  queryany: "Java Developer",
  fromdays: 7,
}).then((jobs) => {
  //console.log(jobs);
});

//get job list as a PDF report
getJobsPDF({
  queryany: "Java Developer",
  fromdays: 7,
}).then((pdfBuffer) => {
    var __dirname = './PDF';
  fs.writeFileSync(path.join(__dirname, "./jobs.pdf"), pdfBuffer); //save jobs as a pdf file on disk
});
