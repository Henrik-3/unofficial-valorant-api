export type BaseRank = 'Iron' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Ascendant' | 'Immortal';
export type SubRank = '1' | '2' | '3';
export type Rank = `${BaseRank} ${SubRank}` | 'Radiant' | 'Unrated';

export type Episodes = number;
export type Acts = 1 | 2 | 3;
export type Season = `e${Episodes}a${Acts}`;

export type Mode = 'Escalation' | 'Spikerush' | 'Deathmatch' | 'Competitive' | 'Unrated' | 'Replication' | 'Custom' | 'Newmap' | 'Snowballfight' | 'Premier';
export type ValorantMap = 'Ascent' | 'Split' | 'Fracture' | 'Bind' | 'Breeze' | 'Icebox' | 'Haven' | 'Pearl';
export type Region = 'eu' | 'na' | 'kr' | 'ap' | 'latam' | 'br';
export type Characters =
    | 'Astra'
    | 'Breach'
    | 'Brimstone'
    | 'Chamber'
    | 'Cypher'
    | 'Fade'
    | 'Harbor'
    | 'Jett'
    | 'KAY/O'
    | 'Killjoy'
    | 'Neon'
    | 'Omen'
    | 'Phoenix'
    | 'Raze'
    | 'Reyna'
    | 'Sage'
    | 'Skye'
    | 'Sova'
    | 'Viper'
    | 'Yoru';
// TODO Check "Golden Gun" and "Tactical Knife"
export type Weapon =
    | 'Classic'
    | 'Shorty'
    | 'Frenzy'
    | 'Ghost'
    | 'Sheriff'
    | 'Golden Gun'
    | 'Stinger'
    | 'Spectre'
    | 'Bucky'
    | 'Judge'
    | 'Bulldog'
    | 'Guardian'
    | 'Phantom'
    | 'Vandal'
    | 'Marshal'
    | 'Operator'
    | 'Ares'
    | 'Odin'
    | 'Melee';

export type Locale =
    | 'ar-AE'
    | 'de-DE'
    | 'en-GB'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'fr-FR'
    | 'id-ID'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'pl-PL'
    | 'pt-BR'
    | 'ru-RU'
    | 'th-TH'
    | 'tr-TR'
    | 'vi-VN'
    | 'zn-CN'
    | 'zn-TW';

export type PremierConferences =
    | 'EU_CENTRAL_EAST'
    | 'EU_WEST'
    | 'EU_MIDDLE_EAST'
    | 'EU_TURKEY'
    | 'NA_US_EAST'
    | 'NA_US_WEST'
    | 'LATAM_NORTH'
    | 'LATAM_SOUTH'
    | 'BR_BRAZIL'
    | 'KR_KOREA'
    | 'AP_ASIA'
    | 'AP_JAPAN'
    | 'AP_OCEANIA'
    | 'AP_SOUTH_ASIA';

export interface APIResponse<dataType> {
    /**
     * Response status
     * @remarks
     * - `200-299`  Successful response
     * - `400-499`  Client error response
     * - `500-599`  Server error response
     */
    status: number;
    /**
     * Response from API
     */
    data?: dataType;
    /**
     * Information about current rate limits
     */
    rateLimits: RateLimit;
    /**
     * Error object (if there is)
     */
    error?: ErrorObject;
}

export interface ErrorObject {
    /**
     * Error message
     */
    message: string;
    /**
     * The response status of the API. See remarks for info about specific error codes
     * @remarks
     * Can be any of the following:
     * - `0`    Riot Origin Server down for maintenance
     * - `1` 	Invalid API Key
     * - `2` 	Forbidden endpoint
     * - `3` 	Restricted endpoint
     * - `101` 	No region found for this Player
     * - `102` 	No matches found, can't get puuid
     * - `103` 	Possible name change detected, can't get puuid. Please play one match, wait 1-2 minutes and try it again
     * - `104` 	Invalid region
     * - `105` 	Invalid filter
     * - `106` 	Invalid gamemode
     * - `107` 	Invalid map
     * - `108` 	Invalid locale
     * - `109` 	Missing name
     * - `110` 	Missing tag
     * - `111` 	Player not found in leaderboard
     * - `112` 	Invalid raw type
     * - `113` 	Invalid match or player id
     * - `114` 	Invalid country code
     * - `115` 	Invalid season
     */
    code: number;
    /**
     * Error details to help fix the problem
     */
    details: string;
}

export interface RateLimit {
    /**
     * Number of used API requests per 60s.
     * @remarks
     * `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    used: number;
    /**
     * Remaining number of API requests per 60s.
     * @remarks
     * `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    remaining: number;
    /**
     * In how many seconds (every 60s) your rate limit is going to reset.
     * @remarks
     * `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    reset: number;
}
