/// <reference types="node" />
import type { Locale, Mode, Rank, Region, Season, ValorantMap } from "./types/general";
import type { RawCompetitiveUpdatesResponse } from "./types/raw/competitive-updates";
import type { RawMatchDetailsResponse } from "./types/raw/match-details";
import type { RawMatchHistoryResponse } from "./types/raw/match-history";
import type { RawMMRResponse } from "./types/raw/mmr";
import type { ContentResponse } from "./types/v1-content";
import type { FeaturedItemsResponse } from "./types/v1-featured-items";
import type { ProfileResponse } from "./types/v1-profile";
import type { StatusResponse } from "./types/v1-status";
import type { StoreOffersResponse } from "./types/v1-store-offers";
import type { VersionResponse } from "./types/v1-version";
import type { WebsiteResponse } from "./types/v1-website";
import type { LeaderboardResponse } from "./types/v2-leaderboard";
import type { MMRResponse } from "./types/v2-mmr";
import type { MMRHistoryResponse } from "./types/v2-mmr-history";
import type { MatchesResponse } from "./types/v3-matches";
interface APIResponse<dataType> {
    status: number;
    /**
     * Real response from API
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
    /**
     * Original request URL
     */
    url: string;
}
interface ErrorObject {
    /**
     * Error message
     */
    message: string;
    /** The response status of the API. Can be any of the following:
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
interface RateLimit {
    /**
     * Number of used API requests per 60s.
     * - `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    used: number;
    /**
     * Remaining number of API requests per 60s.
     * - `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    remaining: number;
    /**
     * In how many seconds (every 60s) your rate limit is going to reset.
     * - `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    reset: number;
}
export default class {
    private token?;
    /**
     * You must call `initUtils()` before using this!
     */
    rankImages?: {
        [key in Rank]: {
            large: string;
            small: string;
            triangleUp: string;
            triangleDown: string;
        };
    };
    /**
     * You must call `initUtils()` before using this!
     */
    mapImages?: {
        [key in ValorantMap | "The Range"]: {
            splash: string;
            minimap: string;
            landscape: string;
        };
    };
    /**
     * The main class to call API functions from
     * @param {string} token - The token (optional). Get one from https://discord.gg/wXNMnqzvAD
     */
    constructor(token?: string);
    initUtils(): Promise<void>;
    private _parseBody;
    private _fetch;
    /**
     * Make sure each key in {@param input} has a non `null` or `undefined` value
     * @param {{ [key: string]: any }} input - Arguments to check
     */
    private _validateArgs;
    /**
     * Get a visualization of a valorant crosshair by its code
     * @param {string} code - Valorant crosshair code
     * @param {number} size - Image size (default: `1024`)
     * @returns {Buffer} Image buffer for the preview
     */
    getCrosshair(code: string, size?: number): Promise<APIResponse<Buffer>>;
    /**
     * Get all announcements from the valorant website of a country
     * @param {string} countryCode - Country code of website. Cane be `en-us`, `en-gb`, `de-de`, `es-es`, `es-mx`, `fr-fr`, `it-it`, `ja-jp`, `ko-kr`, `pt-br`, `ru-ru`, `tr-tr`, or `vi-vn`
     */
    getAnnouncements(countryCode: "en-us" | "en-gb" | "de-de" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pt-br" | "ru-ru" | "tr-tr" | "vi-vn"): Promise<APIResponse<WebsiteResponse>>;
    /**
     * Get information about valorant in a region
     * @param {Region} region - Region to get info about
     */
    getVersion(region: Region): Promise<APIResponse<VersionResponse>>;
    /**
     * Get a list of featured items in Valorant
     */
    getFeaturedItems(): Promise<APIResponse<FeaturedItemsResponse>>;
    /**
     * Get a list of all in-app-purchases for valorant
     * ! find out wtf this actually does
     */
    getIAPs(): Promise<APIResponse<StoreOffersResponse>>;
    /**
     * Will get information about the current maintenances and incidents about a region
     * @param {Region} region - Region to get info about
     */
    getStatus(region: Region): Promise<APIResponse<StatusResponse>>;
    /**
     * Gets raw data for a match from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * - Use `getMatch` instead
     * @param {string} matchID - The match ID to get details about
     * @param {Region} region - Region of the match
     * @param {any} queries - Extra queries
     */
    getRawMatchDetails(matchID: string, region: Region, queries?: any): Promise<APIResponse<RawMatchDetailsResponse>>;
    /**
     * Gets raw data for a players match history from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * - Use `getMatches` instead
     * @param {string} puuid - The match ID to get details about
     * @param {Region} region - Region of the player
     * @param {any} queries - Extra queries
     */
    getRawMatchHistory(puuid: string, region: Region, queries?: any): Promise<APIResponse<RawMatchHistoryResponse>>;
    /**
     * Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * - Use `getMMRHistory` instead
     * @param {string} puuid - The match ID to get details about
     * @param {Region} region - Region of the player
     * @param {any} queries - Extra queries
     */
    getRawCompetitiveUpdates(puuid: string, region: Region, queries?: any): Promise<APIResponse<RawCompetitiveUpdatesResponse>>;
    /**
     * Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * - Use `getMMR` instead
     * @param {string} puuid - The match ID to get details about
     * @param {Region} region - Region of the player
     * @param {any} queries - Extra queries
     */
    getRawMMR(puuid: string, region: Region, queries?: any): Promise<APIResponse<RawMMRResponse>>;
    /**
     * Get a list of rr changes of a player by their Riot ID
     * @param {string} name - The Riot ID username of the player
     * @param {string} tag - The Riot tag username of the player
     * @param {Region} region - The player's region
     */
    getMMRHistory(name: string, tag: string, region: Region): Promise<APIResponse<MMRHistoryResponse>>;
    /**
     * Get a list of rr changes of a player by their PUUID
     * @param {string} name - The PUUID of the player
     * @param {Region} region - The player's region
    */
    getMMRHistoryByPUUID(puuid: string, region: Region): Promise<APIResponse<MMRHistoryResponse>>;
    /**
     * Get information about a match
     * @param {string} matchID - The match's ID
     */
    getMatch(matchID: string): Promise<APIResponse<import("./types/v3-matches").Match>>;
    /**
     * Get the leaderboard of a region
     * @param {Region} region - Region to get leaderboard from
     * @param {number} start - (optional) Get 1000 leaderboard players starting from the given start value
     * @param {number} end - (optional) Limit the amount of leaderboard players returned
     * @param {{ name: string, tag: string }} riotID - Search for a specific player by their Riot ID
     * @param {string} puuid - Search for a specific player by their PUUID
     * @param {Season} season - Get leaderboard from a specific season
     */
    getLeaderboard(region: Region, start?: number, end?: number, riotID?: {
        name: string;
        tag: string;
    }, puuid?: string, season?: Season): Promise<APIResponse<LeaderboardResponse>>;
    /**
     * Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game
     * @param {Locale} locale - If this is set, instead of all translations, it will return just translations for this language
     */
    getTranslations(locale?: Locale): Promise<APIResponse<ContentResponse>>;
    /**
     * Gets general info about a player's rank by their Riot ID
     * - **Returns:**
     * - Current rank and info about their rank
     * - RR change on their last game
     * - Their PUUID
     * - Their peak rank from every season
     * @param {string} name - The Riot ID username of the player
     * @param {string} tag - The Riot ID tag of the player
     * @param {Region} region - The region of the player
     * @param {Season} seasonFilter - Filter results based on episode and act
     */
    getMMR(name: string, tag: string, region: Region, seasonFilter?: Season): Promise<APIResponse<MMRResponse>>;
    /**
     * Gets general info about a player's rank by their PUUID
     * - **Returns:**
     * - Current rank and info about their rank
     * - RR change on their last game
     * - Their PUUID
     * - Their peak rank from every season
     * @param {string} puuid - The PUUID of the player
     * @param {Region} region - The region of the player
     * @param {Season} seasonFilter - Filter results based on episode and act
     */
    getMMRByPUUID(puuid: string, region: Region, seasonFilter?: Season): Promise<APIResponse<MMRResponse>>;
    /**
     * Gets the most recent 5 matches by a players Riot ID
     * - **Returns:**
     * - Info about most recent 5 matches including:
     * 	- Metadata info about the match such as length, time, map, score, etc
     * 	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
     * 	- Information about every round in the match such as plant/defuse info, etc
     * 	- Information about every kill in the game including killer, victim, assist, etc
     * @param {string} name - The Riot ID username of the player
     * @param {string} tag - The Riot ID tag of the player
     * @param {Region} region - The region of the player
     * @param {Mode} gamemodeFilter - Filter results based on gamemode
     * @param {ValorantMap} mapFilter - Filter results based on map
     * @param {any} size - Filter results based on ?? **{needs testing)**
    */
    getMatches(name: string, tag: string, region: Region, gamemodeFilter?: Mode, mapFilter?: ValorantMap, size?: any): Promise<APIResponse<MatchesResponse>>;
    /**
     * Gets the most recent 5 matches by a players PUUID
     * - **Returns:**
     * - Info about most recent 5 matches including:
     * 	- Metadata info about the match such as length, time, map, score, etc
     * 	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
     * 	- Information about every round in the match such as plant/defuse info, etc
     * 	- Information about every kill in the game including killer, victim, assist, etc
     * @param {string} puuid - The PUUID username of the player
     * @param {Region} region - The region of the player
     * @param {Mode} gamemodeFilter - Filter results based on gamemode
     * @param {ValorantMap} mapFilter - Filter results based on map
     * @param {any} size - Filter results based on ?? **{needs testing)**
    */
    getMatchesByPUUID(puuid: string, region: Region, gamemodeFilter?: Mode, mapFilter?: ValorantMap, size?: any): Promise<APIResponse<MatchesResponse>>;
    /**
     * Get general information about a player from their Riot ID
     * - **Returns:**
     * - Their PUUID
     * - Their region
     * - Their account level
     * - Their current card
     * @param {string} name The Riot ID username of the player
     * @param {string} tag The Riot ID tag of the player
     * @param {boolean} force Force data update?
     */
    getProfile(name: string, tag: string, force?: boolean): Promise<APIResponse<ProfileResponse>>;
    /**
     * Get general information about a player from their PUUID
     * - **Returns:**
     * - Their PUUID
     * - Their region
     * - Their account level
     * - Their current card
     * @param {string} puuid The PUUID of the player
     * @param {boolean} force Force data update?
    */
    getProfileByPUUID(puuid: string, force?: boolean): Promise<APIResponse<ProfileResponse>>;
}
export {};
