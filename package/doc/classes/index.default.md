# Welcome to the VAPI docs

Below is a list of all the properties of the API including all properties and methods. If you need any help, join the [Discord server](https://discord.gg/wXNMnqzvAD)

## Table of contents

### Constructors

- [constructor](index.default.md#constructor)

### Properties

- [mapImages](index.default.md#mapimages)
- [rankImages](index.default.md#rankimages)

### Methods

- [getAnnouncements](index.default.md#getannouncements)
- [getCrosshair](index.default.md#getcrosshair)
- [getFeaturedItems](index.default.md#getfeatureditems)
- [getIAPs](index.default.md#getiaps)
- [getLeaderboard](index.default.md#getleaderboard)
- [getMMR](index.default.md#getmmr)
- [getMMRByPUUID](index.default.md#getmmrbypuuid)
- [getMMRHistory](index.default.md#getmmrhistory)
- [getMMRHistoryByPUUID](index.default.md#getmmrhistorybypuuid)
- [getMatch](index.default.md#getmatch)
- [getMatches](index.default.md#getmatches)
- [getMatchesByPUUID](index.default.md#getmatchesbypuuid)
- [getProfile](index.default.md#getprofile)
- [getProfileByPUUID](index.default.md#getprofilebypuuid)
- [getRawCompetitiveUpdates](index.default.md#getrawcompetitiveupdates)
- [getRawMMR](index.default.md#getrawmmr)
- [getRawMatchDetails](index.default.md#getrawmatchdetails)
- [getRawMatchHistory](index.default.md#getrawmatchhistory)
- [getStatus](index.default.md#getstatus)
- [getTranslations](index.default.md#gettranslations)
- [getVersion](index.default.md#getversion)
- [initUtils](index.default.md#initutils)

## Constructors

### constructor

• **new default**(`token?`)

Create a new instance of the main API. All API calls are in this class

**`Example`**

Create a new instance
```
import _VAPI from "unofficial-valorant-api"
const VAPI = new _VAPI("my super secret token")
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` | (optional) The token, if you have one. Get one from the Discord server ([https://discord.gg/wXNMnqzvAD](https://discord.gg/wXNMnqzvAD)) |

#### Defined in

[index.ts:132](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L132)

## Properties

### mapImages

• `Optional` **mapImages**: `Object`

Images for every ValorantMap

**`Remarks`**

You must call [initUtils](index.default.md#initutils) before using this!

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Ascent` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Bind` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Breeze` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Fracture` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Haven` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Icebox` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Pearl` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Split` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `The Range` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |

#### Defined in

[index.ts:120](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L120)

___

### rankImages

• `Optional` **rankImages**: `Object`

Images for every Rank

**`Remarks`**

You must call [initUtils](index.default.md#initutils) before using this!

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Ascendant 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Ascendant 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Ascendant 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Bronze 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Bronze 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Bronze 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Diamond 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Diamond 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Diamond 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Gold 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Gold 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Gold 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Immortal 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Immortal 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Immortal 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Iron 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Iron 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Iron 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Platinum 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Platinum 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Platinum 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Radiant` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Silver 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Silver 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Silver 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Unrated` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |

#### Defined in

[index.ts:114](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L114)

## Methods

### getAnnouncements

▸ **getAnnouncements**(`countryCode`): `Promise`<`APIResponse`<[`WebsiteResponse`](../interfaces/types_v1_website.WebsiteResponse.md)\>\>

Get all announcements from the valorant website of a country

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `countryCode` | ``"en-us"`` \| ``"en-gb"`` \| ``"de-de"`` \| ``"es-es"`` \| ``"es-mx"`` \| ``"fr-fr"`` \| ``"it-it"`` \| ``"ja-jp"`` \| ``"ko-kr"`` \| ``"pt-br"`` \| ``"ru-ru"`` \| ``"tr-tr"`` \| ``"vi-vn"`` | Country code of website |

#### Returns

`Promise`<`APIResponse`<[`WebsiteResponse`](../interfaces/types_v1_website.WebsiteResponse.md)\>\>

List of announcements from the valorant website

#### Defined in

[index.ts:253](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L253)

___

### getCrosshair

▸ **getCrosshair**(`code`, `size?`): `Promise`<`APIResponse`<`Buffer`\>\>

Get an image of a valorant crosshair by its code

**`Example`**

Load and write a crosshair to crosshair.png
```
import { writeFileSync } from "fs"

const crosshair = await default.getCrosshair("0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0;S;c;4;o;1")
writeFileSync("crosshair.png", crosshair.data)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Valorant crosshair code |
| `size?` | `number` | (optional) Image size (default: `1024`) |

#### Returns

`Promise`<`APIResponse`<`Buffer`\>\>

The image of the crosshair as a Buffer

#### Defined in

[index.ts:241](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L241)

___

### getFeaturedItems

▸ **getFeaturedItems**(): `Promise`<`APIResponse`<[`FeaturedItemsResponse`](../interfaces/types_v1_featured_items.FeaturedItemsResponse.md)\>\>

Get all of the featured items in the current valorant store

#### Returns

`Promise`<`APIResponse`<[`FeaturedItemsResponse`](../interfaces/types_v1_featured_items.FeaturedItemsResponse.md)\>\>

Featured items in the current valorant store

#### Defined in

[index.ts:272](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L272)

___

### getIAPs

▸ **getIAPs**(): `Promise`<`APIResponse`<[`StoreOffersResponse`](../interfaces/types_v1_store_offers.StoreOffersResponse.md)\>\>

Get a list of all in-app-purchases for valorant, such as Radianite and VP

#### Returns

`Promise`<`APIResponse`<[`StoreOffersResponse`](../interfaces/types_v1_store_offers.StoreOffersResponse.md)\>\>

List of IAPs in valorant

#### Defined in

[index.ts:281](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L281)

___

### getLeaderboard

▸ **getLeaderboard**(`region`, `start?`, `end?`, `riotID?`, `puuid?`, `season?`): `Promise`<`APIResponse`<[`LeaderboardResponse`](../interfaces/types_v2_leaderboard.LeaderboardResponse.md)\>\>

Get the leaderboard of a region

**`Remarks`**

In order for player filtering to work, they must be Immortal or higher

**`Throws`**

TypeError - If both a riotID and puuid are supplied

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `region` | [`Region`](../modules/types_general.md#region) | Region to get leaderboard from |
| `start?` | `number` | (optional) Get 1000 leaderboard players starting from the given start value |
| `end?` | `number` | (optional) Limit the amount of leaderboard players returned |
| `riotID?` | `Object` | (optional) Search for a specific player by their Riot ID |
| `riotID.name` | `string` | The Riot IDs username |
| `riotID.tag` | `string` | The Riot IDs tag |
| `puuid?` | `string` | (optional) Search for a specific player by their PUUID |
| `season?` | ``"e1a1"`` \| ``"e1a2"`` \| ``"e1a3"`` \| ``"e2a1"`` \| ``"e2a2"`` \| ``"e2a3"`` \| ``"e3a1"`` \| ``"e3a2"`` \| ``"e3a3"`` \| ``"e4a1"`` \| ``"e4a2"`` \| ``"e4a3"`` \| ``"e5a1"`` \| ``"e5a2"`` \| ``"e5a3"`` \| ``"e6a1"`` \| ``"e6a2"`` \| ``"e6a3"`` \| ``"e7a1"`` \| ``"e7a2"`` \| ``"e7a3"`` \| ``"e8a1"`` \| ``"e8a2"`` \| ``"e8a3"`` \| ``"e9a1"`` \| ``"e9a2"`` \| ``"e9a3"`` \| ``"e10a1"`` \| ``"e10a2"`` \| ``"e10a3"`` | (optional) Get leaderboard from a specific season |

#### Returns

`Promise`<`APIResponse`<[`LeaderboardResponse`](../interfaces/types_v2_leaderboard.LeaderboardResponse.md)\>\>

Descending order of the highest ranked players. (Immortal and up)

#### Defined in

[index.ts:408](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L408)

___

### getMMR

▸ **getMMR**(`name`, `tag`, `region`, `seasonFilter?`): `Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Gets general info about a players rank by their Riot ID

**`Remarks`**

**Returns:**
- Current rank and info about their rank
- RR change on their last game
- Their PUUID
- Their peak rank from every season

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Riot ID username of the player |
| `tag` | `string` | The Riot ID tag of the player |
| `region` | [`Region`](../modules/types_general.md#region) | The region of the player |
| `seasonFilter?` | ``"e1a1"`` \| ``"e1a2"`` \| ``"e1a3"`` \| ``"e2a1"`` \| ``"e2a2"`` \| ``"e2a3"`` \| ``"e3a1"`` \| ``"e3a2"`` \| ``"e3a3"`` \| ``"e4a1"`` \| ``"e4a2"`` \| ``"e4a3"`` \| ``"e5a1"`` \| ``"e5a2"`` \| ``"e5a3"`` \| ``"e6a1"`` \| ``"e6a2"`` \| ``"e6a3"`` \| ``"e7a1"`` \| ``"e7a2"`` \| ``"e7a3"`` \| ``"e8a1"`` \| ``"e8a2"`` \| ``"e8a3"`` \| ``"e9a1"`` \| ``"e9a2"`` \| ``"e9a3"`` \| ``"e10a1"`` \| ``"e10a2"`` \| ``"e10a3"`` | Filter results based on episode and act |

#### Returns

`Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Information about a players mmr/rank

#### Defined in

[index.ts:437](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L437)

___

### getMMRByPUUID

▸ **getMMRByPUUID**(`puuid`, `region`, `seasonFilter?`): `Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Gets general info about a players rank by their PUUID

**`Remarks`**

**Returns:**
- Current rank and info about their rank
- RR change on their last game
- Their PUUID
- Their peak rank from every season

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The PUUID of the player |
| `region` | [`Region`](../modules/types_general.md#region) | The region of the player |
| `seasonFilter?` | ``"e1a1"`` \| ``"e1a2"`` \| ``"e1a3"`` \| ``"e2a1"`` \| ``"e2a2"`` \| ``"e2a3"`` \| ``"e3a1"`` \| ``"e3a2"`` \| ``"e3a3"`` \| ``"e4a1"`` \| ``"e4a2"`` \| ``"e4a3"`` \| ``"e5a1"`` \| ``"e5a2"`` \| ``"e5a3"`` \| ``"e6a1"`` \| ``"e6a2"`` \| ``"e6a3"`` \| ``"e7a1"`` \| ``"e7a2"`` \| ``"e7a3"`` \| ``"e8a1"`` \| ``"e8a2"`` \| ``"e8a3"`` \| ``"e9a1"`` \| ``"e9a2"`` \| ``"e9a3"`` \| ``"e10a1"`` \| ``"e10a2"`` \| ``"e10a3"`` | Filter results based on episode and act |

#### Returns

`Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Information about a players mmr/rank

#### Defined in

[index.ts:455](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L455)

___

### getMMRHistory

▸ **getMMRHistory**(`name`, `tag`, `region`): `Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

Get a list of rr changes of a player by their Riot ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Riot ID username of the player |
| `tag` | `string` | The Riot tag username of the player |
| `region` | [`Region`](../modules/types_general.md#region) | The players region |

#### Returns

`Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

List of rr changes (recent competitive games)

#### Defined in

[index.ts:367](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L367)

___

### getMMRHistoryByPUUID

▸ **getMMRHistoryByPUUID**(`puuid`, `region`): `Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

Get a list of rr changes of a player by their PUUID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The PUUID of the player |
| `region` | [`Region`](../modules/types_general.md#region) | The players region |

#### Returns

`Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

List of rr changes (recent competitive games)

#### Defined in

[index.ts:378](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L378)

___

### getMatch

▸ **getMatch**(`matchID`): `Promise`<`APIResponse`<[`Match`](../interfaces/types_v3_matches.Match.md)\>\>

Get information about a match

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchID` | `string` | The matchs ID |

#### Returns

`Promise`<`APIResponse`<[`Match`](../interfaces/types_v3_matches.Match.md)\>\>

Information about the match

#### Defined in

[index.ts:388](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L388)

___

### getMatches

▸ **getMatches**(`name`, `tag`, `region`, `gamemodeFilter?`, `mapFilter?`, `size?`): `Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Gets the most recent 5 matches by a players Riot ID

**`Remarks`**

**Returns:**
- Info about most recent 5 matches including:
	- Metadata info about the match such as length, time, map, score, etc
	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	- Information about every round in the match such as plant/defuse info, etc
	- Information about every kill in the game including killer, victim, assist, etc

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Riot ID username of the player |
| `tag` | `string` | The Riot ID tag of the player |
| `region` | [`Region`](../modules/types_general.md#region) | The region of the player |
| `gamemodeFilter?` | [`Mode`](../modules/types_general.md#mode) | Filter results based on gamemode |
| `mapFilter?` | [`ValorantMap`](../modules/types_general.md#valorantmap) | Filter results based on map |
| `size?` | `any` | Filter results based on ?? **{needs testing)** |

#### Returns

`Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Info about a players last 5 matches

#### Defined in

[index.ts:477](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L477)

___

### getMatchesByPUUID

▸ **getMatchesByPUUID**(`puuid`, `region`, `gamemodeFilter?`, `mapFilter?`, `size?`): `Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Gets the most recent 5 matches by a players PUUID

**`Remarks`**

**Returns:**
- Info about most recent 5 matches including:
	- Metadata info about the match such as length, time, map, score, etc
	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	- Information about every round in the match such as plant/defuse info, etc
	- Information about every kill in the game including killer, victim, assist, etc

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The PUUID username of the player |
| `region` | [`Region`](../modules/types_general.md#region) | The region of the player |
| `gamemodeFilter?` | [`Mode`](../modules/types_general.md#mode) | Filter results based on gamemode |
| `mapFilter?` | [`ValorantMap`](../modules/types_general.md#valorantmap) | Filter results based on map |
| `size?` | `any` | Filter results based on ?? **{needs testing)** |

#### Returns

`Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Info about a players last 5 matches

#### Defined in

[index.ts:498](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L498)

___

### getProfile

▸ **getProfile**(`name`, `tag`, `force?`): `Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

Get general information about a player from their Riot ID

**`Remarks`**

**Returns:**
- Their PUUID
- Their region
- Their account level
- Their current card

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The Riot ID username of the player |
| `tag` | `string` | The Riot ID tag of the player |
| `force?` | `boolean` | Force data update? |

#### Returns

`Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

General information on a players profile

#### Defined in

[index.ts:516](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L516)

___

### getProfileByPUUID

▸ **getProfileByPUUID**(`puuid`, `force?`): `Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

Get general information about a player from their PUUID

**`Remarks`**

**Returns:**
- Their PUUID
- Their region
- Their account level
- Their current card

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The PUUID of the player |
| `force?` | `boolean` | Force data update? |

#### Returns

`Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

General information on a players profile

#### Defined in

[index.ts:533](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L533)

___

### getRawCompetitiveUpdates

▸ **getRawCompetitiveUpdates**(`puuid`, `region`, `queries?`): `Promise`<`APIResponse`<[`RawCompetitiveUpdatesResponse`](../interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md)\>\>

Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`See`**

[getMMRHistory](index.default.md#getmmrhistory) for an easier response to use

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The match ID to get details about |
| `region` | [`Region`](../modules/types_general.md#region) | Region of the player |
| `queries?` | `any` | Extra queries |

#### Returns

`Promise`<`APIResponse`<[`RawCompetitiveUpdatesResponse`](../interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md)\>\>

Information about the players rr history

#### Defined in

[index.ts:336](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L336)

___

### getRawMMR

▸ **getRawMMR**(`puuid`, `region`, `queries?`): `Promise`<`APIResponse`<[`RawMMRResponse`](../interfaces/types_raw_mmr.RawMMRResponse.md)\>\>

Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`See`**

[getMMR](index.default.md#getmmr) for an easier response to use

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The match ID to get details about |
| `region` | [`Region`](../modules/types_general.md#region) | Region of the player |
| `queries?` | `any` | Extra queries |

#### Returns

`Promise`<`APIResponse`<[`RawMMRResponse`](../interfaces/types_raw_mmr.RawMMRResponse.md)\>\>

Information about the players mmr

#### Defined in

[index.ts:352](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L352)

___

### getRawMatchDetails

▸ **getRawMatchDetails**(`matchID`, `region`, `queries?`): `Promise`<`APIResponse`<[`RawMatchDetailsResponse`](../interfaces/types_raw_match_details.RawMatchDetailsResponse.md)\>\>

Gets raw data for a match from the valorant API. (Not formatted, use only if you know what you are doing)

**`See`**

[getMatch](index.default.md#getmatch) for an easier response to use

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchID` | `string` | The match ID to get details about |
| `region` | [`Region`](../modules/types_general.md#region) | Region of the match |
| `queries?` | `any` | Extra queries |

#### Returns

`Promise`<`APIResponse`<[`RawMatchDetailsResponse`](../interfaces/types_raw_match_details.RawMatchDetailsResponse.md)\>\>

Information about the match

#### Defined in

[index.ts:304](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L304)

___

### getRawMatchHistory

▸ **getRawMatchHistory**(`puuid`, `region`, `queries?`): `Promise`<`APIResponse`<[`RawMatchHistoryResponse`](../interfaces/types_raw_match_history.RawMatchHistoryResponse.md)\>\>

Gets raw data for a players match history from the valorant API. (Not formatted, use only if you know what you are doing)

**`See`**

[getMatches](index.default.md#getmatches) for an easier response to use

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `puuid` | `string` | The match ID to get details about |
| `region` | [`Region`](../modules/types_general.md#region) | Region of the player |
| `queries?` | `any` | Extra queries |

#### Returns

`Promise`<`APIResponse`<[`RawMatchHistoryResponse`](../interfaces/types_raw_match_history.RawMatchHistoryResponse.md)\>\>

Information about the players match history

#### Defined in

[index.ts:320](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L320)

___

### getStatus

▸ **getStatus**(`region`): `Promise`<`APIResponse`<[`StatusResponse`](../interfaces/types_v1_status.StatusResponse.md)\>\>

Will get information about the current maintenances and incidents about a region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `region` | [`Region`](../modules/types_general.md#region) | Region to get info about |

#### Returns

`Promise`<`APIResponse`<[`StatusResponse`](../interfaces/types_v1_status.StatusResponse.md)\>\>

Info about undergoing maintenances and incidents in a region of valorant

#### Defined in

[index.ts:291](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L291)

___

### getTranslations

▸ **getTranslations**(`locale?`): `Promise`<`APIResponse`<[`ContentResponse`](../interfaces/types_v1_content.ContentResponse.md)\>\>

Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale?` | [`Locale`](../modules/types_general.md#locale) | If this is set, instead of all translations, it will return just translations for this language |

#### Returns

`Promise`<`APIResponse`<[`ContentResponse`](../interfaces/types_v1_content.ContentResponse.md)\>\>

#### Defined in

[index.ts:419](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L419)

___

### getVersion

▸ **getVersion**(`region`): `Promise`<`APIResponse`<[`VersionResponse`](../interfaces/types_v1_version.VersionResponse.md)\>\>

Get information about valorant in a region, such as the client version, branch, and server version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `region` | [`Region`](../modules/types_general.md#region) | Region of valorant to get info about |

#### Returns

`Promise`<`APIResponse`<[`VersionResponse`](../interfaces/types_v1_version.VersionResponse.md)\>\>

Information about a regions valorant

#### Defined in

[index.ts:263](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L263)

___

### initUtils

▸ **initUtils**(): `Promise`<`void`\>

Creates [rankImages](index.default.md#rankimages) and [mapImages](index.default.md#mapimages) by pulling the images from [https://valorant-api.com](https://valorant-api.com)

**`Remarks`**

Must be called before using [rankImages](index.default.md#rankimages) and [mapImages](index.default.md#mapimages)

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:139](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/index.ts#L139)
