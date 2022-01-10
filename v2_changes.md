# API v2.0 changes
Here you will find all changes for version 2 of this API

## Test it
Use https://v2-api.henrikdev.xyz as your base URL to test the new version API already

## Release
Release will be the 1st or 2nd of January 2022

# Server Change
I switched my host server to a new server with a 5x better connection and a bit better hardware

## Fixes
- Fixed that the account endpoint `/valorant/v1/account/:name/:tag` allowed all version codes
- Fixed that you wont receive a 500 error code anymore when a user changed his riot tag recently
- Fixed that the `date_raw` element in the mmr-history dataset was sometimes missing
```diff
data: [
  {...},
  {
    "currenttier": 12,
    "currenttierpatched": "Gold 1",
    "ranking_in_tier": 47,
    "mmr_change_to_last_game": 19,
    "elo": 947,
    "date": "Friday, December 24, 2021 11:00 AM"
-    
+   "date_raw": 1640340004 
  },
  {...}
]
```

## Added
- Unofficial support for `latam` and `br` regions (get converted to `na` internally)
- Added new fields to the `/valorant/v2/match/:matchId` as follows

```player object (for players.all_players, players.red and players.blue)```
```diff
all_players: [
  {...},
  {
    "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
    "name": "Henrik3",
    "tag": "EUW3",
    "team": "Blue",
    "level": 98,
    "character": "KAY/O",
    "currenttier": 0,
    "currenttier_patched": "Unrated",
    "player_card": "c86953ca-4c94-c0f7-fd91-c19e03ff2b9f",
    "player_title": "e3ca05a4-4e44-9afe-3791-7d96ca8f71fa",
+   "party_id": "eee67493-8683-4af4-a5a9-4a397e9c749f",
+   "session_playtime": {
+     "minutes": 6,
+     "seconds": 360,
+     "milliseconds": 360000
+   },
+   "behavior": {
+     "afk_rounds": 0,
+     "friendly_fire": {
+         "incoming": 0,
+         "outgoing": 0
+      },
+     "rounds_in_spawn": 0
+   },
+   "platform": {
+     "type": "PC",
+     "os": {
+       "name": "Windows",
+       "version": "10.0.19043.1.768.64bit"
+     }
+   },
    "ability_casts": {
      "c_cast": 0,
      "q_cast": 3,
      "e_cast": 16,
      "x_cast": 2
    },
    "assets": {
      "card": {
        "small": "https://media.valorant-api.com/playercards/58314922-434e-6ed6-0625-cc9e137f7ea0/smallart.png",
        "large": "https://media.valorant-api.com/playercards/58314922-434e-6ed6-0625-cc9e137f7ea0/largeart.png",
        "wide": "https://media.valorant-api.com/playercards/58314922-434e-6ed6-0625-cc9e137f7ea0/wideart.png"
      },
      "agent": {
        "small": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
        "bust": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/bustportrait.png",
        "full": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
        "killfeed": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/killfeedportrait.png"
      }
    },
    "stats": {
      "score": 2297,
      "kills": 7,
      "deaths": 16,
      "assists": 4,
+     "bodyshots": 20,
+     "headshots": 7,
+     "legshots": 2
    },
+   "economy": {
+     "spent": {
+       "overall": 39000,
+       "average": 2438
+     },
+     "loadout_value": {
+       "overall": 45500,
+       "average": 2844
+     }
+   },
    "damage_made": 1628,
    "damage_received": 2673
  },
  {...}
]
```

```rounds object```
```diff
rounds: [
  {
    "winning_team": "Red",
    "end_type": "Eliminated",
    "bomb_planted": true,
    "bomb_defused": false,
    "plant_events": {
      "plant_location": {
        "x": -2142,
        "y": -6293
      },
      "planted_by": {
+       "puuid": "8d226c30-195c-5da9-8de9-d0f94c723089",
        "display_name": "Almeins#4399",
        "team": "Red"
      },
-     "plant_side": "B" 
+     "plant_site": "B"
      "plant_time_in_round": 26353,
      "player_locations_on_plant": [
        {...},
        {
          "player_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
          "player_display_name": "Henrik3#EUW3",
          "player_team": "Blue",
          "location": {
            "x": -842,
            "y": -6901
          },
+         "view_radians": 2.4077737
        },
        {...}
      ]
    },
    "defuse_events": {
      "defuse_location": null,
      "defuse_time_in_round": null,
-     "player_locations_on_defuse": []
+     "player_locations_on_defuse": null
    },
    "player_stats": [
      {...},
      {
        "ability_casts": {
          "c_casts": 1,
          "q_casts": null,
          "e_cast": null,
          "y_cast": null
        },
        "player_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
        "player_display_name": "Henrik3#EUW3",
        "player_team": "Blue",
        "damage_events": [
          {...},
          {
            "receiver_puuid": "00000000-0000-0000-0000-000000000000",
            "receiver_display_name": "NAME#TAG",
            "receiver_team": "Red",
            "bodyshots": 4,
            "damage": 104,
            "headshots": 0,
            "legshots": 0
          },
          {...}
        ],
        "damage": 104,
        "bodyshots": 4,
        "headshots": 0,
        "legshots": 0,
        "kill_events": [
          {...},
          {
            "kill_time_in_round": 32892,
            "kill_time_in_match": 87925,
            "killer_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
            "killer_display_name": "Henrik3#EUW3",
            "killer_team": "Blue",
            "victim_puuid": "00000000-0000-0000-0000-000000000000",
            "victim_display_name": "NAME#TAG",
            "victim_team": "Red",
            "victim_death_location": {
              "x": -631,
              "y": -5881
            },
            "damage_weapon_id": "29A0CFAB-485B-F5D5-779A-B59F85E204A8",
+           "damage_weapon_name": "Classic",
+           "damage_weapon_assets": {
+             "display_icon": "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png",
+             "killfeed_icon": "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/killstreamicon.png"
+           },
            "secondary_fire_mode": true,
            "player_locations_on_kill": [
              {...},
              {
                "player_puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                "player_display_name": "Henrik3#EUW3",
                "player_team": "Blue",
                "location": {
                  "x": -490,
                  "y": -5436
                },
+               "view_radians": 4.390636
              },
              {...}
            ],
            "assistants": [
              {...},
              {
                "assistant_puuid": "00000000-0000-0000-0000-000000000000",
                "assistant_display_name": "NAME#TAG",
                "assistant_team": "Blue"
              },
              {...}
            ]
          }
        ],
        "kills": 1,
+       "score": 238,
+       "economy": {
+         "loadout_value": 0,
+         "weapon": {
+           "id": "29A0CFAB-485B-F5D5-779A-B59F85E204A8",
+           "name": "Classic",
+           "assets": {
+             "display_icon": "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png",
+             "killfeed_icon": "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/killstreamicon.png"
+           }
+         },
+         "armor": {
+           "id": "4DEC83D5-4902-9AB3-BED6-A7A390761157",
+           "name": "Light Shields",
+           "assets": {
+             "display_icon": "https://media.valorant-api.com/gear/4dec83d5-4902-9ab3-bed6-a7a390761157/displayicon.png"
+           }
+         },
+         "remaining": 100,
+         "spent": 0
+       },
+       "was_afk": false,
+       "was_penalized": false,
+       "stayed_in_spawn": false
      },
      {...}
    ]
  }
]
```

- Added new endpoint: `/valorant/v1/version/:region`
```json
{
  "status": 200,
  "data": {
    "version": "03.12.00.649370",
    "clientVersion": "release-03.12-shipping-16-649370",
    "branch": "release-03.12",
    "region": "REGION"
  }
}
```

## Changes
- Internal changes for asset data and valorant update handling
- Internal changes for data fetching (now mostly async)
- Type of the `status` element is now an integer
```diff
{
- "status": "200",
+ "status": 200 
  "data": {...}
}
```
- When the API is unable to find the real name of the user on the server it now returns null instead of "N.A" (Example account endpoint)
```diff
{
  "status": 200,
  "data": {
    "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
    "region": "eu",
    "account_level": 103,
-   "name": "N.A",
+   "name": null,
-   "tag": "N.A",
+   "tag": null,
    "card": {
      "small": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/smallart.png",
      "large": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/largeart.png",
      "wide": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/wideart.png",
      "id": "8edf22c5-4489-ab41-769a-07adb4c454d6"
    },
    "last_update": "43 minutes ago"
  }
}
```
- When the API is unable get data for the v1 mmr endpoint `/valorant/v1/by-puuid/mmr or /valorant/v1/mmr`, you will now receive a nulled version of the normal response instead of an 204 code
```diff
- HTTP STATUS: 204
- BODY: ---
+ HTTP STATUS: 200
+ BODY:
{
  "status": 200,
  "data": {
    "currenttier": null,
    "currenttierpatched": null,
    "ranking_in_tier": null,
    "mmr_change_to_last_game": null,
    "elo": null,
    "name": null,
    "tag": null
  }
}
```
- When the API is unable get current mmr data in `/valorant/v2/by-puuid/mmr or /valorant/v2/mmr`, you will now receive a nulled version like in `/valorant/v1/mmr`
```diff
{
  "status": 200,
  "data": {
    "name": "Henrik3",
    "tag": "EUW3",
    "current_data": {
      "currenttier": null,
      "currenttierpatched": null,
      "ranking_in_tier": null,
      "mmr_change_to_last_game": null,
      "elo": null,
      "games_needed_for_rating": 0
    },
    "by_season": {...}
  }
}
```
- When the API is unable to find v1 mmr-history data in `/valorant/v1/by-puuid/mmr-history or valorant/v1/mmr-history`, you will now receive an empty array for the data and a nulled name and tag instead of an 204 code
```diff
- HTTP STATUS: 204
- BODY: ---
+ HTTP STATUS: 200
+ BODY:
{
  "status": 200,
  "name": null,
  "tag": null,
  "data": []
}
```
- When the API is unable to find v3 matches data in `/valorant/v3/by-puuid/matches or /valorant/v3/matches`, you will now receive an empty array for the data array instead of an 204 code
```diff
- HTTP STATUS: 204
- BODY: ---
+ HTTP STATUS: 200
+ BODY:
{
  "status": 200,
  "data": []
}
```
- When the API is unable to get an external link in the endpoint `/valorant/v1/website`, you will now receive null instead of "N.A"
```diff
{
  "status": 200,
  "data": [
    {...},
    {
      "banner_url": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41706b9e9fa842f0/61b3c8682d06ff39b6c63814/Val_Banner_State-of-the-Agents_1920x1080.jpg",
      "category": "dev",
      "date": "2021-12-23T16:00:00.000Z",
-     "external_link": "N.A",
+     "external_link": null,
      "title": "Stand der Agenten – Dezember 2021",
      "url": "https://playvalorant.com/de-de/news/dev/state-of-the-agents-december-2021/"
    },
    {...}
  ]
}
```
- Changed that when the ability cast was unable to get, the API now returns null instead of "N.A"
```diff
{
- "c_cast": "N.A"
+ "c_cast": null
}
```
- Changed that date_raw in the mmr-history endpoint and game_start in the matches endpoint are now unix time (in seconds)
```diff
{
  "status": 200,
  "data": {
    metadata: {
      "map": "Bind",
      "game_version": "release-03.12-shipping-16-649370",
      "game_length": 2153653,
-     "game_start": 1641794832000,
+     "game_start": 1641794832,
      "game_start_patched": "Monday, January 10, 2022 7:07 AM",
      "rounds_played": 22,
      "mode": "Unrated",
      "season_id": "a16955a5-4ad0-f761-5e9e-389df1c892fb",
      "platform": "PC",
      "matchid": "655f1049-47ec-4c4b-86eb-50679fc23aa4",
      "region": "ap",
      "cluster": "Singapore 1"
    }
  }
}
```



