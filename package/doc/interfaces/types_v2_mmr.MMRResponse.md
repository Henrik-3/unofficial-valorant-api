# Interface: MMRResponse

[types/v2-mmr](../modules/types_v2_mmr.md).MMRResponse

## Table of contents

### Properties

- [by\_season](types_v2_mmr.MMRResponse.md#by_season)
- [current\_data](types_v2_mmr.MMRResponse.md#current_data)
- [name](types_v2_mmr.MMRResponse.md#name)
- [puuid](types_v2_mmr.MMRResponse.md#puuid)
- [tag](types_v2_mmr.MMRResponse.md#tag)

## Properties

### by\_season

• **by\_season**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `e10a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e10a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e10a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e1a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e1a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e1a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e2a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e2a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e2a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e3a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e3a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e3a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e4a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e4a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e4a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e5a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e5a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e5a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e6a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e6a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e6a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e7a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e7a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e7a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e8a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e8a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e8a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e9a1` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e9a2` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |
| `e9a3` | [`SeasonMMR`](types_v2_mmr.SeasonMMR.md) |

#### Defined in

[types/v2-mmr.ts:35](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v2-mmr.ts#L35)

___

### current\_data

• **current\_data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currenttier` | `number` |
| `currenttierpatched` | [`Rank`](../modules/types_general.md#rank) |
| `elo` | `number` |
| `games_needed_for_rating` | `number` |
| `images` | { `large`: `string` ; `small`: `string` ; `triangle_down`: `string` ; `triangle_up`: `string`  } |
| `images.large` | `string` |
| `images.small` | `string` |
| `images.triangle_down` | `string` |
| `images.triangle_up` | `string` |
| `mmr_change_to_last_game` | `number` |
| `old` | `boolean` |
| `ranking_in_tier` | `number` |

#### Defined in

[types/v2-mmr.ts:19](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v2-mmr.ts#L19)

___

### name

• **name**: `string`

#### Defined in

[types/v2-mmr.ts:16](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v2-mmr.ts#L16)

___

### puuid

• **puuid**: `string`

#### Defined in

[types/v2-mmr.ts:18](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v2-mmr.ts#L18)

___

### tag

• **tag**: `string`

#### Defined in

[types/v2-mmr.ts:17](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v2-mmr.ts#L17)
