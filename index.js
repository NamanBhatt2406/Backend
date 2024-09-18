require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const githubData = {
    "login": "namanbhatt",
    "id": 1895676,
    "node_id": "MDQ6VXNlcjE4OTU2NzY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1895676?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/namanbhatt",
    "html_url": "https://github.com/namanbhatt",
    "followers_url": "https://api.github.com/users/namanbhatt/followers",
    "following_url": "https://api.github.com/users/namanbhatt/following{/other_user}",
    "gists_url": "https://api.github.com/users/namanbhatt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/namanbhatt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/namanbhatt/subscriptions",
    "organizations_url": "https://api.github.com/users/namanbhatt/orgs",
    "repos_url": "https://api.github.com/users/namanbhatt/repos",
    "events_url": "https://api.github.com/users/namanbhatt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/namanbhatt/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2012-06-26T19:57:19Z",
    "updated_at": "2016-08-28T05:53:13Z"
  }

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.get('/twitter',(req, res)=>{
    res.send("Naman Bhatt")
})

app.get('/login',(req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/github',(req, res) => {
    res.json(githubData)
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Bhatt naman</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})
