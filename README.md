# unofficial-valorant-api (v.1.7)
Unofficial Valorant API by using the Ingame API

# Status
See the current status of the API here: https://status.henrikdev.xyz/

# Authentication and Rate Limits
All rate limits are the same for every endpoint, so in general you have **250 Requests every 2.5 Minutes**. Your rate limit is based on your IP so you don't need an API Key for authentication.
If you exceed rate limit you will get following JSON with 429 Status Code:
```json
{
    "status": "429",
    "message": "You reached your Rate Limit, please try again later"
}
```
# Documentation
The documention for the API is available under https://docs.henrikdev.xyz/valorant.html

# Endpoints
- The base url is https://api.henrikdev.xyz
- Available regions: eu, ap, na, kr
- Available countrycodes: en-us, en-gb, de-de, es-es, fr-fr, it-it, ru-ru, tr-tr, es-mx, ja-jp, ko-kr, pt-br
- Available match endpoints are:
    
  - [Ingame]  /valorant/v2/match/{match-id}
  - [Ingame]  /valorant/v3/matches/{region}/{name}/{tag} 
  - [Ingame]  /valorant/v3/by-puuid/matches/{region}/{puuid}
  
- Available profile/player endpoints are:

  - [Ingame]  /valorant/v1/account/{name}/{tag} 
  - [Ingame]  /valorant/v1/mmr/{region}/{name}/{tag}
  - [Ingame]  /valorant/v2/mmr/{region}/{name}/{tag} 
  - [Ingame]  /valorant/v2/mmr/{region}/{name}/{tag}?filter={e2a2, e2a1, e1a3, e1a2, e1a1}
  - [Ingame]  /valorant/v1/mmr-history/{region}/{name}/{tag} 
  - [Ingame]  /valorant/v1/by-puuid/mmr-history/:region/:puuid
  - [Ingame]  /valorant/v1/by-puuid/mmr/{region}/{puuid}
  - [Ingame]  /valorant/v2/by-puuid/mmr/{region}/{puuid}
  
- Available utility endpoints are:  
  
  - [Ingame]  /valorant/v1/leaderboard/{region}
  - [Ingame]  /valorant/v1/leaderboard/{region}?name={name}&tag={tag}
  - [Ingame]  /valorant/v1/status/{region}
  - [Ingame]  /valorant/v1/content
  - [Ingame]  /valorant/v1/store-offers
  - [Ingame]  /valorant/v1/store-featured
  - [Website] /valorant/v1/website/{countrycode}
  - [Website] /valorant/v1/website/{countrycode}?filter={game_updates, dev, esports, announcements}
  
- Deprecated endpoints are:
  - [Tracker] /valorant/v1/profile/{name}/{tag} ❌
  - [Tracker] /valorant/v2/profile/{name}/{tag} ❌
  - [Tracker] /valorant/v2/profile/{name}/{tag}?filter={e2a2, e2a1, e1a3, e1a2, e1a1} ❌
  - [Tracker] /valorant/v1/matches/{name}/{tag} ❌
  - [Tracker] /valorant/v1/matches/{name}/{tag}?filter={competitive, deathmatch, spikerush, unrated} ❌
  - [Tracker] /valorant/v1/match/{match-id} ❌
  - [Tracker] /valorant/v1/rank/{name}/{tag} ❌
  - [Ingame]  /valorant/v2/matches/{name}/{tag} ❌ [DEPRECATED BECAUSE OF ABUSING]
  - [Ingame]  /valorant/v2/by-puuid/matches/{region}/{puuid} ❌ [DEPRECATED BECAUSE OF ABUSING]
  - [Ingame]  /valorant/v1/live-match/{name}/{tag} 

⚠️== Beta | ❌ == Deprecated, will result in 410 Error
  
# Projects using this API
- https://github.com/Henrik-3/valorant-labs
- https://github.com/OblivionGhoul/KannaKamuiBot
- [VALORANT DE Discord](https://discord.gg/invite/HCmvsEQ) Rolesystem
- https://github.com/skittles9823/ValorantRankedLeaderboard
- https://github.com/ValorantAppDevelopers/Valorant-NET/tree/master

# Usage (Outdated)
- ✅ Hit one million monthly requests (02.07.2021)

# Legal

This API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

# Riot Games
Hey Riot, first of all i hope u know that this project is a try to enhance the developer community of VALORANT and also recognize it as one. If u still has a issue with it, feel free to text me on Discord or something :D

# Contributors
Thanks to [@liamcottle](https://github.com/liamcottle) and [@RumbleMike](https://github.com/RumbleMike), without them the Ingame part of this API would be not available

# Other Stuff
Also would be happy if you give the project a star and give credit when you use it. If you wanna help me to pay the windows server instance (5€ per month) to get data from the Ingame API or even the general server, you can help us over the donation link from my hoster: [Link](https://spenden.pp-h.eu/7cca1276-84ee-446f-9b07-47c668eaddfe).
Also if you are from Germany and want to support me on Twitch (Just for fun, no plan to get a real streamer any time soon), take a look at [here](https://www.twitch.tv/henrik_3)


If you have any questions write on Discord: Henrik3#1451. 
