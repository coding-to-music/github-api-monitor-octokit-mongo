// add timestamps in front of log messages
require("console-stamp")(console, {
  format: ":date().blue.underline :label(7)",
});

const { Octokit } = require("@octokit/rest");
const mongoose = require("mongoose");
const { Pull } = require("../models/pulls");
const express = require("express");
const router = express.Router();
// const octokit = new Octokit({ baseUrl: "https://api.github.com" });
// const octokit = new Octokit({ auth: process.env.OCTOKIT_TOKEN });
const octokit = new Octokit({
  baseUrl: "https://api.github.com",
  auth: process.env.OCTOKIT_TOKEN,
});

console.log("github route: enter");

router.get("/", async (req, res) => {
  console.log("github route get");
  let loggedPullRequests = await Pull.find().lean();
  console.log("github route: loggedPullRequests", loggedPullRequests);

  res.send(loggedPullRequests);
});

console.log("github route: exit");

module.exports = router;
