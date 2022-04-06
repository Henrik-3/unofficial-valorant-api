# unofficial-valorant-api (v.2.0.1)
Unofficial Valorant API by using the Ingame API
<br>
**NPM Package: https://www.npmjs.com/package/unofficial-valorant-api** [v.1.7.8]

<a href="https://discord.gg/X3GaVkX2YN" target="_blank"><img src="https://discordapp.com/api/guilds/704231681309278228/widget.png?style=banner2"/></a>

# Before using this API
Please make sure that the User has giving his consent to using his data. Analytic services where the user haven't giving his consent are not supportet and will be banned if found out

# Authentication and Rate Limits
All rate limits are the same for every endpoint, so in general you have **250 Requests every 2.5 Minutes**. Your rate limit is based on your IP so you don't need an API Key for authentication.
If you exceed rate limit you will get following JSON with 429 Status Code:
```json
{
    "status": 429,
    "message": "You reached your Rate Limit, please try again later"
}
```
**Important:**
The API will move in the future to a key based system, no application and therefore no waittime is required. When this change will go live is unknown yet, it's expected to happen in summer 2022. This change will happen because of large botting attacks which impacts all other developers.

# Status 403 - Forbidden
If you receive this status code, please ping my on the support discord or contact me over my mail or discord that are linked on the bottom of this page.

# Status
See the current status of the API here: https://status.henrikdev.xyz/

# Documentation
The documention for the API is available under https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
  
# Projects using this API
- https://github.com/Henrik-3/valorant-labs
- https://github.com/OblivionGhoul/KannaKamuiBot
- [VALORANT DE Discord](https://discord.gg/invite/HCmvsEQ) Rolesystem
- https://github.com/skittles9823/ValorantRankedLeaderboard
- https://github.com/ValorantAppDevelopers/Valorant-NET/tree/master

# Usage (Outdated)
- ✅ Hit one million monthly requests (02.07.2021)
- ✅ Hit three million monthly requests (01.09.2021)
- ✅ Hit ten million monthly requests (15.11.2021)

![unknown (2)](https://user-images.githubusercontent.com/43936184/140612175-9d1762fb-468a-4627-9914-12e2226e3b52.png)

# Legal
This API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

# Riot Games
Hey Riot, first of all i hope u know that this project is a try to enhance the developer community of VALORANT and also recognize it as one. If u still has a issue with it, feel free to text me on Discord or something :D

# Contributors
Thanks to @liamcottle, @RumbleMike and @Hamper and, without them the API would be not available.
Consider to also check out https://valorant-api.com if you need any images from the game.

# Other Stuff
Also would be happy if you give the project a star and give credit when you use it. If you wanna help me to pay the server instance (16€ per month) to get data from the Ingame API or even the general server, you can help me via patreon: [Link](https://www.patreon.com/henrikdev).
Also if you are from Germany and want to support me on Twitch (Just for fun, no plan to get a real streamer any time soon), take a look at [here](https://www.twitch.tv/henrik_3)


If you have any questions write on Discord: Henrik3#1451 or write me an email to contact@henrikdev.xyz. 
