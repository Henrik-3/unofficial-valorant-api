# Interface: Round

[types/v3-matches](../modules/types_v3_matches.md).Round

## Table of contents

### Properties

- [bomb\_defused](types_v3_matches.Round.md#bomb_defused)
- [bomb\_planted](types_v3_matches.Round.md#bomb_planted)
- [defuse\_events](types_v3_matches.Round.md#defuse_events)
- [end\_type](types_v3_matches.Round.md#end_type)
- [plant\_events](types_v3_matches.Round.md#plant_events)
- [player\_stats](types_v3_matches.Round.md#player_stats)
- [winning\_team](types_v3_matches.Round.md#winning_team)

## Properties

### bomb\_defused

• **bomb\_defused**: `boolean`

#### Defined in

[types/v3-matches.ts:117](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L117)

___

### bomb\_planted

• **bomb\_planted**: `boolean`

#### Defined in

[types/v3-matches.ts:116](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L116)

___

### defuse\_events

• **defuse\_events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defuse_location?` | `PlayerLocation` |
| `defuse_time_in_round?` | `number` |
| `defused_by?` | { `display_name`: `string` ; `puuid`: `string` ; `team`: ``"Red"`` \| ``"Blue"``  } |
| `defused_by.display_name` | `string` |
| `defused_by.puuid` | `string` |
| `defused_by.team` | ``"Red"`` \| ``"Blue"`` |
| `player_locations_on_defuse?` | [`PlayerLocationOnEvent`](types_v3_matches.PlayerLocationOnEvent.md)[] |

#### Defined in

[types/v3-matches.ts:129](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L129)

___

### end\_type

• **end\_type**: ``"Eliminated"`` \| ``"Bomb defused"`` \| ``"Bomb detonated"``

#### Defined in

[types/v3-matches.ts:115](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L115)

___

### plant\_events

• **plant\_events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `plant_location?` | `PlayerLocation` |
| `plant_site?` | ``"A"`` \| ``"B"`` \| ``"C"`` |
| `plant_time_in_round?` | `number` |
| `planted_by?` | { `display_name`: `string` ; `puuid`: `string` ; `team`: ``"Red"`` \| ``"Blue"``  } |
| `planted_by.display_name` | `string` |
| `planted_by.puuid` | `string` |
| `planted_by.team` | ``"Red"`` \| ``"Blue"`` |
| `player_locations_on_plant?` | [`PlayerLocationOnEvent`](types_v3_matches.PlayerLocationOnEvent.md)[] |

#### Defined in

[types/v3-matches.ts:118](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L118)

___

### player\_stats

• **player\_stats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ability_casts` | { `c_cast?`: `number` ; `e_cast?`: `number` ; `q_cast?`: `number` ; `x_cast?`: `number`  } |
| `ability_casts.c_cast?` | `number` |
| `ability_casts.e_cast?` | `number` |
| `ability_casts.q_cast?` | `number` |
| `ability_casts.x_cast?` | `number` |
| `bodyshots` | `number` |
| `damage` | `number` |
| `damage_events` | { `bodyshots`: `number` ; `damage`: `number` ; `headshots`: `number` ; `legshots`: `number` ; `receiver_display_name`: `string` ; `receiver_puuid`: `string` ; `receiver_team`: ``"Red"`` \| ``"Blue"``  }[] |
| `economy` | { `armor`: { `assets`: { `display_icon`: `string`  } ; `id`: `string` ; `name`: ``"Heavy Shields"`` \| ``"Light Shields"``  } ; `loadout_value`: `number` ; `remaining`: `number` ; `spent`: `number` ; `weapon`: { `assets`: { `display_icon`: `string` ; `killfeed_icon`: `string`  } ; `id`: `string` ; `name`: [`Weapon`](../modules/types_general.md#weapon)  }  } |
| `economy.armor` | { `assets`: { `display_icon`: `string`  } ; `id`: `string` ; `name`: ``"Heavy Shields"`` \| ``"Light Shields"``  } |
| `economy.armor.assets` | { `display_icon`: `string`  } |
| `economy.armor.assets.display_icon` | `string` |
| `economy.armor.id` | `string` |
| `economy.armor.name` | ``"Heavy Shields"`` \| ``"Light Shields"`` |
| `economy.loadout_value` | `number` |
| `economy.remaining` | `number` |
| `economy.spent` | `number` |
| `economy.weapon` | { `assets`: { `display_icon`: `string` ; `killfeed_icon`: `string`  } ; `id`: `string` ; `name`: [`Weapon`](../modules/types_general.md#weapon)  } |
| `economy.weapon.assets` | { `display_icon`: `string` ; `killfeed_icon`: `string`  } |
| `economy.weapon.assets.display_icon` | `string` |
| `economy.weapon.assets.killfeed_icon` | `string` |
| `economy.weapon.id` | `string` |
| `economy.weapon.name` | [`Weapon`](../modules/types_general.md#weapon) |
| `headshots` | `number` |
| `kill_events` | [`KillEvent`](types_v3_matches.KillEvent.md)[] |
| `kills` | `number` |
| `legshots` | `number` |
| `player_display_name` | `string` |
| `player_puuid` | `string` |
| `player_team` | ``"Red"`` \| ``"Blue"`` |
| `score` | `number` |
| `stayed_in_spawn` | `boolean` |
| `was_afk` | `boolean` |
| `was_penalized` | `boolean` |

#### Defined in

[types/v3-matches.ts:139](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L139)

___

### winning\_team

• **winning\_team**: ``"Red"`` \| ``"Blue"``

#### Defined in

[types/v3-matches.ts:114](https://github.com/jameslinimk/unofficial-valorant-api/blob/2dbdb4a/package/src/types/v3-matches.ts#L114)
