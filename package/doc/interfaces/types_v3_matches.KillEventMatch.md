# Interface: KillEventMatch

[types/v3-matches](../modules/types_v3_matches.md).KillEventMatch

## Hierarchy

- [`KillEvent`](types_v3_matches.KillEvent.md)

  ↳ **`KillEventMatch`**

## Table of contents

### Properties

- [assistants](types_v3_matches.KillEventMatch.md#assistants)
- [damage\_weapon\_assets](types_v3_matches.KillEventMatch.md#damage_weapon_assets)
- [damage\_weapon\_id](types_v3_matches.KillEventMatch.md#damage_weapon_id)
- [damage\_weapon\_name](types_v3_matches.KillEventMatch.md#damage_weapon_name)
- [kill\_time\_in\_match](types_v3_matches.KillEventMatch.md#kill_time_in_match)
- [kill\_time\_in\_round](types_v3_matches.KillEventMatch.md#kill_time_in_round)
- [killer\_display\_name](types_v3_matches.KillEventMatch.md#killer_display_name)
- [killer\_puuid](types_v3_matches.KillEventMatch.md#killer_puuid)
- [killer\_team](types_v3_matches.KillEventMatch.md#killer_team)
- [player\_locations\_on\_kill](types_v3_matches.KillEventMatch.md#player_locations_on_kill)
- [round](types_v3_matches.KillEventMatch.md#round)
- [secondary\_fire\_mode](types_v3_matches.KillEventMatch.md#secondary_fire_mode)
- [victim\_death\_location](types_v3_matches.KillEventMatch.md#victim_death_location)
- [victim\_display\_name](types_v3_matches.KillEventMatch.md#victim_display_name)
- [victim\_puuid](types_v3_matches.KillEventMatch.md#victim_puuid)
- [victim\_team](types_v3_matches.KillEventMatch.md#victim_team)

## Properties

### assistants

• **assistants**: { `assistant_display_name`: `string` ; `assistant_puuid`: `string` ; `assistant_team`: ``"Red"`` \| ``"Blue"``  }[]

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[assistants](types_v3_matches.KillEvent.md#assistants)

#### Defined in

[types/v3-matches.ts:106](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L106)

___

### damage\_weapon\_assets

• **damage\_weapon\_assets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_icon` | `string` |
| `killfeed_icon` | `string` |

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[damage_weapon_assets](types_v3_matches.KillEvent.md#damage_weapon_assets)

#### Defined in

[types/v3-matches.ts:100](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L100)

___

### damage\_weapon\_id

• **damage\_weapon\_id**: `string`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[damage_weapon_id](types_v3_matches.KillEvent.md#damage_weapon_id)

#### Defined in

[types/v3-matches.ts:98](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L98)

___

### damage\_weapon\_name

• **damage\_weapon\_name**: [`Weapon`](../modules/types_general.md#weapon)

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[damage_weapon_name](types_v3_matches.KillEvent.md#damage_weapon_name)

#### Defined in

[types/v3-matches.ts:99](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L99)

___

### kill\_time\_in\_match

• **kill\_time\_in\_match**: `number`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[kill_time_in_match](types_v3_matches.KillEvent.md#kill_time_in_match)

#### Defined in

[types/v3-matches.ts:90](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L90)

___

### kill\_time\_in\_round

• **kill\_time\_in\_round**: `number`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[kill_time_in_round](types_v3_matches.KillEvent.md#kill_time_in_round)

#### Defined in

[types/v3-matches.ts:89](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L89)

___

### killer\_display\_name

• **killer\_display\_name**: `string`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[killer_display_name](types_v3_matches.KillEvent.md#killer_display_name)

#### Defined in

[types/v3-matches.ts:92](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L92)

___

### killer\_puuid

• **killer\_puuid**: `string`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[killer_puuid](types_v3_matches.KillEvent.md#killer_puuid)

#### Defined in

[types/v3-matches.ts:91](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L91)

___

### killer\_team

• **killer\_team**: ``"Red"`` \| ``"Blue"``

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[killer_team](types_v3_matches.KillEvent.md#killer_team)

#### Defined in

[types/v3-matches.ts:93](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L93)

___

### player\_locations\_on\_kill

• **player\_locations\_on\_kill**: [`PlayerLocationOnEvent`](types_v3_matches.PlayerLocationOnEvent.md)[]

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[player_locations_on_kill](types_v3_matches.KillEvent.md#player_locations_on_kill)

#### Defined in

[types/v3-matches.ts:105](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L105)

___

### round

• **round**: `number`

#### Defined in

[types/v3-matches.ts:192](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L192)

___

### secondary\_fire\_mode

• **secondary\_fire\_mode**: `boolean`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[secondary_fire_mode](types_v3_matches.KillEvent.md#secondary_fire_mode)

#### Defined in

[types/v3-matches.ts:104](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L104)

___

### victim\_death\_location

• **victim\_death\_location**: `PlayerLocation`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[victim_death_location](types_v3_matches.KillEvent.md#victim_death_location)

#### Defined in

[types/v3-matches.ts:97](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L97)

___

### victim\_display\_name

• **victim\_display\_name**: `string`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[victim_display_name](types_v3_matches.KillEvent.md#victim_display_name)

#### Defined in

[types/v3-matches.ts:95](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L95)

___

### victim\_puuid

• **victim\_puuid**: `string`

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[victim_puuid](types_v3_matches.KillEvent.md#victim_puuid)

#### Defined in

[types/v3-matches.ts:94](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L94)

___

### victim\_team

• **victim\_team**: ``"Red"`` \| ``"Blue"``

#### Inherited from

[KillEvent](types_v3_matches.KillEvent.md).[victim_team](types_v3_matches.KillEvent.md#victim_team)

#### Defined in

[types/v3-matches.ts:96](https://github.com/jameslinimk/unofficial-valorant-api/blob/c148ced/package/src/types/v3-matches.ts#L96)
