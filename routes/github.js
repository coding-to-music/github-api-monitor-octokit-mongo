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

router.get("/", async (req, res) => {
  let loggedPullRequests = await Pull.find().lean();
  res.send(loggedPullRequests);
});

module.exports = router;
