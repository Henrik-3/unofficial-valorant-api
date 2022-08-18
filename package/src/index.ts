import axios, { type AxiosRequestConfig } from "axios";
import packageJson from "../package.json" assert { type: "json" };
import type { Locale, Mode, Rank, Region, Season, ValorantMap } from "./types/general";
import type { RawCompetitiveUpdatesResponse } from "./types/raw/competitive-updates";
import type { RawMatchDetailsResponse } from "./types/raw/match-details";
import type { RawMatchHistoryResponse } from "./types/raw/match-history";
import type { RawMMRResponse } from "./types/raw/mmr";
import type { AccountResponse } from "./types/v1-account";
import type { ContentResponse } from "./types/v1-content";
import type { CrosshairResponse } from "./types/v1-crosshair";
import type { FeaturedItemsResponse } from "./types/v1-featured-items";
import { V1LeaderboardResponse } from "./types/v1-leaderboard";
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
    /**
	 * The response status of the API. See remarks for info about specific error codes
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

/**
 * Base API endpoint
 */
const baseUrl = "https://api.henrikdev.xyz/valorant";
export default class {
    /**
	 * Images for every {@link Rank}
	 * @remarks
	 * You must call {@link initUtils} before using this!
	 */
    rankImages?: { [key in Rank]: { large: string, small: string, triangleUp: string, triangleDown: string } };
    /**
	 * Images for every {@link ValorantMap}
	 * @remarks
	 * You must call {@link initUtils} before using this!
	 */
    mapImages?: { [key in ValorantMap | "The Range"]: { splash: string, minimap: string, landscape: string } };

    /**
	 * Create a new instance of the main API. All API calls are in this class
	 * @example
	 * Create a new instance
	 * ```js
	 * import _VAPI from "unofficial-valorant-api"
	 * const VAPI = new _VAPI("my super secret token")
	 * ```
	 * @param args.token - (optional) The token, if you have one. Get one from the Discord server ({@link https://discord.gg/wXNMnqzvAD})
	 */
    constructor(private token?: string) {}

    /**
	 * Creates {@link default.rankImages} and {@link default.mapImages} by pulling the images from {@link https://valorant-api.com}
	 * @remarks
	 * Must be called before using {@link default.rankImages} and {@link default.mapImages}
	 */
    async initUtils(): Promise<void> {
        const mapsReq = (await axios({ url: "https://valorant-api.com/v1/maps" }).catch(() => null))?.data?.data;
        if (mapsReq) {
            this.mapImages = {} as any;
            mapsReq.forEach((map: any) => (this.mapImages[map.displayName] = {
                splash: map.splash,
                minimap: map.displayIcon,
                landscape: map.listViewIcon
            }));
        }

        const tiersReq = (await axios({ url: "https://valorant-api.com/v1/competitivetiers" }).catch(() => null))?.data?.data;
        if (tiersReq) {
            const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
            this.rankImages = {} as any;
            tiersReq[tiersReq.length - 1].tiers.forEach((rank: any) => (this.rankImages[capitalize(rank.tierName.toLowerCase())] = {
                large: rank.largeIcon,
                small: rank.smallIcon,
                triangleUp: rank.rankTriangleUpIcon,
                triangleDown: rank.rankTriangleDownIcon
            }));
        }
    }

    /**
	 * @internal
	 * Parses the body of an axios response
	 */
    private parseBody(body: { errors: string, status: number, data: any }) {
        if (body.errors) return body.errors;
        return body.status ? body.data : body;
    }

    /**
	 * @internal
	 * Main function to fetch from the API
	 * @typeParam dataType - The type of the response
	 * @param url - URl to fetch. Appended to the base url and automatically encoded
	 * @param searchParams - Any extra search params. Empty values will be filtered out
	 * @param config - Override the default axios config with custom params
	 * @returns Formatted response
	 */
    private async fetch<dataType>(url: string, searchParams?: { [key: string]: any }, config: AxiosRequestConfig = {}): Promise<APIResponse<dataType>> {
        // Format search params into `?something=like&this`
        const queryParams = searchParams ? Object.keys(searchParams).reduce((acc, cur) => {
            const value = searchParams[cur];
            if (value === null || value === undefined) return acc;
            return acc === ""
                ? `?${cur}=${value}`
                : acc + `&${cur}=${value}`;
        }, "") : "";

        // Main request
        const req = await axios({
            url: encodeURI(`${baseUrl}/${url}${queryParams}`),
            responseType: "json",
            headers: this.token
                ? { Authorization: this.token, "User-Agent": `unofficial-valorant-api/node.js/${packageJson.version}`, }
                : { "User-Agent": `unofficial-valorant-api/node.js/${packageJson.version}`, },
            ...config
        }).catch(error => error);

        // Formatting response
        return {
            status: req.response ? req.response.status : req.status,
            data: req.response ? null : !req.config.headers["Content-Type"] ? this.parseBody(req.data) : req.data,
            rateLimits: {
                used: Number(req.response ? req.response.headers["x-ratelimit-limit"] : req.headers["x-ratelimit-limit"]),
                remaining: Number(req.response ? req.response.headers["x-ratelimit-remaining"] : req.headers["x-ratelimit-remaining"]),
                reset: Number(req.response ? req.response.headers["x-ratelimit-reset"] : req.headers["x-ratelimit-reset"]),
            },
            error: req.response ? this.parseBody(req.response.data) : null,
            url: req.config.url
        };
    }

    /**
	 * @internal
	 * Make sure each key has a non empty value
	 * @param input - Object to check for non empty values
	 * @throws {@link TypeError} - Only if there is a empty value to a key
	 */
    private async validateArgs(input: { [key: string]: any }) {
        Object.keys(input).forEach(key => {
            if (input[key] === null || input[key] === undefined) throw new TypeError(`Missing parameter: "${key}"`);
        });
    }

    /**
	 * Get an image of a valorant crosshair by its code
	 * @example
	 * Load and write a crosshair to crosshair.png
	 * ```js
	 * import { writeFileSync } from "fs"
	 * 
	 * const crosshair = await default.getCrosshair("0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0;S;c;4;o;1")
	 * writeFileSync("crosshair.png", crosshair.data)
	 * ```
	 * @param args.code - Valorant crosshair code
	 * @param args.size - (optional) Image size (default: `1024`)
	 * @returns The image of the crosshair as a {@link Buffer}
	 */
    async getCrosshair({ code, size }: { code: string, size?: number }): Promise<APIResponse<CrosshairResponse>> {
        this.validateArgs({ code });
        return this.fetch<CrosshairResponse>("v1/crosshair/generate", { id: code, size }, {
            responseType: "arraybuffer"
        });
    }

    /**
	 * Get all announcements from the valorant website of a country
	 * @param args.countryCode - Country code of website
	 * @returns List of announcements from the valorant website
	 */
    async getWebsite({ countryCode }: { countryCode: "en-us" | "en-gb" | "de-de" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pt-br" | "ru-ru" | "tr-tr" | "vi-vn" }): Promise<APIResponse<WebsiteResponse>> {
        this.validateArgs({ countryCode });
        return this.fetch<WebsiteResponse>(`v1/website/${countryCode}`);
    }

    /**
	 * Get information about valorant in a region, such as the client version, branch, and server version
	 * @param args.region - Region of valorant to get info about
	 * @returns Information about a regions valorant
	 */
    async getVersion({ region }: { region: Region }): Promise<APIResponse<VersionResponse>> {
        this.validateArgs({ region });
        return this.fetch<VersionResponse>(`v1/version/${region}`);
    }

    /**
	 * Get all of the featured items in the current valorant store
	 * @returns Featured items in the current valorant store
	 */
    async getFeaturedItems(): Promise<APIResponse<FeaturedItemsResponse>> {
        // ! v2 is bugged for some reason
        return this.fetch<FeaturedItemsResponse>("v2/store-featured");
    }

    /**
	 * Get a list of all the prices of every skin in the game
	 * @returns List of skin prices
	 */
    async getOffers(): Promise<APIResponse<StoreOffersResponse>> {
        // ! find out wtf this actually does
        return this.fetch<StoreOffersResponse>("v1/store-offers");
    }

    /**
	 * Will get information about the current maintenances and incidents about a region
	 * @param args.region - Region to get info about
	 * @returns Info about undergoing maintenances and incidents in a region of valorant
	 */
    async getStatus({ region }: { region: Region }): Promise<APIResponse<StatusResponse>> {
        this.validateArgs({ region });
        return this.fetch<StatusResponse>(`v1/status/${region}`);
    }

    /**
	 * Gets raw data for a match from the valorant API. (Not formatted, use only if you know what you are doing)
	 * @see {@link default.getMatch} for an easier response to use
	 * @param args.matchID - The match ID to get details about
	 * @param args.region - Region of the match
	 * @param args.queries - Extra queries. See {@link https://github.com/techchrism/valorant-api-docs/blob/trunk/docs/PVP%20Endpoints/GET%20MatchDetails_FetchMatchDetails.md documentation}
	 * @returns Information about the match
	 */
    async getRawMatchDetails({ matchID, region, queries }: { matchID: string, region: Region, queries?: any }): Promise<APIResponse<RawMatchDetailsResponse>> {
        this.validateArgs({ matchID, region });
        return await this.fetch<RawMatchDetailsResponse>("v1/raw", null, {
            data: { type: "matchdetails", value: matchID, region, ...queries },
            method: "POST"
        });
    }

    /**
	 * Gets raw data for a players match history from the valorant API. (Not formatted, use only if you know what you are doing)
	 * @see {@link default.getMatches} for an easier response to use
	 * @param args.puuid - The match ID to get details about
	 * @param args.region - Region of the player
	 * @param args.queries - Extra queries. See {@link https://github.com/techchrism/valorant-api-docs/blob/trunk/docs/PVP%20Endpoints/GET%20MatchHistory_FetchMatchHistory.md documentation}
	 * @returns Information about the players match history
	 */
    async getRawMatchHistory({ puuid, region, queries }: { puuid: string, region: Region, queries?: any }): Promise<APIResponse<RawMatchHistoryResponse>> {
        this.validateArgs({ puuid, region });
        return await this.fetch<RawMatchHistoryResponse>("v1/raw", null, {
            data: { type: "matchhistory", value: puuid, region, ...queries },
            method: "POST"
        });
    }

    /**
	 * Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**
	 * @see {@link default.getMMRHistory} for an easier response to use
	 * @param args.puuid - The match ID to get details about
	 * @param args.region - Region of the player
	 * @param args.queries - Extra queries. See {@link https://github.com/techchrism/valorant-api-docs/blob/trunk/docs/PVP%20Endpoints/GET%20MMR_FetchCompetitiveUpdates.md documentation}
	 * @returns Information about the players rr history
	 */
    async getRawCompetitiveUpdates({ puuid, region, queries }: { puuid: string, region: Region, queries?: any }): Promise<APIResponse<RawCompetitiveUpdatesResponse>> {
        this.validateArgs({ puuid, region });
        return await this.fetch<RawCompetitiveUpdatesResponse>("v1/raw", null, {
            data: { type: "mmr", value: puuid, region, ...queries },
            method: "POST"
        });
    }

    /**
	 * Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**
	 * @see {@link default.getMMR} for an easier response to use
	 * @param args.puuid - The match ID to get details about
	 * @param args.region - Region of the player
	 * @param args.queries - Extra queries. See {@link https://github.com/techchrism/valorant-api-docs/blob/trunk/docs/PVP%20Endpoints/GET%20MMR_FetchPlayer.md documentation}
	 * @returns Information about the players mmr
	 */
    async getRawMMR({ puuid, region, queries }: { puuid: string, region: Region, queries?: any }): Promise<APIResponse<RawMMRResponse>> {
        this.validateArgs({ puuid, region });
        return await this.fetch<RawMMRResponse>("v1/raw", null, {
            data: { type: "competitiveupdates", value: puuid, region, ...queries },
            method: "POST"
        });
    }

    /**
	 * Get a list of rr changes of a player by their Riot ID
	 * @param args.name - The Riot ID username of the player
	 * @param args.tag - The Riot tag username of the player
	 * @param args.region - The players region
	 * @return List of rr changes (recent competitive games)
	 */
    async getMMRHistory({ name, tag, region }: { name: string, tag: string, region: Region }): Promise<APIResponse<MMRHistoryResponse>> {
        this.validateArgs({ name, tag, region });
        return this.fetch<MMRHistoryResponse>(`v1/mmr-history/${region}/${name}/${tag}`);
    }

    /**
	 * Get a list of rr changes of a player by their PUUID
	 * @param args.puuid - The PUUID of the player
	 * @param args.region - The players region
	 * @return List of rr changes (recent competitive games)
    */
    async getMMRHistoryByPUUID({ puuid, region }: { puuid: string, region: Region }): Promise<APIResponse<MMRHistoryResponse>> {
        this.validateArgs({ puuid, region });
        return this.fetch<MMRHistoryResponse>(`v1/by-puuid/mmr-history/${region}/${puuid}`);
    }

    /**
	 * Get information about a match
	 * @param args.matchID - The matchs ID
	 * @returns Information about the match
	 */
    async getMatch({ matchID }: { matchID: string }): Promise<APIResponse<MatchResponse>> {
        this.validateArgs({ matchID });
        return this.fetch<MatchResponse>(`v2/match/${matchID}`);
    }

    /**
	 * Get the leaderboard of a region
	 * @remarks
	 * In order for player filtering to work, they must be Immortal or higher
	 * @param args.region - Region to get leaderboard from
	 * @returns Descending order of the highest ranked players. (Immortal and up)
	 * @throws {@link TypeError} - If both a riotID and puuid are supplied
	 */
    async getLeaderboard({ region }: { region: Region }): Promise<APIResponse<LeaderboardResponse>> {
        this.validateArgs({ region });
        return this.fetch<LeaderboardResponse>(`v2/leaderboard/${region}`);
    }

    /**
	 * Get the leaderboard of a region
	 * @remarks
	 * In order for player filtering to work, they must be Immortal or higher
	 * @param args.region - Region to get leaderboard from
	 * @param args.start - (optional) Get 1000 leaderboard players starting from the given start value
	 * @param args.end - (optional) Limit the amount of leaderboard players returned
	 * @param args.riotID - (optional) Search for a specific player by their Riot ID
	 * @param args.riotID.name - The Riot IDs username
	 * @param args.riotID.tag - The Riot IDs tag
	 * @param args.puuid - (optional) Search for a specific player by their PUUID
	 * @param args.season - (optional) Get leaderboard from a specific season
	 * @returns Descending order of the highest ranked players. (Immortal and up)
	 * @throws {@link TypeError} - If both a riotID and puuid are supplied
	 */
    async getLeaderboardV1({ region, start, end, riotID, puuid, season }: { region: Region, start?: number, end?: number, riotID?: { name: string, tag: string} , puuid?: string, season?: Season }): Promise<APIResponse<V1LeaderboardResponse>> {
        if (riotID && puuid) throw new TypeError("Too many parameters: You can't search for a Riot ID and puuid at the same time, please decide between Riot ID and puuid");

        this.validateArgs({ region });
        return this.fetch<V1LeaderboardResponse>(`v1/leaderboard/${region}`, { start, end, name: riotID?.name, tag: riotID?.tag, puuid, season });
    }

    /**
	 * Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game
	 * @param args.locale - If this is set, instead of all translations, it will return just translations for this language
	 */
    async getTranslations({ locale }: { locale?: Locale } = {}): Promise<APIResponse<ContentResponse>> {
        return this.fetch<ContentResponse>("v1/content", { locale });
    }

    /**
	 * Gets general info about a players rank by their Riot ID
	 * @remarks
	 * **Returns:**
	 * - Current rank and info about their rank
	 * - RR change on their last game
	 * - Their PUUID
	 * - Their peak rank from every season
	 * @param args.name - The Riot ID username of the player
	 * @param args.tag - The Riot ID tag of the player
	 * @param args.region - The region of the player
	 * @param args.seasonFilter - Filter results based on episode and act
	 * @returns Information about a players mmr/rank
	 */
    async getMMR({ name, tag, region, seasonFilter }: { name: string, tag: string, region: Region, seasonFilter?: Season }): Promise<APIResponse<MMRResponse>> {
        this.validateArgs({ name, tag, region });
        return this.fetch<MMRResponse>(`v2/mmr/${region}/${name}/${tag}`, { filter: seasonFilter });
    }

    /**
	 * Gets general info about a players rank by their PUUID
	 * @remarks
	 * **Returns:**
	 * - Current rank and info about their rank
	 * - RR change on their last game
	 * - Their PUUID
	 * - Their peak rank from every season
	 * @param args.puuid - The PUUID of the player
	 * @param args.region - The region of the player
	 * @param args.seasonFilter - Filter results based on episode and act
	 * @returns Information about a players mmr/rank
	 */
    async getMMRByPUUID({ puuid, region, seasonFilter }: { puuid: string, region: Region, seasonFilter?: Season }): Promise<APIResponse<MMRResponse>> {
        this.validateArgs({ puuid, region });
        return this.fetch<MMRResponse>(`v2/by-puuid/mmr/${region}/${puuid}`, { filter: seasonFilter });
    }

    /**
	 * Gets the most recent 5 matches by a players Riot ID
	 * @remarks
	 * **Returns:**
	 * - Info about most recent 5 matches including:
	 * 	- Metadata info about the match such as length, time, map, score, etc
	 * 	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	 * 	- Information about every round in the match such as plant/defuse info, etc
	 * 	- Information about every kill in the game including killer, victim, assist, etc
	 * @param args.name - The Riot ID username of the player
	 * @param args.tag - The Riot ID tag of the player
	 * @param args.region - The region of the player
	 * @param args.gamemodeFilter - Filter results based on gamemode
	 * @param args.mapFilter - Filter results based on map
	 * @param args.size - Return a specific amount of matches (1-10)
	 * @returns Info about a players last 5 matches
	 * @throws {@link TypeError} - Only if the size parameter is set and not between 1-10
	*/
    async getMatches({ name, tag, region, gamemodeFilter, mapFilter, size }: { name: string, tag: string, region: Region, gamemodeFilter?: Mode, mapFilter?: ValorantMap, size?: number }): Promise<APIResponse<MatchesResponse>> {
        this.validateArgs({ name, tag, region });
        if (size && (size > 10 || size < 1)) throw new TypeError("Invalid size parameter. Size must be between 1-10!");
        return this.fetch<MatchesResponse>(`v3/matches/${region}/${name}/${tag}`, { filter: gamemodeFilter, map: mapFilter, size });
    }

    /**
	 * Gets the most recent 5 matches by a players PUUID
	 * @remarks
	 * **Returns:**
	 * - Info about most recent 5 matches including:
	 * 	- Metadata info about the match such as length, time, map, score, etc
	 * 	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	 * 	- Information about every round in the match such as plant/defuse info, etc
	 * 	- Information about every kill in the game including killer, victim, assist, etc
	 * @param args.puuid - The PUUID username of the player
	 * @param args.region - The region of the player
	 * @param args.gamemodeFilter - Filter results based on gamemode
	 * @param args.mapFilter - Filter results based on map
	 * @param args.size - Return a specific amount of matches (1-10)
	 * @returns Info about a players last 5 matches
	 * @throws {@link TypeError} - Only if the size parameter is set and not between 1-10
	*/
    async getMatchesByPUUID({ puuid, region, gamemodeFilter, mapFilter, size }: { puuid: string, region: Region, gamemodeFilter?: Mode, mapFilter?: ValorantMap, size?: number }): Promise<APIResponse<MatchesResponse>> {
        this.validateArgs({ name: puuid, region });
        if (size && (size > 10 || size < 1)) throw new TypeError("Invalid size parameter. Size must be between 1-10!");
        return this.fetch<MatchesResponse>(`by-puuid/matches/${region}/${puuid}`, { filter: gamemodeFilter, map: mapFilter, size });
    }

    /**
	 * Get general information about a player from their Riot ID
	 * @remarks
	 * **Returns:**
	 * - Their PUUID
	 * - Their region
	 * - Their account level
	 * - Their current card
	 * @param args.name - The Riot ID username of the player
	 * @param args.tag - The Riot ID tag of the player
	 * @param args.force - Force data update?
	 * @return General information on a players profile
	 */
    async getAccount({ name, tag, force }: { name: string, tag: string, force?: boolean }): Promise<APIResponse<AccountResponse>> {
        this.validateArgs({ name, tag });
        return this.fetch<AccountResponse>(`v1/account/${name}/${tag}`, { force });
    }

    /**
	 * Get general information about a player from their PUUID
	 * @remarks
	 * **Returns:**
	 * - Their PUUID
	 * - Their region
	 * - Their account level
	 * - Their current card
	 * @param args.puuid The PUUID of the player
	 * @param args.force Force data update?
	 * @return General information on a players profile
	*/
    async getAccountByPUUID({ puuid, force }: { puuid: string, force?: boolean }): Promise<APIResponse<AccountResponse>> {
        this.validateArgs({ name: puuid });
        return this.fetch<AccountResponse>(`v1/by-puuid/account/${puuid}`, { force });
    }
}
