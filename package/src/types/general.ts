type BaseRank = "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Ascendant" | "Immortal"
type SubRank = "1" | "2" | "3"
export type Rank = `${BaseRank} ${SubRank}` | "Radiant" | "Unrated"

type Episodes = "e1" | "e2" | "e3" | "e4" | "e5"
type Acts = "a1" | "a2" | "a3"
export type Season = `${Episodes}${Acts}`

export type Mode = "Escalation" | "Spikerush" | "Deathmatch" | "Competitive" | "Unrated" | "Replication" | "Custom" | "Newmap" | "Snowball"
export type ValorantMap = "Ascent" | "Split" | "Fracture" | "Bind" | "Breeze" | "Icebox" | "Haven" | "Pearl"
export type Region = "eu" | "na" | "kr" | "ap" | "latam" | "br"
export type Characters = "Astra" | "Breach" | "Brimstone" | "Chamber" | "Cypher" | "Fade" | "Jett" | "KAY/O" | "Killjoy" | "Neon" | "Omen" | "Phoenix" | "Raze" | "Reyna" | "Sage" | "Skye" | "Sova" | "Viper" | "Yoru"
/**
 * TODO Check "Golden Gun" and "Tactical Knife"
 */
export type Weapon = "Classic" | "Shorty" | "Frenzy" | "Ghost" | "Sheriff" | "Golden Gun" | "Stinger" | "Spectre" | "Bucky" | "Judge" | "Bulldog" | "Guardian" | "Phantom" | "Vandal" | "Marshal" | "Operator" | "Ares" | "Odin" | "Melee"
