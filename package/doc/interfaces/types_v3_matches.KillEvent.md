# Interface: KillEvent

[types/v3-matches](../modules/types_v3_matches.md).KillEvent

## Hierarchy

- **`KillEvent`**

  ↳ [`KillEventMatch`](types_v3_matches.KillEventMatch.md)

## Table of contents

### Properties

- [assistants](types_v3_matches.KillEvent.md#assistants)
- [damage\_weapon\_assets](types_v3_matches.KillEvent.md#damage_weapon_assets)
- [damage\_weapon\_id](types_v3_matches.KillEvent.md#damage_weapon_id)
- [damage\_weapon\_name](types_v3_matches.KillEvent.md#damage_weapon_name)
- [kill\_time\_in\_match](types_v3_matches.KillEvent.md#kill_time_in_match)
- [kill\_time\_in\_round](types_v3_matches.KillEvent.md#kill_time_in_round)
- [killer\_display\_name](types_v3_matches.KillEvent.md#killer_display_name)
- [killer\_puuid](types_v3_matches.KillEvent.md#killer_puuid)
- [killer\_team](types_v3_matches.KillEvent.md#killer_team)
- [player\_locations\_on\_kill](types_v3_matches.KillEvent.md#player_locations_on_kill)
- [secondary\_fire\_mode](types_v3_matches.KillEvent.md#secondary_fire_mode)
- [victim\_death\_location](types_v3_matches.KillEvent.md#victim_death_location)
- [victim\_display\_name](types_v3_matches.KillEvent.md#victim_display_name)
- [victim\_puuid](types_v3_matches.KillEvent.md#victim_puuid)
- [victim\_team](types_v3_matches.KillEvent.md#victim_team)

## Properties

### assistants

• **assistants**: { `assistant_display_name`: `string` ; `assistant_puuid`: `string` ; `assistant_team`: ``"Red"`` \| ``"Blue"``  }[]

#### Defined in

[types/v3-matches.ts:106](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L106)

___

### damage\_weapon\_assets

• **damage\_weapon\_assets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_icon` | `string` |
| `killfeed_icon` | `string` |

#### Defined in

[types/v3-matches.ts:100](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L100)

___

### damage\_weapon\_id

• **damage\_weapon\_id**: `string`

#### Defined in

[types/v3-matches.ts:98](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L98)

___

### damage\_weapon\_name

• **damage\_weapon\_name**: [`Weapon`](../modules/types_general.md#weapon)

#### Defined in

[types/v3-matches.ts:99](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L99)

___

### kill\_time\_in\_match

• **kill\_time\_in\_match**: `number`

#### Defined in

[types/v3-matches.ts:90](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L90)

___

### kill\_time\_in\_round

• **kill\_time\_in\_round**: `number`

#### Defined in

[types/v3-matches.ts:89](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L89)

___

### killer\_display\_name

• **killer\_display\_name**: `string`

#### Defined in

[types/v3-matches.ts:92](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L92)

___

### killer\_puuid

• **killer\_puuid**: `string`

#### Defined in

[types/v3-matches.ts:91](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L91)

___

### killer\_team

• **killer\_team**: ``"Red"`` \| ``"Blue"``

#### Defined in

[types/v3-matches.ts:93](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L93)

___

### player\_locations\_on\_kill

• **player\_locations\_on\_kill**: [`PlayerLocationOnEvent`](types_v3_matches.PlayerLocationOnEvent.md)[]

#### Defined in

[types/v3-matches.ts:105](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L105)

___

### secondary\_fire\_mode

• **secondary\_fire\_mode**: `boolean`

#### Defined in

[types/v3-matches.ts:104](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L104)

___

### victim\_death\_location

• **victim\_death\_location**: `PlayerLocation`

#### Defined in

[types/v3-matches.ts:97](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L97)

___

### victim\_display\_name

• **victim\_display\_name**: `string`

#### Defined in

[types/v3-matches.ts:95](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L95)

___

### victim\_puuid

• **victim\_puuid**: `string`

#### Defined in

[types/v3-matches.ts:94](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L94)

___

### victim\_team

• **victim\_team**: ``"Red"`` \| ``"Blue"``

#### Defined in

[types/v3-matches.ts:96](https://github.com/jameslinimk/unofficial-valorant-api/blob/372bfa0/package/src/types/v3-matches.ts#L96)
