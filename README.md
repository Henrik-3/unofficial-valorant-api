# unofficial-valorant-api (v.4.0.1)
Unofficial Valorant API by using the Ingame API
<br>

<a href="https://discord.gg/X3GaVkX2YN" target="_blank"><img src="https://discordapp.com/api/guilds/704231681309278228/widget.png?style=banner2"/></a>

# Before using this API
Please make sure that the user has given his consent to use his data. Analytic services where the user haven't giving his consent are not supported and will be banned if found out, same stuff for store checkers if they are public

# Authentication and Rate Limits
All rate limits are the same for every endpoint, so in general you have **90 requests every minute** if you use an "Advanced" API Key, if not it will be **30 requests every minute** with the "Basic" Key.
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
The API party uses a key based system.
You can get the "Basic" Key instantly without waiting time or apply for an "Advanced" key with the guarantee that you will receive an answer to your application within 24-48h. 

You can generate a key on the linked discord above. 

*You will also have to enter some details about your app, e.g., the use case. This is to ensure the API is not used in a harmful way and (hopefully) the user knows that his data is used.*

There are also some Rate Limit Adjustments:
- Basic Key: 
    - 30req/min
    - Suitable for: Twitch Bots | Educational purposes (How do i code etc) | Private Discord Bots
- Advanced Key:
    - 90req/min
    - Suitable for: Public Discord Bots (Servers) / Public Websites
- Production Key:
    - Rate Limit you requested
    - Suitable for: Large Discord Bots / Large Websites with a big amount of users
    - API not intended for production use, grant will only happen with valid reason
    
**IMPORTANT**

What is not allowed?
- Big analytic projects
    - Why? Because of data privacy. Rito set RSO as a requirement for their official API because the VAL Team said they want to protect the users data. Since I dont want to get into trouble with Riot and want to keep up the API as long as possible for normal developers out there, this is a requirement
- Public store checkers
    - As this feature requires the users credentials, the possibility of a credential leak is to high
 
## Custom Rate Limits & Project Support
As stated above, the API is developed with higher request counts in mind since version 4, but still not intended to be used within big projects.
Do compensate hosting costs, storage (and maybe one of the endless hours i already spend with this project) and further expansion/development, 
I'll require projects that need higher rate limits (individually decided based on project) OR have a PAID tier in their project,
to subscripe to patreon with level 4/5: https://www.patreon.com/henrikdev

For more questions feel free to open a ticket on the discord ^^

# Status
See the current status of the API here: https://status.henrikdev.xyz/

# Documentation
The documention for the API is available at: https://docs.henrikdev.xyz
If you need an OpenAPI Spec, check the link here: https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
  
# Projects using this API
- https://github.com/Henrik-3/valorant-labs
- [VALO DE Discord](https://discord.gg/valode) Rolesystem

# Wrapper
| Language | Repo | API Version | Up To Date? | Documentation (if available)
| :-: | :-: | :-: | :-: | :-: |
| JavaScript | This Repo | v2.3.0 | ❌ | - |
| Python | https://github.com/raimannma/ValorantAPI | v3.0.2 | ❌ | https://raimannma.github.io/ValorantAPI/ |
| Java | https://github.com/SocketC0nnection/JVA | v.2.6.2 | ❌ | - |
| C# | https://github.com/ValorantAppDevelopers/Valorant-NET/tree/master | v.1.6.2 | ❌ | - |
| Go | https://github.com/yldshv/go-valorant-api | v3.0.2 | ❌ | https://pkg.go.dev/github.com/yldshv/go-valorant-api#VAPI |

# Legal
This API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

# Riot Games
Hey Riot, first of all i hope u know that this project is a try to enhance the developer community of VALORANT and also recognize it as one. If u still have an issue with it, feel free to text me on Discord or something :D

# Contributors
Thanks to @liamcottle, @RumbleMike and @Hamper. Without them, parts of the API would be not available.
Consider checking out https://valorant-api.com if you need any images from the game.

# Other Stuff
Also would be happy if you give the project a star and give credit when you use it. If you wanna help me to pay the server instance or want to support my work, you can help me via patreon: [Link](https://www.patreon.com/henrikdev).

If you have any questions write on Discord: @henrik3 or on the support server or write me an email to contact@henrikdev.xyz. 
