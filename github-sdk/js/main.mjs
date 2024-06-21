const { Octokit, App } = require("octokit");
import { PERSONAL_TOKEN } from "../../config.mjs";
// Octokit.js
// https://github.com/octokit/core.js#readme

const octokit = new Octokit({
    auth: PERSONAL_TOKEN
  })
  
  octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'MacrossBitXD',
    repo: 'github-examples',
    ref: 'refs/heads/sdksjs',
    sha: 'fa5a4b17536a9ba8e032b1567603b3086dbdb308',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })