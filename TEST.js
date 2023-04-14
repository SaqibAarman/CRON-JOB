// const axios = require("axios");

// // const indeedData = axios.get("https://au.indeed.com/jobs?q=react+js&l=Sydney+NSW")
// //   .then((response) => {
// //     console.log(response, "===");

// //   })
// //   .then((data) => console.log(data));

// const fs = require("fs");
// //const got = require("got");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const vgmUrl = "https://au.indeed.com/jobs?q=node.js&l=Sydney%20NSW";

// axios
//   .get(vgmUrl)
//   .then((response) => {
//     console.log(response);
//     const dom = new JSDOM(response.body);
//     console.log(dom.window.document.querySelector(".h2"));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //   var request = XMLHttpRequest();
// // request.open("GET", vgmUrl, true);
// // request.send(null);
// // request.onreadystatechange = function() {
// //   if (request.readyState == 4)
// //     alert(request.responseText);
// // };

// scrape jobs list from indeed in javascript

// Create a new XMLHttpRequest object
// var xhr = new XMLHttpRequest()

var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();

// Set the URL to scrape from
xhr.open("GET", "https://www.indeed.com/jobs?q=javascript&l=", true);

// Set the callback function to process the response
xhr.onload = function () {
  // Parse the response into an HTML document
  var doc = new DOMParser().parseFromString(xhr.responseText, "text/html");

  // Get all job postings from the page
  var jobListings = doc.querySelectorAll('div[data-tn-component="organicJob"]');

  // Loop through each job listing and extract its title and link
  jobListings.forEach(function (listing) {
    // Extract the title of the job listing
    var title = listing.querySelector(
      'a[data-tn-element="jobTitle"]'
    ).innerText;

    // Extract the link of the job listing
    var link = listing.querySelector('a[data-tn-element="jobTitle"]').href;

    // Log out the title and link of each job posting
    console.log(title + " - " + link);
  });
};

// Send request to Indeed's server
xhr.send();
