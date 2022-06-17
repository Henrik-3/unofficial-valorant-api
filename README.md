# unofficial-valorant-api (v.2.0.1)
Unofficial Valorant API by using the Ingame API
<br>

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

*Edit: Some further information on this: You are now able to generate a key on the linked discord above, since it is easier for me to implement such a system over a discord bot instead of creating a website for it. It is also easier to contact the developers if something is wrong, since i will connect the API key to the Discord Account ID.*
*You will also have to enter some details about your app, for example the usecase. I will ask you for this so i can make sure the API is not used in a bad way and (hopefully) the user knows that his data is used. 

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


# Status 403 - Forbidden
If you receive this status code, please ping my on the support discord or contact me over my mail or discord that are linked on the bottom of this page.

# Status
See the current status of the API here: https://status.henrikdev.xyz/

# Documentation
The documention for the API is available under https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
  
# Projects using this API
- https://github.com/Henrik-3/valorant-labs
- [VALO DE Discord](https://discord.gg/valode) Rolesystem
- https://github.com/skittles9823/ValorantRankedLeaderboard
- https://github.com/ValorantAppDevelopers/Valorant-NET/tree/master

# Wrapper
- [x] JS - **https://www.npmjs.com/package/unofficial-valorant-api** [API v.1.7.8] [v2.1 support is a work in Progress]
- [x] Python - **https://github.com/raimannma/ValorantAPI** [API v.2.0.1 / current]
- [x] C# - **https://github.com/ValorantAppDevelopers/Valorant-NET/tree/master** [API v.1.6.2]

# Legal
This API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

# Riot Games
Hey Riot, first of all i hope u know that this project is a try to enhance the developer community of VALORANT and also recognize it as one. If u still have an issue with it, feel free to text me on Discord or something :D

# Contributors
Thanks to @liamcottle, @RumbleMike and @Hamper and, without them the API would be not available.
Consider to also check out https://valorant-api.com if you need any images from the game.

# Other Stuff
Also would be happy if you give the project a star and give credit when you use it. If you wanna help me to pay the server instance (16€ per month) to get data from the Ingame API or even the general server, you can help me via patreon: [Link](https://www.patreon.com/henrikdev).
Also if you are from Germany and want to support me on Twitch (Just for fun, no plan to get a real streamer any time soon), take a look at [here](https://www.twitch.tv/henrik_3)


If you have any questions write on Discord: Henrik3#1451 or write me an email to contact@henrikdev.xyz. 
