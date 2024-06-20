import {Octokit, App} from "octokit";
// Octokit.js
// https://github.com/octokit/core.js#readme

const config = require('../..config.js');
const octokit = new Octokit({
    auth: config.PERSONAL_TOKEN
  })
  
  await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'MacrossBitXD',
    repo: 'github-examples',
    ref: 'refs/heads/sdksjs',
    sha: 'fa5a4b17536a9ba8e032b1567603b3086dbdb308',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })