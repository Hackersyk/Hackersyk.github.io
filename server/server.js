import express from "express"
import cors from "cors"
import { generateWebsite } from "../generator/websiteGenerator.js"
import { createGithubSite } from "./github.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.post("/build", async (req,res)=>{

const prompt = req.body.prompt

const site = await generateWebsite(prompt)

const url = await createGithubSite(site)

res.json({
message:"Website created",
url:url
})

})

app.listen(3000,()=>{
console.log("Ayman AI Builder running")
})