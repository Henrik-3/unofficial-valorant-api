<a href="https://www.npmjs.com/package/unofficial-valorant-api"><img src="https://img.shields.io/npm/dt/unofficial-valorant-api" alt="npm"/></a>

# unofficial-valorant-api

NPM package for the [Unofficial VALORANT API](https://github.com/Henrik-3/unofficial-valorant-api)

<a href="https://discord.gg/X3GaVkX2YN" target="_blank"><img src="https://discordapp.com/api/guilds/704231681309278228/widget.png?style=banner2"/></a>

# API

Find all inforamtion about the API itself here: https://github.com/Henrik-3/unofficial-valorant-api/

# Installation

```
npm i unofficial-valorant-api@latest
```

# Code Examples

You find some examples [here](https://github.com/Henrik-3/unofficial-valorant-api/tree/main/package/examples)

# API Calls available

-   [x] `getAccount({name, tag})`
-   [x] `getContent({locale?})`
-   [x] `getCrosshair({code})`
-   [x] `getFeaturedItems()`
-   [x] `getLeaderboard({version, region, name?, tag?, puuid?})`
-   [x] `getMatchesByPUUID({region, puuid, size?, filter?, map?})`
-   [x] `getMatches({region, name, tag, size?, filter?, map?})`
-   [x] `getMatch({match_id})`
-   [x] `getMMRByPUUID({version, region, puuid, filter?})`
-   [x] `getMMR({version, region, name, tag, filter?})`
-   [x] `getMMRHistoryByPUUID({region, puuid})`
-   [x] `getMMRHistory({region, name, tag})`
-   [x] `getOffers()`
-   [x] `getRawData({type, uuid, region, queries?})`
-   [x] `getStatus({region})`
-   [x] `getVersion({region})`
-   [x] `getWebsite({countrycode, filter?})`

```
Values like countrycode, region, filter or type will be suggested
in IDE's like Visual Studio Code, otherwise you find these values here: https://github.com/Henrik-3/unofficial-valorant-api
```

# Response Example

```json
{
    "status": 200,
    "data": {
        "currenttier": 15,
        "currenttierpatched": "Platinum 1",
        "ranking_in_tier": 11,
        "mmr_change_to_last_game": -21,
        "elo": 1211,
        "name": "Henrik3",
        "tag": "VALO",
        "old": true
    },
    "ratelimits": {"used": 1, "remaining": 249, "reset": 150},
    "error": null,
    "url": "https://api.henrikdev.xyz/valorant/v1/mmr/eu/Henrik3/VALO"
}
```

# Error Response

```json
{
    "status": 404,
    "data": null,
    "ratelimits": {"used": 1, "remaining": 249, "reset": 150},
    "error": {"message": "Not found"},
    "url": "https://api.henrikdev.xyz/valorant/v1/mmr/eu/Henrik3/EUW3"
}
```
