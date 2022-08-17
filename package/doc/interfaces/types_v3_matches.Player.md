# Interface: Player

[types/v3-matches](../modules/types_v3_matches.md).Player

## Table of contents

### Properties

- [ability\_casts](types_v3_matches.Player.md#ability_casts)
- [assets](types_v3_matches.Player.md#assets)
- [behavior](types_v3_matches.Player.md#behavior)
- [character](types_v3_matches.Player.md#character)
- [currenttier](types_v3_matches.Player.md#currenttier)
- [currenttier\_patched](types_v3_matches.Player.md#currenttier_patched)
- [damage\_made](types_v3_matches.Player.md#damage_made)
- [damage\_received](types_v3_matches.Player.md#damage_received)
- [economy](types_v3_matches.Player.md#economy)
- [level](types_v3_matches.Player.md#level)
- [name](types_v3_matches.Player.md#name)
- [party\_id](types_v3_matches.Player.md#party_id)
- [platform](types_v3_matches.Player.md#platform)
- [player\_card](types_v3_matches.Player.md#player_card)
- [player\_title](types_v3_matches.Player.md#player_title)
- [puuid](types_v3_matches.Player.md#puuid)
- [session\_playtime](types_v3_matches.Player.md#session_playtime)
- [stats](types_v3_matches.Player.md#stats)
- [tag](types_v3_matches.Player.md#tag)
- [team](types_v3_matches.Player.md#team)

## Properties

### ability\_casts

• **ability\_casts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `c_cast` | `number` |
| `e_cast` | `number` |
| `q_cast` | `number` |
| `x_cast` | `number` |

#### Defined in

[types/v3-matches.ts:35](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L35)

___

### assets

• **assets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent` | { `bust`: `string` ; `full`: `string` ; `killfeed`: `string` ; `small`: `string`  } |
| `agent.bust` | `string` |
| `agent.full` | `string` |
| `agent.killfeed` | `string` |
| `agent.small` | `string` |
| `card` | { `large`: `string` ; `small`: `string` ; `wide`: `string`  } |
| `card.large` | `string` |
| `card.small` | `string` |
| `card.wide` | `string` |

#### Defined in

[types/v3-matches.ts:41](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L41)

___

### behavior

• **behavior**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `afk_rounds` | `number` |
| `friendly_fire` | { `incoming`: `number` ; `outgoing`: `number`  } |
| `friendly_fire.incoming` | `number` |
| `friendly_fire.outgoing` | `number` |
| `rounds_in_spawn` | `number` |

#### Defined in

[types/v3-matches.ts:20](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L20)

___

### character

• **character**: [`Characters`](../modules/types_general.md#characters)

#### Defined in

[types/v3-matches.ts:9](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L9)

___

### currenttier

• **currenttier**: `number`

#### Defined in

[types/v3-matches.ts:10](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L10)

___

### currenttier\_patched

• **currenttier\_patched**: [`Rank`](../modules/types_general.md#rank)

#### Defined in

[types/v3-matches.ts:11](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L11)

___

### damage\_made

• **damage\_made**: `number`

#### Defined in

[types/v3-matches.ts:74](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L74)

___

### damage\_received

• **damage\_received**: `number`

#### Defined in

[types/v3-matches.ts:75](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L75)

___

### economy

• **economy**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loadout_value` | { `average`: `number` ; `overall`: `number`  } |
| `loadout_value.average` | `number` |
| `loadout_value.overall` | `number` |
| `spent` | { `average`: `number` ; `overall`: `number`  } |
| `spent.average` | `number` |
| `spent.overall` | `number` |

#### Defined in

[types/v3-matches.ts:64](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L64)

___

### level

• **level**: `number`

#### Defined in

[types/v3-matches.ts:8](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[types/v3-matches.ts:5](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L5)

___

### party\_id

• **party\_id**: `string`

#### Defined in

[types/v3-matches.ts:14](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L14)

___

### platform

• **platform**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `os` | { `name`: `string` ; `version`: `string`  } |
| `os.name` | `string` |
| `os.version` | `string` |
| `type` | `string` |

#### Defined in

[types/v3-matches.ts:28](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L28)

___

### player\_card

• **player\_card**: `string`

#### Defined in

[types/v3-matches.ts:12](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L12)

___

### player\_title

• **player\_title**: `string`

#### Defined in

[types/v3-matches.ts:13](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L13)

___

### puuid

• **puuid**: `string`

#### Defined in

[types/v3-matches.ts:4](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L4)

___

### session\_playtime

• **session\_playtime**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `milliseconds` | `number` |
| `minutes` | `number` |
| `seconds` | `number` |

#### Defined in

[types/v3-matches.ts:15](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L15)

___

### stats

• **stats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assists` | `number` |
| `bodyshots` | `number` |
| `deaths` | `number` |
| `headshots` | `number` |
| `kills` | `number` |
| `legshots` | `number` |
| `score` | `number` |

#### Defined in

[types/v3-matches.ts:55](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L55)

___

### tag

• **tag**: `string`

#### Defined in

[types/v3-matches.ts:6](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L6)

___

### team

• **team**: ``"Red"`` \| ``"Blue"``

#### Defined in

[types/v3-matches.ts:7](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L7)
