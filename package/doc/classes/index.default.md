# Welcome to the VAPI docs

Below is a list of all the properties of the API including all properties and methods. If you need any help, join the [Discord server](https://discord.gg/wXNMnqzvAD)

## Table of contents

### Constructors

- [constructor](index.default.md#constructor)

### Properties

- [mapImages](index.default.md#mapimages)
- [rankImages](index.default.md#rankimages)

### Methods

- [getAccount](index.default.md#getaccount)
- [getAccountByPUUID](index.default.md#getaccountbypuuid)
- [getCrosshair](index.default.md#getcrosshair)
- [getFeaturedItems](index.default.md#getfeatureditems)
- [getLeaderboard](index.default.md#getleaderboard)
- [getMMR](index.default.md#getmmr)
- [getMMRByPUUID](index.default.md#getmmrbypuuid)
- [getMMRHistory](index.default.md#getmmrhistory)
- [getMMRHistoryByPUUID](index.default.md#getmmrhistorybypuuid)
- [getMatch](index.default.md#getmatch)
- [getMatches](index.default.md#getmatches)
- [getMatchesByPUUID](index.default.md#getmatchesbypuuid)
- [getOffers](index.default.md#getoffers)
- [getRawCompetitiveUpdates](index.default.md#getrawcompetitiveupdates)
- [getRawMMR](index.default.md#getrawmmr)
- [getRawMatchDetails](index.default.md#getrawmatchdetails)
- [getRawMatchHistory](index.default.md#getrawmatchhistory)
- [getStatus](index.default.md#getstatus)
- [getTranslations](index.default.md#gettranslations)
- [getVersion](index.default.md#getversion)
- [getWebsite](index.default.md#getwebsite)
- [initUtils](index.default.md#initutils)

## Constructors

### constructor

• **new default**(`token?`)

Create a new instance of the main API. All API calls are in this class

**`Example`**

Create a new instance
```js
import _VAPI from "unofficial-valorant-api"
const VAPI = new _VAPI("my super secret token")
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Defined in

[index.ts:133](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L133)

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

[index.ts:121](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L121)

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

[index.ts:115](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L115)

## Methods

### getAccount

▸ **getAccount**(`__namedParameters`): `Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

Get general information about a player from their Riot ID

**`Remarks`**

**Returns:**
- Their PUUID
- Their region
- Their account level
- Their current card

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.force?` | `boolean` |
| `__namedParameters.name` | `string` |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

General information on a players profile

#### Defined in

[index.ts:522](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L522)

___

### getAccountByPUUID

▸ **getAccountByPUUID**(`__namedParameters`): `Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

Get general information about a player from their PUUID

**`Remarks`**

**Returns:**
- Their PUUID
- Their region
- Their account level
- Their current card

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.force?` | `boolean` |
| `__namedParameters.puuid` | `string` |

#### Returns

`Promise`<`APIResponse`<[`ProfileResponse`](../interfaces/types_v1_profile.ProfileResponse.md)\>\>

General information on a players profile

#### Defined in

[index.ts:539](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L539)

___

### getCrosshair

▸ **getCrosshair**(`__namedParameters`): `Promise`<`APIResponse`<`Buffer`\>\>

Get an image of a valorant crosshair by its code

**`Example`**

Load and write a crosshair to crosshair.png
```js
import { writeFileSync } from "fs"

const crosshair = await default.getCrosshair("0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0;S;c;4;o;1")
writeFileSync("crosshair.png", crosshair.data)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.code` | `string` |
| `__namedParameters.size?` | `number` |

#### Returns

`Promise`<`APIResponse`<`Buffer`\>\>

The image of the crosshair as a Buffer

#### Defined in

[index.ts:242](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L242)

___

### getFeaturedItems

▸ **getFeaturedItems**(): `Promise`<`APIResponse`<[`FeaturedItemsResponse`](../modules/types_v1_featured_items.md#featureditemsresponse)\>\>

Get all of the featured items in the current valorant store

#### Returns

`Promise`<`APIResponse`<[`FeaturedItemsResponse`](../modules/types_v1_featured_items.md#featureditemsresponse)\>\>

Featured items in the current valorant store

#### Defined in

[index.ts:273](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L273)

___

### getLeaderboard

▸ **getLeaderboard**(`__namedParameters`): `Promise`<`APIResponse`<[`LeaderboardResponse`](../interfaces/types_v2_leaderboard.LeaderboardResponse.md)\>\>

Get the leaderboard of a region

**`Remarks`**

In order for player filtering to work, they must be Immortal or higher

**`Throws`**

TypeError - If both a riotID and puuid are supplied

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.end?` | `number` |
| `__namedParameters.puuid?` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |
| `__namedParameters.riotID?` | `Object` |
| `__namedParameters.riotID.name` | `string` |
| `__namedParameters.riotID.tag` | `string` |
| `__namedParameters.season?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.start?` | `number` |
| `__namedParameters.version?` | ``"v1"`` \| ``"v2"`` |

#### Returns

`Promise`<`APIResponse`<[`LeaderboardResponse`](../interfaces/types_v2_leaderboard.LeaderboardResponse.md)\>\>

Descending order of the highest ranked players. (Immortal and up)

#### Defined in

[index.ts:409](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L409)

___

### getMMR

▸ **getMMR**(`__namedParameters`): `Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Gets general info about a players rank by their Riot ID

**`Remarks`**

**Returns:**
- Current rank and info about their rank
- RR change on their last game
- Their PUUID
- Their peak rank from every season

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |
| `__namedParameters.seasonFilter?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Information about a players mmr/rank

#### Defined in

[index.ts:439](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L439)

___

### getMMRByPUUID

▸ **getMMRByPUUID**(`__namedParameters`): `Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Gets general info about a players rank by their PUUID

**`Remarks`**

**Returns:**
- Current rank and info about their rank
- RR change on their last game
- Their PUUID
- Their peak rank from every season

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |
| `__namedParameters.seasonFilter?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |

#### Returns

`Promise`<`APIResponse`<[`MMRResponse`](../interfaces/types_v2_mmr.MMRResponse.md)\>\>

Information about a players mmr/rank

#### Defined in

[index.ts:457](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L457)

___

### getMMRHistory

▸ **getMMRHistory**(`__namedParameters`): `Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

Get a list of rr changes of a player by their Riot ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

List of rr changes (recent competitive games)

#### Defined in

[index.ts:368](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L368)

___

### getMMRHistoryByPUUID

▸ **getMMRHistoryByPUUID**(`__namedParameters`): `Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

Get a list of rr changes of a player by their PUUID

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`MMRHistoryResponse`](../modules/types_v2_mmr_history.md#mmrhistoryresponse)\>\>

List of rr changes (recent competitive games)

#### Defined in

[index.ts:379](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L379)

___

### getMatch

▸ **getMatch**(`__namedParameters`): `Promise`<`APIResponse`<[`Match`](../interfaces/types_v3_matches.Match.md)\>\>

Get information about a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.matchID` | `string` |

#### Returns

`Promise`<`APIResponse`<[`Match`](../interfaces/types_v3_matches.Match.md)\>\>

Information about the match

#### Defined in

[index.ts:389](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L389)

___

### getMatches

▸ **getMatches**(`__namedParameters`): `Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Gets the most recent 5 matches by a players Riot ID

**`Remarks`**

**Returns:**
- Info about most recent 5 matches including:
	- Metadata info about the match such as length, time, map, score, etc
	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	- Information about every round in the match such as plant/defuse info, etc
	- Information about every kill in the game including killer, victim, assist, etc

**`Throws`**

TypeError - Only if the size parameter is set and not between 1-10

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.gamemodeFilter?` | [`Mode`](../modules/types_general.md#mode) |
| `__namedParameters.mapFilter?` | [`ValorantMap`](../modules/types_general.md#valorantmap) |
| `__namedParameters.name` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |
| `__namedParameters.size?` | `number` |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Info about a players last 5 matches

#### Defined in

[index.ts:480](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L480)

___

### getMatchesByPUUID

▸ **getMatchesByPUUID**(`__namedParameters`): `Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Gets the most recent 5 matches by a players PUUID

**`Remarks`**

**Returns:**
- Info about most recent 5 matches including:
	- Metadata info about the match such as length, time, map, score, etc
	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	- Information about every round in the match such as plant/defuse info, etc
	- Information about every kill in the game including killer, victim, assist, etc

**`Throws`**

TypeError - Only if the size parameter is set and not between 1-10

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.gamemodeFilter?` | [`Mode`](../modules/types_general.md#mode) |
| `__namedParameters.mapFilter?` | [`ValorantMap`](../modules/types_general.md#valorantmap) |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |
| `__namedParameters.size?` | `number` |

#### Returns

`Promise`<`APIResponse`<[`MatchesResponse`](../modules/types_v3_matches.md#matchesresponse)\>\>

Info about a players last 5 matches

#### Defined in

[index.ts:503](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L503)

___

### getOffers

▸ **getOffers**(): `Promise`<`APIResponse`<[`StoreOffersResponse`](../interfaces/types_v1_store_offers.StoreOffersResponse.md)\>\>

Get a list of all the prices of every skin in the game

#### Returns

`Promise`<`APIResponse`<[`StoreOffersResponse`](../interfaces/types_v1_store_offers.StoreOffersResponse.md)\>\>

List of skin prices

#### Defined in

[index.ts:282](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L282)

___

### getRawCompetitiveUpdates

▸ **getRawCompetitiveUpdates**(`__namedParameters`): `Promise`<`APIResponse`<[`RawCompetitiveUpdatesResponse`](../interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md)\>\>

Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`See`**

[getMMRHistory](index.default.md#getmmrhistory) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`RawCompetitiveUpdatesResponse`](../interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md)\>\>

Information about the players rr history

#### Defined in

[index.ts:337](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L337)

___

### getRawMMR

▸ **getRawMMR**(`__namedParameters`): `Promise`<`APIResponse`<[`RawMMRResponse`](../interfaces/types_raw_mmr.RawMMRResponse.md)\>\>

Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`See`**

[getMMR](index.default.md#getmmr) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`RawMMRResponse`](../interfaces/types_raw_mmr.RawMMRResponse.md)\>\>

Information about the players mmr

#### Defined in

[index.ts:353](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L353)

___

### getRawMatchDetails

▸ **getRawMatchDetails**(`__namedParameters`): `Promise`<`APIResponse`<[`RawMatchDetailsResponse`](../interfaces/types_raw_match_details.RawMatchDetailsResponse.md)\>\>

Gets raw data for a match from the valorant API. (Not formatted, use only if you know what you are doing)

**`See`**

[getMatch](index.default.md#getmatch) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.matchID` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`RawMatchDetailsResponse`](../interfaces/types_raw_match_details.RawMatchDetailsResponse.md)\>\>

Information about the match

#### Defined in

[index.ts:305](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L305)

___

### getRawMatchHistory

▸ **getRawMatchHistory**(`__namedParameters`): `Promise`<`APIResponse`<[`RawMatchHistoryResponse`](../interfaces/types_raw_match_history.RawMatchHistoryResponse.md)\>\>

Gets raw data for a players match history from the valorant API. (Not formatted, use only if you know what you are doing)

**`See`**

[getMatches](index.default.md#getmatches) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`RawMatchHistoryResponse`](../interfaces/types_raw_match_history.RawMatchHistoryResponse.md)\>\>

Information about the players match history

#### Defined in

[index.ts:321](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L321)

___

### getStatus

▸ **getStatus**(`__namedParameters`): `Promise`<`APIResponse`<[`StatusResponse`](../interfaces/types_v1_status.StatusResponse.md)\>\>

Will get information about the current maintenances and incidents about a region

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`StatusResponse`](../interfaces/types_v1_status.StatusResponse.md)\>\>

Info about undergoing maintenances and incidents in a region of valorant

#### Defined in

[index.ts:292](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L292)

___

### getTranslations

▸ **getTranslations**(`__namedParameters?`): `Promise`<`APIResponse`<[`ContentResponse`](../interfaces/types_v1_content.ContentResponse.md)\>\>

Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.locale?` | [`Locale`](../modules/types_general.md#locale) |

#### Returns

`Promise`<`APIResponse`<[`ContentResponse`](../interfaces/types_v1_content.ContentResponse.md)\>\>

#### Defined in

[index.ts:421](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L421)

___

### getVersion

▸ **getVersion**(`__namedParameters`): `Promise`<`APIResponse`<[`VersionResponse`](../interfaces/types_v1_version.VersionResponse.md)\>\>

Get information about valorant in a region, such as the client version, branch, and server version

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.region` | [`Region`](../modules/types_general.md#region) |

#### Returns

`Promise`<`APIResponse`<[`VersionResponse`](../interfaces/types_v1_version.VersionResponse.md)\>\>

Information about a regions valorant

#### Defined in

[index.ts:264](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L264)

___

### getWebsite

▸ **getWebsite**(`__namedParameters`): `Promise`<`APIResponse`<[`WebsiteResponse`](../interfaces/types_v1_website.WebsiteResponse.md)\>\>

Get all announcements from the valorant website of a country

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.countryCode` | ``"en-us"`` \| ``"en-gb"`` \| ``"de-de"`` \| ``"es-es"`` \| ``"es-mx"`` \| ``"fr-fr"`` \| ``"it-it"`` \| ``"ja-jp"`` \| ``"ko-kr"`` \| ``"pt-br"`` \| ``"ru-ru"`` \| ``"tr-tr"`` \| ``"vi-vn"`` |

#### Returns

`Promise`<`APIResponse`<[`WebsiteResponse`](../interfaces/types_v1_website.WebsiteResponse.md)\>\>

List of announcements from the valorant website

#### Defined in

[index.ts:254](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L254)

___

### initUtils

▸ **initUtils**(): `Promise`<`void`\>

Creates [rankImages](index.default.md#rankimages) and [mapImages](index.default.md#mapimages) by pulling the images from [https://valorant-api.com](https://valorant-api.com)

**`Remarks`**

Must be called before using [rankImages](index.default.md#rankimages) and [mapImages](index.default.md#mapimages)

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:140](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/index.ts#L140)
