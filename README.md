# unofficial-valorant-api (v.2.6.0)
Unofficial Valorant API by using the Ingame API
<br>

<a href="https://discord.gg/X3GaVkX2YN" target="_blank"><img src="https://discordapp.com/api/guilds/704231681309278228/widget.png?style=banner2"/></a>

# Before using this API
Please make sure that the user has given his consent to use his data. Analytic services where the user haven't giving his consent are not supported and will be banned if found out, same goes with store checkers if they are public

# Authentication and Rate Limits
All rate limits are the same for every endpoint, so in general you have **90 requests every minute** if you use an API Key, if not it will be **30 requests every minute** based on the IP.
If you exceed rate limit you will get following JSON with 429 Status Code:
```json
{
  "status": 429,
  "errors": [
    {
      "message": "Rate Limited",
      "code": 0,
      "global": false
    }
  ]
}
```
The API party uses a key based system, with the guarantee that you will receive an answer to your application within 24-48h. This change happened because of large botting attacks and data privacy reasons which could impact all other developers.

You are can generate a key on the linked discord above. 

*You will also have to enter some details about your app, e.g., the use case. This is to ensure the API is not used in a harmful way and (hopefully) the user knows that his data is used.*

There are also some Rate Limit Adjustments:
- No Key: 
   - 30req/min (2 uncached accounts/hour)
   - Suitable for: Twitch Bots | Educational purposes (How do i code etc)
- Basic Key:
    - 90req/min (unlimited uncached accounts/hour if available)
    - Suitable for: Private Discord Bots (Servers) | Websites
- Production Key:
    - Rate Limit you requested
    - Suitable for: Production Discord Bots | Websites
    - PLEASE MAKE SURE THAT YOU ALSO REQUEST AN OFFICIAL VALORANT API KEY AT RIOT TO GET RSO IF YOU HAVE A STATS FEATURE FOR EXAMPLE
    
**IMPORTANT**

What is not allowed?
- Big analytic projects
    - Why? Because of data privacy. Rito set RSO as a requirement for their official API because the VAL Team said they want to protect the users data. Since I dont want to get into trouble with Riot and want to keep up the API as long as possible for normal developers out there this is a requirement
- Public store trackers / websites / bots
    - Why? Because it's simply not allowed and the risk of scamming accounts is also way to high. If it's a private project for a couple of friends you will receive a key, but as soon as I find out that the project is used in the public the key will get revoked.

# Error codes
Here are the error codes for the VALORANT API that could come up. There will always be a more detailed explanation in the `details` field.
| Code | Description |
| ------------- | ------------- |
| 1 | Invalid API Key |
| 2 | Forbidden endpoint |
| 3 | Restricted endpoint |
| 101 | No region found for this Player  |
| 102  | No matches found, can't get puuid  |
| 103 | Possible name change detected, can't get puuid. Please play one match, wait 1-2 minutes and try it again  |
| 104 | Invalid region |
| 105 | Invalid filter |
| 106 | Invalid gamemode |
| 107 | Invalid map |
| 108 | Invalid locale |
| 109 | Missing name |
| 110 | Missing tag |
| 111 | Player not found in leaderboard |
| 112 | Invalid raw type |
| 113 | Invalid match or player id |
| 114 | Invalid country code |
| 115 | Invalid season |

# Status 403 - Forbidden
If you receive this status code, please ping me on the support discord or contact me over my mail or discord that are linked on the bottom of this page.

# Status
See the current status of the API here: https://status.henrikdev.xyz/

# Documentation
The documention for the API is available under https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
  
# Projects using this API
- https://github.com/Henrik-3/valorant-labs
- [VALO DE Discord](https://discord.gg/valode) Rolesystem

# Wrapper
- [x] JS - **https://www.npmjs.com/package/unofficial-valorant-api** [API v.2.3.0]
- [x] Python - **https://github.com/raimannma/ValorantAPI** [API v.2.5.2]
- [x] C# - **https://github.com/ValorantAppDevelopers/Valorant-NET/tree/master** [API v.1.6.2] [Outdated]

# Legal
This API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

# Riot Games
Hey Riot, first of all i hope u know that this project is a try to enhance the developer community of VALORANT and also recognize it as one. If u still have an issue with it, feel free to text me on Discord or something :D

# Contributors
Thanks to @liamcottle, @RumbleMike and @Hamper. Without them, parts of the API would be not available.
Consider checking out https://valorant-api.com if you need any images from the game.

# Year 2022 in Numbers
![Annual Report 2022 API](https://user-images.githubusercontent.com/43936184/210059618-29665ffd-2070-48b9-87ae-293b55023941.png)

# Other Stuff
Also would be happy if you give the project a star and give credit when you use it. If you wanna help me to pay the server instance (16€ per month) or want to support my work, you can help me via patreon: [Link](https://www.patreon.com/henrikdev).

If you have any questions write on Discord: Henrik3#1451 or on the support server or write me an email to contact@henrikdev.xyz. 
