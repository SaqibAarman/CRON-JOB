// const axios = require("axios");

//

// axios({
//   method: "post",
//   url: "https://async.scraperapi.com/jobs",
//   JSON: {
//     apiKey: "fbbacd7dac9ed2b5cb83fde1c6b276ed",
//     url: url,
//   },
// })
//   .then(function (response) {
//     //handle success
//     console.log(response.JSON());
//   })
//   .catch(function (response) {
//     //handle error
//     console.log(response);
//   });

// // const getData = async () => {
// //     const data = await axios
// //       .post(
// //         url
// //       )
// //       .then((response) => console.log(response));

// //     return data;
// //   };

// const axios = require('axios');

// const url = "https://au.indeed.com/jobs?q=node.js%26l=Sydney+NSW%26from=searchOnHP%26vjk=50c1b85352999773";

// (async() => {
// const { data } = await axios({
// data: {
// apiKey: 'fbbacd7dac9ed2b5cb83fde1c6b276ed',
// url: url
// },
// headers: { 'Content-Type': 'application/json' },
// method: 'POST',
// url: 'https://async.scraperapi.com/jobs'
// });

// console.log(data);
// })();

// const axios = require("axios");

// (async () => {
//   const { data } = await axios.get(
//     "https://async.scraperapi.com/jobs/3438c1b6-a6bd-43cc-95f0-1d9cd78b268b"
//     // , JSON = {render: true}
//   );

//   console.log(data);
// })();

/* 
    OUT-PUT

    {
  id: '3438c1b6-a6bd-43cc-95f0-1d9cd78b268b',
  status: 'running',
  statusUrl: 'https://async.scraperapi.com/jobs/3438c1b6-a6bd-43cc-95f0-1d9cd78b268b',
  url: 'https://au.indeed.com/jobs?q=node.js%26l=Sydney+NSW%26from=searchOnHP%26vjk=50c1b85352999773'
}
*/

// const parser = require("node-html-parser");
import { parse } from 'node-html-parser';

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
	<meta content="en_US" http-equiv="Content-Language">
	<meta content="notranslate" name="google">
	<meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" name="viewport">
	<title>Software Engineer Jobs in Boston, Massachusetts, United States - February 2023 | Wellfound (formerly
		AngelList Talent)</title>
	<meta content="index" name="robots">
	<link href="https://angel.co/role/l/software-engineer/boston" rel="canonical">
	<meta
		content="Find the best Software Engineer jobs in Boston, Massachusetts, United States in February 2023! Apply to all of them with a single profile and get in touch with hiring managers directly on Wellfound (formerly AngelList Talent)."
		name="description">
	<meta content="Wellfound (formerly AngelList Talent)" property="og:site_name">
	<meta content="https://angel.co/locations/hero-jobs.png" property="og:image">
	<meta content="https://angel.co/role/l/software-engineer/boston" property="og:url">
	<meta content="Software Engineer Jobs in Boston, Massachusetts, United States - February 2023" property="og:title">
	<meta
		content="Find the best Software Engineer jobs in Boston, Massachusetts, United States in February 2023! Apply to all of them with a single profile and get in touch with hiring managers directly on Wellfound (formerly AngelList Talent)."
		property="og:description">
	<meta content="summary" name="twitter:card">
	<meta content="@wellfoundhq" name="twitter:site">
	<meta content="@wellfoundhq" name="twitter:creator">
	<link href="/images/icons/wellfound.ico" rel="shortcut icon">
	<link href="/images/icons/wellfound-favicon-57x.png" rel="apple-touch-icon-precomposed" sizes="57x57">
	<link href="/images/icons/wellfound-favicon-72x.png" rel="apple-touch-icon-precomposed" sizes="72x72">
	<link href="/images/icons/wellfound-favicon-114x.png" rel="apple-touch-icon-precomposed" sizes="114x114">
	<link href="/images/icons/wellfound-favicon-144x.png" rel="apple-touch-icon-precomposed" sizes="144x144">
	<meta charset="utf-8">
	<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
	<meta content="en_US" http-equiv="Content-Language">
	<meta name="next-head-count" content="22">
	<link href="https://segmntcdn.angel.co/" rel="preconnect">
	<link rel="preload" href="/talent/_next/static/css/321e2e0b32021e6f.css" as="style" crossorigin="anonymous">
	<link rel="stylesheet" href="/talent/_next/static/css/321e2e0b32021e6f.css" crossorigin="anonymous" data-n-g="">
	<link rel="preload" href="/talent/_next/static/css/e811bb08e514e704.css" as="style" crossorigin="anonymous">
	<link rel="stylesheet" href="/talent/_next/static/css/e811bb08e514e704.css" crossorigin="anonymous" data-n-p="">
	<link rel="preload" href="/talent/_next/static/css/1cef5e60dbcb6f43.css" as="style" crossorigin="anonymous">
	<link rel="stylesheet" href="/talent/_next/static/css/1cef5e60dbcb6f43.css" crossorigin="anonymous" data-n-p="">
	<link rel="preload" href="/talent/_next/static/css/08db05e28bb0ae03.css" as="style" crossorigin="anonymous">
	<link rel="stylesheet" href="/talent/_next/static/css/08db05e28bb0ae03.css" crossorigin="anonymous" data-n-p="">
	<link rel="preload" href="/talent/_next/static/css/0cfb94e59e9d5011.css" as="style" crossorigin="anonymous">
	<link rel="stylesheet" href="/talent/_next/static/css/0cfb94e59e9d5011.css" crossorigin="anonymous" data-n-p="">
	<noscript data-n-css=""></noscript>
	<script type="text/javascript" async=""
		src="https://www.googletagmanager.com/gtag/js?id=G-705F94181H&amp;l=dataLayer&amp;cx=c"></script>
	<script type="text/javascript" async=""
		src="https://www.google-analytics.com/gtm/js?id=GTM-N2QK6X2&amp;cid=1261318578.1675313578"></script>
	<script type="text/javascript" async=""
		src="https://www.googletagmanager.com/gtm.js?id=GTM-W6H9BNZ&amp;l=dataLayer"></script>
	<script src="https://connect.facebook.net/signals/config/317142703664462?v=2.9.95&amp;r=stable" async=""></script>
	<script src="https://connect.facebook.net/signals/plugins/identity.js?v=2.9.95" async=""></script>
	<script type="text/javascript" async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
	<script type="text/javascript" async="" src="https://static.ads-twitter.com/uwt.js"></script>
	<script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
	<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=AW-960514836"></script>
	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/vendor/commons.c42222c4cb2f8913500f.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/vendor/commons.54701049fd6fb8497e9e.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/google-tag-manager/2.5.1/google-tag-manager.dynamic.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/linkedin-insight-tag/1.0.1/linkedin-insight-tag.dynamic.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/twitter-ads/2.5.2/twitter-ads.dynamic.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/facebook-pixel/2.11.5/facebook-pixel.dynamic.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/google-adwords-new/1.2.1/google-adwords-new.dynamic.js.gz"
		async="" status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/hotjar/1.4.0/hotjar.dynamic.js.gz" async=""
		status="loaded"></script>
	<script type="text/javascript"
		src="https://segmntcdn.angel.co/next-integrations/integrations/google-analytics/2.18.5/google-analytics.dynamic.js.gz"
		async="" status="loaded"></script>
	<script defer="" crossorigin="anonymous" nomodule=""
		src="/talent/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
	<script defer="" src="/talent/_next/static/chunks/9583.170fd7338b3db79d.js" crossorigin="anonymous"></script>
	<script defer="" src="/talent/_next/static/chunks/8848.994ea824c66d7c12.js" crossorigin="anonymous"></script>
	<script defer="" src="/talent/_next/static/chunks/8727.974632375a5bbf46.js" crossorigin="anonymous"></script>
	<script defer="" src="/talent/_next/static/chunks/870.39acecd2bb6721cd.js" crossorigin="anonymous"></script>
	<script defer="" src="/talent/_next/static/chunks/8747.299eb5f5e446762b.js" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/webpack-ad06a6c0dc8aff75.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/framework-761d01c2f56123b2.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/main-a49625b640846da9.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/pages/_app-d1ee51cd0d7134db.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/05d954cf-bdb396242b344714.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/22b3a38a-6fb34cf1c461fab2.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/6207-22173bb843dff505.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/6883-654accf958b06afe.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/3609-f33a7991477f54ae.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/3253-24027f2f886078bb.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/3343-4c40b12478498ebc.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/8327-0aedf3c78c2b16b2.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/3209-cd4eab478ad9835b.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4365-56e30d1877e51952.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/7561-e594bc4362aea303.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4660-0a4c50181008c8d8.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/1150-685df7bebfa72e2a.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/9210-4137f6233b25ead3.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/7362-b64fb54d5b45c412.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/6466-28da07e889364695.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/1655-f71331078aef38fb.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/752-524e94659aca7e78.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4544-87dc760770201f9a.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/5912-aff3e5f22ee22eab.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/7011-988a38207b5ed14d.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/2025-708e96c0b35e32a2.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4126-c9c0caa6fc15f08b.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4655-ff6e5ecafbf57d91.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/7786-c5d9540f11f981f1.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4608-59f9b237ee06cb11.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/4359-dcea9edd9085f442.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/9278-037f6e6678300ddb.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/7759-f6799a445347ae8f.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/1781-cce5856e281dcb5c.js" defer="" crossorigin="anonymous"></script>
	<script src="/talent/_next/static/chunks/pages/seoLanding/roleLocationSearch-93c996d9e3c57184.js" defer=""
		crossorigin="anonymous"></script>
	<script src="/talent/_next/static/ch-20ad211f3d46e784d1acf719500deb0f/_buildManifest.js" defer=""
		crossorigin="anonymous"></script>
	<script src="/talent/_next/static/ch-20ad211f3d46e784d1acf719500deb0f/_ssgManifest.js" defer=""
		crossorigin="anonymous"></script>
	<style data-emotion=""></style>
	<script src="https://js.stripe.com/v3"></script>
	<script async="" src="https://static.hotjar.com/c/hotjar-1444722.js?sv=6"></script>
	<script async="" src="https://script.hotjar.com/modules.4b160a4831adaf5337e6.js" charset="utf-8"></script>
	<style type="text/css">
		iframe#_hjRemoteVarsFrame {
			display: none !important;
			width: 1px !important;
			height: 1px !important;
			opacity: 0 !important;
			pointer-events: none !important;
		}
	</style>
	<meta http-equiv="origin-trial"
		content="A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9">
	<script type="text/javascript" async=""
		src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/960514836/?random=1675313578429&amp;cv=11&amp;fst=1675313578429&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=2oa1u0&amp;u_w=1024&amp;u_h=768&amp;hn=www.googleadservices.com&amp;frm=0&amp;url=https%3A%2F%2Fangel.co%2Frole%2Fl%2Fsoftware-engineer%2Fboston&amp;tiba=Software%20Engineer%20Jobs%20in%20Boston%2C%20Massachusetts%2C%20United%20States%20-%20February%202023%20%7C%20Wellfound%20(formerly%20AngelList%20Talent)&amp;auid=1923681879.1675313578&amp;fledge=1&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B109.0.5412.0%7CNot_A%2520Brand%3B99.0.0.0&amp;uamb=0&amp;uap=Windows&amp;uapv=10.0&amp;uaw=0&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4">
	</script>
</head>

<body class="route--LandingRoleandLocation" data-tfe-status="ready">
	<script>
		!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;var m=b.createElement(c),n=b.getElementsByTagName(c)[0];m.async=1,m.src=d,n.parentNode.insertBefore(m,n)}(window,document,"script","https://dd.angel.co/tags.js","BA3EB296E8BE96A496929870E20CD4", {"ajaxListenerPath":"angel.co","overrideAbortFetch":true,"allowHtmlContentTypeOnCaptcha":true,"endpoint":"https://dd.angel.co/js/"});
	</script>
	<div id="__next" data-reactroot="">
		<div id="main">
			<div class="styles_bannerToaster__evwDg"></div>
			<div class="styles_floatToaster__S8Ply"></div>
			<div class="styles_fullscreenToaster__WMwnW"></div>
			<header class="mx-auto mb-8 max-w-screen-xl border-b border-gray-300 px-6 pt-4 pb-6 lg:px-20">
				<div class="flex flex-row items-center justify-between"><a href="/"
						class="styles_component__UCLp3 styles_defaultLink__eZMqw flex items-center mr-4"
						aria-label="Wellfound"><svg fill="currentColor" viewBox="0 0 716.1 179.8" width="120"
							class="w-30 text-black">
							<g transform="translate(-157.7 -156.2)">
								<path
									d="M369.4 235v-64.8h-17.1v-14h34.3V235h16.9v14h-51.2v-14zM430.6 235v-64.8h-17v-14h34.3V235h16.9v14h-51.2v-14zM485.3 249v-54H469v-14h16.3v-5.5c0-12.5 6.5-19.2 19.9-19.2h19.3V170H508c-4.2 0-5.9 1.8-5.9 5.9v5h22.4v14h-22.2v54h-17zM564.6 180.2c-20.7 0-34.7 14-34.7 34.8 0 20.9 14 34.8 34.7 34.8 20.8 0 34.8-13.9 34.8-34.8s-14-34.8-34.8-34.8zm0 55.4c-10.4 0-17.2-8.6-17.2-20.7 0-12 6.8-20.7 17.2-20.7 10.5 0 17.3 8.6 17.3 20.7 0 12.2-6.8 20.7-17.3 20.7zM656.9 181H674v68h-16.7v-8.3c-4.3 5.1-10.3 9.1-19.8 9.1-13.8 0-26.3-7.1-26.3-30.4V181h17.1v37c0 11.3 4.1 17.6 13.5 17.6s15.1-6.9 15.1-19.2V181ZM817.2 156.2v32.9c-4.3-5.3-11-9-20.2-9-17.9 0-31.7 13.7-31.7 34.7 0 21.7 13.3 34.9 31.4 34.9 9.9 0 16.6-4.7 21-10.6v9.8h16.7v-92.7zm-17.1 79.4c-10.6 0-17.4-8.5-17.4-20.7 0-12.1 6.8-20.7 17.4-20.7 10.5 0 17.3 8.5 17.3 20.8 0 12.2-6.8 20.6-17.3 20.6zM178.8 249l-21.1-68h19.6l12.5 48.9 13.5-48.9H223l13.5 48.9L249 181h19.6l-21.4 68h-20.9l-13.2-49.1-13.3 49.1Z">
								</path>
								<circle cx="862.4" cy="238.3" fill="#EA2C00" r="11.4"></circle>
								<circle cx="862.4" cy="191.6" fill="#EA2C00" r="11.4"></circle>
								<path
									d="M342.2 218.9c.3-2.1.5-4.6.5-6.2-.2-20-13.6-32.6-33.4-32.6-20.4 0-34 13.8-34 34.9 0 21 13.4 34.7 35.2 34.7 17.6 0 29.1-10.5 31.2-23.8h-16.9c-1.7 6.8-7.2 10.5-15 10.5-9.8 0-16.3-6.5-16.7-16.8v-.8h49.1zm-32.9-25.7c8.6 0 14.5 4.8 16 13.6h-31.7c1.2-8.4 7.6-13.6 15.7-13.6zM707.8 249h-17.1v-68h16.7v8.3c4.3-5.1 10.3-9.1 19.8-9.1 13.8 0 26.3 7.1 26.3 30.4V249h-17.1v-37.1c0-11.3-4.1-17.6-13.5-17.6s-15.1 6.9-15.1 19.2zM177.7 299.6h-4.2v-3.9h4.2v-4.8c0-6 2.9-9.5 8.8-9.5 1.5 0 2.3.2 3.5.6v3.9c-.8-.3-2-.6-3.3-.6-3 0-4.3 2.1-4.3 5.1v5.3h7.2v3.9h-7.2v25.5h-4.7zM192.5 310.6v-.5c0-8.8 6.1-15 14.5-15 8.3 0 14.5 6.1 14.5 15v.5c0 8.9-6.1 15-14.5 15s-14.5-6.4-14.5-15zm24.1 0v-.4c0-6.8-3.8-11.2-9.6-11.2-5.9 0-9.6 4.4-9.6 11.2v.5c0 6.7 3.7 11.1 9.6 11.1 5.9-.1 9.6-4.5 9.6-11.2zM228.7 295.6h4.7v5.3c1.9-3.3 4.4-5.6 9.7-5.8v4.4c-5.9.3-9.7 2.1-9.7 9.4v16.2h-4.7zM249.9 295.6h4.7v4.5c1.4-2.8 4.6-5 8.8-5 3.8 0 7.1 1.6 8.6 5.5 2-3.8 6.4-5.5 10.1-5.5 5.3 0 9.9 3.2 9.9 11.7V325h-4.7v-18.6c0-5.2-2.2-7.3-6.3-7.3-3.8 0-7.8 2.6-7.8 7.9v18h-4.7v-18.6c0-5.2-2.2-7.3-6.3-7.3-3.8 0-7.8 2.6-7.8 7.9v18h-4.7v-29.4zM299 310.7v-.5c0-8.9 5.7-15.1 13.8-15.1 6.8 0 13.2 4.1 13.2 14.6v1.5h-22.2c.2 6.7 3.4 10.4 9.5 10.4 4.6 0 7.2-1.7 7.8-5.1h4.7c-1 5.9-5.9 9-12.6 9-8.3.1-14.2-5.7-14.2-14.8zm22.2-3.2c-.4-6.1-3.6-8.5-8.4-8.5-4.8 0-8 3.3-8.8 8.5zM333.2 295.6h4.7v5.3c1.9-3.3 4.4-5.6 9.7-5.8v4.4c-5.9.3-9.7 2.1-9.7 9.4v16.2h-4.7zM354.5 284.8h4.7v40.3h-4.7zM377 322.1l-11.5-26.4h5l9 21.1 8.2-21.1h4.8l-16.3 39.7h-4.7zM422.2 284.8h9.8l13.3 40.3h-7.8l-3.2-10H419l-3.2 10h-7zm-1.5 24.9h11.9l-5.9-18.7ZM450.9 295.6h6.8v4.7c1.4-2.9 4.7-5.3 9.5-5.3 5.9 0 10.1 3.4 10.1 11.5V325h-6.8v-17.9c0-4.4-1.8-6.5-5.9-6.5-3.8 0-6.9 2.4-6.9 7v17.3h-6.8zM483.5 326.1h6.9c.6 2.9 2.8 4.6 7.3 4.6 5.3 0 8.2-2.6 8.2-7.9v-4.3c-1.6 2.8-5.3 5.5-9.6 5.5-7.4 0-13.1-5.5-13.1-14v-.4c0-8.3 5.6-14.5 13.2-14.5 4.8 0 7.8 2.2 9.5 5.1v-4.5h6.8V323c-.1 8.7-5.9 13-15 13-9.2-.1-13.4-4.2-14.2-9.9zm22.6-16.4v-.4c0-5.6-3-8.9-7.9-8.9-5.1 0-8 3.7-8 9v.5c0 5.5 3.4 8.8 7.8 8.8 4.6 0 8.1-3.4 8.1-9zM518.8 310.7v-.5c0-9.1 6.3-15.2 14.6-15.2 7.3 0 13.9 4.3 13.9 14.9v2h-21.6c.2 5.6 3 8.7 8.1 8.7 4.1 0 6.3-1.6 6.8-4.5h6.6c-1 6.2-6 9.6-13.5 9.6-8.6 0-14.9-5.7-14.9-15zm21.8-3.4c-.3-5.1-2.9-7.3-7.2-7.3-4.1 0-6.9 2.8-7.5 7.3zM553.6 284.8h6.8v40.3h-6.8zM569.3 284.8h7.5v34.3H594v6h-24.7zM599.2 286.9c0-2.3 1.8-3.9 4.1-3.9s4.1 1.7 4.1 3.9-1.8 3.9-4.1 3.9-4.1-1.7-4.1-3.9zm.7 8.7h6.8v29.5h-6.8zM612.8 315.9h6.4c.3 3 1.9 4.7 5.9 4.7 3.7 0 5.3-1.3 5.3-3.8 0-2.4-2-3.3-6.3-4.1-7.8-1.2-10.6-3.4-10.6-9 0-5.9 5.5-8.8 11-8.8 6 0 10.8 2.3 11.5 8.9h-6.3c-.6-2.7-2.1-3.9-5.2-3.9-2.9 0-4.7 1.4-4.7 3.5s1.4 3 6.1 3.8c6.9 1.1 11 2.8 11 9 0 6-4.2 9.4-11.8 9.4-7.6.1-12.1-3.4-12.3-9.7zM644 316.9v-16.1h-4v-5.1h3.9v-6.5h6.8v6.5h6.5v5.1h-6.5v15.5c0 2.6 1.2 3.8 3.4 3.8 1.4 0 2.4-.2 3.3-.6v5.4c-1.1.4-2.5.7-4.6.7-5.8 0-8.8-3.1-8.8-8.7zM685.6 290.7h-11.2v-5.9h30v5.9h-11.2v34.4h-7.5v-34.4zM704.1 316.9c0-6.9 6.6-9.3 15.1-9.3h3.7v-1.5c0-3.9-1.4-5.9-5.4-5.9-3.5 0-5.3 1.7-5.6 4.6h-6.6c.6-6.9 6-9.7 12.6-9.7s11.8 2.7 11.8 10.8v19.3H723v-3.6c-1.9 2.5-4.5 4.2-9 4.2-5.5-.1-9.9-2.7-9.9-8.9zm18.7-2.1v-2.9h-3.5c-5.2 0-8.5 1.2-8.5 4.8 0 2.5 1.4 4.1 4.7 4.1 4.2 0 7.3-2.2 7.3-6zM737.6 284.8h6.8v40.3h-6.8zM750.8 310.7v-.5c0-9.1 6.3-15.2 14.6-15.2 7.3 0 13.9 4.3 13.9 14.9v2h-21.6c.2 5.6 3 8.7 8.1 8.7 4.1 0 6.3-1.6 6.8-4.5h6.6c-1 6.2-6 9.6-13.5 9.6-8.7 0-14.9-5.7-14.9-15zm21.8-3.4c-.3-5.1-2.9-7.3-7.2-7.3-4.1 0-6.9 2.8-7.5 7.3zM785.4 295.6h6.8v4.7c1.4-2.9 4.7-5.3 9.5-5.3 5.9 0 10.1 3.4 10.1 11.5V325H805v-17.9c0-4.4-1.8-6.5-5.9-6.5-3.8 0-6.9 2.4-6.9 7v17.3h-6.8zM820.8 316.9v-16.1h-3.9v-5.1h3.9v-6.5h6.8v6.5h6.5v5.1h-6.5v15.5c0 2.6 1.2 3.8 3.4 3.8 1.4 0 2.4-.2 3.3-.6v5.4c-1.1.4-2.5.7-4.6.7-5.9 0-8.9-3.1-8.9-8.7z">
								</path>
							</g>
						</svg></a>
					<div class="md:hidden">
						<button class="styles_component__7ZpRT !text-black" type="button"><svg fill="currentColor" height="16px" viewBox="0 0 32 32" width="16px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path></svg></button>
					</div>
					<nav class="relative hidden items-center bg-white md:flex">
						<button class="styles_component__7ZpRT absolute right-2 hidden" type="button"></button>
						<div class="r-0 relative hidden space-x-8 font-light md:block"><a
								class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black underline-offset-8 hover:!text-dark-link underline"
								href="/discover">Discover</a><a
								class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black underline-offset-8 hover:!text-dark-link"
								href="/jobs">Find Jobs</a><a href="/recruit/overview"
								class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black underline-offset-8 hover:!text-dark-link">For
								Recruiters</a></div>
						<div class="ml-10"><a class="styles-module_component__88XzG px-9 rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-4 py-2 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button"
								href="/login">Log In</a><a class="styles-module_component__88XzG px-12 rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-4 py-2 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="Button"
								href="/jobs/signup?source=seo+landing&amp;source_content=global_header_join_text">Sign
								Up</a></div>
					</nav>
				</div>
				<div class="absolute left-0  z-50 h-full w-full space-y-4 bg-white pt-4 font-bold md:hidden hidden">
					<div class="mx-6 flex content-center items-center border-b border-gray-300"><a
							class="styles_component__UCLp3 styles_defaultLink__eZMqw flex-1 !text-black !no-underline"
							href="/discover">Discover</a><svg viewBox="0 0 24 24" fill="currentColor"
							xmlns="http://www.w3.org/2000/svg" class="haloIcon w-4 max-w-full">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
								fill="currentColor"></path>
						</svg></div>
					<div class="mx-6 flex content-center items-center border-b border-gray-300"><a
							class="styles_component__UCLp3 styles_defaultLink__eZMqw flex-1 !text-black !no-underline"
							href="/jobs">For Job Seekers</a><svg viewBox="0 0 24 24" fill="currentColor"
							xmlns="http://www.w3.org/2000/svg" class="haloIcon w-4 max-w-full">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
								fill="currentColor"></path>
						</svg></div>
					<div class="mx-6 flex content-center items-center border-b border-gray-300"><a
							href="/recruit/overview"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw flex-1 !text-black !no-underline">For
							Recruiters</a><svg viewBox="0 0 24 24" fill="currentColor"
							xmlns="http://www.w3.org/2000/svg" class="haloIcon w-4 max-w-full">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
								fill="currentColor"></path>
						</svg></div>
					<div class="mx-4 grid grid-cols-2"><a class="styles-module_component__88XzG rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-4 py-2 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button"
							href="/login">Log In</a><a class="styles-module_component__88XzG rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-4 py-2 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="Button"
							href="/jobs/signup?source=seo+landing&amp;source_content=global_header_join_text">Sign
							Up</a></div>
				</div>
				<script>
					window.addEventListener('message', message => {
            if (message.data.type === 'google-one-tap.height_changed') {
              document.querySelector('#al-google-one-tap-iframe').style.height = message.data.height;
            }
          });
				</script><iframe class="styles_alGoogleOneTapIframe__iyQc5" id="al-google-one-tap-iframe"
					src="/auth/google_one_tap"></iframe>
			</header>
			<div class="styles_component__fL5gg">
				<div class="styles_searchBar__CSYBc">
					<form class="m-auto mb-8 w-full styles_width100__a58wN">
						<div class="m-auto items-center justify-center gap-4 space-y-4 text-center lg:flex lg:space-y-0"
							data-test="SearchBar">
							<header class="text-dark-aaaa font-medium antialiased text-xl">Show me</header>
							<div class="styles_textInputWrapper__RdlDe flex items-center justify-center gap-4 lg:flex-1"
								data-test="RoleKeywordFieldWrapper">
								<div class="min-w-[200px] lg:flex-1">
									<div class="css-1pcexqc-container styles_component__BTG10">
										<div class="css-bg1rzq-control select__control">
											<div
												class="css-1hwfws3 select__value-container select__value-container--has-value">
												<span class="text-blue-500"></span>
												<div class="css-dvua67-singleValue select__single-value">Software
													Engineer</div>
												<div class="css-1g6gooi">
													<div class="select__input" style="display:inline-block"><input type="text" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-49428-input" spellcheck="false" tabindex="0" value="" aria-autocomplete="list" style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;">
														<div
															style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 16px; font-family: Arial; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;">
														</div>
													</div>
												</div>
											</div>
											<div class="css-1wy0on6 select__indicators">
												<div aria-hidden="true"
													class="css-16pqwjk-indicatorContainer select__indicator select__clear-indicator">
													<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true"
														focusable="false" class="css-19bqh2r">
														<path
															d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z">
														</path>
													</svg></div>
												<span class="css-bgvzuu-indicatorSeparator select__indicator-separator"></span>
												<div aria-hidden="true"
													class="css-16pqwjk-indicatorContainer select__indicator select__dropdown-indicator">
													<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true"
														focusable="false" class="css-19bqh2r">
														<path
															d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
														</path>
													</svg></div>
											</div>
										</div>
									</div>
								</div>
								<header class="text-dark-aaaa font-medium antialiased text-xl">roles,</header>
							</div>
							<div
								class="relative items-center justify-center md:flex lg:flex-1 lg:justify-start styles_textInputWrapper__RdlDe">
								<div class="flex items-center justify-center gap-4 lg:flex-1">
									<header class="text-dark-aaaa font-medium antialiased text-xl">hiring in</header>
									<div class="min-w-[200px] md:flex-1">
										<div class="css-1pcexqc-container styles_component__BTG10">
											<div class="css-bg1rzq-control select__control">
												<div
													class="css-1hwfws3 select__value-container select__value-container--has-value">
													<span class="text-blue-500"></span>
													<div class="css-dvua67-singleValue select__single-value">Boston
													</div>
													<div class="css-1g6gooi">
														<div class="select__input" style="display:inline-block"><input type="text" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-49429-input" spellcheck="false" tabindex="0" value="" aria-autocomplete="list" style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;">
															<div
																style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 16px; font-family: Arial; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;">
															</div>
														</div>
													</div>
												</div>
												<div class="css-1wy0on6 select__indicators">
													<div aria-hidden="true"
														class="css-16pqwjk-indicatorContainer select__indicator select__clear-indicator">
														<svg height="20" width="20" viewBox="0 0 20 20"
															aria-hidden="true" focusable="false" class="css-19bqh2r">
															<path
																d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z">
															</path>
														</svg></div>
													<span class="css-bgvzuu-indicatorSeparator select__indicator-separator"></span>
													<div aria-hidden="true"
														class="css-16pqwjk-indicatorContainer select__indicator select__dropdown-indicator">
														<svg height="20" width="20" viewBox="0 0 20 20"
															aria-hidden="true" focusable="false" class="css-19bqh2r">
															<path
																d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
															</path>
														</svg></div>
												</div>
											</div>
										</div>
									</div>
								</div><button class="styles-module_component__88XzG ml-4 mt-4 md:mt-0 rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-4 py-2 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="Button" type="submit">Search</button>
							</div>
						</div>
					</form>
					<div class="styles_header__SaaIO">
						<div>
							<h1 class="styles_title__D_Srf">Software Engineer
								<!-- --> Jobs in
								<!-- -->Boston</h1>
							<h4 class="text-dark-a">91
								<!-- --> results total</h4>
						</div>
						<div class="text-right">
							<h4 class="styles_resultCount__Biln8">Page
								<!-- -->1
								<!-- --> of
								<!-- -->3</h4>
						</div>
					</div>
				</div>
				<div class="styles_resultsList__Q46cW">
					<div class="flex flex-col w-full" style="text-align:left">
						<div class="styles_results__ZQhDf">
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/teikametrics">
											<div class="styles_logo__rR_dS">
												<img alt="Teikametrics company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/110366-600eef9d32fb5169e533a8bac879d869-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/teikametrics">
												<h4 class="styles_name__rSxBl">Teikametrics</h4>
											</a><span class="styles_subheader__WPhHT">Helping third-party sellers win on Amazon</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg viewBox="0 0 24 24"
													fill="currentColor" xmlns="http://www.w3.org/2000/svg"
													class="haloIcon w-4 max-w-full">
													<path
														d="M3.613 17.79l.094-.083L10 11.415l3.293 3.292a1 1 0 001.32.083l.094-.083L19 10.415l1.293 1.292c.602.603 1.614.22 1.701-.593L22 11l-.002-4.06-.009-.087-.025-.119-.024-.076-.034-.081-.052-.098-.067-.096-.08-.09a1.014 1.014 0 00-.112-.097l-.11-.071-.114-.054-.105-.035-.117-.025-.06-.007L21 6h-4c-.852 0-1.297.986-.783 1.623l.076.084L17.585 9 14 12.585l-3.293-3.292a1 1 0 00-1.32-.083l-.094.083-7 7a1 1 0 001.32 1.497z"
														fill="currentColor"></path>
												</svg></div>Growing fast
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/teikametrics/jobs/2540682-python-software-engineer">Python
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/teikametrics/jobs/2548531-senior-backend-software-engineer">Senior
												Backend Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">1 week ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 week ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/teikametrics/jobs/2544468-senior-site-reliability-engineer">Senior
												Site Reliability
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/iterative-health">
											<div class="styles_logo__rR_dS">
												<img alt="Iterative Health company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/5122690-540cfe41697130b952f14e7eb55cda5a-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/iterative-health">
												<h4 class="styles_name__rSxBl">Iterative Health</h4>
											</a><span class="styles_subheader__WPhHT">Computer vision tools for gastroenterologists</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/iterative-health/jobs/2536201-principal-software-engineer">Principal
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Dallas • San Francisco • Cambridge<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">3 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/iterative-health/jobs/2489551-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Dallas • San Francisco • Cambridge<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/iterative-health/jobs/2489553-staff-software-engineer">Staff
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Dallas • San Francisco • Cambridge<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/moxe-health">
											<div class="styles_logo__rR_dS">
												<img alt="Moxe company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/29595-3b075a8867066c96a8fc1469b1381bfd-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/moxe-health">
												<h4 class="styles_name__rSxBl">Moxe</h4>
											</a><span class="styles_subheader__WPhHT">To connect our healthcare ecosystem with the highest quality and most efficient data</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg viewBox="0 0 24 24"
													fill="currentColor" xmlns="http://www.w3.org/2000/svg"
													class="haloIcon w-4 max-w-full">
													<path
														d="M3.613 17.79l.094-.083L10 11.415l3.293 3.292a1 1 0 001.32.083l.094-.083L19 10.415l1.293 1.292c.602.603 1.614.22 1.701-.593L22 11l-.002-4.06-.009-.087-.025-.119-.024-.076-.034-.081-.052-.098-.067-.096-.08-.09a1.014 1.014 0 00-.112-.097l-.11-.071-.114-.054-.105-.035-.117-.025-.06-.007L21 6h-4c-.852 0-1.297.986-.783 1.623l.076.084L17.585 9 14 12.585l-3.293-3.292a1 1 0 00-1.32-.083l-.094.083-7 7a1 1 0 001.32 1.497z"
														fill="currentColor"></path>
												</svg></div>Growing fast
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/moxe-health/jobs/2557933-senior-software-engineer">Senior
												Software Engineer
											</a><span class="styles_locationAndCompensation__vDfgW">Boston</span><span class="text-xs lowercase text-dark-a md:hidden">4 days ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">4 days ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/moxe-health/jobs/2512563-lead-devops-engineer">Lead
												DevOps
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston</span><span class="text-xs lowercase text-dark-a md:hidden">1 month ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 month ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/onestudyteam">
											<div class="styles_logo__rR_dS">
												<img alt="OneStudyTeam company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/126176-691f9e2befbdeba7e23c69a9601ad8d0-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/onestudyteam">
												<h4 class="styles_name__rSxBl">OneStudyTeam</h4>
											</a><span class="styles_subheader__WPhHT">We build solutions that connect and empower the clinical trial ecosystem</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">201-500<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI"><svg height="14" width="8">
													<path
														d="M7.578 9.392A2.794 2.794 0 005.81 6.784l-2.975-1.19a1.059 1.059 0 01.394-2.04h2.93a.875.875 0 100-1.75H5.02a.146.146 0 01-.145-.147V.875a.875.875 0 10-1.75 0v.8c0 .076-.058.139-.133.146a2.8 2.8 0 00-.8 5.397l2.975 1.189a1.059 1.059 0 01-.394 2.042H1.838a.875.875 0 100 1.75H2.98c.08 0 .146.065.146.146v.78a.875.875 0 101.75 0v-.8c0-.076.058-.139.133-.146a2.806 2.806 0 002.57-2.787z"
														fill="currentColor" fill-rule="evenodd"></path>
												</svg></div>Recently funded
										</li>
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div
													class="styles_avatar__KzFhv inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-4 w-4 styles_avatar__KzFhv">
													<img alt="Avatar for Same investor as Groupon" class="rounded-md" height="14" src="https://photos.angel.co/startups/i/32211-2ebb323a7147718469ae5730c7dfb615-medium_jpg.jpg?buster=1569600220" width="14"></div>
												</div>Same investor as Groupon
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/onestudyteam/jobs/2548922-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston • Remote<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">1 week ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 week ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/tvision-insights">
											<div class="styles_logo__rR_dS">
												<img alt="TVision company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/441864-959fbf2f3aad95c86034a4e11d41e9cd-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/tvision-insights">
												<h4 class="styles_name__rSxBl">TVision</h4>
											</a><span class="styles_subheader__WPhHT">TVision is the leader in TV performance metrics - measuring how people really watchTV</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/tvision-insights/jobs/1592987-sr-software-engineer">Sr.
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible<span> • <!-- -->$120k – $180k • No equity</span></span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/tvision-insights/jobs/1592998-senior-systems-engineer">Senior
												Systems
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<span> • <!-- -->$100k – $160k • No equity</span></span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/tvision-insights/jobs/1592992-lead-devops-enginer">Lead
												DevOps
												Enginer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible<span> • <!-- -->$140k – $180k • No equity</span></span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/pickle-robot-company">
											<div class="styles_logo__rR_dS">
												<img alt="Pickle Robot Company company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/6984007-ab0616dd6c1431a5f331a2bc86c1b880-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/pickle-robot-company">
												<h4 class="styles_name__rSxBl">Pickle Robot Company</h4>
											</a><span class="styles_subheader__WPhHT">Autonomous robots for loading docks</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">11-50<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI"><svg height="14" width="8">
													<path
														d="M7.578 9.392A2.794 2.794 0 005.81 6.784l-2.975-1.19a1.059 1.059 0 01.394-2.04h2.93a.875.875 0 100-1.75H5.02a.146.146 0 01-.145-.147V.875a.875.875 0 10-1.75 0v.8c0 .076-.058.139-.133.146a2.8 2.8 0 00-.8 5.397l2.975 1.189a1.059 1.059 0 01-.394 2.042H1.838a.875.875 0 100 1.75H2.98c.08 0 .146.065.146.146v.78a.875.875 0 101.75 0v-.8c0-.076.058-.139.133-.146a2.806 2.806 0 002.57-2.787z"
														fill="currentColor" fill-rule="evenodd"></path>
												</svg></div>Recently funded
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/pickle-robot-company/jobs/1409372-mts-software-engineer-robotics">MTS
												Software Engineer
												(Robotics)</a><span class="styles_locationAndCompensation__vDfgW">Cambridge<span> • <!-- -->$95k – $175k • 0.1% – 0.1%</span></span><span class="text-xs lowercase text-dark-a md:hidden">6 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">6 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/tessian">
											<div class="styles_logo__rR_dS">
												<img alt="Tessian company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/382137-e70d6687d6a871c8862a9c7cf742a3b4-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/tessian">
												<h4 class="styles_name__rSxBl">Tessian</h4>
											</a><span class="styles_subheader__WPhHT">Tessian is a leading cloud email security platform</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">201-500<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_orange__lheFk">
											<div class="styles_flair__E5CBI"><svg viewBox="0 0 24 24"
													fill="currentColor" xmlns="http://www.w3.org/2000/svg"
													class="haloIcon w-4 max-w-full">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M5 22a3 3 0 01-3-3v-6a3 3 0 013-3h1.381l3.172-6.342a3 3 0 012.484-1.651l.2-.007h.263a2.5 2.5 0 012.495 2.336L15 4.5V10h3.998a3 3 0 012.971 3.415l-.029.173-1.2 6a3 3 0 01-2.764 2.407l-.178.005H5zm1-10H5a1 1 0 00-1 1v6a1 1 0 001 1h1v-8zm6.5-8h-.264a1 1 0 00-.832.445l-.062.108-3.236 6.472a1 1 0 00-.1.331L8 11.472V20h9.798a1 1 0 00.951-.69l.03-.114 1.2-6a1 1 0 00-.785-1.177l-.097-.014-.099-.005H15a2 2 0 01-1.995-1.85L13 10V4.5a.5.5 0 00-.41-.492L12.5 4z"
														fill="currentColor"></path>
												</svg><span class="styles_rating__7kGAZ">4.8</span></div>Highly rated
										</li>
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div
													class="styles_avatar__KzFhv inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-4 w-4 styles_avatar__KzFhv">
													<img alt="Avatar for Same investor as Meta" class="rounded-md" height="14" src="https://photos.angel.co/startups/i/32167-783be84a29fcf36b3429c4fab546e9bf-medium_jpg.jpg?buster=1637323785" width="14"></div>
												</div>Same investor as Meta
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg height="15" viewBox="0 0 16 15"
													width="16">
													<g fill="currentColor">
														<path
															d="M3.44 1.433l1.854.737c.04.015.08.023.123.023a8.994 8.994 0 012.527.351c.063.019.13.019.192 0a9.117 9.117 0 013.207-.323.333.333 0 00.149-.022l1.988-.792a.504.504 0 00.053-.913 3.551 3.551 0 00-3.6.06 3.4 3.4 0 00-1.356 1.45.167.167 0 01-.302 0A3.4 3.4 0 006.953.574a3.56 3.56 0 00-3.56-.12.539.539 0 00.047.98zM7.68 6.967h.56c.18 0 .326-.14.334-.319l.024-.557a.333.333 0 00-.168-.304 2.555 2.555 0 01-.2-.126.333.333 0 00-.373 0c-.245.163-.506.3-.779.409a.333.333 0 00-.166.148L4.898 9.874a.333.333 0 00.323.493 14.856 14.856 0 012.83 0 .333.333 0 00.364-.318l.017-.4a.333.333 0 00-.333-.348h-.752a.333.333 0 010-.667h.815c.178 0 .325-.14.333-.317l.016-.334a.333.333 0 00-.334-.349H7.68a.333.333 0 110-.667zM6.647 10.967c-2.771 0-5.871.756-6.263 2.879a.667.667 0 00.656.787h11.404a.5.5 0 00.498-.54c-.184-2.304-3.373-3.126-6.295-3.126z">
														</path>
														<path
															d="M15.565 5.385c-1.506-2.908-5.496-2.828-7.467-2.124a.162.162 0 01-.112 0C6.011 2.556 2.021 2.476.515 5.386a.537.537 0 00.451.785c.278.014.59.022.927.022 1.666 0 4.907-.218 6.024-1.448a.168.168 0 01.246 0c1.116 1.229 4.354 1.448 6.024 1.448.334 0 .649-.008.926-.022a.537.537 0 00.452-.786z">
														</path>
													</g>
												</svg><span class="styles_rating__7kGAZ">4.4</span></div>Work / Life
											Balance
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg fill="none" height="24"
													viewBox="0 0 24 24" width="24" class="styles_icon__XeSiG">
													<path clip-rule="evenodd"
														d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5229 22 12 22C6.47717 22 2.00002 17.5228 2.00002 12C2.00002 6.47714 6.47717 1.99999 12 1.99999C17.5229 1.99999 22 6.47714 22 12ZM17.2567 6.02059C17.4411 6.06514 17.6086 6.1622 17.739 6.30002C17.87 6.43715 17.9584 6.60938 17.9933 6.79578C18.0283 6.98218 18.0084 7.17473 17.936 7.35002L15.211 13.892C15.0884 14.1878 14.9087 14.4565 14.6822 14.6828C14.4557 14.9091 14.1869 15.0886 13.891 15.211L7.349 17.937C7.17347 18.0105 6.98034 18.0312 6.7932 17.9968C6.60607 17.9623 6.43301 17.8741 6.29516 17.7429C6.15731 17.6118 6.06063 17.4433 6.01691 17.2581C5.9732 17.0729 5.98435 16.879 6.049 16.7L8.477 9.95202C8.5986 9.61229 8.79406 9.30377 9.0493 9.04871C9.30453 8.79364 9.61319 8.59839 9.953 8.47702L16.7 6.04902C16.8789 5.98591 17.0723 5.97604 17.2567 6.02059ZM11.0478 13.4252C11.3296 13.6135 11.661 13.714 12 13.714C12.4544 13.7135 12.8901 13.5327 13.2114 13.2114C13.5327 12.8901 13.7135 12.4544 13.714 12C13.714 11.661 13.6135 11.3296 13.4251 11.0478C13.2368 10.7659 12.9691 10.5462 12.6559 10.4165C12.3427 10.2868 11.9981 10.2528 11.6656 10.319C11.3331 10.3851 11.0277 10.5483 10.788 10.788C10.5483 11.0277 10.3851 11.3332 10.3189 11.6656C10.2528 11.9981 10.2867 12.3427 10.4165 12.6559C10.5462 12.9691 10.7659 13.2368 11.0478 13.4252Z"
														fill="currentColor" fill-rule="evenodd"></path>
												</svg><span class="styles_rating__7kGAZ">4.6</span></div>Strong
											Leadership
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/tessian/jobs/2545400-quality-assurance-quality-control-software-engineer">Quality
												Assurance/Quality Control Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Austin • Boston • London<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/tessian/jobs/1593375-senior-data-engineer">Senior Data
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Austin • Boston • London<!-- --> • Remote possible<span> • <!-- -->$90k – $100k</span></span><span class="text-xs lowercase text-dark-a md:hidden">3 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/crayon">
											<div class="styles_logo__rR_dS">
												<img alt="Crayon company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/543154-a52488356363b029f3e8f83f6fd6b93b-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/crayon">
												<h4 class="styles_name__rSxBl">Crayon</h4>
											</a><span class="styles_subheader__WPhHT">Track, analyze, and act on everything happening outside your company's four walls</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/crayon/jobs/2521290-software-engineer">Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">1 month ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 month ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/logrocket">
											<div class="styles_logo__rR_dS">
												<img alt="LogRocket company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/1206718-100164e9c6f3ce3d923cac870e1eac16-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/logrocket">
												<h4 class="styles_name__rSxBl">LogRocket</h4>
											</a><span class="styles_subheader__WPhHT">Replay what users do on your site, helping you reproduce bugs and fix issues faster</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_orange__lheFk">
											<div class="styles_flair__E5CBI"><svg viewBox="0 0 24 24"
													fill="currentColor" xmlns="http://www.w3.org/2000/svg"
													class="haloIcon w-4 max-w-full">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M5 22a3 3 0 01-3-3v-6a3 3 0 013-3h1.381l3.172-6.342a3 3 0 012.484-1.651l.2-.007h.263a2.5 2.5 0 012.495 2.336L15 4.5V10h3.998a3 3 0 012.971 3.415l-.029.173-1.2 6a3 3 0 01-2.764 2.407l-.178.005H5zm1-10H5a1 1 0 00-1 1v6a1 1 0 001 1h1v-8zm6.5-8h-.264a1 1 0 00-.832.445l-.062.108-3.236 6.472a1 1 0 00-.1.331L8 11.472V20h9.798a1 1 0 00.951-.69l.03-.114 1.2-6a1 1 0 00-.785-1.177l-.097-.014-.099-.005H15a2 2 0 01-1.995-1.85L13 10V4.5a.5.5 0 00-.41-.492L12.5 4z"
														fill="currentColor"></path>
												</svg><span class="styles_rating__7kGAZ">5.0</span></div>Highly rated
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg height="15" viewBox="0 0 16 15"
													width="16">
													<g fill="currentColor">
														<path
															d="M3.44 1.433l1.854.737c.04.015.08.023.123.023a8.994 8.994 0 012.527.351c.063.019.13.019.192 0a9.117 9.117 0 013.207-.323.333.333 0 00.149-.022l1.988-.792a.504.504 0 00.053-.913 3.551 3.551 0 00-3.6.06 3.4 3.4 0 00-1.356 1.45.167.167 0 01-.302 0A3.4 3.4 0 006.953.574a3.56 3.56 0 00-3.56-.12.539.539 0 00.047.98zM7.68 6.967h.56c.18 0 .326-.14.334-.319l.024-.557a.333.333 0 00-.168-.304 2.555 2.555 0 01-.2-.126.333.333 0 00-.373 0c-.245.163-.506.3-.779.409a.333.333 0 00-.166.148L4.898 9.874a.333.333 0 00.323.493 14.856 14.856 0 012.83 0 .333.333 0 00.364-.318l.017-.4a.333.333 0 00-.333-.348h-.752a.333.333 0 010-.667h.815c.178 0 .325-.14.333-.317l.016-.334a.333.333 0 00-.334-.349H7.68a.333.333 0 110-.667zM6.647 10.967c-2.771 0-5.871.756-6.263 2.879a.667.667 0 00.656.787h11.404a.5.5 0 00.498-.54c-.184-2.304-3.373-3.126-6.295-3.126z">
														</path>
														<path
															d="M15.565 5.385c-1.506-2.908-5.496-2.828-7.467-2.124a.162.162 0 01-.112 0C6.011 2.556 2.021 2.476.515 5.386a.537.537 0 00.451.785c.278.014.59.022.927.022 1.666 0 4.907-.218 6.024-1.448a.168.168 0 01.246 0c1.116 1.229 4.354 1.448 6.024 1.448.334 0 .649-.008.926-.022a.537.537 0 00.452-.786z">
														</path>
													</g>
												</svg><span class="styles_rating__7kGAZ">4.6</span></div>Work / Life
											Balance
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg fill="none" height="24"
													viewBox="0 0 24 24" width="24" class="styles_icon__XeSiG">
													<path clip-rule="evenodd"
														d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5229 22 12 22C6.47717 22 2.00002 17.5228 2.00002 12C2.00002 6.47714 6.47717 1.99999 12 1.99999C17.5229 1.99999 22 6.47714 22 12ZM17.2567 6.02059C17.4411 6.06514 17.6086 6.1622 17.739 6.30002C17.87 6.43715 17.9584 6.60938 17.9933 6.79578C18.0283 6.98218 18.0084 7.17473 17.936 7.35002L15.211 13.892C15.0884 14.1878 14.9087 14.4565 14.6822 14.6828C14.4557 14.9091 14.1869 15.0886 13.891 15.211L7.349 17.937C7.17347 18.0105 6.98034 18.0312 6.7932 17.9968C6.60607 17.9623 6.43301 17.8741 6.29516 17.7429C6.15731 17.6118 6.06063 17.4433 6.01691 17.2581C5.9732 17.0729 5.98435 16.879 6.049 16.7L8.477 9.95202C8.5986 9.61229 8.79406 9.30377 9.0493 9.04871C9.30453 8.79364 9.61319 8.59839 9.953 8.47702L16.7 6.04902C16.8789 5.98591 17.0723 5.97604 17.2567 6.02059ZM11.0478 13.4252C11.3296 13.6135 11.661 13.714 12 13.714C12.4544 13.7135 12.8901 13.5327 13.2114 13.2114C13.5327 12.8901 13.7135 12.4544 13.714 12C13.714 11.661 13.6135 11.3296 13.4251 11.0478C13.2368 10.7659 12.9691 10.5462 12.6559 10.4165C12.3427 10.2868 11.9981 10.2528 11.6656 10.319C11.3331 10.3851 11.0277 10.5483 10.788 10.788C10.5483 11.0277 10.3851 11.3332 10.3189 11.6656C10.2528 11.9981 10.2867 12.3427 10.4165 12.6559C10.5462 12.9691 10.7659 13.2368 11.0478 13.4252Z"
														fill="currentColor" fill-rule="evenodd"></path>
												</svg><span class="styles_rating__7kGAZ">5.0</span></div>Strong
											Leadership
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/logrocket/jobs/1354884-software-engineer">Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston</span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/logrocket/jobs/2527099-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston</span><span class="text-xs lowercase text-dark-a md:hidden">4 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">4 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/logrocket/jobs/1360495-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">4 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">4 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/klaviyo">
											<div class="styles_logo__rR_dS">
												<img alt="Klaviyo company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/98145-059a3954a1c856feea0d136a73960674-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/klaviyo">
												<h4 class="styles_name__rSxBl">Klaviyo</h4>
											</a>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">1001-5000<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_orange__lheFk">
											<div class="styles_flair__E5CBI"><svg viewBox="0 0 24 24"
													fill="currentColor" xmlns="http://www.w3.org/2000/svg"
													class="haloIcon w-4 max-w-full">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M5 22a3 3 0 01-3-3v-6a3 3 0 013-3h1.381l3.172-6.342a3 3 0 012.484-1.651l.2-.007h.263a2.5 2.5 0 012.495 2.336L15 4.5V10h3.998a3 3 0 012.971 3.415l-.029.173-1.2 6a3 3 0 01-2.764 2.407l-.178.005H5zm1-10H5a1 1 0 00-1 1v6a1 1 0 001 1h1v-8zm6.5-8h-.264a1 1 0 00-.832.445l-.062.108-3.236 6.472a1 1 0 00-.1.331L8 11.472V20h9.798a1 1 0 00.951-.69l.03-.114 1.2-6a1 1 0 00-.785-1.177l-.097-.014-.099-.005H15a2 2 0 01-1.995-1.85L13 10V4.5a.5.5 0 00-.41-.492L12.5 4z"
														fill="currentColor"></path>
												</svg><span class="styles_rating__7kGAZ">4.6</span></div>Highly rated
										</li>
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div
													class="styles_avatar__KzFhv inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-4 w-4 styles_avatar__KzFhv">
													<img alt="Avatar for Same investor as Meta" class="rounded-md" height="14" src="https://photos.angel.co/startups/i/32167-783be84a29fcf36b3429c4fab546e9bf-medium_jpg.jpg?buster=1637323785" width="14"></div>
												</div>Same investor as Meta
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg height="15" viewBox="0 0 16 15"
													width="16">
													<g fill="currentColor">
														<path
															d="M3.44 1.433l1.854.737c.04.015.08.023.123.023a8.994 8.994 0 012.527.351c.063.019.13.019.192 0a9.117 9.117 0 013.207-.323.333.333 0 00.149-.022l1.988-.792a.504.504 0 00.053-.913 3.551 3.551 0 00-3.6.06 3.4 3.4 0 00-1.356 1.45.167.167 0 01-.302 0A3.4 3.4 0 006.953.574a3.56 3.56 0 00-3.56-.12.539.539 0 00.047.98zM7.68 6.967h.56c.18 0 .326-.14.334-.319l.024-.557a.333.333 0 00-.168-.304 2.555 2.555 0 01-.2-.126.333.333 0 00-.373 0c-.245.163-.506.3-.779.409a.333.333 0 00-.166.148L4.898 9.874a.333.333 0 00.323.493 14.856 14.856 0 012.83 0 .333.333 0 00.364-.318l.017-.4a.333.333 0 00-.333-.348h-.752a.333.333 0 010-.667h.815c.178 0 .325-.14.333-.317l.016-.334a.333.333 0 00-.334-.349H7.68a.333.333 0 110-.667zM6.647 10.967c-2.771 0-5.871.756-6.263 2.879a.667.667 0 00.656.787h11.404a.5.5 0 00.498-.54c-.184-2.304-3.373-3.126-6.295-3.126z">
														</path>
														<path
															d="M15.565 5.385c-1.506-2.908-5.496-2.828-7.467-2.124a.162.162 0 01-.112 0C6.011 2.556 2.021 2.476.515 5.386a.537.537 0 00.451.785c.278.014.59.022.927.022 1.666 0 4.907-.218 6.024-1.448a.168.168 0 01.246 0c1.116 1.229 4.354 1.448 6.024 1.448.334 0 .649-.008.926-.022a.537.537 0 00.452-.786z">
														</path>
													</g>
												</svg><span class="styles_rating__7kGAZ">4.5</span></div>Work / Life
											Balance
										</li>
										<li class="styles_component__ejzCg styles_purple__dZx1_">
											<div class="styles_flair__E5CBI"><svg fill="none" height="24"
													viewBox="0 0 24 24" width="24" class="styles_icon__XeSiG">
													<path clip-rule="evenodd"
														d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5229 22 12 22C6.47717 22 2.00002 17.5228 2.00002 12C2.00002 6.47714 6.47717 1.99999 12 1.99999C17.5229 1.99999 22 6.47714 22 12ZM17.2567 6.02059C17.4411 6.06514 17.6086 6.1622 17.739 6.30002C17.87 6.43715 17.9584 6.60938 17.9933 6.79578C18.0283 6.98218 18.0084 7.17473 17.936 7.35002L15.211 13.892C15.0884 14.1878 14.9087 14.4565 14.6822 14.6828C14.4557 14.9091 14.1869 15.0886 13.891 15.211L7.349 17.937C7.17347 18.0105 6.98034 18.0312 6.7932 17.9968C6.60607 17.9623 6.43301 17.8741 6.29516 17.7429C6.15731 17.6118 6.06063 17.4433 6.01691 17.2581C5.9732 17.0729 5.98435 16.879 6.049 16.7L8.477 9.95202C8.5986 9.61229 8.79406 9.30377 9.0493 9.04871C9.30453 8.79364 9.61319 8.59839 9.953 8.47702L16.7 6.04902C16.8789 5.98591 17.0723 5.97604 17.2567 6.02059ZM11.0478 13.4252C11.3296 13.6135 11.661 13.714 12 13.714C12.4544 13.7135 12.8901 13.5327 13.2114 13.2114C13.5327 12.8901 13.7135 12.4544 13.714 12C13.714 11.661 13.6135 11.3296 13.4251 11.0478C13.2368 10.7659 12.9691 10.5462 12.6559 10.4165C12.3427 10.2868 11.9981 10.2528 11.6656 10.319C11.3331 10.3851 11.0277 10.5483 10.788 10.788C10.5483 11.0277 10.3851 11.3332 10.3189 11.6656C10.2528 11.9981 10.2867 12.3427 10.4165 12.6559C10.5462 12.9691 10.7659 13.2368 11.0478 13.4252Z"
														fill="currentColor" fill-rule="evenodd"></path>
												</svg><span class="styles_rating__7kGAZ">4.6</span></div>Strong
											Leadership
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/klaviyo/jobs/2540923-lead-software-engineer-orchestrate">Lead
												Software Engineer,
												Orchestrate</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/klaviyo/jobs/1747715-lead-software-engineer">Lead
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/klaviyo/jobs/1747716-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/cohere-health-1">
											<div class="styles_logo__rR_dS">
												<img alt="Cohere Health company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/7375923-cb6fd0dc0a1a3f03d69284063b008718-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/cohere-health-1">
												<h4 class="styles_name__rSxBl">Cohere Health</h4>
											</a><span class="styles_subheader__WPhHT">Simplifying Healthcare for Patients and Doctors</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">501-1000<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/cohere-health-1/jobs/2534922-software-engineer">Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston</span><span class="text-xs lowercase text-dark-a md:hidden">3 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/cohere-health-1/jobs/2534923-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston</span><span class="text-xs lowercase text-dark-a md:hidden">3 weeks ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 weeks ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/mabl">
											<div class="styles_logo__rR_dS">
												<img alt="mabl company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/4563230-df6b21be5488f6cf9a54276d7e3bb8c6-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/mabl">
												<h4 class="styles_name__rSxBl">mabl</h4>
											</a><span class="styles_subheader__WPhHT">Intelligent test automation for agile teams</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/mabl/jobs/2437632-software-engineer-senior-level">Software
												Engineer (Senior
												Level)</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible<span> • <!-- -->$140k – $180k • 0.01% – 0.02%</span></span><span class="text-xs lowercase text-dark-a md:hidden">3 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/mabl/jobs/2437631-back-end-software-engineer-mid-level">Back-End
												Software Engineer (Mid
												Level)</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible<span> • <!-- -->$120k – $165k • 0.01% – 0.03%</span></span><span class="text-xs lowercase text-dark-a md:hidden">3 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/mabl/jobs/2437630-full-stack-back-end-engineer-senior-level-or-above">Full-Stack/Back-End
												Engineer (Senior Level or
												Above)</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible<span> • <!-- -->$150k – $185k • 0.01% – 0.02%</span></span><span class="text-xs lowercase text-dark-a md:hidden">3 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">3 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/biobot-analytics-1">
											<div class="styles_logo__rR_dS">
												<img alt="Biobot Analytics company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/5806214-ee4210aa065ca8e7f95e5449969949c2-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/biobot-analytics-1">
												<h4 class="styles_name__rSxBl">Biobot Analytics</h4>
											</a><span class="styles_subheader__WPhHT">We transform wastewater infrastructure into public health observatories</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div
													class="styles_avatar__KzFhv inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-4 w-4 styles_avatar__KzFhv">
													<img alt="Avatar for Same investor as Airbnb" class="rounded-md" height="14" src="https://photos.angel.co/startups/i/32677-b873be4bf180abbcdad149b584b7e66f-medium_jpg.jpg?buster=1589637282" width="14"></div>
												</div>Same investor as Airbnb
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/biobot-analytics-1/jobs/2493704-software-engineer">Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">New York City • United States • Cambridge • Remote<!-- --> • Remote possible</span><span class="text-xs lowercase text-dark-a md:hidden">2 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/occupier">
											<div class="styles_logo__rR_dS">
												<img alt="Occupier company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/6071365-f223ecba4e777321a2678c239af4ae0e-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/occupier">
												<h4 class="styles_name__rSxBl">Occupier</h4>
											</a><span class="styles_subheader__WPhHT">Modern Lease Management for commercial tenants and tenant-rep brokers</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">11-50<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/occupier/jobs/1115637-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston • New York City<!-- --> • Remote possible<span> • <!-- -->$160k – $200k • 0.1% – 0.25%</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/haulhub">
											<div class="styles_logo__rR_dS">
												<img alt="HaulHub Technologies company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/2164124-d0151b5310ddee6949cbd5ab9a91aef1-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/haulhub">
												<h4 class="styles_name__rSxBl">HaulHub Technologies</h4>
											</a><span class="styles_subheader__WPhHT">The Performance Platform for the Heavy Construction Industry</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/haulhub/jobs/761340-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Atlanta • Austin • Boston<!-- --> • Remote possible<span> • <!-- -->$125k – $165k • 0.01% – 0.03%</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 years ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 years ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/haulhub/jobs/1647918-android-engineer">Android
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Atlanta • Austin • Boston<!-- --> • Remote possible<span> • <!-- -->$120k – $180k • 0.01% – 0.03%</span></span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/voltalabs">
											<div class="styles_logo__rR_dS">
												<img alt="Volta Labs company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/6977377-8007354445878e21afb96afda40f768f-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/voltalabs">
												<h4 class="styles_name__rSxBl">Volta Labs</h4>
											</a><span class="styles_subheader__WPhHT">Building the most advanced DNA sequencing Sample prep machine</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">11-50<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div
													class="styles_avatar__KzFhv inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-4 w-4 styles_avatar__KzFhv">
													<img alt="Avatar for Same investor as Stripe" class="rounded-md" height="14" src="https://photos.angel.co/startups/i/37232-b86e6247bcd9846c18c91fe65ca0355d-medium_jpg.jpg?buster=1610581275" width="14"></div>
												</div>Same investor as Stripe
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/voltalabs/jobs/1157569-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<span> • <!-- -->$100k – $150k</span></span><span class="text-xs lowercase text-dark-a md:hidden">10 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">10 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/oort-io">
											<div class="styles_logo__rR_dS">
												<img alt="Oort company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/6963536-04460f9a8bd5b384eb17757de18fe812-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/oort-io">
												<h4 class="styles_name__rSxBl">Oort</h4>
											</a><span class="styles_subheader__WPhHT">Early-stage security startup</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">11-50<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI"><svg height="14" width="8">
													<path
														d="M7.578 9.392A2.794 2.794 0 005.81 6.784l-2.975-1.19a1.059 1.059 0 01.394-2.04h2.93a.875.875 0 100-1.75H5.02a.146.146 0 01-.145-.147V.875a.875.875 0 10-1.75 0v.8c0 .076-.058.139-.133.146a2.8 2.8 0 00-.8 5.397l2.975 1.189a1.059 1.059 0 01-.394 2.042H1.838a.875.875 0 100 1.75H2.98c.08 0 .146.065.146.146v.78a.875.875 0 101.75 0v-.8c0-.076.058-.139.133-.146a2.806 2.806 0 002.57-2.787z"
														fill="currentColor" fill-rule="evenodd"></path>
												</svg></div>Recently funded
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/oort-io/jobs/1086443-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<!-- --> • Remote possible<span> • <!-- -->$125k – $175k • 0.0% – 1.0%</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 years ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 years ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/corvus-insurance">
											<div class="styles_logo__rR_dS">
												<img alt="Corvus Insurance company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/8494686-cfc92125d191c94dbf27f2143fa0b9c0-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/corvus-insurance">
												<h4 class="styles_name__rSxBl">Corvus Insurance</h4>
											</a><span class="styles_subheader__WPhHT">Using novel data and artificial intelligence/machine learning for commercial insurance risk</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">201-500<!-- --> employees</span>
											</div>
										</div>
									</div>
									<ul class="styles_component__5DMnC styles_badgeBar__C1UWn">
										<li class="styles_component__ejzCg styles_green__WjXVr">
											<div class="styles_flair__E5CBI">
												<div class="styles_checkmarkHolder__xKWH_"><svg viewBox="0 0 16 16"
														fill="currentColor" xmlns="http://www.w3.org/2000/svg"
														class="styles_checkmark__qEPVA">
														<path fill-rule="evenodd" clip-rule="evenodd"
															d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
															fill="currentColor"></path>
													</svg></div>
											</div>Actively Hiring
										</li>
									</ul>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/corvus-insurance/jobs/831980-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Austin • Boston<span> • <!-- -->$80k – $140k</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 years ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 years ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/corvus-insurance/jobs/1232358-manager-software-engineering">Manager,
												Software
												Engineering</a><span class="styles_locationAndCompensation__vDfgW">Atlanta • Boston • Chicago<!-- --> • Remote possible<span> • <!-- -->$120k – $145k</span></span><span class="text-xs lowercase text-dark-a md:hidden">1 year ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">1 year ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/1uphealth">
											<div class="styles_logo__rR_dS">
												<img alt="1upHealth company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/4096160-c3e16462a5df9c411a1b3464e2bf3da0-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/1uphealth">
												<h4 class="styles_name__rSxBl">1upHealth</h4>
											</a><span class="styles_subheader__WPhHT">Healthcare API patform for applications to connect to EHR data in minutes</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/1uphealth/jobs/669268-senior-software-engineer">Senior
												Software
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<span> • <!-- -->$90k – $130k</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 years ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 years ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/1uphealth/jobs/997319-senior-software-development-engineer-in-test-sdet">Senior
												Software Development Engineer in Test
												(SDET)</a><span class="styles_locationAndCompensation__vDfgW">Boston<span> • <!-- -->$80k – $130k</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 years ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 years ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/1uphealth/jobs/669270-senior-devops-engineer">Senior
												DevOps
												Engineer</a><span class="styles_locationAndCompensation__vDfgW">Boston<span> • <!-- -->$100k – $135k</span></span><span class="text-xs lowercase text-dark-a md:hidden">2 years ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">2 years ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div class="styles_result__rPRNG">
								<div class="styles_startupHeader__BGncB">
									<div class="styles_info__iM__u"><a
											class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_logoLink__gyC8B"
											href="/company/soona">
											<div class="styles_logo__rR_dS">
												<img alt="soona company logo" loading="lazy" src="/cdn-cgi/image/width=92,height=92,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.angel.co/startups/i/6873489-1c58f4e2f007a1710d157efc2bf60950-medium_jpg.jpg" height="46" width="46"></div>
										</a>
										<div class="flex flex-col pl-4"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_nameLink__YaI5I"
												href="/company/soona">
												<h4 class="styles_name__rSxBl">soona</h4>
											</a><span class="styles_subheader__WPhHT">soona is fast-casual content</span>
											<div class="styles_companySize__D_QfD"><svg height="12" viewBox="0 0 12 12"
													width="12">
													<g fill="currentColor" transform="translate(1)">
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
														<path
															d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z">
														</path>
														<circle cx="8" cy="1.75" r="1.75"></circle>
														<path
															d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z">
														</path>
														<circle cx="3" cy="1.75" r="1.75"></circle>
													</g>
												</svg><span class="text-2xs font-medium uppercase">51-200<!-- --> employees</span>
											</div>
										</div>
									</div>
								</div>
								<div class="styles_jobListingList__32RYX">
									<div class="styles_jobListing__PLqQ_">
										<div class="styles_information__5kR_w"><a
												class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_jobTitle___jT4l"
												href="/company/soona/jobs/2323917-senior-software-engineer">senior
												software
												engineer</a><span class="styles_locationAndCompensation__vDfgW">Austin • Boston • California • Chicago • Denver • Los Angeles • Minnesota • New York City • Seattle • Texas • Massachusetts • New Jersey • Washington • Colorado • Illinois • Minneapolis • Saint Paul<!-- --> • Remote possible<span> • <!-- -->$120k – $160k • No equity</span></span><span class="text-xs lowercase text-dark-a md:hidden">6 months ago</span>
										</div>
										<div class="styles_apply__Xe_2M styles_tablet__gLL1e">
											<span class="text-xs lowercase text-dark-a hidden md:flex">6 months ago</span><button class="styles-module_component__88XzG styles_tablet__gLL1e styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-white border-black text-black
                    disabled:bg-white disabled:border-gray-700 disabled:text-gray-700
                    hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500" data-test="Button" type="button">Save</button><button class="styles-module_component__88XzG styles_component__Ov6jE ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-3 py-1 bg-black border-black text-white
                  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700
                  hover:bg-gtmblue-500 hover:border-gtmblue-500" data-test="JobApplicationApplyButton" type="button">Apply</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav aria-label="Pagination Navigation" class="styles_component__SQ8Wq" role="navigation">
						<ul>
							<li class="styles_page__KIGCJ styles_current__JZqJL"><a
									class="styles_component__UCLp3 styles_defaultLink__eZMqw" aria-current="true"
									aria-label="Page 1, current page" href="/role/l/software-engineer/boston">1</a></li>
							<li class="styles_page__KIGCJ"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw"
									aria-label="Go to page 2" href="/role/l/software-engineer/boston?page=2">2</a></li>
							<li class="styles_page__KIGCJ"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw"
									aria-label="Go to page 3" href="/role/l/software-engineer/boston?page=3">3</a></li>
							<li class="styles_next__Dugw4"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw"
									aria-label="Next page" href="/role/l/software-engineer/boston?page=2">Next <svg
										viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
										class="haloIcon w-4 max-w-full">
										<path fill-rule="evenodd" clip-rule="evenodd"
											d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
											fill="currentColor"></path>
									</svg></a></li>
						</ul>
					</nav>
				</div>
				<div class="styles_sidebarSection__LEqin">
					<div class="flex flex-col mb-2">
						<h3 class="styles-module_component__3ZI84 styles-module_flow__FV70c text-xl font-medium">Explore
							other jobs in Boston</h3>
					</div>
					<div class="styles_list__f3zxh flex flex-col"><a
							href="https://angel.co/role/l/help-desk-analyst/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Help Desk
							Analyst</a><a href="https://angel.co/role/l/database-manager/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Database
							Manager</a><a href="https://angel.co/role/l/database-engineer/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Database
							Engineer</a><a href="https://angel.co/role/l/soc-analyst/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">SOC
							Analyst</a><a href="https://angel.co/role/l/magento-developer/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Magento
							Developer</a><a href="https://angel.co/role/l/marketing-consultant/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Marketing
							Consultant</a><a href="https://angel.co/role/l/online-marketing/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Online
							Marketing</a><a href="https://angel.co/role/l/app-testing/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">App
							Testing</a><a href="https://angel.co/role/l/ruby-on-rails-developer/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Ruby on Rails
							Developer</a><a href="https://angel.co/role/l/chatbot-developer/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Chatbot
							Developer</a><a href="https://angel.co/role/l/sales-representative/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Sales
							Representative</a><a href="https://angel.co/role/l/technical-program-manager/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Technical
							Program Manager</a><a href="https://angel.co/role/l/technology-specialist/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Technology
							Specialist</a><a href="https://angel.co/role/l/opencv/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">OpenCV</a><a
							href="https://angel.co/role/l/director-of-finance/boston"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Director of
							Finance</a></div>
					<div class="flex flex-col mb-2">
						<h3 class="styles-module_component__3ZI84 styles-module_flow__FV70c text-xl font-medium">Explore
							remote jobs</h3>
					</div>
					<div class="styles_list__f3zxh flex flex-col"><a href="https://angel.co/role/r/help-desk-analyst"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Help Desk
							Analyst Remote</a><a href="https://angel.co/role/r/database-manager"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Database
							Manager Remote</a><a href="https://angel.co/role/r/database-engineer"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Database
							Engineer Remote</a><a href="https://angel.co/role/r/soc-analyst"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">SOC Analyst
							Remote</a><a href="https://angel.co/role/r/magento-developer"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Magento
							Developer Remote</a><a href="https://angel.co/role/r/marketing-consultant"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Marketing
							Consultant Remote</a><a href="https://angel.co/role/r/online-marketing"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Online
							Marketing Remote</a><a href="https://angel.co/role/r/app-testing"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">App Testing
							Remote</a><a href="https://angel.co/role/r/ruby-on-rails-developer"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Ruby on Rails
							Developer Remote</a><a href="https://angel.co/role/r/chatbot-developer"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Chatbot
							Developer Remote</a><a href="https://angel.co/role/r/sales-representative"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Sales
							Representative Remote</a><a href="https://angel.co/role/r/technical-program-manager"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Technical
							Program Manager Remote</a><a href="https://angel.co/role/r/technology-specialist"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Technology
							Specialist Remote</a><a href="https://angel.co/role/r/opencv"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">OpenCV
							Remote</a><a href="https://angel.co/role/r/director-of-finance"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Director of
							Finance Remote</a></div>
					<div class="flex flex-col mb-2">
						<h3 class="styles-module_component__3ZI84 styles-module_flow__FV70c text-xl font-medium">Explore
							tech jobs in other locations</h3>
					</div>
					<div class="styles_list__f3zxh flex flex-col"><a href="https://angel.co/location/san-francisco"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">San
							Francisco</a><a href="https://angel.co/location/los-angeles"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Los
							Angeles</a><a href="https://angel.co/location/chicago"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Chicago</a><a
							href="https://angel.co/location/seattle"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Seattle</a><a
							href="https://angel.co/location/new-york"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">New
							York</a><a href="https://angel.co/location/austin"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Austin</a><a
							href="https://angel.co/location/denver"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">Denver</a><a
							href="https://angel.co/location/district-of-columbia"
							class="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__D_RPR">District of
							Columbia</a></div>
				</div>
			</div>
			<div class="flex w-full flex-wrap justify-center gap-4 border-t border-gray-400 px-4 py-16 lg:p-20">
				<button aria-expanded="false" class="cursor-pointer bg-white text-md" data-toggle="dropdown" aria-haspopup="true"><div class="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-gtmblue-500 hover:bg-gtmblue-100 hover:text-gtmblue-500">Featured Lists<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="ml-3 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path></svg></div><div class="min-w-48 absolute z-overlay bg-white hidden"><ul class="flex flex-col rounded-md rounded-tl-none border border-black"><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/20-companies-building-our-remote-first-future">Remote First Future Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/companies-that-hire-coding-bootcamp-graduates">Jobs for Bootcamp Grads</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/junior-software-engineer-jobs">Junior Software Engineer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/x-crypto-startups-to-watch-out-for-in-2022">Crypto Startups To Watch Out For</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/hot-blockchain-startups-that-are-hiring">Blockchain Startups That Are Hiring</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/6-companies-hiring-top-tech-talent-amidst-2022-layoffs">Companies Hiring Amidst Layoffs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/50-hot-consumer-fintech-startups">Hot Consumer Fintech Startups</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/yc-startups-that-are-aggressively-hiring">Y Combinator Startup Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/fastest-growing-startups-in-san-francisco-hiring-now">Startup Jobs in Bay Area</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections/12-women-led-startups-expanding-their-remote-teams-in-2022">Top Women-Led Startups</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/job-collections">More Featured Lists</a></li></ul></div></button><button aria-expanded="false" class="cursor-pointer bg-white text-md" data-toggle="dropdown" aria-haspopup="true"><div class="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-gtmblue-500 hover:bg-gtmblue-100 hover:text-gtmblue-500">Remote Jobs<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="ml-3 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path></svg></div><div class="min-w-48 absolute z-overlay bg-white hidden"><ul class="flex flex-col rounded-md rounded-tl-none border border-black"><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/software-engineer">Remote Software Engineer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/product-manager">Remote Product Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/data-analyst">Remote Data Analyst Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/product-designer">Remote Product Designer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/graphic-designer">Remote Graphic Designer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/ui-ux-designer">Remote UI/UX Designer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/operations-manager">Remote Operations Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/growth-marketer">Remote Growth Marketer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/account-manager">Remote Account Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/sales-manager">Remote Sales Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/financial-analyst">Remote Financial Analyst Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/r/hr-manager">Remote HR Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/remote">More Remote Jobs</a></li></ul></div></button><button aria-expanded="false" class="cursor-pointer bg-white text-md" data-toggle="dropdown" aria-haspopup="true"><div class="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-gtmblue-500 hover:bg-gtmblue-100 hover:text-gtmblue-500">Jobs by Location<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="ml-3 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path></svg></div><div class="min-w-48 absolute z-overlay bg-white hidden"><ul class="flex flex-col rounded-md rounded-tl-none border border-black"><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/new-york">Jobs in New York City</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/san-francisco">Jobs in San Francisco</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/austin">Jobs in Austin</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/boston">Jobs in Boston</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/district-of-columbia">Jobs in Washington DC</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/denver">Jobs in Denver</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/seattle">Jobs in Seattle</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/chicago">Jobs in Chicago</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/india">Jobs in India</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/location/united-states">More Jobs by Location</a></li></ul></div></button><button aria-expanded="false" class="cursor-pointer bg-white text-md" data-toggle="dropdown" aria-haspopup="true"><div class="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-gtmblue-500 hover:bg-gtmblue-100 hover:text-gtmblue-500">Jobs by Role<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="ml-3 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path></svg></div><div class="min-w-48 absolute z-overlay bg-white hidden"><ul class="flex flex-col rounded-md rounded-tl-none border border-black"><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/software-engineer">Software Engineer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/product-manager">Product Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/data-analyst">Data Analyst Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/product-designer">Product Designer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/graphic-designer">Graphic Designer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/ui-ux-designer">UI/UX Designer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/operations-manager">Operations Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/growth-marketer">Growth Marketer Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/account-manager">Account Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/sales-manager">Sales Manager Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/financial-analyst">Financial Analyst Jobs</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/hr-manager">HR Manager Jobs</a></li></ul></div></button><button aria-expanded="false" class="cursor-pointer bg-white text-md" data-toggle="dropdown" aria-haspopup="true"><div class="flex select-none flex-nowrap items-center rounded-md border border-black px-4 py-2 hover:border-gtmblue-500 hover:bg-gtmblue-100 hover:text-gtmblue-500">Jobs by Role &amp; Location<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="ml-3 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8a.997.997 0 01-.293.707l-8 8a.999.999 0 01-1.414 0l-8-8a.999.999 0 111.414-1.414L12 14.586l7.293-7.293A.999.999 0 0121 8z" fill="currentColor"></path></svg></div><div class="min-w-48 absolute z-overlay bg-white hidden"><ul class="flex flex-col rounded-md rounded-tl-none border border-black"><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/software-engineer/san-francisco">Software Engineer Jobs in San Francisco</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/software-engineer/new-york">Software Engineer Jobs in New York City</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/software-engineer/los-angeles">Software Engineer Jobs in Los Angeles</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/product-manager/san-francisco">Product Manager Jobs in San Francisco</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/product-manager/new-york">Product Manager Jobs in New York City</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/product-manager/los-angeles">Product Manager Jobs in Los Angeles</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/frontend-engineer/san-francisco">Frontend Developer Jobs in San Francisco</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/frontend-engineer/new-york">Frontend Developer Jobs in New York City</a></li><li class="group px-5 py-3 text-left hover:bg-gtmblue-100"><a class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-dark-aaaa group-hover:!text-gtmblue-500" rel="noopener noreferrer" target="_blank" href="/role/l/frontend-engineer/los-angeles">Frontend Developer Jobs in Los Angeles</a></li></ul></div></button>
			</div>
			<footer class="border-t border-gray-400 px-10 py-10 md:px-20 md:py-20">
				<div class="mx-auto flex max-w-screen-xl flex-col justify-between lg:flex-row ">
					<div class="mr-14 mb-6"><a class="mr-2 mt-1 mb-4 flex pl-2 md:pl-0" href="/"><svg
								fill="currentColor" viewBox="0 0 716.1 179.8" width="120"
								class="w-[200px] fill-current text-black hover:text-gtmblue-500">
								<g transform="translate(-157.7 -156.2)">
									<path
										d="M369.4 235v-64.8h-17.1v-14h34.3V235h16.9v14h-51.2v-14zM430.6 235v-64.8h-17v-14h34.3V235h16.9v14h-51.2v-14zM485.3 249v-54H469v-14h16.3v-5.5c0-12.5 6.5-19.2 19.9-19.2h19.3V170H508c-4.2 0-5.9 1.8-5.9 5.9v5h22.4v14h-22.2v54h-17zM564.6 180.2c-20.7 0-34.7 14-34.7 34.8 0 20.9 14 34.8 34.7 34.8 20.8 0 34.8-13.9 34.8-34.8s-14-34.8-34.8-34.8zm0 55.4c-10.4 0-17.2-8.6-17.2-20.7 0-12 6.8-20.7 17.2-20.7 10.5 0 17.3 8.6 17.3 20.7 0 12.2-6.8 20.7-17.3 20.7zM656.9 181H674v68h-16.7v-8.3c-4.3 5.1-10.3 9.1-19.8 9.1-13.8 0-26.3-7.1-26.3-30.4V181h17.1v37c0 11.3 4.1 17.6 13.5 17.6s15.1-6.9 15.1-19.2V181ZM817.2 156.2v32.9c-4.3-5.3-11-9-20.2-9-17.9 0-31.7 13.7-31.7 34.7 0 21.7 13.3 34.9 31.4 34.9 9.9 0 16.6-4.7 21-10.6v9.8h16.7v-92.7zm-17.1 79.4c-10.6 0-17.4-8.5-17.4-20.7 0-12.1 6.8-20.7 17.4-20.7 10.5 0 17.3 8.5 17.3 20.8 0 12.2-6.8 20.6-17.3 20.6zM178.8 249l-21.1-68h19.6l12.5 48.9 13.5-48.9H223l13.5 48.9L249 181h19.6l-21.4 68h-20.9l-13.2-49.1-13.3 49.1Z">
									</path>
									<circle cx="862.4" cy="238.3" fill="#EA2C00" r="11.4"></circle>
									<circle cx="862.4" cy="191.6" fill="#EA2C00" r="11.4"></circle>
									<path
										d="M342.2 218.9c.3-2.1.5-4.6.5-6.2-.2-20-13.6-32.6-33.4-32.6-20.4 0-34 13.8-34 34.9 0 21 13.4 34.7 35.2 34.7 17.6 0 29.1-10.5 31.2-23.8h-16.9c-1.7 6.8-7.2 10.5-15 10.5-9.8 0-16.3-6.5-16.7-16.8v-.8h49.1zm-32.9-25.7c8.6 0 14.5 4.8 16 13.6h-31.7c1.2-8.4 7.6-13.6 15.7-13.6zM707.8 249h-17.1v-68h16.7v8.3c4.3-5.1 10.3-9.1 19.8-9.1 13.8 0 26.3 7.1 26.3 30.4V249h-17.1v-37.1c0-11.3-4.1-17.6-13.5-17.6s-15.1 6.9-15.1 19.2zM177.7 299.6h-4.2v-3.9h4.2v-4.8c0-6 2.9-9.5 8.8-9.5 1.5 0 2.3.2 3.5.6v3.9c-.8-.3-2-.6-3.3-.6-3 0-4.3 2.1-4.3 5.1v5.3h7.2v3.9h-7.2v25.5h-4.7zM192.5 310.6v-.5c0-8.8 6.1-15 14.5-15 8.3 0 14.5 6.1 14.5 15v.5c0 8.9-6.1 15-14.5 15s-14.5-6.4-14.5-15zm24.1 0v-.4c0-6.8-3.8-11.2-9.6-11.2-5.9 0-9.6 4.4-9.6 11.2v.5c0 6.7 3.7 11.1 9.6 11.1 5.9-.1 9.6-4.5 9.6-11.2zM228.7 295.6h4.7v5.3c1.9-3.3 4.4-5.6 9.7-5.8v4.4c-5.9.3-9.7 2.1-9.7 9.4v16.2h-4.7zM249.9 295.6h4.7v4.5c1.4-2.8 4.6-5 8.8-5 3.8 0 7.1 1.6 8.6 5.5 2-3.8 6.4-5.5 10.1-5.5 5.3 0 9.9 3.2 9.9 11.7V325h-4.7v-18.6c0-5.2-2.2-7.3-6.3-7.3-3.8 0-7.8 2.6-7.8 7.9v18h-4.7v-18.6c0-5.2-2.2-7.3-6.3-7.3-3.8 0-7.8 2.6-7.8 7.9v18h-4.7v-29.4zM299 310.7v-.5c0-8.9 5.7-15.1 13.8-15.1 6.8 0 13.2 4.1 13.2 14.6v1.5h-22.2c.2 6.7 3.4 10.4 9.5 10.4 4.6 0 7.2-1.7 7.8-5.1h4.7c-1 5.9-5.9 9-12.6 9-8.3.1-14.2-5.7-14.2-14.8zm22.2-3.2c-.4-6.1-3.6-8.5-8.4-8.5-4.8 0-8 3.3-8.8 8.5zM333.2 295.6h4.7v5.3c1.9-3.3 4.4-5.6 9.7-5.8v4.4c-5.9.3-9.7 2.1-9.7 9.4v16.2h-4.7zM354.5 284.8h4.7v40.3h-4.7zM377 322.1l-11.5-26.4h5l9 21.1 8.2-21.1h4.8l-16.3 39.7h-4.7zM422.2 284.8h9.8l13.3 40.3h-7.8l-3.2-10H419l-3.2 10h-7zm-1.5 24.9h11.9l-5.9-18.7ZM450.9 295.6h6.8v4.7c1.4-2.9 4.7-5.3 9.5-5.3 5.9 0 10.1 3.4 10.1 11.5V325h-6.8v-17.9c0-4.4-1.8-6.5-5.9-6.5-3.8 0-6.9 2.4-6.9 7v17.3h-6.8zM483.5 326.1h6.9c.6 2.9 2.8 4.6 7.3 4.6 5.3 0 8.2-2.6 8.2-7.9v-4.3c-1.6 2.8-5.3 5.5-9.6 5.5-7.4 0-13.1-5.5-13.1-14v-.4c0-8.3 5.6-14.5 13.2-14.5 4.8 0 7.8 2.2 9.5 5.1v-4.5h6.8V323c-.1 8.7-5.9 13-15 13-9.2-.1-13.4-4.2-14.2-9.9zm22.6-16.4v-.4c0-5.6-3-8.9-7.9-8.9-5.1 0-8 3.7-8 9v.5c0 5.5 3.4 8.8 7.8 8.8 4.6 0 8.1-3.4 8.1-9zM518.8 310.7v-.5c0-9.1 6.3-15.2 14.6-15.2 7.3 0 13.9 4.3 13.9 14.9v2h-21.6c.2 5.6 3 8.7 8.1 8.7 4.1 0 6.3-1.6 6.8-4.5h6.6c-1 6.2-6 9.6-13.5 9.6-8.6 0-14.9-5.7-14.9-15zm21.8-3.4c-.3-5.1-2.9-7.3-7.2-7.3-4.1 0-6.9 2.8-7.5 7.3zM553.6 284.8h6.8v40.3h-6.8zM569.3 284.8h7.5v34.3H594v6h-24.7zM599.2 286.9c0-2.3 1.8-3.9 4.1-3.9s4.1 1.7 4.1 3.9-1.8 3.9-4.1 3.9-4.1-1.7-4.1-3.9zm.7 8.7h6.8v29.5h-6.8zM612.8 315.9h6.4c.3 3 1.9 4.7 5.9 4.7 3.7 0 5.3-1.3 5.3-3.8 0-2.4-2-3.3-6.3-4.1-7.8-1.2-10.6-3.4-10.6-9 0-5.9 5.5-8.8 11-8.8 6 0 10.8 2.3 11.5 8.9h-6.3c-.6-2.7-2.1-3.9-5.2-3.9-2.9 0-4.7 1.4-4.7 3.5s1.4 3 6.1 3.8c6.9 1.1 11 2.8 11 9 0 6-4.2 9.4-11.8 9.4-7.6.1-12.1-3.4-12.3-9.7zM644 316.9v-16.1h-4v-5.1h3.9v-6.5h6.8v6.5h6.5v5.1h-6.5v15.5c0 2.6 1.2 3.8 3.4 3.8 1.4 0 2.4-.2 3.3-.6v5.4c-1.1.4-2.5.7-4.6.7-5.8 0-8.8-3.1-8.8-8.7zM685.6 290.7h-11.2v-5.9h30v5.9h-11.2v34.4h-7.5v-34.4zM704.1 316.9c0-6.9 6.6-9.3 15.1-9.3h3.7v-1.5c0-3.9-1.4-5.9-5.4-5.9-3.5 0-5.3 1.7-5.6 4.6h-6.6c.6-6.9 6-9.7 12.6-9.7s11.8 2.7 11.8 10.8v19.3H723v-3.6c-1.9 2.5-4.5 4.2-9 4.2-5.5-.1-9.9-2.7-9.9-8.9zm18.7-2.1v-2.9h-3.5c-5.2 0-8.5 1.2-8.5 4.8 0 2.5 1.4 4.1 4.7 4.1 4.2 0 7.3-2.2 7.3-6zM737.6 284.8h6.8v40.3h-6.8zM750.8 310.7v-.5c0-9.1 6.3-15.2 14.6-15.2 7.3 0 13.9 4.3 13.9 14.9v2h-21.6c.2 5.6 3 8.7 8.1 8.7 4.1 0 6.3-1.6 6.8-4.5h6.6c-1 6.2-6 9.6-13.5 9.6-8.7 0-14.9-5.7-14.9-15zm21.8-3.4c-.3-5.1-2.9-7.3-7.2-7.3-4.1 0-6.9 2.8-7.5 7.3zM785.4 295.6h6.8v4.7c1.4-2.9 4.7-5.3 9.5-5.3 5.9 0 10.1 3.4 10.1 11.5V325H805v-17.9c0-4.4-1.8-6.5-5.9-6.5-3.8 0-6.9 2.4-6.9 7v17.3h-6.8zM820.8 316.9v-16.1h-3.9v-5.1h3.9v-6.5h6.8v6.5h6.5v5.1h-6.5v15.5c0 2.6 1.2 3.8 3.4 3.8 1.4 0 2.4-.2 3.3-.6v5.4c-1.1.4-2.5.7-4.6.7-5.9 0-8.9-3.1-8.9-8.7z">
									</path>
								</g>
							</svg></a>
						<div class="flex"><a class="mr-2 h-8 w-8" href="http://twitter.com/wellfoundhq"
								rel="noreferrer nofollow" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									class="w-8 fill-current text-black hover:text-gtmblue-500">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M19.944 7.987c.013.175.013.35.013.525C19.957 13.85 15.833 20 8.294 20c-2.322 0-4.48-.663-6.294-1.813.33.038.647.05.99.05 1.916 0 3.68-.637 5.089-1.724-1.802-.038-3.313-1.2-3.833-2.8.254.037.508.062.774.062.368 0 .736-.05 1.079-.138-1.878-.375-3.287-2-3.287-3.962v-.05c.546.3 1.18.488 1.853.512a4.02 4.02 0 01-1.827-3.362c0-.75.203-1.438.558-2.038a11.71 11.71 0 008.452 4.225 4.495 4.495 0 01-.102-.924c0-2.226 1.828-4.038 4.1-4.038 1.18 0 2.245.487 2.994 1.275a8.145 8.145 0 002.602-.975 4.038 4.038 0 01-1.802 2.225A8.316 8.316 0 0022 5.9a8.74 8.74 0 01-2.056 2.087z"
										fill="currentColor"></path>
								</svg></a><a class="mr-2" href="https://instagram.com/wellfoundhq"
								rel="noreferrer nofollow" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									class="w-8 fill-current text-black hover:text-gtmblue-500">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M7.833 2h8.334C19.375 2 22 4.625 22 7.833v8.334C22 19.375 19.375 22 16.167 22H7.833C4.625 22 2 19.375 2 16.167V7.833C2 4.625 4.625 2 7.833 2zM19.11 4.89a4.16 4.16 0 00-2.943-1.224H7.833A4.13 4.13 0 004.89 4.89a4.16 4.16 0 00-1.224 2.943v8.333A4.13 4.13 0 004.89 19.11a4.16 4.16 0 002.943 1.224h8.334a4.13 4.13 0 002.942-1.224 4.16 4.16 0 001.224-2.943V7.833A4.13 4.13 0 0019.11 4.89z"
										fill="currentColor"></path>
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M17.416 7.834c-.692 0-1.25-.557-1.25-1.25s.558-1.25 1.25-1.25a1.25 1.25 0 010 2.5zM12 8.668A3.336 3.336 0 0115.333 12 3.336 3.336 0 0112 15.334a3.336 3.336 0 01-3.334-3.333A3.336 3.336 0 0112 8.668zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"
										fill="currentColor"></path>
								</svg></a></div>
					</div>
					<div class="flex flex-col md:flex-row">
						<ul class="mr-10 mb-8">
							<li class="mb-2 md:py-0 text-md">
								<h4 class="font-bold">For Candidates</h4>
							</li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/candidates/overview">Overview</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black hover:text-gtmblue-500 hover:underline"
									href="/jobs">Startup Jobs</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black hover:text-gtmblue-500 hover:underline"
									href="/web3">Web3 Jobs</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/candidates/featured">Featured</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/candidates/remote">Remote</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black hover:text-gtmblue-500 hover:underline"
									href="/startups">Tech Startups</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline" href="/salaries">Salary
									Calculator</a></li>
						</ul>
						<ul class="mr-10 mb-8">
							<li class="mb-2 md:py-0 text-md">
								<h4 class="font-bold">For Recruiters</h4>
							</li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/recruit/overview">Overview</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/recruit/products/recruit-pro">Recruit Pro</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/recruit/products/curated">Curated</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/recruit/products/remote">Remote</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline" href="/hire">Hire
									Developers</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/recruit/pricing">Pricing</a></li>
						</ul>
						<ul class="mr-10 mb-8">
							<li class="mb-2 md:py-0 text-md">
								<h4 class="font-bold">Company</h4>
							</li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="https://wellfound.com">About</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="https://help.angel.co/">Help</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline"
									href="/discover/blog">Blog</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline" href="/terms">Terms &amp;
									Risks</a></li>
							<li class="mb-2 md:py-0 text-md"><a
									class="!text-black hover:text-gtmblue-500 hover:underline" href="/privacy">Privacy
									&amp; Cookies</a></li>
						</ul>
					</div>
				</div>
				<div class="mt-4 flex flex-col-reverse justify-between lg:flex-row">
					<p class="text-dark-aa">Copyright ©
						<!-- -->2023
						<!-- -->
						<!-- -->Wellfound
						<!-- --> (formerly AngelList Talent). All rights reserved.</p>
					<p class="mb-4 text-dark-aa lg:mb-0">Browse by:
						<!-- --> <a
							class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black hover:text-gtmblue-500 hover:underline underline text-dark-aa"
							href="/browse/tech-jobs">Jobs</a>,
						<!-- --> <a
							class="styles_component__UCLp3 styles_defaultLink__eZMqw !text-black hover:text-gtmblue-500 hover:underline underline text-dark-aa"
							href="/browse/remote-tech-jobs">Remote Jobs</a></p>
				</div>
			</footer>
		</div>
	</div>
	<script id="__NEXT_DATA__" type="application/json" crossorigin="anonymous">
		{"props":{"pageProps":{"location":"boston","page":null,"role":"software-engineer","apollo":null,"apolloState":{"data":{"TalentViewer:null":{"__typename":"TalentViewer","id":null,"flashMessages":[],"featureFlags":{"__typename":"FeatureFlags","blueJoinCtaGlobalHeader":false,"calibrationListUpdates":true,"candidateRejectionReasonUpdates":true,"coproJobDetailShowBadges":false,"jobApplicationWarning":false,"recruitJobDataCollection":true,"recruitJobDuplication":true,"recruitProCancellationDiscount":true,"growthRemoveScrapedJobsFromSearch":true,"growthJobAdsAtsBulkDiscount":true,"growthPitchAutoExpire":false,"greenhouseCustomQuestions":true,"greenhouseCustomQuestionsDuringInitialConnect":false},"analytics":null,"isAdmin":false,"isBlacklisted":false,"isUserModerator":false,"isImpersonating":false,"isShadowBanned":false,"canApplyToJobs":false,"fullStoryEnabled":true,"eligibleForCuratedGlobal":false,"navigationMode":"UNKNOWN","eligibleForCandidateReferrals":false,"currentUser":null,"trueCurrentUser":null,"currentStartup":null,"currentCandidate":null},"ROOT_QUERY":{"__typename":"Query","talent":{"__typename":"Talent","viewer":{"__ref":"TalentViewer:null"},"seoLandingPageJobSearchResults({\"location\":\"boston\",\"page\":1,\"role\":\"software-engineer\"})":{"__typename":"Results","totalStartupCount":44,"totalJobCount":91,"perPage":20,"pageCount":3,"startups":[{"__ref":"StartupResult:110366"},{"__ref":"StartupResult:5122690"},{"__ref":"StartupResult:29595"},{"__ref":"StartupResult:126176"},{"__ref":"StartupResult:441864"},{"__ref":"StartupResult:6984007"},{"__ref":"StartupResult:382137"},{"__ref":"StartupResult:543154"},{"__ref":"StartupResult:1206718"},{"__ref":"StartupResult:98145"},{"__ref":"StartupResult:7375923"},{"__ref":"StartupResult:4563230"},{"__ref":"StartupResult:5806214"},{"__ref":"StartupResult:6071365"},{"__ref":"StartupResult:2164124"},{"__ref":"StartupResult:6977377"},{"__ref":"StartupResult:6963536"},{"__ref":"StartupResult:8494686"},{"__ref":"StartupResult:4096160"},{"__ref":"StartupResult:6873489"}]},"seoLandingPageRoleAndLocation({\"location\":\"boston\",\"page\":1,\"role\":\"software-engineer\"})":{"__ref":"RoleAndLocationEditorial:710"}}},"Badge:ACTIVELY_HIRING":{"__typename":"Badge","id":"ACTIVELY_HIRING","name":"ACTIVELY_HIRING_BADGE","label":"Actively Hiring","tooltip":"Actively processing applications","avatarUrl":null,"rating":null},"Badge:GROWING_FAST-110366":{"__typename":"Badge","id":"GROWING_FAST-110366","name":"GROWING_FAST_BADGE","label":"Growing fast","tooltip":"Showed strong hiring growth in the past month","avatarUrl":null,"rating":null},"JobListingSearchResult:2540682":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"ABOUT THE ROLE\n\nTeikametrics is looking for a Python Software Engineer to join the Artificial Intelligence team to build platforms and services that support the rapid construction and deployment of prediction and control services in the domain of e-commerce. Candidates should have extensive experience with Python, developing event-driven systems, and building data pipelines in a large-scale application environment.\n\n\nHOW YOU’LL SPEND YOUR TIME\n- Application development in Python leveraging FastAPI, Flask, Apache Spark, Databricks, Kubernetes, Redis, Kafka, PostgreSQL, Snowflake, AWS, and various other libraries and services\n- Building large-scale ETL pipelines that ingest data from S3, relational databases, Redis, and internal APIs\n- Developing internal APIs and event-driven systems\n- Collaborating with teammates and other teams at Teikametrics to provide feedback and ideas about the best ways to deliver performant and maintainable systems\n- While you won’t directly be training or tuning machine learning models, you’ll be working directly with data scientists to utilize proprietary models in our production applications\n\n\nWHO YOU ARE \n- 4+ years of experience working in software engineering\n- 2+ years working with Python in an application environment\n- Experience with libraries or services such as Docker, Flask, Spark, Kafka, Redis, Kubernetes, and PostgreSQL\n- Experience with API development, data processing, high-volume event-driven systems, concurrent job processing, monitoring, alerting, cloud deployment, and containerization\n- Interest in deploying machine-learning models as scalable services\n- Interest in \"tool-making\" - building features for developers that empower them and make them faster\n- Someone who enjoys working collaboratively with others through design reviews, Code Reviews, pair programming, proposing new features and enhancements, ideation meetings, and standard setting to ensure operational excellence\n\n\nABOUT TEIKAMETRICS \n\nThere has never been a more exciting time to join Teikametrics. Be part of the evolution of Flywheel 2.0, the leading Marketplace Optimization Platform, helping thousands of sellers on Amazon and Walmart.com optimize every part of their eCommerce business -- from advertising to inventory and market intelligence. Teikametrics optimizes billions of transactions a year using proprietary econometrics and machine-learning data models to help customers save time, grow sales, and increase overall profitability. Teikametrics delivers unrivaled results through the combination of best-in-class AI technology and coaching and support from world-class services teams based in Boston, Seattle, Bengaluru, Tel Aviv, and Hong Kong, China. Teikametrics is currently hiring driven individuals to join Team Teika who are values-aligned, passionate about our mission, and thrive in a fast-paced, growth-focused organization. \n\nThe job description is representative of typical duties and responsibilities for the position and is not all-inclusive. Other duties and responsibilities may be assigned in accordance with business needs. We are proud to be an equal-opportunity employer. A background check will be conducted after a conditional offer of employment is extended. #LI-REMOTE\n","jobType":"full-time","liveStartAt":1673640205,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"python-software-engineer","title":"Python Software Engineer","compensation":"","id":"2540682","isBookmarked":false},"JobListingSearchResult:2548531":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"ABOUT THE ROLE\nTeikametrics is looking for a Senior Software Engineer to join our growing platform services team. As a Senior Software Engineer at Teikametrics, you will work on projects that impact the highest priorities of our technology roadmap and the business, all while collaborating cross-functionally with multiple teams. Senior engineers influence teams outside of their own organization and deliver results that move the needle at the organizational level and impact company-wide goals.\n\n\nHOW YOU’LL SPEND YOUR TIME\n- Build, develop and scale the backend of our platform that powers the consumer experience for brand owners and sellers\n- Inspire and mentor your engineering colleagues\n- Operate in a scalable engineering culture that leverages modern principles of decoupled systems and automated CI/CD/testing/monitoring to drive efficiencies\n- Work closely with Product, Design, User research and product marketing\n\n\nWHO YOU ARE\n- 5+ years of progressive experience in software engineering.\n- BS in Computer Science, EE or equivalent\n- Solid programming skills; preferred experience in Python or Java\n- Experience breaking down projects into technical tasks and building systems\n- Desire to own projects and mentor team members.\n- Experience influencing a team’s technical and business strategy by making insightful contributions to team priorities and approaches\n- Ability to communicate their ideas effectively to achieve the right outcome for their team and customers\n\n\nWHAT CAN HELP YOU STAND OUT\n- Experience with Kafka or other similar messaging systems\n- Familiarity with containerization, microservices architecture, continuous integration and delivery\n- Experience identifying and solving ambiguous problems, architecture deficiencies, or areas where the team’s software causes bottlenecks\n- Experience with Amazon Web Services, S3, SQS, Docker, Kubernetes with Dockerization is nice to have\n- Experience working on large scale and distributed computing systems in rapid growth environments\n- Experience with modern web frameworks, advanced algorithms/data intelligence, public cloud platforms and streaming data pipelines\n- Experience leading design reviews and has actively participated in design reviews of related software\n\n\nWORKING AT TEIKAMETRICS\nJoin us! We hire talented individuals remotely across the following states: Florida, Georgia, Idaho, Massachusetts, Michigan, Minnesota, North Carolina, Ohio, Oregon, Pennsylvania, South Carolina, Texas, Utah, Virginia and Washington. In addition, we also have remote opportunities in China and India. \n\nMore Than Just a Job\nEveryone’s work preferences are different but regardless of work style, we like to take care of our people. Benefits of becoming part of Team Teika: \nCompetitive cash (we don’t discount based on location)\nA robust benefits package effective on day one!\nGenerous stock option packages and investment opportunities\nRemote friendly - we hire in 15 states and 3 countries\nUnlimited Paid Vacation Policy\nFlexible work schedule - work when you’re most productive and effective!\n\nABOUT TEIKAMETRICS\nTeikametrics’ AI-powered Marketplace Optimization Platform helps sellers and brand owners maximize their potential on the world’s most valuable marketplaces. Founded in 2015, Teikametrics uses proprietary AI technology to maximize profitability in a simple SaaS interface. Teikametrics optimizes more than $8 billion in GMV across thousands of sellers around the world, with brands including Munchkin, mDesign, Clarks, Nutribullet, Conair, Nutrafol, and Solo Stove trusting Teikametrics to unlock the full potential of their selling and advertising on Amazon, Walmart, and other marketplaces.\n\nThe job description is representative of typical duties and responsibilities for the position and is not all-inclusive. Other duties and responsibilities may be assigned in accordance with business needs. We are proud to be an equal opportunity employer. A background check will be conducted after a conditional offer of employment is extended. #LI-REMOTE\n","jobType":"full-time","liveStartAt":1674244979,"locationNames":["Boston"],"primaryRoleTitle":"Backend Engineer","remote":true,"slug":"senior-backend-software-engineer","title":"Senior Backend Software Engineer","compensation":"","id":"2548531","isBookmarked":false},"JobListingSearchResult:2544468":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"ABOUT THE ROLE\nTeikametrics is looking for an SRE to help us build and maintain our cloud infrastructure that hosts Teikametrics applications and systems, and help build tools and best practices for efficient software development and deployment.\n\n\nHOW YOU’LL SPEND YOUR TIME \n- Build software and systems to manage production infrastructure and applications\n- Improve the reliability and quality of our applications and data platforms\n- Building tools to implement security best practices\n- Creating reusable and immutable infrastructure with Terraform\n- Working with application developers to help deploy new services and optimize the performance of current ones\n- Continuously improve our infrastructure with monitoring, logging, and alerting\n\n\nWHO YOU ARE \n- 4+ years of professional experience\n- Experience with at least one scripting language such as Bash or Python is required\n- Hands-on experience with the following required: Cloud computing providers such as AWS, GCP, etc. Containerization technologies and tools such as Docker, Infrastructure as code tools such as Terraform, Monitoring tools such as Datadog, Prometheus and CI/CD tools like Argo, Jenkins\n  \n\n\nWHAT CAN HELP YOU STAND OUT\n- Hands-on experience with Kubernetes (EKS, GKE) or other container orchestration tools preferred\n\n\nWORKING AT TEIKAMETRICS\nJoin us! We hire talented individuals remotely across the following states: Florida, Georgia, Idaho, Massachusetts, Michigan, Minnesota, North Carolina, Ohio, Oregon, Pennsylvania, South Carolina, Texas, Utah, Virginia and Washington. In addition, we also have remote opportunities in China and India. \n\nMore Than Just a JobEveryone’s work preferences are different but regardless of work style, we like to take care of our people. Benefits of becoming part of Team Teika: Competitive cash (we don’t discount based on location)A robust benefits package effective on day one!Generous stock option packages and investment opportunitiesRemote friendly - we hire in 15 states and 3 countriesUnlimited Paid Vacation PolicyFlexible work schedule - work when you’re most productive and effective!\n\nABOUT TEIKAMETRICS Teikametrics’ AI-powered Marketplace Optimization Platform helps sellers and brand owners maximize their potential on the world’s most valuable marketplaces. Founded in 2015, Teikametrics uses proprietary AI technology to maximize profitability in a simple SaaS interface. Teikametrics optimizes more than $8 billion in GMV across thousands of sellers around the world, with brands including Munchkin, mDesign, Clarks, Nutribullet, Conair, Nutrafol, and Solo Stove trusting Teikametrics to unlock the full potential of their selling and advertising on Amazon, Walmart, and other marketplaces.\n\nThe job description is representative of typical duties and responsibilities for the position and is not all-inclusive. Other duties and responsibilities may be assigned in accordance with business needs. We are proud to be an equal opportunity employer. A background check will be conducted after a conditional offer of employment is extended. #LI-Remote\n","jobType":"full-time","liveStartAt":1674029001,"locationNames":["Boston"],"primaryRoleTitle":"DevOps","remote":true,"slug":"senior-site-reliability-engineer","title":"Senior Site Reliability Engineer","compensation":"","id":"2544468","isBookmarked":false},"StartupResult:110366":{"__typename":"StartupResult","id":"110366","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:GROWING_FAST-110366"}],"companySize":"SIZE_51_200","highConcept":"Helping third-party sellers win on Amazon","highlightedJobListings":[{"__ref":"JobListingSearchResult:2540682"},{"__ref":"JobListingSearchResult:2548531"},{"__ref":"JobListingSearchResult:2544468"}],"logoUrl":"https://photos.angel.co/startups/i/110366-600eef9d32fb5169e533a8bac879d869-medium_jpg.jpg?buster=1498574597","name":"Teikametrics","slug":"teikametrics"},"JobListingSearchResult:2536201":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"What you'll be doing:\n\nYou’ll be helping us define and build our next-gen medical AI platform. By building out core services and functionality, you will be delivering enormous value to stakeholders both internal and external, as well as ensuring scalability and reliability to all our users during our next exciting stages of growth.\n\nThe core responsibilities of this role include developing and maintaining high-performance, scalable distributed services for our data pipeline. This is a dynamic role that will require creative thinking, communication and team organization skills, and strong, general software engineering fundamentals. It will require end-to-end, system-wide breadth of knowledge with the potentially on-demand need for depth of any system component from relational databases and Linux boot configurations to high-volume data ingestion.\n\nRequired skills:\n\n- Extensive experience and technical leadership in developing complex, production-quality software to solve business problems \n- Experience operating as an owner of a large area of the codebase, including helping to maintain the operational infrastructure\n- Expertise in understanding and considering tradeoffs in performance, maintainability and stability throughout the development process\n- Highly skillful when collaborating cross team and cross-functionally to specify and improve designs, estimate timelines and deliver results\n- Excellent written/verbal technical communication and interpersonal skills\n- Basic understanding of ML fundamentals\n\nPreferred skills:\n\n- Prior experience with database systems (e.g.,PostgreSQL/Redshift, Snowflake/BigQuery)\n- Prior experience working with AWS\n- An understanding of modern microservices architectures\n","jobType":"full-time","liveStartAt":1673391023,"locationNames":["Dallas","San Francisco","Cambridge"],"primaryRoleTitle":"Software Architect","remote":true,"slug":"principal-software-engineer","title":"Principal Software Engineer","compensation":"","id":"2536201","isBookmarked":false},"JobListingSearchResult:2489551":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"What you'll be doing:\n\nYou’ll be helping us define and build our next-gen medical AI platform. By building out core services and functionality, you will be delivering enormous value to stakeholders both internal and external, as well as ensuring scalability and reliability to all our users during our next exciting stages of growth.\n\nSpecifically, the core responsibilities of this role include developing and maintaining high-performance, scalable distributed services for our data pipeline. This is a dynamic role that will require creative thinking, communication and team organization skills, and strong, general software engineering fundamentals. It will require end-to-end, system-wide breadth of knowledge with the potentially on-demand need for depth of any system component from relational databases and Linux boot configurations to high-volume data ingestion.\n\nRequired skills:\n\n- Solid experience developing complex, production-ready software including use of industry best practices and computer science fundamentals\n- Aptitude for collaborating cross team and cross-functionally to specify and improve designs, estimate timelines and deliver results\n- Strong written/verbal technical communication and interpersonal skills\n- Basic understanding of ML fundamentals\n\nPreferred skills:\n\n- Prior experience with database systems (e.g.,PostgreSQL/Redshift, Snowflake/BigQuery)\n- Prior experience working with AWS\n- Working experience with Python\n","jobType":"full-time","liveStartAt":1669144884,"locationNames":["Dallas","San Francisco","Cambridge"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"","id":"2489551","isBookmarked":false},"JobListingSearchResult:2489553":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"What you'll be doing:\n\nYou’ll be helping us define and build our next-gen medical AI platform. By building out core services and functionality, you will be delivering enormous value to stakeholders both internal and external, as well as ensuring scalability and reliability to all our users during our next exciting stages of growth.\n\nThe core responsibilities of this role include developing and maintaining high-performance, scalable distributed services for our data pipeline. This is a dynamic role that will require creative thinking, communication and team organization skills, and strong, general software engineering fundamentals. It will require end-to-end, system-wide breadth of knowledge with the potentially on-demand need for depth of any system component from relational databases and Linux boot configurations to high-volume data ingestion.\n\nRequired skills:\n\n- Significant experience developing complex, production-quality software to solve business problems \n- Strength in understanding and considering tradeoffs in performance, maintainability and stability throughout the development process\n- Highly skillful when collaborating cross team and cross-functionally to specify and improve designs, estimate timelines and deliver results\n- Strong written/verbal technical communication and interpersonal skills\n- Basic understanding of ML fundamentals\n\nPreferred skills:\n\n- Prior experience with database systems (e.g.,PostgreSQL/Redshift, Snowflake/BigQuery)\n- Prior experience working with AWS\n- An understanding of modern microservices architectures\n","jobType":"full-time","liveStartAt":1669144884,"locationNames":["Dallas","San Francisco","Cambridge"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"staff-software-engineer","title":"Staff Software Engineer","compensation":"","id":"2489553","isBookmarked":false},"StartupResult:5122690":{"__typename":"StartupResult","id":"5122690","badges":[{"__ref":"Badge:ACTIVELY_HIRING"}],"companySize":"SIZE_51_200","highConcept":"Computer vision tools for gastroenterologists","highlightedJobListings":[{"__ref":"JobListingSearchResult:2536201"},{"__ref":"JobListingSearchResult:2489551"},{"__ref":"JobListingSearchResult:2489553"}],"logoUrl":"https://photos.angel.co/startups/i/5122690-540cfe41697130b952f14e7eb55cda5a-medium_jpg.jpg?buster=1669144418","name":"Iterative Health","slug":"iterative-health"},"Badge:GROWING_FAST-29595":{"__typename":"Badge","id":"GROWING_FAST-29595","name":"GROWING_FAST_BADGE","label":"Growing fast","tooltip":"Showed strong hiring growth in the past month","avatarUrl":null,"rating":null},"JobListingSearchResult:2557933":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"**Who You Are:**\n\nDo you enjoy solving difficult problems and creating efficiency using technology? Do you have some side projects that you built to learn a new stack, and would like to show them to us? Do you have a sense of humor, and don’t take yourself or your viewpoints too seriously, yet are still comfortable sharing your viewpoints with others? Do you approach your work with pride and humility? Do you like being part of a small team and welcome opportunities to share and learn from each other? Are you a creator, an inventor, and an explorer?\n\nYes? Great! We are looking for you! We are looking for Software Engineers at all career levels, from staff to senior. \n\n**What You'll Do:**\n\n- Write well designed, testable, and efficient code\n- Break down complex problems and turn them into working solutions\n- Integrate with and develop RESTful APIs and gRPC\n- Dabble and/or excel with system architecture\n- Embrace and evolve Agile development practices\n- Provide expertise and technical direction on hard problems\n- The opportunity to mentor and develop other software engineers\n- Build highly scalable and available software in the Cloud\n\n**What You'll Bring:**\n\n- A range of positions are available, from intermediate (2+ years) through senior (7-10+ years). A truly exceptional Junior may be considered.\n- Demonstrated experience developing complex and efficient software (C# preferred)\n- Solid understanding of object-oriented programming concepts\n- Excellent problem solving, coding, and debugging skills\n- Expertise with multiple forms of data persistence\n- Experience with version control concepts, i.e. GIT\n- Start-up ready, able to adapt well to change and work in a fast-paced environment\n- Passion, curiosity, and inventiveness. This really is most important of all\n\n**Ideally You'll Bring:**\n\n- Applied Cloud experience (AWS/GCP/Azure)\n- Healthcare integration experience (FHIR, HL7)\n- Experience with RESTful APIs\n- Experience with CI/CD. \n- Experience designing distributed service solutions (microservices)  \n- Jenkins/Terraform/Ansible experience\n- Knowledge of data transformation and aggregation  \n\n**#LI-Hybrid** #LI-DS1\n\n","jobType":"full-time","liveStartAt":1674900202,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"senior-software-engineer","title":"Senior Software Engineer ","compensation":"","id":"2557933","isBookmarked":false},"JobListingSearchResult:2512563":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"**Who You Are:**\n\nDo you enjoy solving difficult problems and creating efficiency using technology? If this sounds exciting, then this opportunity is for you! We are looking for a Lead DevOps Engineer who is self-driven and loves learning new technologies, platforms, and languages.\n\n**What You'll Do:**\n\n- Promote technical vision in concert with product engineering for containerized product development, deployment, and operationalization\n- Design Kubernetes clusters to guarantee a high degree of reliability, security, and scalability.\n- Deploying and upgrading mission critical applications on Kubernetes clusters\n- Design, document and configure cloud networks, including firewall, VPN, and load balancing\n- Writing Kubernetes manifest files and docker files\n- Supporting and setting CI/CD pipelines using GIT and Jenkins\n- Setup \u0026 maintain observability, alerting and tracing of distributed systems\n- Develop and test disaster recovery plans\n\n**What You'll Bring:**\n\n- Must have deep understanding of Kubernetes and Docker architecture and associated tools\n- 5+ years of hands-on experience in management of large-scale Kubernetes cluster in production\n- Hands on experience in Kubernetes cluster provision, management, and operations experience\n- Hands on experience in implementing industry standard security and compliance practices for Docker \u0026 Kubernetes\n- Solid experience with containerized application deployments using EKS/GKE\n- Experience with continuous integration (CI) and continuous deployment (CD)\n- Worked in metrics-driven culture and software delivery process using data to measure overall system quality\n- Experience with TCP/IP networking protocols and components as implemented in IAAS\n- Write well-designed, testable, efficient infrastructure-as-code using Terraform and/or Ansible\n- Experience with observability, alerting and tracing of distributed systems using tools like Prometheus, Grafana etc.\n- Working experience in scripting/programming language (Shell, Python etc.)\n- Working experience in an agile dev-ops software development environment\n\n**Bonus:**\n\n- Certified Kubernetes Administrator (CKA) / Developer (CKD) / Security (CKS)\n- Experience with Argo CD\n\n**#LI-Hybrid**\n\n","jobType":"full-time","liveStartAt":1671057157,"locationNames":["Boston"],"primaryRoleTitle":"DevOps","remote":false,"slug":"lead-devops-engineer","title":"Lead DevOps Engineer","compensation":"","id":"2512563","isBookmarked":false},"StartupResult:29595":{"__typename":"StartupResult","id":"29595","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:GROWING_FAST-29595"}],"companySize":"SIZE_51_200","highConcept":"To connect our healthcare ecosystem with the highest quality and most efficient data","highlightedJobListings":[{"__ref":"JobListingSearchResult:2557933"},{"__ref":"JobListingSearchResult:2512563"}],"logoUrl":"https://photos.angel.co/startups/i/29595-3b075a8867066c96a8fc1469b1381bfd-medium_jpg.jpg?buster=1589599399","name":"Moxe","slug":"moxe-health"},"Badge:RECENTLY_FUNDED":{"__typename":"Badge","id":"RECENTLY_FUNDED","name":"RECENTLY_FUNDED_BADGE","label":"Recently funded","tooltip":"Raised funding in the past six months","avatarUrl":null,"rating":null},"Badge:TOP_TIER_INVESTOR-126176":{"__typename":"Badge","id":"TOP_TIER_INVESTOR-126176","name":"TOP_TIER_INVESTOR_BADGE","label":"Same investor as Groupon","tooltip":"Battery Ventures invested in both OneStudyTeam and Groupon","avatarUrl":"https://photos.angel.co/startups/i/32211-2ebb323a7147718469ae5730c7dfb615-medium_jpg.jpg?buster=1569600220","rating":null},"JobListingSearchResult:2548922":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"We're looking for a **Senior Software Engineer** with a passion for continuous learning who applies newly acquired skills to your daily work. You delight in solving difficult problems, pay close attention to detail, and believe in the value of automation. You shine as a collaborator and excel as an individual contributor. You have the courage to lead and to tackle extremely difficult problems as a member of a powerful team. Your personal initiative and discipline allow you to thrive while working remotely. Your high degree of empathy for others makes you the kind of colleague everyone wants on their team. As an integral member of a fast-growing organization, you will put your fingerprint on what we do and how we do it.\n### What You'll Be Doing\n\n- Deliver extraordinary software that solves complex, real-world problems in healthcare.\n- Build high-quality, maintainable, and well-tested code across our entire application. We value the developer who focuses on “front-end” or “back-end”, as specialization brings deep technical understanding, leading to the ability to solve difficult problems elegantly.  We also value the developer who brings their own specialties, and who will enjoy working across our entire application stack. \n- Strive for technological excellence and accomplishment through the adoption of modern tools, processes and standards.\n- Work closely with our Design and Product teams as features move through the value stream.\n- Support your teammates in an environment where collaboration, respect, humility, diversity and empathy are prized.\n\n### What You Bring to Reify Health\n\n- You have a minimum of 6 years of professional software product development in an Agile environment, ideally developing SaaS products.\n- The applicant we are looking for has experience in functional programming, has a passion for learning and personal growth, and  works best when working with a team of diverse but like-minded individuals.\n- You have real-world experience building software with functional programming languages like with languages like Clojure, Haskell, Lisp, F#, etc...\n- You have great oral and written communication skills and are comfortable with collaboration in a virtual setting. \n- You demonstrate an enthusiastic interest to learn new technologies.\n- You are comfortable with modern infrastructure essentials like AWS, Docker, CI/CD tools, etc.\n- You are proficient with common development tools (e.g. Git, Jira) and processes (e.g. pairing, testing, code reviews).\n- Prior experience in the healthcare domain, especially clinical trials and/or HIPAA Compliance is a plus. \n","jobType":"full-time","liveStartAt":1674253904,"locationNames":["Boston","Remote"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"","id":"2548922","isBookmarked":false},"StartupResult:126176":{"__typename":"StartupResult","id":"126176","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:RECENTLY_FUNDED"},{"__ref":"Badge:TOP_TIER_INVESTOR-126176"}],"companySize":"SIZE_201_500","highConcept":"We build solutions that connect and empower the clinical trial ecosystem","highlightedJobListings":[{"__ref":"JobListingSearchResult:2548922"}],"logoUrl":"https://photos.angel.co/startups/i/126176-691f9e2befbdeba7e23c69a9601ad8d0-medium_jpg.jpg?buster=1663944213","name":"OneStudyTeam","slug":"onestudyteam"},"JobListingSearchResult:1592987":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"Senior Software Engineer, Backend\nBoston, Remote\n\nThe Company\n\nTVision is the leader in TV engagement metrics. We measure what was previously unmeasurable - how people actually watch TV.  We enable the media industry - advertisers, networks, and technology partners alike - to reduce waste and drive greater and more efficient marketing results. \n\nUtilizing cutting edge technology, TVision goes beyond traditional TV data to include measurement of presence in room, co-viewing and attention, producing best-in-class TV data. This allows us to provide critical data to inform the decision making of a $100B/year industry. \n\nOur growth and innovation have been recognized by The New York Times, Advertising Age, AdWeek, Business Insider, MediaPost, and Forbes.  We were selected as a Best Place to Work 2019 by Built in Boston, and were named one of the top companies to watch in advertising technology by Business Insider in December 2019. \n\nThe Role\n\nMeasurement and data analysis lie at the foundation of TVision's data products, but those measurements need to be assembled with context to turn them into actionable insights for our customers. In this role, you will be working on scalable, high performance systems that collect and analyze data from thousands of sensors in our panel households, all across the US and the world.\n\nOn any given day, projects you might work on include:\n\nBringing a new TV metadata provider into our data pipeline;\nExtending our back end APIs to support new measurement sensors;\nSpeeding up critical database queries in the data warehouses that generate our product;\nAdding a refined analysis or a completely new model to one of the Spark jobs that do our computational heavy lifting;\nImproving the monitoring and devops automation that let us do all these things and still finish work on time!\n\nWe primarily develop in Python and Haskell on the backend, use Postgres and Redshift as our main database technologies, and rely on Spark clusters for applying complex algorithms to large datasets in a timely fashion. All of our back end infrastructure resides in AWS. However, regardless of your specific technology background, we hire great engineers who love to build, and are willing to learn.\n\nThe Candidate\n\nYou have:\n\nBS/MS in Computer Science or closely related discipline (math, computer engineering).\nA passion for writing good, clean, and reliable code.\nSubstantial experience with a broad range of database systems.\nExperience with any of the following specific technologies is a plus, but not a requirement:\nApache Spark\nColumn-oriented SQL data warehouses such as Snowflake or Redshift\nWorkflow orchestration tools such as Apache Airflow\nMachine learning frameworks\nAWS devops tools and techniques\nStrong communications skills with both technical and non-technical team members.\nCollaborative and enthusiastic approach to software development.\nStrong sense of project ownership and personal responsibility.\n\nBenefits\n\nCompetitive pay and stock options\nYour choice of comprehensive health benefits for you and your family (health, dental, vision)\nShort and long-term disability, Life and AD\u0026amp;D insurance\nFSA/HSA accounts\n401(k) retirement plan options\nPre-tax commuter benefits\nMonthly phone reimbursement\nUnlimited PTO and paid holidays\nGym membership discounts\nFinancial support for ongoing professional development\nCasual dress and fun office atmosphere","jobType":"full-time","liveStartAt":1629900843,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"sr-software-engineer","title":"Sr. Software Engineer","compensation":"$120k – $180k • No equity","id":"1592987","isBookmarked":false},"JobListingSearchResult:1592998":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"Senior Systems Engineer\nBoston, Partially Remote\n\nThe Company\nTVision measures who watches TV and how much attention they pay at the person-level to linear and streaming video. Marketers at some of the world’s largest brands, and premier Media Sellers and Data Partners leverage TVision’s metrics to make more effective media decisions.\n\nUtilizing cutting-edge technology, TVision goes beyond traditional TV data to include the measurement of presence in the room, co-viewing, and attention, thereby producing best-in-class TV data. This provides critical data to inform the decision-making of the $100B/year TV/Video industry. \n\nTVision’s growth and innovation has been recognized by The New York Times, Advertising Age, AdWeek, Business Insider, MediaPost, and Forbes. Business Insider named them one of the top companies to watch in advertising technology for 2019.\n\nAfter 6 years of hard work, TVision has cutting-edge technology, a differentiated product, a loyal customer base, and a robust panel of households across the US. TVision just closed its Series B round led by Susquehanna International Group (lead investor of Bytedance) and is ready to invest in its industry leading products and grow revenue rapidly.\n\nThe Role\nWe deploy a small footprint measurement device in our panelists’ homes. This hardware runs sophisticated computer vision, audio and network algorithms to collect data about our panelists' TV watching activity, and uploads the data to our servers in AWS. There is also a management and monitoring system which lets us keep the fleet of devices healthy and up to date.\n\nAs our Systems Engineer, you will be responsible for:\n\nSystems validation and deployment\nEnsuring that devices are properly configured.\nTesting that software updates work properly and deploy them.\nPlay an important role in the validation and procurement process of new hardware.\nOperational monitoring and troubleshooting\nMonitor the health and productivity of the devices.\nIdentify patterns and severity of failures and work with engineers to prevent and correct them.\nOrganize and improve support of the fleet of devices\nWork with the technicians that directly interact with the panelists and devices.\nOrganize and prioritize the work for successful releases and operation of the devices.\nDesign and implement procedures and write code to remotely monitor and maintain the devices.\n\nThe Candidate \nYou are experienced with planning for, deploying, and supporting systems over time.\nYou have a strong knowledge of the Linux operating system.\nYou have a deep understanding of network protocols and behavior, including typical home network environments..\nYou are experienced with Python and Linux shell scripting.\nYou are skilled with software testing and test automation.\nYou have excellent troubleshooting skills.\nYou are skilled with the design and use of system metrics and log analysis software (Grafana, Scalyr, etc).\nYou clearly and patiently explain issues to less technical team members.\nYou are a skilled team lead and have mentored, trained and perhaps managed other engineers.\nYou either already know or are interested in learning these technologies:\nconfiguration management systems (Ansible, Puppet, Chef, etc)\ndata analysis using SQL queries\nautomated integration testing\nAWS usage\nhands on experience with simple building, reconfiguring and diagnosis of computer hardware\n\nBenefits\nTVision prides itself on providing great benefits to its employees, including:\nCompetitive pay and stock options\nYour choice of comprehensive health benefits for you and your family (health, dental, vision)\nShort- and long-term disability, life and AD\u0026amp;D insurance\nFSA/HSA accounts\n401(k) retirement plan options\nPre-tax commuter benefits\nMonthly phone reimbursement\nUnlimited PTO and paid holidays\nGym membership discounts\nFinancial support for ongoing professional development\nCasual dress and fun atmosphere\nTVision provides the option for every employee to work from home until major cities completely reopen (Q4 2021).","jobType":"full-time","liveStartAt":1629901495,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"senior-systems-engineer","title":"Senior Systems Engineer","compensation":"$100k – $160k • No equity","id":"1592998","isBookmarked":false},"JobListingSearchResult:1592992":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"Lead Devops Engineer\nBoston, Remote\n\nThe Company\nTVision measures who watches TV and how much attention they pay at the person-level to linear and streaming video. Marketers at some of the world’s largest brands, and premiere Media Sellers and Data Partners leverage TVision’s metrics to make more effective media decisions.\n\nUtilizing cutting-edge technology, TVision goes beyond traditional TV data to include the measurement of presence in the room, co-viewing, and attention, thereby producing best-in-class TV data. This provides critical data to inform the decision-making of the $100B/year TV/Video industry. \n\nTVision’s growth and innovation has been recognized by The New York Times, Advertising Age, AdWeek, Business Insider, MediaPost, and Forbes. Business Insider named them one of the top companies to watch in advertising technology for 2019.\n\nAfter 6 years of hard work, TVision has cutting-edge technology, a differentiated product, a loyal customer base, and a robust panel of households across the US. TVision just closed its Series B round led by Susquehanna International Group (lead investor of Bytedance) and is ready to invest in its industry leading products and grow revenue rapidly.\n\nThe Role\n\nAs our Devops Engineer, you will design, build, and deploy the infrastructure and tooling that runs TVision’s AWS back end. You will also help us build out the configuration management systems that keep our network of field deployed data collection devices up and running.\n\nYour work will be a crucial force multiplier for the entire software development team, as you help us improve our service deployment, compute scaling, and operational monitoring. We are committed to the principle that infrastructure development is software development, but more than that -- good devops work is what makes scaling a team and a business possible.\n\nThe Candidate\n\nYou are proficient with deployment and operations on AWS, including automated infrastructure deployment tools such as CloudFormation or Terraform.\nYou have deep familiarity and substantial experience with a configuration management system such as Ansible, Chef or Puppet. We use both Ansible and Chef in production.\nYou are thoroughly comfortable automating devops tasks in shell or Python, and you know that the right way to approach a task is often to automate it the first time.\nYou know what a realistic systems monitoring dashboard contains and how to build one.\nYou are experienced in applying the principles of secure systems development, and comfortable with the responsibility that comes with administrative rights on a system.\nYou have worked with (or even better, built out) a container orchestration system such as Kubernetes, or something that fills a similar function.\nYou have experience running network infrastructure in AWS.\nBenefits\n\nTVision prides itself on providing great benefits to its employees, including:\n\nCompetitive pay and stock options\nYour choice of comprehensive health benefits for you and your family (health, dental, vision)\nShort- and long-term disability, life and AD\u0026amp;D insurance\nFSA/HSA accounts\n401(k) retirement plan options\nPre-tax commuter benefits\nMonthly phone reimbursement\nUnlimited PTO and paid holidays\nGym membership discounts\nFinancial support for ongoing professional development\nCasual dress and fun atmosphere\nTVision provides the option for every employee to work from home until major cities completely reopen (Q4 2021).","jobType":"full-time","liveStartAt":1629901091,"locationNames":["Boston"],"primaryRoleTitle":"DevOps","remote":true,"slug":"lead-devops-enginer","title":"Lead DevOps Enginer","compensation":"$140k – $180k • No equity","id":"1592992","isBookmarked":false},"StartupResult:441864":{"__typename":"StartupResult","id":"441864","badges":[],"companySize":"SIZE_51_200","highConcept":"TVision is the leader in TV performance metrics - measuring how people really watchTV","highlightedJobListings":[{"__ref":"JobListingSearchResult:1592987"},{"__ref":"JobListingSearchResult:1592998"},{"__ref":"JobListingSearchResult:1592992"}],"logoUrl":"https://photos.angel.co/startups/i/441864-959fbf2f3aad95c86034a4e11d41e9cd-medium_jpg.jpg?buster=1539023824","name":"TVision","slug":"tvision-insights"},"JobListingSearchResult:1409372":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"We’re hiring software engineers to MTS (Member of the Technical Staff) positions across the board of experience levels and interest areas. All candidates must be extremely comfortable writing Python from a Linux dev environment and not be afraid of matrices, polynomials, derivatives, and other basic mathematical concepts. We do not currently have any open roles for: mechanical, electrical, or embedded engineers. However, if your background is in these areas *in addition to* one of our posted roles, please apply! \n\n\nMember of the Technical Staff - Software Engineering\nAll candidates, regardless of experience level or interest area can expect:\nTo learn new skills, continuously sharpen your existing skills, exceed your comfort zone, and solve at least some problems you weren’t sure you could solve at first. As an early employee, the opportunity to influence both the technical and business aspects of the company’s evolution. To deploy code to production. To spend at least some time visiting customers and understanding how our robots are deployed and on-the-ground problems.To write tests and documentation along with your code.That making robots behave autonomously is super hard and even more fun. \n\nFor Junior level candidates we expect:\nWorking knowledge of a linux dev environment, bring your own editor (as long as it’s emacs)Significant working knowledge of programming in PythonComfortable with basic mathematical concepts like matrices, polynomials, derivatives, etc. An undergrad engineering degree or 3 years of industry experience writing software. Familiarity with basic concepts from at least one of the listed technical areas, along with enthusiasm for working in that area. \n\nFor Mid level candidates we expect in addition to the Jr. level requirements:\nDemonstrated capability in one of the listed technical areas (or similar) through past personal/professional projects or published research. Interest and ability in helping mentor young engineers to become great engineers, including reviewing other’s code, working through problems at the white board, and occasional pair programming.  Solid professional attitude and work habits, higher than average initiative, and strong references. 3-6 years of experience writing software in either industry or academia. Good technical judgement when making design decisions and even better debugging abilities. Optional: Interest and ability in giving technical talks or making technical blog posts. \n\nFor Senior level candidates we expect, in addition to the mid-level requirements:\nA track record of solving novel problems in one of the listed technical areas (or similar).A demonstrated ability and interest in either owning large chunks of technical architecture or leading small teams in implementation, testing, and debugging. Taking on significant responsibility for the outcomes of these efforts. A willingness and ability to help manage the development schedule and set long term commitments. \n\n\n\n-   \n\n\n\n","jobType":"full-time","liveStartAt":1659026001,"locationNames":["Cambridge"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"mts-software-engineer-robotics","title":"MTS Software Engineer (Robotics)","compensation":"$95k – $175k • 0.1% – 0.1%","id":"1409372","isBookmarked":false},"StartupResult:6984007":{"__typename":"StartupResult","id":"6984007","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:RECENTLY_FUNDED"}],"companySize":"SIZE_11_50","highConcept":"Autonomous robots for loading docks","highlightedJobListings":[{"__ref":"JobListingSearchResult:1409372"}],"logoUrl":"https://photos.angel.co/startups/i/6984007-ab0616dd6c1431a5f331a2bc86c1b880-medium_jpg.jpg?buster=1559601961","name":"Pickle Robot Company","slug":"pickle-robot-company"},"Badge:HIGHLY_RATED-382137":{"__typename":"Badge","id":"HIGHLY_RATED-382137","name":"HIGHLY_RATED_BADGE","label":"Highly rated","tooltip":"Tessian is highly rated on Glassdoor, with 4.8 out of 5 stars","avatarUrl":null,"rating":"4.8"},"Badge:TOP_TIER_INVESTOR-382137":{"__typename":"Badge","id":"TOP_TIER_INVESTOR-382137","name":"TOP_TIER_INVESTOR_BADGE","label":"Same investor as Meta","tooltip":"Accel invested in both Tessian and Meta","avatarUrl":"https://photos.angel.co/startups/i/32167-783be84a29fcf36b3429c4fab546e9bf-medium_jpg.jpg?buster=1637323785","rating":null},"Badge:WORK_LIFE_BALANCE-382137":{"__typename":"Badge","id":"WORK_LIFE_BALANCE-382137","name":"WORK_LIFE_BALANCE_BADGE","label":"Work / Life Balance","tooltip":"Employees rate Tessian 4.4/5 on Glassdoor for work / life balance","avatarUrl":null,"rating":"4.4"},"Badge:STRONG_LEADERSHIP-382137":{"__typename":"Badge","id":"STRONG_LEADERSHIP-382137","name":"STRONG_LEADERSHIP_BADGE","label":"Strong Leadership","tooltip":"Employees rate Tessian 4.6/5 on Glassdoor for faith in leadership","avatarUrl":null,"rating":"4.6"},"JobListingSearchResult:2545400":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"Tessian\n\nTessian protects every business’s mission by securing the human layer 💫\n\nWe're building intelligent security that works for human beings as they are, not how security policies would like them to be. Using machine learning technology, Tessian automatically predicts and eliminates advanced threats on email caused by human error - like data exfiltration, accidental data loss, business email compromise and phishing attacks - with minimal disruption to employees' workflow. As a result, employees are empowered to do their best work, without security getting in their way. You can read more about Human Layer Security here.\n\nTessian has raised a $74m Series C led by renowned security investors, March Capital (Crowdstrike, Knowbe4), with follow-on from Sequoia, Accel, Balderton, Latitude, Okta, Sozo, Citi \u0026 Schroder Adveq, to further our mission to secure the human layer.\n\nFounded in 2013, Tessian is backed by world-class venture capital investors, has hubs in London, San Francisco, Boston, and Austin, and London, and is one of the Top-3 2021 Best Places to Work for Women.\n\nAt Tessian we are on a mission to improve the quality of our software to improve the overall user experience and satisfaction by providing top notch quality software that ideally never presents significant disrupting BAU bugs.Therefore, Tessian is seeking a skilled and experienced Quality Assurance Software Engineer to join our growing team. The Quality Assurance Software Engineer will be responsible for designing, developing, and executing software tests to ensure that our products meet customer and business requirements.\n\nResponsibilities:\nCollaborate with integration development teams to understand and implement automated or whenever not possible, manual tests\nCreate and maintain test plans, test cases, test data and test scripts. \nFinalising and maintain Software Verification and Validation Matrix\nPerform both manual and automated testing of software applications\nIdentify and document defects and work with development teams to resolve them\nAssist in the development of test automation scripts and generic, reusable test frameworks\nContribute to the improvement of quality and software development processes and methodologies\nParticipate in code reviews to identify and mitigate testing-related issues\n\nQualifications:\nBachelor's degree in Computer Science, Computer Engineering, or a related field\n3-5 years of experience in software automated testing and quality assurance\nExperience with Agile development methodologies\nStrong understanding of software development and testing principles\nExperience with test automation and scripting in languages in Python required\nExperience with test management and bug tracking tools\nExperience testing mobile, web, and/or desktop applications\nFamiliarity with performance and load testing\nStrong analytical and problem-solving skills\nExcellent written and verbal communication skills\n\n\n\n\n\nWhy we think you'll love it here 😍.... \n\nIt’s important to us that all Tessians are part of the journey we’re on, so we offer equity options with every role and benchmark to provide above market rate salaries - there’s plenty more too…. \n\nBe at your best, both inside and outside of work \n\n•  25 days of paid holiday (plus 8 bank holidays, and an additional day for every year you've worked at Tessian!) \n•  Private health insurance provided through Vitality Health and mental health support through our Employee Assistance Program \n• Up to 60 days of working abroad, limited to 30 days per trip a year\n• Spill - employee mental health support through Slack\n•  Classpass - subsided access to gym time and classes all across London \n•  Choice First: Do your best work, in the way that works best for you\n•  Flexible working hours and working from home (if you're not already remote!) \n•  Enhanced pension contributions, matched up to 5% \n•  We’re family friendly, with policies built to support you in all stages of life \n•  High-quality tech kit provided for you to work on, plus Tessian ANC headphones \n•  If you're relocating to join the team, we'll provide a contribution to help with your costs \n•  Fertility support via Carrot covering adoption, surrogacy support, fertility treatments, support during pregnancy and more\n\nBeyond work \n\n•  Elite membership of the Tessian House System... \n•  Every other Wednesday we get together to share team updates and drinks \n•  Monthly team socials \u0026 a big, whole company extravaganza every quarter \n•  Never-ending ping-pong tournaments\n\n,,,and here are another 200 reasons!\n\nEquality \u0026 diversity ⚖️\n\nOur mission to empower and protect people is a reflection of two of our values: Human First and We Do the Right Thing. For us, Diversity, Equity and Inclusion is also a reflection of these core values. \n\nAs a human first company, we are committed to creating a diverse, equitable and inclusive environment where all our Tessians have the opportunity to thrive. We strive for a better Tessian, and a better world. We're working inside and outside Tessian to improve diversity and equity in our industry, and foster an environment where everyone feels a sense of belonging.\n\nOur strategy touches each part of a Tessian’s life cycle, from applicant to employee, ensuring that we keep DEI at the core of every point in our candidate and employee experience. Read more about our DEI commitments here.\n\nObligatory small print\n\nPlease note that we do not accept applications or résumés from recruiters. Any unsolicited CVs, profiles, or names, submitted in any format, by any channel, to any of our team, will be deemed to fall outside any terms and/or conditions with either the person submitting the information or their company of employment/representation.\n\nBy submitting your application to Tessian, you consent to Tessian retaining your information and contacting you about future job opportunities, that may be of interest, for up to 2 years in accordance with our Privacy Policy\n\nPlease note, that any job offers will be subject to the candidate passing background screening checks. \n\nWe're a #LI-Remote company offering Choice First working practices where possible.","jobType":"full-time","liveStartAt":1674072350,"locationNames":["Austin","Boston","London"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"quality-assurance-quality-control-software-engineer","title":"Quality Assurance/Quality Control Software Engineer","compensation":"","id":"2545400","isBookmarked":false},"JobListingSearchResult:1593375":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"Tessian\n\nTessian protects every business’s mission by securing the human layer 💫\n\nWe're building intelligent security that works for human beings as they are, not how security policies would like them to be. Using machine learning technology, Tessian automatically predicts and eliminates advanced threats on email caused by human error - like data exfiltration, accidental data loss, business email compromise and phishing attacks - with minimal disruption to employees' workflow. As a result, employees are empowered to do their best work, without security getting in their way. You can read more about Human Layer Security here.\n\nTessian has raised a $74m Series C led by renowned security investors, March Capital (Crowdstrike, Knowbe4), with follow-on from Sequoia, Accel, Balderton, Latitude, Okta, Sozo, Citi \u0026 Schroder Adveq, to further our mission to secure the human layer.\n\nFounded in 2013, Tessian is backed by world-class venture capital investors, has hubs in London, San Francisco, Boston, and Austin, and London, and is one of the Top-3 2021 Best Places to Work for Women.\n\n\nData Engineering at Tessian\n\nAs a high-growth scale-up, our email datasets are growing at an exponential rate. This is a great problem to have as it allows us to train best-in-class machine learning models to prevent previously unpreventable data breaches. We are facing interesting challenges with scaling our data processing pipelines and MLOps.\n\nYou will sit in our Data Engineering and work day-to-day with our Data Scientists to build out infrastructure and data pipelines empowering teams to iterate quickly on terabytes of data. We view this role as a hugely impactful, high-leverage role and strongly believe that if we can query all of our data, in near real-time and using scalable systems then we can deliver more value to our clients through the data breaches we prevent.\n\nWe can hire this role to be office based or hybrid from our London office, or offer full remote working within the UK. \nWe cannot offer visa sponsorship/relocation or remote working outside of the UK for this position.\n\n\nSome interesting projects we’re working on:\n- Building an Ingestion system to process Insights from different models using Kafka and Spark\n- Designing the next generation data-lake setting ourselves up to handle massive future scale using modern formats like Apache Iceberg\n- Creating a framework allowing us to standardise how we deploy all our ML models to production\n\n\nWe'd love to meet someone who:\n- You are a highly-skilled developer (5-8 years) who understands software engineering best practices (git, CI/CD, testing, reviewing, etc) and infrastructure as code principles.\n- You have experience working with distributed data systems such as **Spark**\n- You’ve designed and deployed **data pipelines and ETL systems** for data-at-scale\n- You have a deep knowledge of the **AWS** ecosystem and have managed AWS production environments\n- You have experience with scheduling systems like Airflow\n- Ideally you’ve been involved in machine learning infrastructure projects from automated training through to deployment\n- Has an ability to break down ambiguous problems into concrete, manageable components and think through optimal solutions\n- Enjoys “getting their hands dirty” by digging into complex operations\n- Takes a high degree of ownership over their work\n- Is a clear communicator with professional presence\n- Has strong listening skills; open to input from other team members and departments\n\n\nOn a day-to-day basis you'll get to\n- Building systems to efficiently handle our ever increasing volume of data\n- Designing and implementing data pipelines as well as owning the vision of what our systems could achieve in the future\n- Working with Data Scientists to train, version, test, deploy and monitor our machine learning models in production\n- Designing systems to expose data to our product and engineering teams in a performant way\n\n\n\n\n\nWhy we think you'll love it here 😍.... \n\nIt’s important to us that all Tessians are part of the journey we’re on, so we offer equity options with every role and benchmark to provide above market rate salaries - there’s plenty more too…. \n\nBe at your best, both inside and outside of work \n\n•  25 days of paid holiday (plus 8 bank holidays, and an additional day for every year you've worked at Tessian!) \n•  Private health insurance provided through Vitality Health and mental health support through our Employee Assistance Program \n• Up to 60 days of working abroad, limited to 30 days per trip a year\n• Spill - employee mental health support through Slack\n•  Classpass - subsided access to gym time and classes all across London \n•  Choice First: Do your best work, in the way that works best for you\n•  Flexible working hours and working from home (if you're not already remote!) \n•  Enhanced pension contributions, matched up to 5% \n•  We’re family friendly, with policies built to support you in all stages of life \n•  High-quality tech kit provided for you to work on, plus Tessian ANC headphones \n•  If you're relocating to join the team, we'll provide a contribution to help with your costs \n•  Fertility support via Carrot covering adoption, surrogacy support, fertility treatments, support during pregnancy and more\n\nBeyond work \n\n•  Elite membership of the Tessian House System... \n•  Every other Wednesday we get together to share team updates and drinks \n•  Monthly team socials \u0026 a big, whole company extravaganza every quarter \n•  Never-ending ping-pong tournaments\n\n,,,and here are another 200 reasons!\n\nEquality \u0026 diversity ⚖️\n\nOur mission to empower and protect people is a reflection of two of our values: Human First and We Do the Right Thing. For us, Diversity, Equity and Inclusion is also a reflection of these core values. \n\nAs a human first company, we are committed to creating a diverse, equitable and inclusive environment where all our Tessians have the opportunity to thrive. We strive for a better Tessian, and a better world. We're working inside and outside Tessian to improve diversity and equity in our industry, and foster an environment where everyone feels a sense of belonging.\n\nOur strategy touches each part of a Tessian’s life cycle, from applicant to employee, ensuring that we keep DEI at the core of every point in our candidate and employee experience. Read more about our DEI commitments here.\n\nObligatory small print\n\nPlease note that we do not accept applications or résumés from recruiters. Any unsolicited CVs, profiles, or names, submitted in any format, by any channel, to any of our team, will be deemed to fall outside any terms and/or conditions with either the person submitting the information or their company of employment/representation.\n\nBy submitting your application to Tessian, you consent to Tessian retaining your information and contacting you about future job opportunities, that may be of interest, for up to 2 years in accordance with our Privacy Policy\n\nPlease note, that any job offers will be subject to the candidate passing background screening checks. \n\nWe're a #LI-Remote company offering Choice First working practices where possible.","jobType":"full-time","liveStartAt":1666811328,"locationNames":["Austin","Boston","London"],"primaryRoleTitle":"Data Engineer","remote":true,"slug":"senior-data-engineer","title":"Senior Data Engineer","compensation":"$90k – $100k","id":"1593375","isBookmarked":false},"StartupResult:382137":{"__typename":"StartupResult","id":"382137","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:HIGHLY_RATED-382137"},{"__ref":"Badge:TOP_TIER_INVESTOR-382137"},{"__ref":"Badge:WORK_LIFE_BALANCE-382137"},{"__ref":"Badge:STRONG_LEADERSHIP-382137"}],"companySize":"SIZE_201_500","highConcept":"Tessian is a leading cloud email security platform","highlightedJobListings":[{"__ref":"JobListingSearchResult:2545400"},{"__ref":"JobListingSearchResult:1593375"}],"logoUrl":"https://photos.angel.co/startups/i/382137-e70d6687d6a871c8862a9c7cf742a3b4-medium_jpg.jpg?buster=1589577071","name":"Tessian","slug":"tessian"},"JobListingSearchResult:2521290":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Workable::Listing","description":"**About Product \u0026 Engineering**\n\nAt Crayon, we believe that deep customer empathy is the best way to build a successful company. It also happens to be a great way to build amazing products. It all starts by trying to better understand our customers. We then work collaboratively to conceptualize, develop, and refine simple yet powerful solutions to meet their needs. Crayon tackles a unique combination of data capture and processing, workflow, and information architecture challenges, which require innovative approaches to everything from UX to ML, implemented in a modern and scalable SaaS technology stack.\n\nBut we can’t build a great product without a great team, and that’s where you come in! We are a small but growing organization, and we’re looking for people who want to do the best work of their careers and produce great results. We push ourselves to improve, accomplish more, and maximize our impact. Growth opportunities abound. But we also focus on keeping our people healthy and happy, both physically and mentally. This includes taking breaks, not taking ourselves too seriously, and having fun together. Life is too short to not love your job!\n\n**About the role:**\n\nAs a Software Engineer at Crayon, you will be expected to build and ship innovative solutions to customer-centric problems. You will tackle complex problems including data architecture, workflow, ML / NLP, UX and scalability concerns, with an opportunity to work across Crayon's full technology stack. Your success will be measured by the impact of the product you ship, as well as your contributions to Crayon’s engineering culture as a whole. Currently, we're only focused on US based candidates.\n\n**Responsibilities**\n\n- Be a key contributor on critical product initiatives\n- Collaborate with and support the other engineers\n- Code, review, deploy, reflect, rinse, repeat\n\n**Requirements**\n\n**A little about you:**\n\n- Startup experience with small, high-velocity product organizations\n- 2+ years of hands-on full stack development experience with React / Django / Python familiarity\n- A user-centric approach to developing product, and a strong appreciation for UX principles\n- Rave reviews from former teammates\n- A positive, team-first attitude with lots of smiles and laughs to go around\n\nWe are only considering US based candidates at this time.\n\n**Benefits**\n\nCrayon offers a competitive salary, equity, medical, dental, vision, 401k, generous paid parental leave, take-what-you-need paid time off, and an inclusive culture.\n\n*Crayon is committed to building a workplace that welcomes and encourages diverse perspectives, because we know that the most successful teams are diverse teams. We are an equal opportunity employer and prohibit discrimination and harassment of any kind.*\n\n**A little about us:**\n\nSafety for our people and community is our number one concern. Some roles will require us to go to our office in the historic Fort Point neighborhood of Boston. Other roles will have an option of a remote or hybrid position, based on your preference and family's needs.\n\nCrayon’s competitive intelligence platform enables businesses to capture, analyze, and act on everything happening outside their four walls. Named an industry leader by Forrester and G2, Crayon’s software is trusted by hundreds of leading businesses to keep up with competitor information - external messaging and positioning, product and pricing changes, hiring plans, go-to-market strategies, and more. Crayon’s platform then helps businesses act on this information, increasing sales win rates, improving marketing performance, informing product strategies, and driving revenue.\n\n- [Jeff Larimer, Vice President of Engineering](https://www.linkedin.com/in/jefflarimer/)\n\n","jobType":"full-time","liveStartAt":1671741487,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"software-engineer","title":"Software Engineer","compensation":"","id":"2521290","isBookmarked":false},"StartupResult:543154":{"__typename":"StartupResult","id":"543154","badges":[{"__ref":"Badge:ACTIVELY_HIRING"}],"companySize":"SIZE_51_200","highConcept":"Track, analyze, and act on everything happening outside your company's four walls","highlightedJobListings":[{"__ref":"JobListingSearchResult:2521290"}],"logoUrl":"https://photos.angel.co/startups/i/543154-a52488356363b029f3e8f83f6fd6b93b-medium_jpg.jpg?buster=1633963606","name":"Crayon","slug":"crayon"},"Badge:HIGHLY_RATED-1206718":{"__typename":"Badge","id":"HIGHLY_RATED-1206718","name":"HIGHLY_RATED_BADGE","label":"Highly rated","tooltip":"LogRocket is highly rated on Glassdoor, with 5.0 out of 5 stars","avatarUrl":null,"rating":"5.0"},"Badge:WORK_LIFE_BALANCE-1206718":{"__typename":"Badge","id":"WORK_LIFE_BALANCE-1206718","name":"WORK_LIFE_BALANCE_BADGE","label":"Work / Life Balance","tooltip":"Employees rate LogRocket 4.6/5 on Glassdoor for work / life balance","avatarUrl":null,"rating":"4.6"},"Badge:STRONG_LEADERSHIP-1206718":{"__typename":"Badge","id":"STRONG_LEADERSHIP-1206718","name":"STRONG_LEADERSHIP_BADGE","label":"Strong Leadership","tooltip":"Employees rate LogRocket 5.0/5 on Glassdoor for faith in leadership","avatarUrl":null,"rating":"5.0"},"JobListingSearchResult:1354884":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"About LogRocket\n\nFounded in 2016, LogRocket's goal is to make every experience on the web as perfect as possible. We're solving a huge challenge for product managers and developers - understanding the user experience. LogRocket is the first system that gives these teams complete visibility into their customer's experience using their web apps - through pixel-perfect replays of user sessions and clear insight into logs, errors, and network activity.  We've already attracted an elite roster of over 2,500 customers including Reddit, Ikea, and Airbnb, just to name a few. Our focus is on building software with care and craftsmanship and our engineering blog posts offer a taste of that.\n\nBacked by top investors such as Matrix Partners, Battery Ventures, and Delta-V Capital, we've raised $55M in funding and we're eager to bring talented people onboard to support our growth. We're on a mission to improve society's experience with software and that's where you come in.\n\n\nResponsibilities\n- Design a system to automatically detect the most common user paths across millions of events\n- Create a plugin to support react-native in our mobile recording SDK\n- Implement a search backend that allows users to search in real time across billions of log entries\n- Build a machine learning pipeline that automatically detects bugs in our users' apps\n- Enrich Salesforce data with customer usage data to help make our sales team more effective\n- Automate database scaling to improve operating cost while maintaining the ability to respond to traffic spikes\n- Build a system that automatically recommends integrations for customers based on their toolset\n\n\nAbout You\n- **If you don’t meet all of these, we still encourage you to apply. We believe that code is code, regardless of language, and learning different tools is part of joining a new company.**\n- Familiarity with the state of the art in cloud technologies, including architectural principles, specific tools of the trade, and their strengths and weaknesses\n- Some experience in development environments with demanding scalability or availability requirements\n- Familiarity with modern Javascript-based applications and frameworks\n- A strong collaborator who is transparent about progress on tasks, seeks feedback early and often, works effectively with the team\n- A motivated worker who delivers on engineering estimates\n- At least one previous full-time software engineering role\n\n\nBenefits \u0026 Perks\n- Extensive health, dental, and vision benefits\n- Open vacation policy - we all work hard and take time for ourselves when we need it, no strings attached\n- Three months of fully-paid parental leave to any employee welcoming a child into their home\n- 401k and commuter benefits\n- Generous stock options - we all get to own a piece of what we’re building\n- Regular team outings and activities\n- Flexible working hours and location\n- Monthly employee gifts\n- For those in office, catered lunches throughout the week and a fully stocked kitchen with all your favorite snacks (healthy \u0026 non-healthy)\n\n\nThe estimated salary range for this position is $125,000 -$160,000, plus a competitive equity package. Actual compensation is based on several factors, including experience level and skillset.\n\nEven if you don’t meet all of the listed requirements, we still encourage you to apply. We believe learning is a vital component of success in any role here at LogRocket, and we’re happy to chat with folks from non-traditional backgrounds for our open roles.\n\nLogRocket is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.\n\nLogRocket will consider sponsoring visas for applicants in the US that need work authorization.\n","jobType":"full-time","liveStartAt":1620260522,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"software-engineer","title":"Software Engineer","compensation":"","id":"1354884","isBookmarked":false},"JobListingSearchResult:2527099":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"About LogRocket\n\nFounded in 2016, LogRocket's goal is to make every experience on the web as perfect as possible. We're solving a huge challenge for product managers and developers - understanding the user experience. LogRocket is the first system that gives these teams complete visibility into their customer's experience using their web apps - through pixel-perfect replays of user sessions and clear insight into logs, errors, and network activity.  We've already attracted an elite roster of over 2,500 customers including Reddit, Ikea, and Airbnb, just to name a few. Our focus is on building software with care and craftsmanship and our engineering blog posts offer a taste of that.\n\nBacked by top investors such as Matrix Partners, Battery Ventures, and Delta-V Capital, we've raised $55M in funding and we're eager to bring talented people onboard to support our growth. We're on a mission to improve society's experience with software and that's where you come in.\n\nThe Senior Software Engineers will be responsible for the following particular job duties:\n1. Work with a Product Manager to analyze user needs, identify functional and performance requirements, and estimate scope for new features and enhancements of existing features;\n2. Develop and test application features using JavaScript and Python;\n3. Monitor telemetry and remediate infrastructure issues during periodic on-call rotations;\n4. Provide Tier 3 support to LogRocket customers on a rotating basis and communicate directly with customers’ engineers to identify, triage, and resolve technical issues with the LogRocket product; and \n5. Deploy production software using Kubernetes and Helm within LogRocket’s Google Cloud Platform (GCP) environment.\n\nTelecommuting is available for this position.\n\nJob Requirements:\nEmployer requires a Bachelor’s degree in Computer Science or a similar engineering field and four (4) years of software development experience in high-volume or data-intensive application(s) or webservice(s) that can handle a large volume of data. In addition, the employer requires:\n\n1. Demonstrated ability working with high-volume and query-intensive data stores in an Application Performance Monitoring (APM) use case gained through at least three (3) years of work experience, one (1) year of which must include using ElasticSearch or a similar high-performance document search datastore;\n2. Demonstrated ability working on backend or full-stack web application or API development gained through at least two (2) years of work experience;\n3. Demonstrated ability developing and/or deploying software using continuous delivery (CD) workflows in a containerized environment, such as Amazon ECS or Kubernetes gained through at least one (1) year of work experience; and\n4. Demonstrated ability working with data-streaming or event-driven services such as Kafka, Amazon Kinesis, Amazon SQS, Amazon SNS, Google PubSub, or a similar technology gained through at least two (2) years of work experience.\n\nAll years of experience may be gained concurrently.\n\n\n\n\nSubmit resumes via Logrocket, 87 Summer Street, Floor 3, Boston, MA 02110 or www.Logrocket.com/careers\n \nThis position qualifies for the employer’s employee referral incentive program.\n\n#LI-DNI \n","jobType":"full-time","liveStartAt":1672776848,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"","id":"2527099","isBookmarked":false},"JobListingSearchResult:1360495":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"About LogRocket\n\nFounded in 2016, LogRocket's goal is to make every experience on the web as perfect as possible. We're solving a huge challenge for product managers and developers - understanding the user experience. LogRocket is the first system that gives these teams complete visibility into their customer's experience using their web apps - through pixel-perfect replays of user sessions and clear insight into logs, errors, and network activity.  We've already attracted an elite roster of over 2,500 customers including Reddit, Ikea, and Airbnb, just to name a few. Our focus is on building software with care and craftsmanship and our engineering blog posts offer a taste of that.\n\nBacked by top investors such as Matrix Partners, Battery Ventures, and Delta-V Capital, we've raised $55M in funding and we're eager to bring talented people onboard to support our growth. We're on a mission to improve society's experience with software and that's where you come in.\n\n\nResponsibilities\n- Design a system to automatically detect the most common user paths across millions of events\n- Create a plugin to support react-native in our mobile recording SDK\n- Implement a search backend that allows users to search in real time across billions of log entries\n- Build a machine learning pipeline that automatically detects bugs in our users' apps\n- Enrich Salesforce data with customer usage data to help make our sales team more effective\n- Automate database scaling to improve operating cost while maintaining the ability to respond to traffic spikes\n- Build a system that automatically recommends integrations for customers based on their toolset\n\n\nAbout You\n- **If you don’t meet all of these, we still encourage you to apply. We believe that code is code, regardless of language, and learning different tools is part of joining a new company.**\n- Familiarity with the state of the art in cloud technologies, including architectural principles, specific tools of the trade, and their strengths and weaknesses\n- Some experience in development environments with demanding scalability or availability requirements\n- Familiarity with modern Javascript-based applications and frameworks\n- A strong collaborator who is transparent about progress on tasks, seeks feedback early and often, works effectively with the team\n- A motivated worker who delivers on engineering estimates\n- At least one previous full-time software engineering role\n\n\nBenefits \u0026 Perks\n- Extensive health, dental, and vision benefits\n- Open vacation policy - we all work hard and take time for ourselves when we need it, no strings attached\n- Three months of fully-paid parental leave to any employee welcoming a child into their home\n- 401k and commuter benefits\n- Generous stock options - we all get to own a piece of what we’re building\n- Regular team outings and activities\n- Flexible working hours and location\n- Monthly employee gifts\n- For those in office, catered lunches throughout the week and a fully stocked kitchen with all your favorite snacks (healthy \u0026 non-healthy)\n\n\nThe estimated salary range for this position is $135,000 -$180,000, plus a competitive equity package. Actual compensation is based on several factors, including experience level and skillset.\n\nEven if you don’t meet all of the listed requirements, we still encourage you to apply. We believe learning is a vital component of success in any role here at LogRocket, and we’re happy to chat with folks from non-traditional backgrounds for our open roles.\n\nLogRocket is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.\n\nLogRocket will consider sponsoring visas for applicants in the US that need work authorization.\n","jobType":"full-time","liveStartAt":1663345993,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"","id":"1360495","isBookmarked":false},"StartupResult:1206718":{"__typename":"StartupResult","id":"1206718","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:HIGHLY_RATED-1206718"},{"__ref":"Badge:WORK_LIFE_BALANCE-1206718"},{"__ref":"Badge:STRONG_LEADERSHIP-1206718"}],"companySize":"SIZE_51_200","highConcept":"Replay what users do on your site, helping you reproduce bugs and fix issues faster","highlightedJobListings":[{"__ref":"JobListingSearchResult:1354884"},{"__ref":"JobListingSearchResult:2527099"},{"__ref":"JobListingSearchResult:1360495"}],"logoUrl":"https://photos.angel.co/startups/i/1206718-100164e9c6f3ce3d923cac870e1eac16-medium_jpg.jpg?buster=1589636759","name":"LogRocket","slug":"logrocket"},"Badge:HIGHLY_RATED-98145":{"__typename":"Badge","id":"HIGHLY_RATED-98145","name":"HIGHLY_RATED_BADGE","label":"Highly rated","tooltip":"Klaviyo is highly rated on Glassdoor, with 4.6 out of 5 stars","avatarUrl":null,"rating":"4.6"},"Badge:TOP_TIER_INVESTOR-98145":{"__typename":"Badge","id":"TOP_TIER_INVESTOR-98145","name":"TOP_TIER_INVESTOR_BADGE","label":"Same investor as Meta","tooltip":"Accel invested in both Klaviyo and Meta","avatarUrl":"https://photos.angel.co/startups/i/32167-783be84a29fcf36b3429c4fab546e9bf-medium_jpg.jpg?buster=1637323785","rating":null},"Badge:WORK_LIFE_BALANCE-98145":{"__typename":"Badge","id":"WORK_LIFE_BALANCE-98145","name":"WORK_LIFE_BALANCE_BADGE","label":"Work / Life Balance","tooltip":"Employees rate Klaviyo 4.5/5 on Glassdoor for work / life balance","avatarUrl":null,"rating":"4.5"},"Badge:STRONG_LEADERSHIP-98145":{"__typename":"Badge","id":"STRONG_LEADERSHIP-98145","name":"STRONG_LEADERSHIP_BADGE","label":"Strong Leadership","tooltip":"Employees rate Klaviyo 4.6/5 on Glassdoor for faith in leadership","avatarUrl":null,"rating":"4.6"},"JobListingSearchResult:2540923":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"## Why You Should Join the Orchestration Team: \n\nAs a Lead Engineer joining the Orchestration team you can expect to be deeply involved in technical discussions on how we scale our systems, roll out new features, and grow the team.\n\nThis is a new role within the organization, resulting from growth.\n\nThe Orchestrate team is responsible for 2 key areas of the product – Flows and Campaigns.  Our clients communicate with their customers by designing personalized flows using email and SMS to send marketing information to their customers.  These teams are full stack teams and usability of the UI, scalability of the backend are key to their success.\n\nThere are ample opportunities for growth given the scope of this role and the group’s central role in Klaviyo’s product.\n\nAs a Lead Engineer, you will  have input into the team’s mission, goals, and roadmap while collaborating along-side technical product owners, product managers, designers and data scientists. Together, you'll define scope and specifications while refining RFCs to ensure deliverables are met and stability is maintained. You will help drive the narrative for the technical evolution of the overall orchestrate space as we invest in both our current and future experiences..\n\nFor some context on what we’ve done last year and looking forward:\n\nIn 2022,  the Orchestrate teams have added many features to better support SMS, including two-way conversations and have revamped the backend to remove dependency on Cassandra. \n\nIn 2023 this team will be leading the Omnichannel initiative, where customers can create Flows and Campaigns creating messaging, using all of the channels supported by Klaviyo.  There will be further refactoring work to make it easy to add future channels to the portfolio.\n\nHow You Will Make a Difference \n\n- Drive dramatic growth in Klaviyo’s core product areas: Flows and Campaigns. \n- Wholly own features that tens thousands of our customers rely on daily to reach 4B+ of consumers to drive their business forward\n- Be responsible for the technical/architectural evolution of our product area; identify and advocate for scalability, reliability, and maintainability needs\n- Contribute to your team, department, and Klaviyo strategy by developing options and plans that align with company worldwide growth\n- Be responsible for technical quality metrics, production support for these areas of the product.\n- Guide system design and implementation trade-offs with business partners and your team. \n- Drive complex projects with a team of great people which meaningfully contribute to our customers’ experience and Klaviyo’s success. \n\nWho You Are\n\n- Experience working on a SaaS product in a full stack capacity.\n- For the back end, strong knowledge of Python or Java, Kubernetes, Relational Databases and Queuing systems, caches is a plus.\n- For the front end, Familiar knowledge of React, and the Javascript ecosystem as a whole.\n- Experience with writing Design Specs and leading design review meetings. \n- Excited to read the code, understand the product area and give technical guidance. \n- Motivated by having ownership and leading others, excited about taking the initiative to solve tasks in collaboration with others..\n- Experienced with improving and developing: API’S, various data models for the product space you have led, and utilization of tools to drive infrastructure changes and make your product space be successful \n- Comfortable working across different parts of a large codebase.\n- Highly collaborative and communicative.\n- You have an in-depth understanding of common web architectures when it comes to highly scalable systems.  \n- Successfully led and delivered on complex projects spanning multiple quarters and involving at least four teams.\n","jobType":"full-time","liveStartAt":1673645629,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"lead-software-engineer-orchestrate","title":"Lead Software Engineer, Orchestrate","compensation":"","id":"2540923","isBookmarked":false},"JobListingSearchResult:1747715":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"Klaviyo is growing fast and we have openings for all skill levels across all of our teams. Learn more about our engineering culture at [https://klaviyo.tech](https://klaviyo.tech/)\n\n We love tackling tough engineering problems and look for Lead Software Engineers who are passionate about architecting, building, owning \u0026 scaling features end to end from scratch and breaking through any obstacle or technical challenge in their way. We push each other to move out of our comfort zone, learn new technologies and work hard to ensure each day is better than the last.\n\nKlaviyo operates a real-time data platform coded in Python built for massive scale on Amazon Web Services (AWS). Engineers come to Klaviyo with experience in a variety of languages and from a number of disciplines.\n\nTechnologies we use (not exhaustive):  \nPython, Django, Celery, Java  \nMySQL, Cassandra, RabbitMQ, Redis  \nHTML, JavaScript, LESS, Backbone.js, React  \nAmazon Web Services (EC2, RDS, Aurora, etc.)Terraform, Ansible, Packer, and other DevOps tools\n\n#### **How you will make a difference:**\n\n- Wholly own features that thousands of our customers rely on daily to reach 1,000,000,000+ of consumers to drive their business forward\n- Think in systems and design architectural patterns, while acting as a technical guide to others during architecture design and improving existing architectural patterns to ensure they are performant and scalable.\n- Work on crafting our highly scalable real-time data pipeline that processes billions of events monthly across data sets growing to petabyte scale\n- Be empowered to own the mission, technical direction and operations of projects that have immediate impact\n- Advance your technical skills in all facets ranging from front end web development and user experience to machine learning and massively parallelized data pipelines\n- Contribute to the company as a subject matter expert in multiple areas, constantly pushing yourself to be a better engineer and to level up all of your peers within your team and within Klaviyo\n- Participate in technical interview process to help maintain a high bar for our growing teams\n\n#### **Who You Are**\n\n- Have 7+ years of experience and have architected, built and delivered at least one complex system.\n- Proven success creating direction and specifications for others\n- Ability  to execute independently across a wide array of areas as well as mentor and level up others\n- Experience setting  higher-level technical direction and process with the help of peers and senior management\n- Have experience building products that matter and pushing yourself and your team to be better engineers and build a product with passionate advocates\n- Enjoy working with new technologies ranging from the frontend to backend, and are particularly passionate and an expert in multiple stack areas. You show this by having strong and opinionated experience with various technologies and know how to pick the right tool for any job\n- Love digging into performance and scalability issues to drive breakthrough solutions-- whether it's a slow loading UI or too many clicks in a workflow, a database query timing out, or a queue that just won’t drain. You recognize all problems can be solved\n- Able to work with others to proactively set project and feature requirement, including work timelines prioritization \n- Experience onboarding and mentoring new team members while facilitate a learning culture and an environment where they can enhance their own skills\n","jobType":"full-time","liveStartAt":1635804563,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"lead-software-engineer","title":"Lead Software Engineer","compensation":"","id":"1747715","isBookmarked":false},"JobListingSearchResult:1747716":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"Klaviyo is growing fast and we have openings for all skill levels across all of our teams. Learn more about our engineering culture at [https://klaviyo.tech](https://klaviyo.tech/) We love tackling tough engineering problems and look for Senior Full Stack Engineers who specialize in certain areas but are passionate about building, owning \u0026 scaling features end to end from scratch and breaking through any obstacle or technical challenge in their way. We push each other to move out of our comfort zone, learn new technologies and work hard to ensure each day is better than the last. Klaviyo operates a real-time data platform coded in Python built for massive scale on Amazon Web Services (AWS). Engineers come to Klaviyo with experience in a variety of languages and from a number of disciplines. Technologies we use (not exhaustive):\n- Python, Django, Celery\n- MySQL, Cassandra, RabbitMQ, Redis\n- HTML, JavaScript, LESS, Backbone.js, React\n- Amazon Web Services (EC2, RDS, Aurora, etc.)Terraform, Ansible, Packer, and other DevOps tools\n\n### How you will make a difference:\n\n- Wholly own features that thousands of our customers rely on daily to reach 100,000,000+ of consumers to drive their business forward\n- Work on crafting our highly scalable real-time data pipeline ****that processes billions of events**** monthly across data sets growing to petabyte scale\n- Be empowered to own the mission, technical direction and operations of projects that have immediate impact\n- Advance your technical skills in all facets ranging from front end web development and user experience to machine learning and massively parallelized data pipelines\n- Contribute to the company as a subject matter expert in multiple areas, constantly pushing yourself to be a better engineer and to level up all of your peers within your team and within Klaviyo\n\n### Who you are:\n\n- Have experience building products that matter and pushing yourself and your team to be better engineers and build a product with passionate advocates\n- Enjoy working with new technologies ranging from the frontend to backend, and are particularly passionate and an expert in multiple stack areas. You show this by having strong and opinionated experience with various technologies and know how to pick the right tool for any job\n- Love digging into performance and scalability issues to drive breakthrough solutions-- whether it's a slow loading UI or too many clicks in a workflow, a database query timing out, or a queue that just won’t drain. You recognize all problems can be solved\n- Enjoy shipping code early \u0026 often in an agile fashion, pairing with product management to craft better software by soliciting feedback from thousands of end users\n- Like working on small, autonomous agile teams. At Klaviyo, you will have ownership of features, but you'll collaborate with everyone to make sure we produce the right solution\n","jobType":"full-time","liveStartAt":1668549264,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"","id":"1747716","isBookmarked":false},"StartupResult:98145":{"__typename":"StartupResult","id":"98145","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:HIGHLY_RATED-98145"},{"__ref":"Badge:TOP_TIER_INVESTOR-98145"},{"__ref":"Badge:WORK_LIFE_BALANCE-98145"},{"__ref":"Badge:STRONG_LEADERSHIP-98145"}],"companySize":"SIZE_1001_5000","highConcept":"","highlightedJobListings":[{"__ref":"JobListingSearchResult:2540923"},{"__ref":"JobListingSearchResult:1747715"},{"__ref":"JobListingSearchResult:1747716"}],"logoUrl":"https://photos.angel.co/startups/i/98145-059a3954a1c856feea0d136a73960674-medium_jpg.jpg?buster=1648053378","name":"Klaviyo","slug":"klaviyo"},"JobListingSearchResult:2534922":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"Software Engineer, Cohere Health, Inc., Boston, Massachusetts (Hybrid)\n\n \n\n**Company Overview:**\n\n \n\nCohere Health is illuminating healthcare for patients, their doctors, and all those who are important in a patient’s healthcare experience, both in and out of the doctors office.  Founded in August, 2019, we are obsessed with eliminating wasteful friction patients and doctors experience in areas that have nothing to do with health and treatment, particularly for diagnoses that require expensive procedures or medications.  To that end, we build software that is expressly designed to ensure the appropriate plan of care is understood and expeditiously approved, so that patients and doctors can focus on health, rather than payment or administrative hassles.\n\n \n\n**Opportunity overview:**\n\n \n\nWill work as a member of a Software Engineering Team responsible for building and managing impactful healthcare technology on a modern technology stack.\n\n \n\n**What you will do:**\n\n \n\n- Working on fast-paced, autonomous, Agile teams to build and enhance a growing software platform.\n- Owning end to end feature releases and platform enhancements. \n- Actively participating in the technical design process, bringing your expertise and analysis to help make data-driven decisions.\n- Contributing heavily to feature design, development, testing, and delivery of our cloud platform and web applications.\n- Contributing across all parts of our platform from the database to the front-end.\n- Actively participating in ensuring Cohere maintains a disciplined approach to healthcare security.\n\n \n\n**Your background \u0026 requirements:**\n\n \n\nPosition requires a Bachelor’s degree (or an equivalent foreign degree) in Computer Science, IT, or a closely related field and 6 months of experience in designing and developing enterprise-level software applications (which can be gained through internship experience). Must also have had 6 months of experience (which can include internship experience and can have been gained concurrently with the primary experience requirement above) working with the following:\n\n- Building and deploying full-stack web applications;\n- Building applications using Javascript, React, Typescript, Java, Spring, NoSQL technologies, including MongoDB and Elasticsearch;\n- Building and managing data infrastructure using AWS, Terraform and Jenkins;\n\n- Common software development practices including version control, unit testing, agile methodologies, and CI/CD;\n- Leveraging test frameworks using at least two of the following: Cypress, Selenium, Mocha, JUnit, and Cucumber.\n\n \n\nThis position works from home 3 days a week and Cohere Health’s offices in Boston 2 days a week.\n\n \n\n","jobType":"full-time","liveStartAt":1673341591,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"software-engineer","title":"Software Engineer","compensation":"","id":"2534922","isBookmarked":false},"JobListingSearchResult:2534923":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Greenhouse::Listing","description":"Senior Software Engineer, Cohere Health, Inc., Boston, Massachusetts (Hybrid)\n\n \n\n**Company Overview:**\n\n \n\nCohere Health is illuminating healthcare for patients, their doctors, and all those who are important in a patient’s healthcare experience, both in and out of the doctors office.  Founded in August, 2019, we are obsessed with eliminating wasteful friction patients and doctors experience in areas that have nothing to do with health and treatment, particularly for diagnoses that require expensive procedures or medications.  To that end, we build software that is expressly designed to ensure the appropriate plan of care is understood and expeditiously approved, so that patients and doctors can focus on health, rather than payment or administrative hassles.\n\n \n\n**Opportunity overview:**\n\n \n\nWill work as a member of a Software Engineering Team responsible for building and managing impactful healthcare technology on a modern technology stack.\n\n \n\n**What you will do:**\n\n \n\n- Working on fast-paced, autonomous, Agile teams to build and enhance a growing software platform.\n- Providing technical leadership throughout the technical design and sprint process.\n- Owning end to end feature releases and platform enhancements. \n- Actively participating in the technical design process, bringing your expertise and analysis to help make data-driven decisions.\n- Contributing heavily to feature design, development, testing, and delivery of our cloud platform and web applications.\n- Contributing across all parts of our platform from the database to the front-end.\n- Continuously discovering, evaluating, and implementing new technologies or services to maximize development efficiency.\n- Actively participating in ensuring Cohere maintains a disciplined approach to healthcare security.\n- Mentoring junior engineers on your team.\n\n \n\n**Your background \u0026 requirements:**\n\n \n\nPosition requires a Bachelor’s degree (or an equivalent foreign degree) in Computer Science, IT, or a closely related field and 6 months of experience in designing and developing enterprise-level software applications (which can be gained through internship experience). Must also have had 6 months of experience (which can include internship experience and can have been gained concurrently with the primary experience requirement above) working with the following:\n\n- Building and deploying full-stack web applications;\n- Building applications using Javascript, React, Typescript, Java, Spring, NoSQL technologies, including MongoDB or Elasticsearch;\n- Building event-driven pipelines leveraging python or Kafka and building and managing data infrastructure using AWS, Terraform and Jenkins;\n\n- Common software development practices including version control, unit testing, agile methodologies, and CI/CD;\n- Leveraging test frameworks using at least two of the following: Cypress, Selenium, Mocha, JUnit, and Cucumber.\n\n \n\nThis position works from home 3 days a week and Cohere Health’s offices in Boston 2 days a week.\n\n \n\n","jobType":"full-time","liveStartAt":1673341591,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"","id":"2534923","isBookmarked":false},"StartupResult:7375923":{"__typename":"StartupResult","id":"7375923","badges":[{"__ref":"Badge:ACTIVELY_HIRING"}],"companySize":"SIZE_501_1000","highConcept":"Simplifying Healthcare for Patients and Doctors","highlightedJobListings":[{"__ref":"JobListingSearchResult:2534922"},{"__ref":"JobListingSearchResult:2534923"}],"logoUrl":"https://photos.angel.co/startups/i/7375923-cb6fd0dc0a1a3f03d69284063b008718-medium_jpg.jpg?buster=1621870168","name":"Cohere Health","slug":"cohere-health-1"},"JobListingSearchResult:2437632":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"Mabl is strategically positioned in the new frontier of intelligent software engineering tools. Specifically, the mabl team is on a mission to build the easiest low-code test automation solution on the market. We have hundreds of customers globally, revenue more than doubled in 2021, and we're on track to achieve similar results in 2022. We recently raised our $40M Series C round of funding providing us long term financial stability. While we are growing quickly, we also believe strongly in the value of culture (e.g. 94% of our employees rated mabl favorably in terms of work/life balance!).\n\nWe embrace collaboration, transparency, and believe in leading with empathy; creating an environment where every employee feels empowered. mabl was also named a Best Place to Work for 3 years in a row and a Best Paying Company by Builtin Boston.\n\nAbout you\n\nWe know that great team members come from all different backgrounds. We understand that you may not meet all of the qualifications today. If you are passionate about technology and want to advance your skills, we encourage you to apply. \n\n\n\n- 5+ years of professional software development experience.\n- You’re interested in learning…about new languages and frameworks and tools, about new parts of the code base, about ways to improve as an engineer, about the quality problems that users have, and about how mabl can help address those problems.\n- Experience creating and executing design/architecture designs independently.\n- Interest and/or prior experience leading small project teams consisting of 2-3 members.\n- Ability to impact full product implementation/life cycle including full-stack development, deployment, testing, maintenance, and operation.\n- You value collaborating with your direct team as well as with other stakeholders within the company.\n- You are excited by the prospect of working on lots of parts of the system. You naturally jump in and contribute wherever needed, even if outside your normal code base, language, framework, or Cloud.\n\n\nSample Technologies:\n- Languages: TypeScript, Java, JavaScript, Python, Node.js\n- Front end: React + Redux\n- Cloud Platform: Google\n- Machine Learning: ML Engine\n- Data Analysis: BigQuery, DataFlow, Spanner\n- Compute: Container Engine, Cloud Functions, App Engine, Cloud Run\n\n\nWorking at mabl:\n\n- We embrace hybrid and remote work in and outside of the US! We have nearly 100 mablers spread across the world, currently in 6 countries, 4 continents, and 13 states. \n- We bring everyone together annually to foster lasting personal relationships and encourage mablers to visit our Boston office whenever they can.\n- Our focus on Diversity, Equity, and Inclusion has grown from a small team of 6 people to now over 15 people driving budgeted initiatives across all facets of the company including recruiting, onboarding, education, and celebrations.\n- We're proud to have won 10 awards since 2021 recognizing not only our product, but our culture and extreme focus on customer satisfaction. \n- We may be a small company, but we invest significantly in benefits and perks including generous parental leave, rich health benefits, a transportation benefit, and an employee collaboration perk. \n- We value our employees and show our appreciation through rewards and recognition programs, including mabl Kudos and our annual Founders Award!\n\nAbout Us\nmabl is the enterprise SaaS leader of intelligent, low-code test automation that empowers high-velocity software teams to embed automated end-to-end tests into the entire development lifecycle. mabl customers benefit from a unified platform for easily creating, executing, and maintaining reliable browser, API and mobile web tests that result in faster delivery of high-quality, business critical applications. That’s why customer-centric brands like Charles Schwab, jetBlue, Dollar Shave Club, Stack Overflow, and many others rely on mabl to create the digital experiences their customers demand. Learn more at https://www.mabl.com; follow @mablhq on Twitter and @mabl on LinkedIn.","jobType":"full-time","liveStartAt":1665680353,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"software-engineer-senior-level","title":"Software Engineer (Senior Level)","compensation":"$140k – $180k • 0.01% – 0.02%","id":"2437632","isBookmarked":false},"JobListingSearchResult:2437631":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"Mabl is strategically positioned in the new frontier of intelligent software engineering tools. Specifically, the mabl team is on a mission to build the easiest low-code test automation solution on the market. We have hundreds of customers globally, revenue more than doubled in 2021, and we're on track to achieve similar results in 2022. We recently raised our $40M Series C round of funding providing us long term financial stability. While we are growing quickly, we also believe strongly in the value of culture (e.g. 94% of our employees rated mabl favorably in terms of work/life balance!).\n\nWe embrace collaboration, transparency, and believe in leading with empathy; creating an environment where every employee feels empowered. mabl was also named a Best Place to Work for 3 years in a row and a Best Paying Company by Builtin Boston.\n\nRole:\n\nIn this role you will focus on our core systems, including data modeling (to further inform and enable our future roadmap), as well as scalability and repeatability (to ensure our unified platform works well across a variety of use cases). You will work collaboratively with a world-class engineering team, and a talented collection of cross-functional partners to build the future of software testing. Your work will directly impact mabl’s business, customers, and culture.\n\n\nAbout You:\n- *We know that great team members come from all different backgrounds. We understand that you may not meet all of the qualifications today. If you are passionate about technology and want to advance your skills, we encourage you to apply.* \n- 3-5+ years of professional software development experience\n- You value collaborating with your direct team as well as with other stakeholders within the company, while having the ability to make an impact.\n- You value quality code and you’re interested in building tools that help others improve the quality of their code and product too.\n- You have experience working at the platform and/or systems level.\n- You have experience building and consuming microservices,\n- You're interested in improving scalability and reliability, while thinking about repeatability.\n- You’re interested in learning about new languages, frameworks, and tools, about new parts of the code base, about ways to improve as an engineer, about the quality problems that users have, and about how mabl can help address those problems for our customers.\n\n\nSample of our Technologies:\n- **Languages:** TypeScript, Java, JavaScript, Python, Node.js\n- **Front end:** React + Redux\n- **Cloud Platform:** Google\n- **Machine Learning:** Tensorflow, ML Engine\n- **Data Analysis:** BigQuery, DataFlow, Spanner\n- **Compute:** Container Engine, Cloud Functions, App Engine, Cloud Run\n\n\nWorking at mabl:\n\n- We embrace hybrid and remote work in and outside of the US! We have nearly 100 mablers spread across the world, currently in 6 countries, 4 continents, and 13 states. \n- We bring everyone together annually to foster lasting personal relationships and encourage mablers to visit our Boston office whenever they can.\n- Our focus on Diversity, Equity, and Inclusion has grown from a small team of 6 people to now over 15 people driving budgeted initiatives across all facets of the company including recruiting, onboarding, education, and celebrations.\n- We're proud to have won 10 awards since 2021 recognizing not only our product, but our culture and extreme focus on customer satisfaction. \n- We may be a small company, but we invest significantly in benefits and perks including generous parental leave, rich health benefits, a transportation benefit, and an employee collaboration perk. \n- We value our employees and show our appreciation through rewards and recognition programs, including mabl Kudos and our annual Founders Award!\n\nAbout Us\nmabl is the enterprise SaaS leader of intelligent, low-code test automation that empowers high-velocity software teams to embed automated end-to-end tests into the entire development lifecycle. mabl customers benefit from a unified platform for easily creating, executing, and maintaining reliable browser, API and mobile web tests that result in faster delivery of high-quality, business critical applications. That’s why customer-centric brands like Charles Schwab, jetBlue, Dollar Shave Club, Stack Overflow, and many others rely on mabl to create the digital experiences their customers demand. Learn more at https://www.mabl.com; follow @mablhq on Twitter and @mabl on LinkedIn.","jobType":"full-time","liveStartAt":1665680352,"locationNames":["Boston"],"primaryRoleTitle":"Backend Engineer","remote":true,"slug":"back-end-software-engineer-mid-level","title":"Back-End Software Engineer (Mid Level)","compensation":"$120k – $165k • 0.01% – 0.03%","id":"2437631","isBookmarked":false},"JobListingSearchResult:2437630":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"Mabl is strategically positioned in the new frontier of intelligent software engineering tools. Specifically, the mabl team is on a mission to build the easiest low-code test automation solution on the market. We have hundreds of customers globally, revenue more than doubled in 2021, and we're on track to achieve similar results in 2022. We recently raised our $40M Series C round of funding providing us long term financial stability. While we are growing quickly, we also believe strongly in the value of culture (e.g. 94% of our employees rated mabl favorably in terms of work/life balance!).\n\nWe embrace collaboration, transparency, and believe in leading with empathy; creating an environment where every employee feels empowered. mabl was also named a Best Place to Work for 3 years in a row and a Best Paying Company by Builtin Boston.\n\nRole:\n\nWork as a key member of our world class engineering team building core features for our unified platform. While you're likely to focus on the back-end of our systems, you have the ability and interest to work across the stack. You'll work collaboratively at the fundamental level of our systems, how we're modeling data, and how we're handling variables across various use cases. In this role, you'll have a direct impact on our customers and our success.\n\n\nAbout You\n- *We know that great team members come from all different backgrounds. We understand that you may not meet all of the qualifications today. If you are passionate about technology and want to advance your skills, we encourage you to apply.* \n- 7-15+ years of professional software development experience\n- Experience working on complex systems at the fundamental platform level.\n- Experience improving scale and performance, while considering the current and future roadmap. And, the implications decisions around design, implementation, and technology/tooling have.\n- You value collaborating with your direct team as well as with other stakeholders within the company.\n- Prior experience leading projects (informally) is a plus, but is NOT required.\n- You are excited by the prospect of working on lots of parts of the system. You naturally jump in and contribute wherever needed, even if outside your normal code base, language, framework, or Cloud.\n- Lastly, and importantly, you value quality code and user experience, and you’re interested in building tools that help others improve the quality of their code and product too.\n\n\nSample of our Tech Stack:\n- **Languages:** TypeScript, Java, JavaScript, Python, Node.js\n- **Front end**: React + Redux\n- **Cloud Platform**: Google\n- **Machine Learning:** Tensorflow, ML Engine\n- **Data Analysis:** BigQuery, DataFlow, Spanner\n- **Compute:** Container Engine, Cloud Functions, App Engine, Cloud Run\n\n\nWorking at mabl:\n\n- We embrace hybrid and remote work in and outside of the US! We have nearly 100 mablers spread across the world, currently in 6 countries, 4 continents, and 13 states. \n- We bring everyone together annually to foster lasting personal relationships and encourage mablers to visit our Boston office whenever they can.\n- Our focus on Diversity, Equity, and Inclusion has grown from a small team of 6 people to now over 15 people driving budgeted initiatives across all facets of the company including recruiting, onboarding, education, and celebrations.\n- We're proud to have won 10 awards since 2021 recognizing not only our product, but our culture and extreme focus on customer satisfaction. \n- We may be a small company, but we invest significantly in benefits and perks including generous parental leave, rich health benefits, a transportation benefit, and an employee collaboration perk. \n- We value our employees and show our appreciation through rewards and recognition programs, including mabl Kudos and our annual Founders Award!\n\nAbout Us\nmabl is the enterprise SaaS leader of intelligent, low-code test automation that empowers high-velocity software teams to embed automated end-to-end tests into the entire development lifecycle. mabl customers benefit from a unified platform for easily creating, executing, and maintaining reliable browser, API and mobile web tests that result in faster delivery of high-quality, business critical applications. That’s why customer-centric brands like Charles Schwab, jetBlue, Dollar Shave Club, Stack Overflow, and many others rely on mabl to create the digital experiences their customers demand. Learn more at https://www.mabl.com; follow @mablhq on Twitter and @mabl on LinkedIn.","jobType":"full-time","liveStartAt":1665680352,"locationNames":["Boston"],"primaryRoleTitle":"Backend Engineer","remote":true,"slug":"full-stack-back-end-engineer-senior-level-or-above","title":"Full-Stack/Back-End Engineer (Senior Level or Above)","compensation":"$150k – $185k • 0.01% – 0.02%","id":"2437630","isBookmarked":false},"StartupResult:4563230":{"__typename":"StartupResult","id":"4563230","badges":[{"__ref":"Badge:ACTIVELY_HIRING"}],"companySize":"SIZE_51_200","highConcept":"Intelligent test automation for agile teams","highlightedJobListings":[{"__ref":"JobListingSearchResult:2437632"},{"__ref":"JobListingSearchResult:2437631"},{"__ref":"JobListingSearchResult:2437630"}],"logoUrl":"https://photos.angel.co/startups/i/4563230-df6b21be5488f6cf9a54276d7e3bb8c6-medium_jpg.jpg?buster=1624300675","name":"mabl","slug":"mabl"},"Badge:TOP_TIER_INVESTOR-5806214":{"__typename":"Badge","id":"TOP_TIER_INVESTOR-5806214","name":"TOP_TIER_INVESTOR_BADGE","label":"Same investor as Airbnb","tooltip":"Y Combinator invested in both Biobot Analytics and Airbnb","avatarUrl":"https://photos.angel.co/startups/i/32677-b873be4bf180abbcdad149b584b7e66f-medium_jpg.jpg?buster=1589637282","rating":null},"JobListingSearchResult:2493704":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":"AtsIntegration::Lever::Listing","description":"We are looking for an experienced full-stack software engineer to join us at Biobot. You will work with a talented, cross-functional team to build out our internal software platform, which is responsible for managing data flow throughout our production systems and operations teams (e.g. order and kit management, lab processes and workflows, assay data analysis and results).\n\n\nEssential Duties and Responsibilities (What you will be doing): \n- Design and build API integrations with internal and third-party software services such as LIMS and CRM tools\n- Write, review, test and maintain code primarily in JavaScript using modern ES6+ syntax and features. Produce robust, secure, modular, and maintainable code.\n- Work with front and back-end developers, data engineers, UX/UI designers and end users in the lab to ideate through technical solutions\n- Help establish internal development best practices and workflows or libraries that help other internal developers be more efficient\n\n\nEducation and/or Work Experience Requirements (What you need to succeed): \n- 4+ years of professional software development experience\n  \n**Highly proficient in:**- Consuming, designing and implementing RESTful APIsNodeJS, React.js frameworks\n- Designing and maintaining relational data schemas using PostgreSQL\n  \n**Experienced with:**- Asynchronous web communication patterns (message queues, pub-sub)Setting up and using CI/CD tools such as Jenkins, Travis or Circle CI\n- Using version control systems such as git and GitHub\n  \n**Familiar with:**- Major cloud platform(s) - AWS, GCP, Azure\n- Containerization and Docker\n\n\n Education and/or Work Experience Bonuses (What will help you succeed): \n- Previous experience working with scientific or other third-party software (LIMS, ERP, MES)\n- Interest in working on a science-focused public health product\n- The desire to be part of an early stage start-up, and comfort with stepping out of traditional role boundaries and managing priorities in a fast-paced environment\n\n\nPhysical Requirements and Special Demands: \n- This is a remote role; must be able to talk, listen and speak clearly on video conferencing for several hours each day\n\n\nOur Benefits\nHEALTH\nFree medical, dental, and vision insurance for employees and their families, including a $0 deductible medical plan. We want our employees to manage their health and that of their families without worrying about high premiums or deductibles.\nSELF CARE\nUnlimited PTO with 3 week minimum. Whether it's playing MTG or D\u0026D, singing on stage, camping, raising chickens, or anything else that inspires, we want our employees to unplug and explore their passions.\nBIOBABIES\n12 weeks parental leave at 100% pay. We love Biobabies and know that bonding with a new child is a critical need for employees and Biobabies alike.\nSAVINGS\n3% Biobot 401k contribution. Regardless of whether our employees contribute, we contribute 3% of salaries into participating employees' 401k accounts because we want to support their long-term financial goals.\nWORKSPACE\n$500 home office stipend for remote employees; free parking + commuter benefits and free meals for lab employees. Onsite or at home, we ensure our employees' workspace is set up for success.\n\n\nAbout Biobot\nAt Biobot, we are working together to build a team environment in which everyone can thrive and is proud to belong. We are an equal opportunity employer and our goal is to be a diverse team that is representative, at all job levels, of the society we live in. We encourage applications from candidates of all identities and backgrounds, including those who are traditionally underrepresented in technology startups.\n\nOur mission is to transform wastewater infrastructure into public health observatories. \n\nNamed as one of Fast Company’s most innovative companies in the world in 2021, Biobot Analytics is a wastewater epidemiology company and uses technology developed at MIT to measure biomarkers in sewage to better understand population health in cities. We first launched an opioid product to support government and public health officials in responding to the opioid epidemic, and in 2020 launched a Covid19 product to estimate the scope and trend of the outbreak in communities. We have operated in almost 500 communities across 43 U.S. states, generating Covid19 case estimates for over 13% of the U.S. population.\n\nBattling the opioid epidemic and now the Covid19 pandemic is just the beginning - we’re transforming sewage into a data asset and building a public health database. Eventually, Biobot data will be an early warning system for disease outbreaks, a map of nutrition disparities, and more. Headquartered in the Boston area with an office in NYC, we aim to create the bedrock of human health infrastructure and smart cities in countries across all six continents.\n\nPlease note that we are unable to sponsor work visas at this time.\n \nwww.biobot.io","jobType":"full-time","liveStartAt":1669582164,"locationNames":["New York City","United States","Cambridge","Remote"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"software-engineer","title":"Software Engineer","compensation":"","id":"2493704","isBookmarked":false},"StartupResult:5806214":{"__typename":"StartupResult","id":"5806214","badges":[{"__ref":"Badge:ACTIVELY_HIRING"},{"__ref":"Badge:TOP_TIER_INVESTOR-5806214"}],"companySize":"SIZE_51_200","highConcept":"We transform wastewater infrastructure into public health observatories","highlightedJobListings":[{"__ref":"JobListingSearchResult:2493704"}],"logoUrl":"https://photos.angel.co/startups/i/5806214-ee4210aa065ca8e7f95e5449969949c2-medium_jpg.jpg?buster=1659460208","name":"Biobot Analytics","slug":"biobot-analytics-1"},"JobListingSearchResult:1115637":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"**About Occupier:**\n\n[Occupier](https://www.occupier.com) helps commercial tenants make better real estate decisions that drive the operational needs and growth of their business. \n\nAn unprecedented convergence of major forces is upending the traditional norms of commercial real estate, creating an immediate opportunity for innovation in a multi-billion dollar market.\n\n* As of January 2022, all companies issuing US GAAP and IASB financial statements are required to comply with new standards.\n* The COVID-19 pandemic has forced companies to completely rethink their use of real estate, both near and long-term.\n\nThe current state of lease management software, consisting of off-line work and legacy tools that are 10+ years old, is ripe for disruption. \n\nOccupier aspires to be the platform where all commercial real estate decisions are made, facilitating the access to data and collaboration required by all stakeholders that require it.\n\nOur team’s unique combination of commercial real estate (JLL), proptech (VTS, ProCore, WeWork), and management consulting experience (Boston Consulting Group) positions us to understand and execute on the problems facing our customers. \n\nWe are looking for passionate, team-oriented professionals to join the Occupier team as we scale our rapidly-growing customer base coming out of our recent [$10.5M raise](https://techcrunch.com/2022/02/09/after-seeing-200-arr-growth-occupier-raises-10-5m/). \n\n**About The Job:**\nThis is an individual contributor (IC) position, working on a broad range of features across the full stack.\n\n+ You will set standards \u0026amp; best practices, and do code review\n+ You will work with Product management, UX and other engineers to refine and iterate on specifications as the features takes shape.\n+ You will interface directly with our Customer Success team to quickly squash bugs as part of our regular support rotation.\n+ You will seek to understand the domain, user personas, problems they face, architecture of our product, and product roadmap\n\n**About You:**\n+  You are pragmatic, an excellent communicator, able to break down large problems into smaller ones, anticipate problems before they happen, and enjoy pair programming and mentoring junior engineers\n+ You are comfortable anywhere in the tech stack\n+ You care about code quality, style and process\n+ You care deeply about the user experience\n+ You love to learn, and are humble enough to admit what you don't know\n+ You are self motivated - can work effectively without direction\n+ Have worked at a startup previously, or have a strong desire to work at one\n\n_Candidates from underrepresented groups and nontraditional backgrounds are encouraged to apply._\n\n**Requirements:**\n+ 5+ years of professional web development experience with Ruby on Rails or a similar framework\n+ 2+ years of production experience in React (or Vue, Angular, Ember, etc.)\n+ Experience modeling complex relational database schema\n+ Legally authorized to work in the United States without visa sponsorship\n+ Have mentored junior developers and led teams (this is a leadership, not management role)\n\n**Why Occupier is a great place to work:**\n* We offer competitive compensation packages, including early-stage equity\n* We have clear career paths and compensation bands as you grow \n* We offer and contribute to excellent medical, vision, and dental plans\n* Generous family leave policies are available\n* We have an unlimited time off policy, as well as half-day Summer Fridays\n* We have a remote first culture, and have offices in NYC, Austin and Boston if you’d like to be in an office enviornment","jobType":"full-time","liveStartAt":1668441900,"locationNames":["Boston","New York City"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"$160k – $200k • 0.1% – 0.25%","id":"1115637","isBookmarked":false},"StartupResult:6071365":{"__typename":"StartupResult","id":"6071365","badges":[{"__ref":"Badge:ACTIVELY_HIRING"}],"companySize":"SIZE_11_50","highConcept":"Modern Lease Management for commercial tenants and tenant-rep brokers","highlightedJobListings":[{"__ref":"JobListingSearchResult:1115637"}],"logoUrl":"https://photos.angel.co/startups/i/6071365-f223ecba4e777321a2678c239af4ae0e-medium_jpg.jpg?buster=1624542429","name":"Occupier","slug":"occupier"},"JobListingSearchResult:761340":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"HaulHub is a rapidly growing Series-B startup that provides much-needed technology to the heavy construction industry—an industry that contributes ~12% GDP. It's a huge opportunity! We're looking for entrepreneurial and motivated Software Engineers to join our team. Check out this short (2 min) video for a glimpse into our platform: https://bit.ly/2KHvHfO\n\nWe believe in a positive, collaborative environment, and giving our developers hard problems to solve and the autonomy to solve them. We have minimal process and management, relying on YOU to take initiative and rise to the challenge. If you like to move fast, appreciate responsibility and independence, and enjoy building new products then HaulHub is for you.\n\nThis role is a full-time, remote opportunity. You must reside in the United States.\n\n**A Note on COVID-19**\nOur team is distributed and working remotely comes naturally to us. We're continuing to build and improve our revolutionary platform with everyone's health and safety in mind. Therefore, interviews will be conducted via video chat. HaulHub raised Series-B prior to the outbreak of the COVID-19 pandemic and we're financially secure and stable.\n\n**The Ideal Candidate Has:**\n\n* 5+ years of Ruby on Rails experience, and understands how to build Rails features that scale.\n* Thrived in a fast-paced, start-up environment: you take initiative and don't get blocked\n* Led development of a critical, user-facing initiative or feature, and delivered on time, with quality.\n* Mastery of computer science fundamentals (data structures, big-O algorithmic analysis, etc.)\n* Great communication skills, both verbal and written\n* Experience with ReactJS best practices, including Context/Redux\n* Experience with SQL\n* Bachelor’s degree or higher in Computer Science, Computer Engineering, or similar\n\n**Benefits and Perks**\n* 100% company-paid individual medical coverage\n* 100% company-paid dental coverage \n* Unrestricted vacation time \n* Vision, Life, 401K and other benefit options available\n* Remote work opportunities\n\nWe are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.","jobType":"full-time","liveStartAt":1606152710,"locationNames":["Atlanta","Austin","Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"$125k – $165k • 0.01% – 0.03%","id":"761340","isBookmarked":false},"JobListingSearchResult:1647918":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"HaulHub is a rapidly growing Series-B startup that provides much-needed technology to the heavy construction industry—an industry that contributes ~12% GDP. This is a huge opportunity. We’re looking for entrepreneurial and motivated software engineers to build the SaaS platform that will revolutionize the industry.\n\nWe believe in a positive, collaborative environment, and giving our engineers hard problems to solve and the autonomy to solve them. We have minimal process and management, relying on YOU to take initiative and rise to the challenge. If you’re motivated, move fast, appreciate responsibility and independence, and enjoy building new products, then HaulHub is for you.\n\nThis role is a full-time, remote opportunity. You must reside in the United States or Canada.\n\n**The Ideal Candidate Has:**\n\n* A passion for Android development and 4+ years of experience developing great apps in the Android ecosystem.\n* The ability to clearly communicate with other developers and non-technical teammates verbally and in writing\n* Experience building native Android apps using Kotlin (2+ years)\n* Mastery of best-practice mobile architecture and modular design, including patterns such as MVVM\n* A thorough understanding of dependency injection\n* Proficiency in multi-threading, and experience with performance and memory profiling\n* Knowledge of layouts, themes, styles, views, and other Android UI concepts especially pertaining to Material Design Guidelines\n* A firm belief that automated testing is important and experience writing both unit and instrumentation tests\n* Familiarity with build tools and continuous integration\n\n**Benefits and Perks:**\n\n* 100% company-paid individual medical coverage\n* 100% company-paid dental coverage\n* Unrestricted vacation time\n* Vision, Life, 401K and other benefit options available\n* Flexible WFH/remote schedule\n\n**A Note on COVID-19:**\n\nOur team is distributed and working remotely comes naturally to us. We're continuing to build and improve our revolutionary platform with everyone's health and safety in mind. Therefore, interviews will be conducted via video chat. HaulHub raised Series-B prior to the outbreak of the COVID-19 pandemic and we're fortunate to be financially well-positioned.\n\n\nWe are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.","jobType":"full-time","liveStartAt":1632149999,"locationNames":["Atlanta","Austin","Boston"],"primaryRoleTitle":"Android Developer","remote":true,"slug":"android-engineer","title":"Android Engineer","compensation":"$120k – $180k • 0.01% – 0.03%","id":"1647918","isBookmarked":false},"StartupResult:2164124":{"__typename":"StartupResult","id":"2164124","badges":[],"companySize":"SIZE_51_200","highConcept":"The Performance Platform for the Heavy Construction Industry","highlightedJobListings":[{"__ref":"JobListingSearchResult:761340"},{"__ref":"JobListingSearchResult:1647918"}],"logoUrl":"https://photos.angel.co/startups/i/2164124-d0151b5310ddee6949cbd5ab9a91aef1-medium_jpg.jpg?buster=1593002428","name":"HaulHub Technologies","slug":"haulhub"},"Badge:TOP_TIER_INVESTOR-6977377":{"__typename":"Badge","id":"TOP_TIER_INVESTOR-6977377","name":"TOP_TIER_INVESTOR_BADGE","label":"Same investor as Stripe","tooltip":"Khosla Ventures invested in both Volta Labs and Stripe","avatarUrl":"https://photos.angel.co/startups/i/37232-b86e6247bcd9846c18c91fe65ca0355d-medium_jpg.jpg?buster=1610581275","rating":null},"JobListingSearchResult:1157569":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"Volta Labs is seeking an experienced software engineer to help build our cloud platform. You will play a key role in building out our data-pipelines and a web platform that compliments our benchtop instrument. \n\nCOMPANY DESCRIPTION\n\nVolta Labs, Inc. (https://www.voltalabs.com/) is an MIT spin-off that has unlocked powerful new capabilities with our proprietary fluidic technology. Our vision is to make biological automation as agile, scalable, and reliable as digital electronics. To realize this vision we are building a platform technology by engineering the full-stack -- hardware, software, chemistry, and biology.\n\nWe are at an exciting inflection point as we emerge out of stealth mode and scale up. Alongside our collaborators, we have demonstrated powerful and unique competencies that are now being developed into robust products for the decentralization of Next Generation Sequencing. This beachhead application is on the bleeding edge of innovation and adoption, and we intend to shape the future of bio-automation with our paradigm shifting platform. \n\nWorking at Volta Labs means having big ambitions for solving the world’s most challenging problems. We take pride in having a wealth of internal knowledge and experiences across all aspects of technology, and we hope that you can add fresh perspectives to that! We strive to build a community of collaborative, disruptive, and respectful team members who feel empowered to be themselves every day.\n\n**Job Responsibilities**\n* Work across the stack to deliver end to end solutions and features for both external users and internal R\u0026amp;D teams\n* Engineer and automate our cloud environments for security, reliability, and scale\n* Design and build solutions utilizing modern monitoring, logging, and metrics tools to assist with instrument observation, upkeep, and analysis.  \n* Design and optimize robust CI/CD pipelines for cloud apps, workflows, and data pipelines\n* Work with engineers and scientists and lead projects to expand upon existing functionality and implement new features.\n* Develop and maintain clear and effective software documentation.\n\n**Your Qualifications**\n* M.S or B.S. in Computer Science, Computer Engineering, Electrical Engineering or related field.\n* 3+ years a professional \u0026amp; collaborative software development role (ideally experience in a hardware/robotics/biotech oriented environment).\n* Extensive experience with languages and technologies including Python, Javascript, and React, as well as relational databases\n* Extensive working knowledge of modern cloud technologies and platforms (AWS, Azure, GCP, Docker, etc.)\n* Ability to collaborate in a fast-paced team environment with rapidly changing priorities: proactive team player who thinks ahead, plans, and suggests solutions.\n* You are a continuous learner who embraces a growth mindset.\n* Strong leadership and communication skills with the ability to synthesize technical information and present it to specialists and non-specialists.\n\n**Nice to Have**\n* Familiarity with laboratory data management technologies (LIMS, ELN)\n* Familiarity with emerging technologies, frameworks, and trends in image processing, computer vision, and machine learning\n* A portfolio of your past work that you can share\n\nVolta Labs offers both competitive cash and equity compensation, as well as health, dental, and vision coverage, and unlimited paid time off. We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status, and actively seek out and value diverse perspectives. Women, people of color, people who are differently abled, and members of the LGBTQ+ community are encouraged to apply. Even if you don't check every box, but see yourself contributing, please apply. Help us build an inclusive community that will change the face of bio-automation!","jobType":"full-time","liveStartAt":1647966758,"locationNames":["Boston"],"primaryRoleTitle":"Full-Stack Engineer","remote":false,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"$100k – $150k","id":"1157569","isBookmarked":false},"StartupResult:6977377":{"__typename":"StartupResult","id":"6977377","badges":[{"__ref":"Badge:TOP_TIER_INVESTOR-6977377"}],"companySize":"SIZE_11_50","highConcept":"Building the most advanced DNA sequencing Sample prep machine","highlightedJobListings":[{"__ref":"JobListingSearchResult:1157569"}],"logoUrl":"https://photos.angel.co/startups/i/6977377-8007354445878e21afb96afda40f768f-medium_jpg.jpg?buster=1647740785","name":"Volta Labs","slug":"voltalabs"},"JobListingSearchResult:1086443":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"We are looking for a senior software engineer with solid experience to help build out our foundational architecture. As part of our smart and motivated team, we will count on you to develop a core set of cloud-hosted microservices and demonstrate an aptitude for reasoning about highly complex and distributed environments (e.g. deploying and running services across multiple data centers around the world). \r\n\r\n**Responsibilities **\r\n\r\nThis position will: \r\n\r\n* Report to the Founder \u0026amp; CEO, Matt Caulfield, who currently leads engineering\r\n* Play an active role in all phases of the development process\r\n* Design remarkable software systems and components \r\n* Identify, and advocate for, required improvements to the product \r\n* Produce high-quality code while keeping pace with the goals of a startup\r\n* Qualifications \r\n\r\nThe ideal candidate will have:\r\n\r\n* Designed and implemented microservices from the ground up\r\n* Built distributed SaaS applications at scale on GCP, AWS and/or Azure using kubernetes / docker \r\n* Real-world exposure to a variety of persistence technologies such as sql, nosql, redis, kafka, etc. \r\n* Development experience with Golang and Typescript for backend services \r\n* Scripting experience using Python and/or Bash\r\n* Experience with API definition - grpc and/or swagger / openapi\r\n* Operational experience with GitOps / Infrastructure-as-code, CI/CD, automation and testing \r\n* An approach to the day-to-day job that is positive, pragmatic and productive","jobType":"full-time","liveStartAt":1607241268,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"$125k – $175k • 0.0% – 1.0%","id":"1086443","isBookmarked":false},"StartupResult:6963536":{"__typename":"StartupResult","id":"6963536","badges":[{"__ref":"Badge:RECENTLY_FUNDED"}],"companySize":"SIZE_11_50","highConcept":"Early-stage security startup","highlightedJobListings":[{"__ref":"JobListingSearchResult:1086443"}],"logoUrl":"https://photos.angel.co/startups/i/6963536-04460f9a8bd5b384eb17757de18fe812-medium_jpg.jpg?buster=1558630284","name":"Oort","slug":"oort-io"},"JobListingSearchResult:831980":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"Looking for a company that embraces new technology? Are you interested in Elixir, the Erlang VM, or Elm? Would you like to be an early part of company with lots of growth potential? Corvus Insurance seeks a talented Full Stack Software Engineer to join our early stage technology team. We are a dynamic team of entrepreneurial professionals with backgrounds in insurance and technology creating a commercial insurance company that combines the latest technology with traditional insurance. You will be instrumental in building software systems that create actionable data for our users. You will report to our Engineering Manager.\r\n\r\nResponsibilities\r\n\r\n* You will be responsible for shipping high-quality, production-ready code\r\n* You will write GraphQL APIs and backend services in Elixir using Phoenix and Absinthe\r\n* You will write user interfaces in Elm\r\n* You will work closely with designers and product managers to understand the problems of our end users (insurance brokers, insurance buyers, and Corvus staff)\r\n* You will participate in customer interviews and user testing\r\n* You will review Pull Requests\r\n* You will actively seek to be a better engineer and help others get better\r\n\r\nDesired Skills\r\n\r\n* Experience developing and deploying advanced web based applications and services into staging and production environments\r\n* Desire to immerse yourself in functional languages: Elixir and Elm\r\n* You write readable, quality code and make sure your tests are green before merging into master; you provide code reviews for your fellow team members\r\n* You appreciate Devops (Ansible, Puppet, Docker, etc) and the massive scalability provided by cloud computing and Amazon EC2\r\n* You're comfortable working at an early stage startup and are ready to build a greenfield system (no legacy codebase).You collaborate well with others and are dedicated to the company's success\r\n\r\nBenefits\r\n\r\n* Fun, creative, and energetic work environment\r\n* Frequent employee social events (off-site team building, catered team lunches, retreats, etc.)\r\n* Casual dress code\r\n* Paid Time Off\r\n* Employer paid benefits\r\n* 401(k) + employer match\r\n* Access to opportunities to expand your skill set and share your knowledge with others across the organization\r\n* Company culture of promotions from within, with a start-up atmosphere allowing for varied and rapid career development\r\n* Convenient office location near both Red, Green, Blue and Orange lines in Downtown Boston\r\n\r\nCorvus embraces diversity and equal opportunity in a serious way. We are committed to building a team that represents a variety of backgrounds, perspectives, and skills. The more inclusive we are, the better our work will be.","jobType":"full-time","liveStartAt":1589991107,"locationNames":["Austin","Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"$80k – $140k","id":"831980","isBookmarked":false},"JobListingSearchResult:1232358":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"Looking for a company that embraces new technology? Are you interested in Elixir, the Erlang VM, or Elm? Would you like to be an early part of a company with lots of growth potential? Corvus Insurance seeks a talented Manager of Software Engineering to join our early stage technology team. We are a dynamic team of entrepreneurial professionals with backgrounds in insurance and technology creating a commercial insurance company that combines the latest technology with traditional insurance. You will be instrumental in building software systems that create actionable data for our users. You will report to our VP Engineering.\r\n\r\nResponsibilities\r\n\r\nYou will manage 6-8 engineers, with titles between Associate through Senior Engineer\r\n\r\nYou will hold weekly one-on-ones with each direct report\r\n\r\nYou will build a safe and productive environment for each direct report\r\n\r\nYou will give annual performance reviews for each direct report\r\n\r\nYou will participate as an engineer on one of our software product teams\r\n\r\nYou will ship high-quality, production-ready code\r\n\r\nQualifications\r\n\r\n5+ years of experience developing and deploying advanced web based applications and services into staging and production environments\r\n\r\n2+ years of experience managing teams of software engineers\r\n\r\nDesire to immerse yourself in functional languages: Elixir and Elm\r\n\r\nYou're comfortable working at an early stage startup and are ready to build a greenfield system (no legacy codebase).\r\n\r\nYou collaborate well with others and are dedicated to the company's success","jobType":"full-time","liveStartAt":1614988921,"locationNames":["Atlanta","Boston","Chicago"],"primaryRoleTitle":"Engineering Manager","remote":true,"slug":"manager-software-engineering","title":"Manager, Software Engineering","compensation":"$120k – $145k","id":"1232358","isBookmarked":false},"StartupResult:8494686":{"__typename":"StartupResult","id":"8494686","badges":[{"__ref":"Badge:ACTIVELY_HIRING"}],"companySize":"SIZE_201_500","highConcept":"Using novel data and artificial intelligence/machine learning for commercial insurance risk","highlightedJobListings":[{"__ref":"JobListingSearchResult:831980"},{"__ref":"JobListingSearchResult:1232358"}],"logoUrl":"https://photos.angel.co/startups/i/8494686-cfc92125d191c94dbf27f2143fa0b9c0-medium_jpg.jpg?buster=1630597208","name":"Corvus Insurance","slug":"corvus-insurance"},"JobListingSearchResult:669268":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"1upHealth is an award-winning health technology company located in Boston, MA.  We deliver a platform that makes it extremely easy for developers to create healthcare applications with data aggregated from electronic health records. Specifically we are building standards-based API, provider, and patient facing products that will be the future platform for healthcare applications. 1upHealth was recently honored as the Mass Challenge Health Tech Diamond Award winner in June, 2019.\r\n \r\nAs a small but rapidly growing company, we are looking for self-starting software engineers with a passion to develop API and digital healthcare web applications in a fast-paced environment. Your role will include work in some or all of the following areas:\r\n \r\nWeb application development\r\nRESTful API design\r\nDatabase architecture\r\nBDD automated testing \r\nGit source code management\r\nAWS serverless cloud computing\r\nBig Data / Analytics\r\nHL7 \u0026amp; FHIR standards\r\n \r\nAs a full-stack developer on the 1upHealth Engineering team, you will bring significant experience developing real-world web applications that operate at scale the following requirements:\r\n \r\nBS/MS Computer Science, Engineering, or a related field\r\n3+ years experience developing commercial web applications\r\nProficiency in Node.js (experience with Express preferred), HTML/CSS, React.js, Python, SQL\r\nProven experience implementing serverless and/or microservices architectures in a cloud based environment; AWS preferred\r\nUnderstanding of both relational and noSQL database technologies and architectures\r\nKnowledge of agile development practices\r\nProactive verbal and written communication skills when interacting with team members\r\n\r\nBonus points for knowledge and experience with digital healthcare technologies and data standards such as HL7 FHIR.","jobType":"full-time","liveStartAt":1609781482,"locationNames":["Boston"],"primaryRoleTitle":"Software Engineer","remote":false,"slug":"senior-software-engineer","title":"Senior Software Engineer","compensation":"$90k – $130k","id":"669268","isBookmarked":false},"JobListingSearchResult:997319":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"1upHealth is an award-winning health technology company located in Boston, MA.  We deliver a platform that makes it extremely easy for developers to create healthcare applications with data aggregated from electronic health records. Specifically we are building standards-based API, provider, and patient facing products that will be the future platform for healthcare applications. 1upHealth was recently honored as the Mass Challenge Health Tech Diamond Award winner in June, 2019.\r\n\r\nA Software Development Engineer in Test (SDET) is a software developer with the primary responsibility of writing automated tools and frameworks to assess the quality of our products.  You’ll be writing code that automatically verifies and quantifies the quality of the 1upHealth FHIR-based API platform and applications. SDETs are able to understand software internals, debug code, automate repetitive tasks, and implement required automation to streamline our software quality process. \r\n\r\nAs a collaborative member of the 1upHealth Engineering team, you will bring significant experience testing and deploying commercial web applications that operate at scale, including:\r\n \r\nBS/MS Computer Science, Engineering, or equivalent experience.\r\nStrong understanding of software QA methodologies and strategies.\r\nDemonstrable ability to develop automated API tests, tools, and frameworks.\r\n\r\n* Significant experience automating feature, regression, and performance testing.\r\n* Knowledge of web application architectures in AWS, Azure, or GCP.  \r\n* Proficiency in your favorite programming language.\r\n* Ability to articulate technical challenges and solutions.\r\n* Desire to have fun and have an impact.\r\n\r\nBonus points for experience in the following areas:\r\n\r\n* Agile SCRUM methodologies.\r\n* Software security testing techniques.\r\n* DevOps practices using CI/CD code pipelines.\r\n* Digital healthcare technologies and data standards such as HL7 FHIR.","jobType":"full-time","liveStartAt":1608514335,"locationNames":["Boston"],"primaryRoleTitle":"QA Engineer","remote":false,"slug":"senior-software-development-engineer-in-test-sdet","title":"Senior Software Development Engineer in Test (SDET)","compensation":"$80k – $130k","id":"997319","isBookmarked":false},"JobListingSearchResult:669270":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"1upHealth is an award-winning health technology company located in Boston, MA.  We deliver a platform that makes it extremely easy for developers to create healthcare applications with data aggregated from electronic health records. Specifically we are building standards-based API, provider, and patient facing products that will be the future platform for healthcare applications. 1upHealth was recently honored as the Mass Challenge Health Tech Diamond Award winner in June, 2019.\r\n \r\nAs a small but rapidly growing company, we are looking for a self-starting DevOps Engineer to implement best practices to streamline the development of the 1upHealth cloud-based platform in a fast-paced agile environment. You will be a key member of an amazing multi-talented team that is using cutting edge web and data technologies to develop the FHIR API standard to access patient electronic health record data for the digital healthcare industry. \r\n\r\nAs a Senior DevOps Engineer, you will be a key contributor on the 1upHealth development team with an opportunity to enhance the end-to-end development process and ensure ongoing platform reliability and availability.  Your role will include the following:\r\n \r\nSupport Agile software development lifecycle using CI/CD pipelines for cloud deployments.\r\nImplement and maintain AWS-based development, testing, and production environments for 1upHealth cloud-based platform and applications.\r\nContinuously improve the monitoring of  existing AWS-based application and cloud infrastructure.\r\nDevelop tools to automate development processes as needed.\r\nEnhance the 1upHealth AWS architecture for superior service availability and scalability.\r\n\r\nYour experience and knowledge will include:\r\n \r\nBS in Computer Science, Engineering, or a related field of study.\r\n3+ years experience in a development operations capacity deploying and supporting cloud-based web applications.\r\nCompetency in one or more programming languages.  \r\nHands on experience with cloud deployment and infrastructure as code frameworks and tools including Terraform, AWS Cloud Formation, Docker, Kubernetes.\r\nExpertise with git-based source code management.\r\nExperience implementing cloud based security, preferably with HIPAA- compliant applications.\r\nAbility to thrive in a fast-paced agile environment.\r\nAWS architect certifications a plus.","jobType":"full-time","liveStartAt":1608513594,"locationNames":["Boston"],"primaryRoleTitle":"DevOps","remote":false,"slug":"senior-devops-engineer","title":"Senior DevOps Engineer","compensation":"$100k – $135k","id":"669270","isBookmarked":false},"StartupResult:4096160":{"__typename":"StartupResult","id":"4096160","badges":[],"companySize":"SIZE_51_200","highConcept":"Healthcare API patform for applications to connect to EHR data in minutes","highlightedJobListings":[{"__ref":"JobListingSearchResult:669268"},{"__ref":"JobListingSearchResult:997319"},{"__ref":"JobListingSearchResult:669270"}],"logoUrl":"https://photos.angel.co/startups/i/4096160-c3e16462a5df9c411a1b3464e2bf3da0-medium_jpg.jpg?buster=1582823005","name":"1upHealth","slug":"1uphealth"},"JobListingSearchResult:2323917":{"__typename":"JobListingSearchResult","autoPosted":false,"atsSource":null,"description":"**about the senior software engineer role:**\nsoona is looking for a senior full stack software developer with a passion for craft and an eye for quality. at soona you will be a major player in the ongoing development of soona’s unique tech platform and client experience. you will also get to play a vital role in mentoring teammates, developing the department culture, and creating the next wave of exciting tech that will unlock soona’s ability to scale up in 2022 and beyond.\n\n**about soona:**\nsoona makes it possible for brands to create professional photo and video starting at $39. our studios give customers a playground for creating their content and our online platform makes it possible for any product company in the world to experience a remote shoot. we are creating a fast casual content revolution!\n\n*soona is currently supporting a remote work environment for this role; however, we are currently looking to hire in these states only: California, Colorado, Illinois, Massachusetts, Minnesota, New Jersey, New York, Texas and Washington with requirements to be able to work in mst or cst time zones. for flex hybrid work environments, we also have office spaces in Denver, Colorado + Minneapolis, Minnesota, if that’s your thing.*\n\n**an ideal candidate can:**\n* work closely with the product team to convert business requirements into technical designs\n* provide technical mentorship and development of more junior teammates\n* develop, propose, and guide department best practices\n* provide support for the full life cycle of software product development\n* perform prototyping, system analysis, development, fielding, and maintenance of systems\n* develop, code, test, and debug new software or enhancements to existing software\n* evaluate new software products and technologies, and provide recommendations to enhance existing systems\n* conduct software testing to ensure satisfaction of application development requirements\n* provide leadership in aiding and driving technical solutions for complex projects\n* support software quality assurance and configuration management activities\n* document software procedures and develop software reports, plans, and products, such as software development plans, software requirements specifications, software design documents, software development files, source code, version description documents, and test plans\n\n**has experience in:**\n* bachelor's degree and 5+ years of experience in the software development field or equivalent\n* strong understanding of web architecture and cloud systems\n* strong understanding of Ruby on Rails or similar backend technologies\n* experience working with a variety of eCommerce platforms\n* experience in implementation and deployment of modern web development solutions: Ruby on Rails, Vue.JS, PostgreSQL, AWS, Node, Redis\n* strong with relational database design and querying (PostgreSQL)\n* experience developing a number of Ruby on Rails multi-tier web-based applications\n* experience with front-end web development (JavaScript, Vue)\n* experience working with websockets and real time messaging\n* experience with developing APIs and Microservices\n* experience with Agile methodologies\n* experience with advanced image handling and manipulation (bonus)\n\n**we can offer:**\n* starting salary: $120,000 - $160,000 (depending on experience)\n* stock options in a booming startup\n* benefits \u0026amp; perks + unlimited pto + intentional culture\n* really badass headshots\n\n**candidates should:**\n* share your favorite instagram (or twitter) feed in your cover letter","jobType":"full-time","liveStartAt":1659042377,"locationNames":["Austin","Boston","California","Chicago","Denver","Los Angeles","Minnesota","New York City","Seattle","Texas","Massachusetts","New Jersey","Washington","Colorado","Illinois","Minneapolis","Saint Paul"],"primaryRoleTitle":"Software Engineer","remote":true,"slug":"senior-software-engineer","title":"senior software engineer","compensation":"$120k – $160k • No equity","id":"2323917","isBookmarked":false},"StartupResult:6873489":{"__typename":"StartupResult","id":"6873489","badges":[],"companySize":"SIZE_51_200","highConcept":"soona is fast-casual content","highlightedJobListings":[{"__ref":"JobListingSearchResult:2323917"}],"logoUrl":"https://photos.angel.co/startups/i/6873489-1c58f4e2f007a1710d157efc2bf60950-medium_jpg.jpg?buster=1554731852","name":"soona","slug":"soona"},"SeoRoleKeyword:710":{"__typename":"SeoRoleKeyword","id":"710","slug":"software-engineer","displayName":"Software Engineer"},"NewTag:1620":{"__typename":"NewTag","id":"1620","slug":"boston","displayName":"Boston"},"RoleAndLocationEditorial:710":{"__typename":"RoleAndLocationEditorial","id":"710","meta":{"__typename":"MetaTags","canonicalUrl":"https://angel.co/role/l/software-engineer/boston","description":"Find the best Software Engineer jobs in Boston, Massachusetts, United States in February 2023! Apply to all of them with a single profile and get in touch with hiring managers directly on Wellfound (formerly AngelList Talent).","image":"https://angel.co/locations/hero-jobs.png","ogUrl":"https://angel.co/role/l/software-engineer/boston","robots":"index","structuredData":null,"title":"Software Engineer Jobs in Boston, Massachusetts, United States - February 2023","type":null},"roleKeyword":{"__ref":"SeoRoleKeyword:710"},"location":{"__ref":"NewTag:1620"},"roleAndLocationLinks":[{"__typename":"Link","label":"Help Desk Analyst","url":"https://angel.co/role/l/help-desk-analyst/boston"},{"__typename":"Link","label":"Database Manager","url":"https://angel.co/role/l/database-manager/boston"},{"__typename":"Link","label":"Database Engineer","url":"https://angel.co/role/l/database-engineer/boston"},{"__typename":"Link","label":"SOC Analyst","url":"https://angel.co/role/l/soc-analyst/boston"},{"__typename":"Link","label":"Magento Developer","url":"https://angel.co/role/l/magento-developer/boston"},{"__typename":"Link","label":"Marketing Consultant","url":"https://angel.co/role/l/marketing-consultant/boston"},{"__typename":"Link","label":"Online Marketing","url":"https://angel.co/role/l/online-marketing/boston"},{"__typename":"Link","label":"App Testing","url":"https://angel.co/role/l/app-testing/boston"},{"__typename":"Link","label":"Ruby on Rails Developer","url":"https://angel.co/role/l/ruby-on-rails-developer/boston"},{"__typename":"Link","label":"Chatbot Developer","url":"https://angel.co/role/l/chatbot-developer/boston"},{"__typename":"Link","label":"Sales Representative","url":"https://angel.co/role/l/sales-representative/boston"},{"__typename":"Link","label":"Technical Program Manager","url":"https://angel.co/role/l/technical-program-manager/boston"},{"__typename":"Link","label":"Technology Specialist","url":"https://angel.co/role/l/technology-specialist/boston"},{"__typename":"Link","label":"OpenCV","url":"https://angel.co/role/l/opencv/boston"},{"__typename":"Link","label":"Director of Finance","url":"https://angel.co/role/l/director-of-finance/boston"}],"roleRemoteLinks":[{"__typename":"Link","label":"Help Desk Analyst Remote","url":"https://angel.co/role/r/help-desk-analyst"},{"__typename":"Link","label":"Database Manager Remote","url":"https://angel.co/role/r/database-manager"},{"__typename":"Link","label":"Database Engineer Remote","url":"https://angel.co/role/r/database-engineer"},{"__typename":"Link","label":"SOC Analyst Remote","url":"https://angel.co/role/r/soc-analyst"},{"__typename":"Link","label":"Magento Developer Remote","url":"https://angel.co/role/r/magento-developer"},{"__typename":"Link","label":"Marketing Consultant Remote","url":"https://angel.co/role/r/marketing-consultant"},{"__typename":"Link","label":"Online Marketing Remote","url":"https://angel.co/role/r/online-marketing"},{"__typename":"Link","label":"App Testing Remote","url":"https://angel.co/role/r/app-testing"},{"__typename":"Link","label":"Ruby on Rails Developer Remote","url":"https://angel.co/role/r/ruby-on-rails-developer"},{"__typename":"Link","label":"Chatbot Developer Remote","url":"https://angel.co/role/r/chatbot-developer"},{"__typename":"Link","label":"Sales Representative Remote","url":"https://angel.co/role/r/sales-representative"},{"__typename":"Link","label":"Technical Program Manager Remote","url":"https://angel.co/role/r/technical-program-manager"},{"__typename":"Link","label":"Technology Specialist Remote","url":"https://angel.co/role/r/technology-specialist"},{"__typename":"Link","label":"OpenCV Remote","url":"https://angel.co/role/r/opencv"},{"__typename":"Link","label":"Director of Finance Remote","url":"https://angel.co/role/r/director-of-finance"}],"locationLinks":[{"__typename":"Link","label":"San Francisco","url":"https://angel.co/location/san-francisco"},{"__typename":"Link","label":"Los Angeles","url":"https://angel.co/location/los-angeles"},{"__typename":"Link","label":"Chicago","url":"https://angel.co/location/chicago"},{"__typename":"Link","label":"Seattle","url":"https://angel.co/location/seattle"},{"__typename":"Link","label":"New York","url":"https://angel.co/location/new-york"},{"__typename":"Link","label":"Austin","url":"https://angel.co/location/austin"},{"__typename":"Link","label":"Denver","url":"https://angel.co/location/denver"},{"__typename":"Link","label":"District of Columbia","url":"https://angel.co/location/district-of-columbia"}]}}},"router":null}},"page":"/seoLanding/roleLocationSearch","query":{"role":"software-engineer","location":"boston"},"buildId":"ch-20ad211f3d46e784d1acf719500deb0f","assetPrefix":"/talent","runtimeConfig":{"ALLOW_UNAUTHORIZED":false,"ANALYTICS_WRITE_KEY":"poTMRBHig2tYBNBP5P6kGfkGBFq19jmB","DD_CLIENT_TOKEN":"pub666b57f287aabbce5dbde9cdcebef24c","DEFAULT_DOMAIN":"angel.co","DEFAULT_EMAIL_DOMAIN":"angel.co","DEFAULT_SEO_DOMAIN":"angel.co","SEGMENT_DOMAIN":"segmntcdn.angel.co","EXTERNAL_GRAPHQL_URI":"https://angel.co/graphql","EXTERNAL_SCRIPTS_DISABLED":false,"FULLSTORY_ORG":"1JRNY","GIT_COMMIT_SHA":"ch-20ad211f3d46e784d1acf719500deb0f","HELP_DOMAIN":"help.angel.co","HELPSCOUT_BEACON_ID":"555ee66a-6ab0-4ff7-9c32-1089d7fbc687","HELPSCOUT_CURATED_BEACON_ID":"d7819ce9-e156-4c80-a096-7d55711d0291","HELPSCOUT_TALENT_HELP_BEACON_ID":"168dd697-8dc7-421c-81ec-1e1f498bf879","INTERNAL_GRAPHQL_URI":"http://172.20.64.236/graphql","ROLLBAR_CLIENT_ACCESS_TOKEN":"21060e75d6d441c79d65097e8cf2d10c","SEGMENT_ENABLED":true,"SPLITIO_KEY":"n46ljidnhbjplpbacg0pgbrtb181o8f0ot8u","STONLY_WID":"b5cf3113-5d1d-11ec-82f1-064cee365e5a","STRIPE_KEY":"pk_live_LVuuoof98c4wqw91j9BWsrOs","TIMEKIT_WIDGET_KEY":"live_widget_key_NDII8Ma6XFOcUHEZvIbMzDaBVtBn0eOg","USE_INSECURE_AGENT":false,"NEXT_CONFIG_ENV":"production","NODE_ENV":"production","RAILS_ENV":"production","ROOT_URL":"https://angel.co"},"isFallback":false,"dynamicIds":[39583,68848,68727,40870,48747],"customServer":true,"gip":true,"scriptLoader":[]}
	</script>
	<script>
		!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://segmntcdn.angel.co/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};
  analytics._writeKey="poTMRBHig2tYBNBP5P6kGfkGBFq19jmB";
  analytics.SNIPPET_VERSION="4.15.2";
  analytics.load("poTMRBHig2tYBNBP5P6kGfkGBFq19jmB", {"integrations":{"Amplitude":true,"Intercom":false}});
}}();
	</script>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<div class="ReactModalPortal"></div>
	<next-route-announcer>
		<p aria-live="assertive" id="__next-route-announcer__" role="alert"
			style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;">
		</p>
	</next-route-announcer>
	<img src="https://t.co/i/adsct?bci=3&amp;eci=2&amp;event_id=7003c828-7ccb-49a3-ad21-56d00d216bb3&amp;events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&amp;integration=advertiser&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=4dc93a21-1ab0-4fbb-94a9-42002519b291&amp;tw_document_href=https%3A%2F%2Fangel.co%2Frole%2Fl%2Fsoftware-engineer%2Fboston&amp;tw_iframe_status=0&amp;tw_order_quantity=0&amp;tw_sale_amount=0&amp;txn_id=o81lj&amp;type=javascript&amp;version=2.3.29" height="1" width="1" style="display: none;"><img src="https://analytics.twitter.com/i/adsct?bci=3&amp;eci=2&amp;event_id=7003c828-7ccb-49a3-ad21-56d00d216bb3&amp;events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&amp;integration=advertiser&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=4dc93a21-1ab0-4fbb-94a9-42002519b291&amp;tw_document_href=https%3A%2F%2Fangel.co%2Frole%2Fl%2Fsoftware-engineer%2Fboston&amp;tw_iframe_status=0&amp;tw_order_quantity=0&amp;tw_sale_amount=0&amp;txn_id=o81lj&amp;type=javascript&amp;version=2.3.29" height="1" width="1" style="display: none;"><iframe
		allow="join-ad-interest-group" data-tagging-id="AW-960514836" data-load-time="1675313578449" height="0"
		width="0" style="display: none; visibility: hidden;"
		src="https://td.doubleclick.net/td/rul/960514836?random=1675313578429&amp;cv=11&amp;fst=1675313578429&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=2oa1u0&amp;u_w=1024&amp;u_h=768&amp;hn=www.googleadservices.com&amp;frm=0&amp;url=https%3A%2F%2Fangel.co%2Frole%2Fl%2Fsoftware-engineer%2Fboston&amp;tiba=Software%20Engineer%20Jobs%20in%20Boston%2C%20Massachusetts%2C%20United%20States%20-%20February%202023%20%7C%20Wellfound%20(formerly%20AngelList%20Talent)&amp;auid=1923681879.1675313578&amp;fledge=1&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B109.0.5412.0%7CNot_A%2520Brand%3B99.0.0.0&amp;uamb=0&amp;uap=Windows&amp;uapv=10.0&amp;uaw=0&amp;data=event%3Dgtag.config"></iframe><iframe
		name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" tabindex="-1" aria-hidden="true" id="_hjRemoteVarsFrame"
		src="https://vars.hotjar.com/box-2722367854ce9702c28ea74c51e2a23f.html"
		style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><iframe
		id="_hjSafeContext_65951089" title="_hjSafeContext" tabindex="-1" aria-hidden="true" src="about:blank"
		style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe>
</body>

</html>
`;

// const parser = new DOMParser();
const parsedDocument = parse(html);

// const parser = new DOMParser();
// const parsedDocument = parser.parseFromString(html, "text/html");

// console.log(parsedDocument.querySelector(".styles_results__ZQhDf"));

let result = parsedDocument.querySelector(".styles_results__ZQhDf");
console.log(result.textContent)
// let tt = result.getElementsByTagName('*');
//  console.log(tt)
// tt.forEach(element => {
// 	console.log(element.)
//  });
// console.log(result.textContent);
// console.log(result.toString())
// let test = result.toString();
// let ttt = 
// let title = parsedDocument.getElementByClassName('styles_title__D_Srf');
// console.log(title)

/*  Angel.Co Result List   */
// let test = parsedDocument.getAttribute(".styles_results__ZQhDf");
// // let test = parsedDocument.getElementById('#results-list__title')
// console.log(test);
