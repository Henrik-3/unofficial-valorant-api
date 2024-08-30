/**
 * Available episodes.
 * @typedef {'e1a1' | 'e1a2' | 'e1a3' | 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3'} Episodes
 */
export type Episodes = 'e1a1' | 'e1a2' | 'e1a3' | 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3';

/**
 * Available leaderboard episodes.
 * @typedef {'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3'} LeaderboardEpisodes
 */
export type LeaderboardEpisodes = 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3';

/**
 * Available game modes.
 * @typedef {'escalation' | 'spikerush' | 'deathmatch' | 'competitive' | 'unrated' | 'replication' | 'custom' | 'newmap' | 'snowball'} Modes
 */
export type Modes = 'escalation' | 'spikerush' | 'deathmatch' | 'competitive' | 'unrated' | 'replication' | 'custom' | 'newmap' | 'snowball';

/**
 * Available maps.
 * @typedef {'ascent' | 'split' | 'fracture' | 'bind' | 'breeze' | 'icebox' | 'haven' | 'pearl'} Maps
 */
export type Maps = 'ascent' | 'split' | 'fracture' | 'bind' | 'breeze' | 'icebox' | 'haven' | 'pearl';

/**
 * Available country codes for website fetch options.
 * @typedef {'en-gb' | 'en-us' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn'} CCRegions
 */
export type CCRegions = 'en-gb' | 'en-us' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn';

/**
 * Available locales.
 * @typedef {'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW'} Locales
 */
export type Locales =
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

/**
 * Available raw data types.
 * @typedef {'competitiveupdates' | 'mmr' | 'matchdetails' | 'matchhistory'} RawTypes
 */
export type RawTypes = 'competitiveupdates' | 'mmr' | 'matchdetails' | 'matchhistory';

/**
 * Available MMR versions.
 * @typedef {'v1' | 'v2'} MMRVersions
 */
export type MMRVersions = 'v1' | 'v2';

/**
 * Available featured items versions.
 * @typedef {'v1' | 'v2'} FeaturedItemsVersion
 */
export type FeaturedItemsVersion = 'v1' | 'v2';

/**
 * Available leaderboard versions.
 * @typedef {'v1' | 'v2'} LeaderboardVersions
 */
export type LeaderboardVersions = 'v1' | 'v2';

/**
 * Available regions.
 * @typedef {'eu' | 'na' | 'kr' | 'ap' | 'latam' | 'br'} Regions
 */
export type Regions = 'eu' | 'na' | 'kr' | 'ap' | 'latam' | 'br';

/**
 * Class representing the API client.
 */
export default class APIClient {
    /**
     * Parse the body of the response.
     * @private
     * @param {any} body - The body of the response.
     * @returns {any} - Parsed body.
     */
    private _parsebody(body: any): any;

    /**
     * Parse the response.
     * @private
     * @param {any} req - The request.
     * @returns {APIResponse} - Parsed response.
     */
    private _parseresponse(req: any): APIResponse;

    /**
     * Validate the input.
     * @private
     * @param {any} input - The input to validate.
     * @returns {any} - Validated input.
     */
    private _validate(input: any): any;

    /**
     * Fetch data from the API.
     * @private
     * @param {_fetch} options - Fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    private _fetch(options: _fetch): Promise<APIResponse>;

    /**
     * Get account details.
     * @param {AccountFetchOptions} options - Account fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getAccount(options: AccountFetchOptions): Promise<APIResponse>;

    /**
     * Get account details by PUUID.
     * @param {AccountFetchByPUUIDOptions} options - Account fetch by PUUID options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getAccountByPUUID(options: AccountFetchByPUUIDOptions): Promise<APIResponse>;

    /**
     * Get MMR by PUUID.
     * @param {getMMRByPUUIDFetchOptions} options - MMR by PUUID fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getMMRByPUUID(options: getMMRByPUUIDFetchOptions): Promise<APIResponse>;

    /**
     * Get MMR history by PUUID.
     * @param {getMMRHistoryByPUUIDFetchOptions} options - MMR history by PUUID fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getMMRHistoryByPUUID(options: getMMRHistoryByPUUIDFetchOptions): Promise<APIResponse>;

    /**
     * Get matches by PUUID.
     * @param {getMatchesByPUUIDFetchOptions} options - Matches by PUUID fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getMatchesByPUUID(options: getMatchesByPUUIDFetchOptions): Promise<APIResponse>;

    /**
     * Get content.
     * @param {getContentFetchOptions} options - Content fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getContent(options: getContentFetchOptions): Promise<APIResponse>;

    /**
     * Get leaderboard.
     * @param {getLeaderboardOptions} options - Leaderboard fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getLeaderboard(options: getLeaderboardOptions): Promise<APIResponse>;

    /**
     * Get matches.
     * @param {getMatchesFetchOptions} options - Matches fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getMatches(options: getMatchesFetchOptions): Promise<APIResponse>;

    /**
     * Get match details.
     * @param {getMatchFetchOptions} options - Match fetch options.
 * @returns {Promise<APIResponse>} - The API response.
     */
    public getMatch(options: getMatchFetchOptions): Promise<APIResponse>;

    /**
     * Get MMR history.
     * @param {getMMRHistoryFetchOptions} options - MMR history fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getMMRHistory(options: getMMRHistoryFetchOptions): Promise<APIResponse>;

    /**
     * Get lifetime MMR history.
     * @param {getLifetimeMMRHistoryFetchOptions} options - Lifetime MMR history fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getLifetimeMMRHistory(options: getLifetimeMMRHistoryFetchOptions): Promise<APIResponse>;

    /**
     * Get MMR.
     * @param {getMMRFetchOptions} options - MMR fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getMMR(options: getMMRFetchOptions): Promise<APIResponse>;

    /**
     * Get raw data.
     * @param {getRawFetchOptions} options - Raw data fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getRawData(options: getRawFetchOptions): Promise<APIResponse>;

    /**
     * Get server status.
     * @param {getStatusFetchOptions} options - Status fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getStatus(options: getStatusFetchOptions): Promise<APIResponse>;

    /**
     * Get featured items.
     * @param {getFeaturedItemsFetchOptions} options - Featured items fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getFeaturedItems(options: getFeaturedItemsFetchOptions): Promise<APIResponse>;

    /**
     * Get offers.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getOffers(): Promise<APIResponse>;

    /**
     * Get game version.
     * @param {getVersionFetchOptions} options - Version fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getVersion(options: getVersionFetchOptions): Promise<APIResponse>;

    /**
     * Get website data.
     * @param {getWebsiteFetchOptions} options - Website fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getWebsite(options: getWebsiteFetchOptions): Promise<APIResponse>;

    /**
     * Get crosshair settings.
     * @param {getCrosshairFetchOptions} options - Crosshair fetch options.
     * @returns {Promise<APIResponse>} - The API response.
     */
    public getCrosshair(options: getCrosshairFetchOptions): Promise<APIResponse>;
}

/**
 * Fetch options.
 * @typedef {Object} _fetch
 * @property {string} url - The URL to fetch.
 * @property {string} type - The type of fetch.
 */
export interface _fetch {
    url: string;
    type: string;
}

/**
 * API response.
 * @typedef {Object} APIResponse
 * @property {number} status - The status code of the response.
 * @property {object|null} data - The data of the response.
 * @property {RateLimit} ratelimits - The rate limits of the response.
 * @property {ErrorObject|null} error - The error object of the response.
 */
export interface APIResponse {
    status: number;
    data: object | null;
    ratelimits: RateLimit;
    error: ErrorObject | null;
}

/**
 * Error object.
 * @typedef {Object} ErrorObject
 * @property {string} message - The error message.
 */
export interface ErrorObject {
    message: string;
}

/**
 * Rate limit object.
 * @typedef {Object} RateLimit
 * @property {number} used - The used rate limit.
 * @property {number} remaining - The remaining rate limit.
 * @property {number} reset - The reset time for the rate limit.
 */
export interface RateLimit {
    used: number;
    remaining: number;
    reset: number;
}

/**
 * Account fetch options.
 * @typedef {Object} AccountFetchOptions
 * @property {string} name - The account name.
 * @property {string} tag - The account tag.
 * @property {boolean} [force] - Force fetch the account.
 */
export interface AccountFetchOptions {
    name: string;
    tag: string;
    force?: boolean;
}

/**
 * Account fetch by PUUID options.
 * @typedef {Object} AccountFetchByPUUIDOptions
 * @property {string} puuid - The PUUID of the account.
 * @property {boolean} [force] - Force fetch the account.
 */
export interface AccountFetchByPUUIDOptions {
    puuid: string;
    force?: boolean;
}

/**
 * MMR by PUUID fetch options.
 * @typedef {Object} getMMRByPUUIDFetchOptions
 * @property {MMRVersions} version - The version of MMR.
 * @property {Regions} region - The region.
 * @property {string} puuid - The PUUID of the account.
 * @property {Episodes} [filter] - The episode filter.
 */
export interface getMMRByPUUIDFetchOptions {
    version: MMRVersions;
    region: Regions;
    puuid: string;
    filter?: Episodes;
}

/**
 * MMR history by PUUID fetch options.
 * @typedef {Object} getMMRHistoryByPUUIDFetchOptions
 * @property {Regions} region - The region.
 * @property {string} puuid - The PUUID of the account.
 */
export interface getMMRHistoryByPUUIDFetchOptions {
    region: Regions;
    puuid: string;
}

/**
 * Matches by PUUID fetch options.
 * @typedef {Object} getMatchesByPUUIDFetchOptions
 * @property {Regions} region - The region.
 * @property {string} puuid - The PUUID of the account.
 * @property {Modes} [filter] - The mode filter.
 * @property {Maps} [map] - The map filter.
 * @property {number} [size] - The size of the result.
 */
export interface getMatchesByPUUIDFetchOptions {
    region: Regions;
    puuid: string;
    filter?: Modes;
    map?: Maps;
    size?: number;
}

/**
 * Content fetch options.
 * @typedef {Object} getContentFetchOptions
 * @property {Locales} [locale] - The locale.
 */
export interface getContentFetchOptions {
    locale?: Locales;
}

/**
 * Leaderboard fetch options.
 * @typedef {Object} getLeaderboardOptions
 * @property {LeaderboardVersions} version - The version of the leaderboard.
 * @property {Regions} region - The region.
 * @property {string} [name] - The account name.
 * @property {string} [tag] - The account tag.
 * @property {string} [puuid] - The PUUID of the account.
 * @property {LeaderboardEpisodes} [season] - The season.
 */
export interface getLeaderboardOptions {
    version: LeaderboardVersions;
    region: Regions;
    name?: string;
    tag?: string;
    puuid?: string;
    season?: LeaderboardEpisodes;
}

/**
 * Matches fetch options.
 * @typedef {Object} getMatchesFetchOptions
 * @property {Regions} region - The region.
 * @property {string} name - The account name.
 * @property {string} tag - The account tag.
 * @property {Modes} [filter] - The mode filter.
 * @property {Maps} [map] - The map filter.
 * @property {number} [size] - The size of the result.
 */
export interface getMatchesFetchOptions {
    region: Regions;
    name: string;
    tag: string;
    filter?: Modes;
    map?: Maps;
    size?: number;
}

/**
 * Match fetch options.
 * @typedef {Object} getMatchFetchOptions
 * @property {string} match_id - The ID of the match.
 */
export interface getMatchFetchOptions {
    match_id: string;
}

/**
 * MMR history fetch options.
 * @typedef {Object} getMMRHistoryFetchOptions
 * @property {Regions} region - The region.
 * @property {string} name - The account name.
 * @property {string} tag - The account tag.
 */
export interface getMMRHistoryFetchOptions {
    region: Regions;
    name: string;
    tag: string;
}

/**
 * Lifetime MMR history fetch options.
 * @typedef {Object} getLifetimeMMRHistoryFetchOptions
 * @property {Regions} region - The region.
 * @property {string} name - The account name.
 * @property {string} tag - The account tag.
 * @property {number} [page] - The page number.
 * @property {number} [size] - The size of the result.
 */
export interface getLifetimeMMRHistoryFetchOptions {
    region: Regions;
    name: string;
    tag: string;
    page?: number;
    size?: number;
}

/**
 * MMR fetch options.
 * @typedef {Object} getMMRFetchOptions
 * @property {MMRVersions} version - The version of MMR.
 * @property {Regions} region - The region.
 * @property {string} name - The account name.
 * @property {string} tag - The account tag.
 * @property {Episodes} [filter] - The episode filter.
 */
export interface getMMRFetchOptions {
    version: MMRVersions;
    region: Regions;
    name: string;
    tag: string;
    filter?: Episodes;
}

/**
 * Raw data fetch options.
 * @typedef {Object} getRawFetchOptions
 * @property {RawTypes} type - The type of raw data.
 * @property {Regions} region - The region.
 * @property {string} name - The account name.
 * @property {string} tag - The account tag.
 * @property {string} [puuid] - The PUUID of the account.
 */
export interface getRawFetchOptions {
    type: RawTypes;
    uuid: string;
    region: Regions;
    queries: string;
}

/**
 * Status fetch options.
 * @typedef {Object} getStatusFetchOptions
 * @property {Regions} region - The region.
 */
export interface getStatusFetchOptions {
    region: Regions;
}

/**
 * Featured items fetch options.
 * @typedef {Object} getFeaturedItemsFetchOptions
 * @property {FeaturedItemsVersion} version - The version of featured items.
 */
export interface getFeaturedItemsFetchOptions {
    version: FeaturedItemsVersion;
}

/**
 * Version fetch options.
 * @typedef {Object} getVersionFetchOptions
 * @property {Regions} region - The region.
 */
export interface getVersionFetchOptions {
    region: Regions;
}

/**
 * Website fetch options.
 * @typedef {Object} getWebsiteFetchOptions
 * @property {CCRegions} region - The region code.
 * @property {string} [locale] - The locale.
 */
export interface getWebsiteFetchOptions {
    region: CCRegions;
    locale?: string;
}

/**
 * Crosshair fetch options.
 * @typedef {Object} getCrosshairFetchOptions
 * @property {string} code - The crosshair code.
 * @property {number} [size] - The size of the crosshair.
 */
export interface getCrosshairFetchOptions {
    code: string;
    size?: number;
}

/**
 * Fetch options for retrieving featured items.
 * @typedef {Object} getFeaturedItemsFetchOptions
 * @property {FeaturedItemsVersion} version - The version of the featured items.
 */
export interface getFeaturedItemsFetchOptions {
    version: FeaturedItemsVersion;
}