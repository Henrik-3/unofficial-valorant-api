type BaseRank = "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Ascendant" | "Immortal"
type SubRank = "1" | "2" | "3"
export type Rank = `${BaseRank} ${SubRank}` | "Radiant" | "Unrated"

type Episodes = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"
type Acts = "1" | "2" | "3"
export type Season = `e${Episodes}a${Acts}`

export type Mode = "Escalation" | "Spikerush" | "Deathmatch" | "Competitive" | "Unrated" | "Replication" | "Custom" | "Newmap" | "Snowball"
export type ValorantMap = "Ascent" | "Split" | "Fracture" | "Bind" | "Breeze" | "Icebox" | "Haven" | "Pearl"
export type Region = "eu" | "na" | "kr" | "ap" | "latam" | "br"
export type Characters = "Astra" | "Breach" | "Brimstone" | "Chamber" | "Cypher" | "Fade" | "Jett" | "KAY/O" | "Killjoy" | "Neon" | "Omen" | "Phoenix" | "Raze" | "Reyna" | "Sage" | "Skye" | "Sova" | "Viper" | "Yoru"
// TODO Check "Golden Gun" and "Tactical Knife"
export type Weapon = "Classic" | "Shorty" | "Frenzy" | "Ghost" | "Sheriff" | "Golden Gun" | "Stinger" | "Spectre" | "Bucky" | "Judge" | "Bulldog" | "Guardian" | "Phantom" | "Vandal" | "Marshal" | "Operator" | "Ares" | "Odin" | "Melee"

export type Locale = "ar-AE" | "de-DE" | "en-GB" | "en-US" | "es-ES" | "es-MX" | "fr-FR" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "ru-RU" | "th-TH" | "tr-TR" | "vi-VN" | "zn-CN" | "zn-TW"
