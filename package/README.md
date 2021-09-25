<a href="https://www.npmjs.com/package/unofficial-valorant-api"><img src="https://img.shields.io/npm/dt/unofficial-valorant-api" alt="npm"/></a>
# unofficial-valorant-api
NPM package for the [Unofficial VALORANT API](https://github.com/Henrik-3/unofficial-valorant-api)

<a href="https://discord.gg/X3GaVkX2YN" target="_blank"><img src="https://discordapp.com/api/guilds/704231681309278228/widget.png?style=banner2"/></a>

# Status
See the current status of the API here: https://status.henrikdev.xyz/

# Authentication and Rate Limits
All rate limits are the same for every endpoint, so in general you have **250 Requests every 2.5 Minutes**. Your rate limit is based on your IP so you don"t need an API Key for authentication.

# Code Example
```js
const ValorantAPI = require("unofficial-valorant-api")

async function getMMR(version, region, name, tag) {
    const mmr = await ValorantAPI.getMMR(version, region, name, tag)
    //Do something with the data, for an example send it as a Discord Embed into your Discord
}

getMMR("v1", "eu", "Henrik3", "EUW3") 
```

# API Calls available

- [x] `getAccount(name, tag)`
- [x] `getMMR(version, region, name, tag, filter?)`
- [x] `getMMRHistory(region, name, tag)`
- [x] `getMMRByPUUID(version, region, puuid, filter?)`
- [x] `getMMRHistoryByPUUID(region, puuid)`
- [x] `getMatch(matchId)`
- [x] `getMatches(region, name, tag, size?, filter?)`
- [x] `getMatchesByPUUID(region, puuid, size?, filter?)`
- [x] `getLeaderboard(region, name, tag)`
- [x] `getStatus(region)`
- [x] `getContent()`
- [x] `getOffers()`
- [x] `getFeaturedItems()`
- [x] `getWebsiteContent(countrycode, filter?)`
- [x] `getRawData(type, uuid, region, queries?)`

```
Values like countrycode, region, filter or type will be suggested
in IDE's like Visual Studio Code, otherwise you find these values here: https://github.com/Henrik-3/unofficial-valorant-api
```
# Response Example
```json
{
  "status": 200,
  "data": {
    "currenttier": 11,
    "currenttierpatched": "Silver 3",
    "ranking_in_tier": 30,
    "mmr_change_to_last_game": -14,
    "elo": 830,
    "name": "Henrik3",
    "tag": "EUW3"
  },
  "ratelimits": { 
    "used": "2", 
    "remaining": "248", 
    "reset": "240" 
  },
  "error": null
}
```

# Error Response (API)
```json
{
  "status": 404,
  "data": { 
    "status": "404", 
    "message": "User not found" 
  },
  "ratelimits": { 
    "used": "4", 
    "remaining": "246", 
    "reset": "213" 
  },
  "error": null
}
```

# Error Response (Package)
```json
{
    "status": null, 
    "data": null, 
    "ratelimits": null, 
    "error": {
        "message": "PUUID Validation failed, make sure you entered a valid PUUID"}
    }
}
```
