# unofficial-valorant-api (v.1.2.4)
Unofficial Valorant API by scraping data from the Valorant Tracker Network page

# Authentication and Rate Limits
All rate limits are the same for every endpoint, so in general you have **200 Requests every 2 Minutes**. Your rate limit is based on your IP so you don't need an API Key for authentication.
If you exceed rate limit you will get following JSON with 429 Status Code:
```json
{
    "status": "429",
    "message": "You reached your Rate Limit, please try again later"
}
```
# Documentation
The documention for the API is available under https://docs.henrikdev.xyz/valorant-api.html

# Endpoints
- The base url is https://api.henrikdev.xyz
- Available endpoints are:
  - [Tracker] /valorant/v1/profile/{name}/{tag}
  - [Tracker] /valorant/v1/matches/{name}/{tag}
  - [Tracker] /valorant/v1/match/{match-id}
  - [Tracker] /valorant/v1/rank/{name}/{tag} ❌
  - [Ingame]  /valorant/v1/puuid/{name}/{tag} ⚠️
  - [Ingame]  /valorant/v1/mmr/{region}/{name}/{tag} ⚠️
  - [Ingame]  /valorant/v1/leaderboard/{region}

⚠️== Beta | ❌ == Deprecated, will result in 410 Error
  
# Projects using this API
- https://github.com/Henrik-3/valorant-labs
- https://github.com/OblivionGhoul/KannaKamuiBot
- [VALORANT DE Discord](https://discord.gg/invite/HCmvsEQ) Rolesystem
- https://github.com/skittles9823/ValorantRankedLeaderboard

# Usage
- ✅ 1000 Successful profile requests | ✅ 1000 Successful MMR requests
- ✅ 2500 Successful profile requests

Also would be happy if you give the project a star and give credit when you use it. If you wanna help me to pay the windows server instance (5€ per month) to get data from the Ingame API or even the general server, you can help us over the donation link from my hoster: [Link](https://spenden.pp-h.eu/7cca1276-84ee-446f-9b07-47c668eaddfe).


If you have any questions write on Discord: Henrik3#1451. 
