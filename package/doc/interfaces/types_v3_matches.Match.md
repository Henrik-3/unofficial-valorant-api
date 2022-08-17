# Interface: Match

[types/v3-matches](../modules/types_v3_matches.md).Match

## Table of contents

### Properties

- [kills](types_v3_matches.Match.md#kills)
- [metadata](types_v3_matches.Match.md#metadata)
- [players](types_v3_matches.Match.md#players)
- [rounds](types_v3_matches.Match.md#rounds)
- [teams](types_v3_matches.Match.md#teams)

## Properties

### kills

• **kills**: [`KillEventMatch`](types_v3_matches.KillEventMatch.md)[]

#### Defined in

[types/v3-matches.ts:229](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L229)

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cluster` | `string` |
| `game_length` | `number` |
| `game_start` | `number` |
| `game_start_patched` | `string` |
| `game_version` | `string` |
| `map` | [`ValorantMap`](../modules/types_general.md#valorantmap) |
| `matchid` | `string` |
| `mode` | [`Mode`](../modules/types_general.md#mode) |
| `platform` | ``"PC"`` |
| `queue` | `string` |
| `region` | [`Region`](../modules/types_general.md#region) |
| `rounds_played` | `number` |
| `season_id` | ``"string"`` |

#### Defined in

[types/v3-matches.ts:196](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L196)

___

### players

• **players**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `all_players` | [`Player`](types_v3_matches.Player.md)[] |
| `blue` | [`Player`](types_v3_matches.Player.md)[] |
| `red` | [`Player`](types_v3_matches.Player.md)[] |

#### Defined in

[types/v3-matches.ts:211](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L211)

___

### rounds

• **rounds**: [`Round`](types_v3_matches.Round.md)[]

#### Defined in

[types/v3-matches.ts:228](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L228)

___

### teams

• **teams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blue` | { `has_won`: ``false`` ; `rounds_lost`: `number` ; `rounds_won`: `number`  } |
| `blue.has_won` | ``false`` |
| `blue.rounds_lost` | `number` |
| `blue.rounds_won` | `number` |
| `red` | { `has_won`: ``false`` ; `rounds_lost`: `number` ; `rounds_won`: `number`  } |
| `red.has_won` | ``false`` |
| `red.rounds_lost` | `number` |
| `red.rounds_won` | `number` |

#### Defined in

[types/v3-matches.ts:216](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L216)
