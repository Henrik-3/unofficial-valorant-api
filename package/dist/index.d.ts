import type { Locale, Mode, Rank, Region, Season, ValorantMap } from "./types/general";
import type { RawCompetitiveUpdatesResponse } from "./types/raw/competitive-updates";
import type { RawMatchDetailsResponse } from "./types/raw/match-details";
import type { RawMatchHistoryResponse } from "./types/raw/match-history";
import type { RawMMRResponse } from "./types/raw/mmr";
import type { ContentResponse } from "./types/v1-content";
import type { CrosshairResponse } from "./types/v1-crosshair";
import type { FeaturedItemsResponse } from "./types/v1-featured-items";
import type { ProfileResponse } from "./types/v1-profile";
import type { StatusResponse } from "./types/v1-status";
import type { StoreOffersResponse } from "./types/v1-store-offers";
import type { VersionResponse } from "./types/v1-version";
import type { WebsiteResponse } from "./types/v1-website";
import type { LeaderboardResponse } from "./types/v2-leaderboard";
import type { MatchResponse } from "./types/v2-match";
import type { MMRResponse } from "./types/v2-mmr";
import type { MMRHistoryResponse } from "./types/v2-mmr-history";
import type { MatchesResponse } from "./types/v3-matches";
interface APIResponse<dataType> {
    /**
     * Response status
     *
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
    /** The response status of the API. See remarks for info about specific error codes
     *
     * @remarks
     * Can be any of the following:
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
     *
     * @remarks
     * `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    used: number;
    /**
     * Remaining number of API requests per 60s.
     *
     * @remarks
     * `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    remaining: number;
    /**
     * In how many seconds (every 60s) your rate limit is going to reset.
     *
     * @remarks
     * `30 req/min` on free accounts, and `60 req/min` on regular token
     */
    reset: number;
}
declare class VAPI {
    private token?;
    /**
     * Images for every {@link Rank | Valorant rank}
     *
     * @remarks
     * You must call {@link initUtils} before using this!
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
     * Images for every {@link ValorantMap | Valorant Map}
     *
     * @remarks
     * You must call {@link initUtils} before using this!
     */
    mapImages?: {
        [key in ValorantMap | "The Range"]: {
            splash: string;
            minimap: string;
            landscape: string;
        };
    };
    /**
     * Create a new instance of the main API. All API calls are in this class
     *
     * @example
     * Create a new instance
     * ```
     * import _VAPI from "unofficial-valorant-api"
     * const VAPI = new _VAPI("my super secret token")
     * ```
     *
     * @param token - (optional) The token, if you have one. Get one from the Discord server ({@link https://discord.gg/wXNMnqzvAD})
     */
    constructor(token?: string);
    /**
     * Creates {@link VAPI.rankImages} and {@link VAPI.mapImages} by pulling the images from {@link https://valorant-api.com}
     *
     * @remarks
     * Must be called before using {@link VAPI.rankImages} and {@link VAPI.mapImages}
     */
    initUtils(): Promise<void>;
    /**
     * @internal
     *
     * Parses the body of an axios response
     */
    private _parseBody;
    /**
     * @internal
     *
     * Main function to fetch from the API
     *
     * @typeParam dataType - The type of the response
     * @param url - URl to fetch. Appended to {@link baseUrl} and automatically encoded
     * @param searchParams - Any extra search params. Empty values will be filtered out
     * @param config - Override the default axios config with custom params
     * @returns Formatted response
     */
    private _fetch;
    /**
     * @internal
     *
     * Make sure each key has a non empty value
     * @param input - Object to check for non empty values
     *
     * @throws {@link TypeError} - Only if there is a empty value to a key
     */
    private _validateArgs;
    /**
     * Get an image of a valorant crosshair by its code
     *
     * @example
     * Load and write a crosshair to crosshair.png
     * ```
     * import { writeFileSync } from "fs"
     *
     * const crosshair = await VAPI.getCrosshair("0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0;S;c;4;o;1")
     * writeFileSync("crosshair.png", crosshair.data)
     * ```
     *
     * @param code - Valorant crosshair code
     * @param size - (optional) Image size (default: `1024`)
     * @returns The image of the crosshair as a {@link Buffer}
     */
    getCrosshair(code: string, size?: number): Promise<APIResponse<CrosshairResponse>>;
    /**
     * Get all announcements from the valorant website of a country
     * @param countryCode - Country code of website
     * @returns List of announcements from the valorant website
     */
    getAnnouncements(countryCode: "en-us" | "en-gb" | "de-de" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pt-br" | "ru-ru" | "tr-tr" | "vi-vn"): Promise<APIResponse<WebsiteResponse>>;
    /**
     * Get information about valorant in a region, such as the client version, branch, and server version
     * @param region - Region of valorant to get info about
     * @returns Information about a regions valorant
     */
    getVersion(region: Region): Promise<APIResponse<VersionResponse>>;
    /**
     * Get all of the featured items in the current valorant store
     * @returns Featured items in the current valorant store
     */
    getFeaturedItems(): Promise<APIResponse<FeaturedItemsResponse>>;
    /**
     * Get a list of all in-app-purchases for valorant, such as Radianite and VP
     * @returns List of IAPs in valorant
     */
    getIAPs(): Promise<APIResponse<StoreOffersResponse>>;
    /**
     * Will get information about the current maintenances and incidents about a region
     * @param region - Region to get info about
     * @returns Info about undergoing maintenances and incidents in a region of valorant
     */
    getStatus(region: Region): Promise<APIResponse<StatusResponse>>;
    /**
     * Gets raw data for a match from the valorant API. (Not formatted, use only if you know what you are doing)
     * @see {@link VAPI.getMatch} for an easier response to use
     * @param matchID - The match ID to get details about
     * @param region - Region of the match
     * @param queries - Extra queries
     * @returns Information about the match
     */
    getRawMatchDetails(matchID: string, region: Region, queries?: any): Promise<APIResponse<RawMatchDetailsResponse>>;
    /**
     * Gets raw data for a players match history from the valorant API. (Not formatted, use only if you know what you are doing)
     * @see {@link VAPI.getMatches} for an easier response to use
     * @param puuid - The match ID to get details about
     * @param region - Region of the player
     * @param queries - Extra queries
     * @returns Information about the players match history
     */
    getRawMatchHistory(puuid: string, region: Region, queries?: any): Promise<APIResponse<RawMatchHistoryResponse>>;
    /**
     * Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * @see {@link VAPI.getMMRHistory} for an easier response to use
     * @param puuid - The match ID to get details about
     * @param region - Region of the player
     * @param queries - Extra queries
     * @returns Information about the players rr history
     */
    getRawCompetitiveUpdates(puuid: string, region: Region, queries?: any): Promise<APIResponse<RawCompetitiveUpdatesResponse>>;
    /**
     * Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * @see {@link VAPI.getMMR} for an easier response to use
     * @param puuid - The match ID to get details about
     * @param region - Region of the player
     * @param queries - Extra queries
     * @returns Information about the players mmr
     */
    getRawMMR(puuid: string, region: Region, queries?: any): Promise<APIResponse<RawMMRResponse>>;
    /**
     * Get a list of rr changes of a player by their Riot ID
     * @param name - The Riot ID username of the player
     * @param tag - The Riot tag username of the player
     * @param region - The players region
     * @return List of rr changes (recent competitive games)
     */
    getMMRHistory(name: string, tag: string, region: Region): Promise<APIResponse<MMRHistoryResponse>>;
    /**
     * Get a list of rr changes of a player by their PUUID
     * @param puuid - The PUUID of the player
     * @param region - The players region
     * @return List of rr changes (recent competitive games)
    */
    getMMRHistoryByPUUID(puuid: string, region: Region): Promise<APIResponse<MMRHistoryResponse>>;
    /**
     * Get information about a match
     * @param matchID - The matchs ID
     * @returns Information about the match
     */
    getMatch(matchID: string): Promise<APIResponse<MatchResponse>>;
    /**
     * Get the leaderboard of a region
     *
     * @remarks
     * In order for player filtering to work, they must be Immortal or higher
     *
     * @param region - Region to get leaderboard from
     * @param start - (optional) Get 1000 leaderboard players starting from the given start value
     * @param end - (optional) Limit the amount of leaderboard players returned
     * @param riotID - (optional) Search for a specific player by their Riot ID
     * @param riotID.name - The Riot IDs username
     * @param riotID.tag - The Riot IDs tag
     * @param puuid - (optional) Search for a specific player by their PUUID
     * @param season - (optional) Get leaderboard from a specific season
     * @returns Descending order of the highest ranked players. (Immortal and up)
     *
     * @throws {@link TypeError} - If both a riotID and puuid are supplied
     */
    getLeaderboard(region: Region, start?: number, end?: number, riotID?: {
        name: string;
        tag: string;
    }, puuid?: string, season?: Season): Promise<APIResponse<LeaderboardResponse>>;
    /**
     * Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game
     * @param locale - If this is set, instead of all translations, it will return just translations for this language
     */
    getTranslations(locale?: Locale): Promise<APIResponse<ContentResponse>>;
    /**
     * Gets general info about a players rank by their Riot ID
     *
     * @remarks
     * - **Returns:**
     * - Current rank and info about their rank
     * - RR change on their last game
     * - Their PUUID
     * - Their peak rank from every season
     *
     * @param name - The Riot ID username of the player
     * @param tag - The Riot ID tag of the player
     * @param region - The region of the player
     * @param seasonFilter - Filter results based on episode and act
     * @returns Information about a players mmr/rank
     */
    getMMR(name: string, tag: string, region: Region, seasonFilter?: Season): Promise<APIResponse<MMRResponse>>;
    /**
     * Gets general info about a players rank by their PUUID
     *
     * @remarks
     * - **Returns:**
     * - Current rank and info about their rank
     * - RR change on their last game
     * - Their PUUID
     * - Their peak rank from every season
     *
     * @param puuid - The PUUID of the player
     * @param region - The region of the player
     * @param seasonFilter - Filter results based on episode and act
     * @returns Information about a players mmr/rank
     */
    getMMRByPUUID(puuid: string, region: Region, seasonFilter?: Season): Promise<APIResponse<MMRResponse>>;
    /**
     * Gets the most recent 5 matches by a players Riot ID
     *
     * @remarks
     * - **Returns:**
     * - Info about most recent 5 matches including:
     * 	- Metadata info about the match such as length, time, map, score, etc
     * 	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
     * 	- Information about every round in the match such as plant/defuse info, etc
     * 	- Information about every kill in the game including killer, victim, assist, etc
     *
     * @param name - The Riot ID username of the player
     * @param tag - The Riot ID tag of the player
     * @param region - The region of the player
     * @param gamemodeFilter - Filter results based on gamemode
     * @param mapFilter - Filter results based on map
     * @param size - Filter results based on ?? **{needs testing)**
     * @returns Info about a players last 5 matches
    */
    getMatches(name: string, tag: string, region: Region, gamemodeFilter?: Mode, mapFilter?: ValorantMap, size?: any): Promise<APIResponse<MatchesResponse>>;
    /**
     * Gets the most recent 5 matches by a players PUUID
     *
     * @remarks
     * - **Returns:**
     * - Info about most recent 5 matches including:
     * 	- Metadata info about the match such as length, time, map, score, etc
     * 	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
     * 	- Information about every round in the match such as plant/defuse info, etc
     * 	- Information about every kill in the game including killer, victim, assist, etc
     *
     * @param puuid - The PUUID username of the player
     * @param region - The region of the player
     * @param gamemodeFilter - Filter results based on gamemode
     * @param mapFilter - Filter results based on map
     * @param size - Filter results based on ?? **{needs testing)**
     * @returns Info about a players last 5 matches
    */
    getMatchesByPUUID(puuid: string, region: Region, gamemodeFilter?: Mode, mapFilter?: ValorantMap, size?: any): Promise<APIResponse<MatchesResponse>>;
    /**
     * Get general information about a player from their Riot ID
     *
     * @remarks
     * - **Returns:**
     * - Their PUUID
     * - Their region
     * - Their account level
     * - Their current card
     *
     * @param name - The Riot ID username of the player
     * @param tag - The Riot ID tag of the player
     * @param force - Force data update?
     * @return General information on a players profile
     */
    getProfile(name: string, tag: string, force?: boolean): Promise<APIResponse<ProfileResponse>>;
    /**
     * Get general information about a player from their PUUID
     *
     * @remarks
     * - **Returns:**
     * - Their PUUID
     * - Their region
     * - Their account level
     * - Their current card
     *
     * @param puuid The PUUID of the player
     * @param force Force data update?
     * @return General information on a players profile
    */
    getProfileByPUUID(puuid: string, force?: boolean): Promise<APIResponse<ProfileResponse>>;
}
export default VAPI;
