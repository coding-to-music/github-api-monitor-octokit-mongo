# github-api-monitor-octokit-mongo

# 🚀 Monitor GitHub every X minutes and store results into MongoDB 🚀

https://github.com/coding-to-music/github-api-monitor-octokit-mongo

From / By https://github.com/Roy-Gal-Git/GitHubMonitorServer

## Environment variables:

```java
      owner: process.env.OWNER,
      repo: process.env.REPO,
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/github-api-monitor-octokit-mongo.git
git push -u origin main
```

# GitHub Monitor Server

By: Roy Gal

# Instructions:

1. open new terminal
2. > mongod
3. open new terminal on the project's (GitHubMonitorServer) directory
4. > cd server
5. on the .env file: change the OWNER and REPO variables if you want to run it on any repository that you want
6. > npm i
7. > node index.js
8. open new terminal on the project's (GitHubMonitorServer) directory
9. > cd client
10. > npm i
11. > npm start

# Info:

The server updates the DB every 2 minutes.
