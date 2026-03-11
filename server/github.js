import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
auth: process.env.GITHUB_TOKEN
})

export async function createGithubSite(site){

const repoName = "client-site-" + Date.now()

await octokit.repos.createForAuthenticatedUser({
name: repoName
})

await octokit.repos.createOrUpdateFileContents({
owner:"YOUR_USERNAME",
repo:repoName,
path:"index.html",
message:"site generated",
content:Buffer.from(site.html).toString("base64")
})

await octokit.repos.createOrUpdateFileContents({
owner:"YOUR_USERNAME",
repo:repoName,
path:"style.css",
message:"style",
content:Buffer.from(site.css).toString("base64")
})

return `https://YOUR_USERNAME.github.io/${repoName}`
}