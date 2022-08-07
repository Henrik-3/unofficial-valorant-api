export type Episodes = 'e1a1' | 'e1a2' | 'e1a3' | 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3';

export type LeaderboardEpisodes = 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3';

export type Modes = 'escalation' | 'spikerush' | 'deathmatch' | 'competitive' | 'unrated' | 'replication' | 'custom' | 'newmap' | 'snowball';

export type Maps = 'ascent' | 'split' | 'fracture' | 'bind' | 'breeze' | 'icebox' | 'haven' | 'pearl';

export type CCRegions = 'en-gb' | 'en-us' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn';

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

export type RawTypes = 'competitiveupdates' | 'mmr' | 'matchdetails' | 'matchhistory';

export type MMRVersions = 'v1' | 'v2';

export type FeaturedItemsVersion = 'v1' | 'v2';

export type LeaderboardVersions = 'v1' | 'v2';

export type Regions = 'eu' | 'na' | 'kr' | 'ap' | 'latam' | 'br';

export default class {
    private _parsebody(body: any): any;
    private _parseresponse(req: any): APIResponse;
    private _validate(input: any): any;
    private _fetch(options: _fetch): Promise<APIResponse>;
    public getAccount(options: AccountFetchOptions): Promise<APIResponse>;
    public getAccountByPUUID(options: AccountFetchByPUUIDOptions): Promise<APIResponse>;
    public getMMRByPUUID(options: getMMRByPUUIDFetchOptions): Promise<APIResponse>;
    public getMMRHistoryByPUUID(options: getMMRHistoryByPUUIDFetchOptions): Promise<APIResponse>;
    public getMatchesByPUUID(options: getMatchesByPUUIDFetchOptions): Promise<APIResponse>;
    public getContent(options: getContentFetchOptions): Promise<APIResponse>;
    public getLeaderboard(options: getLeaderboardOptions): Promise<APIResponse>;
    public getMatches(options: getMatchesFetchOptions): Promise<APIResponse>;
    public getMatch(options: getMatchFetchOptions): Promise<APIResponse>;
    public getMMRHistory(options: getMMRHistoryFetchOptions): Promise<APIResponse>;
    public getMMR(options: getMMRFetchOptions): Promise<APIResponse>;
    public getRawData(options: getRawFetchOptions): Promise<APIResponse>;
    public getStatus(options: getStatusFetchOptions): Promise<APIResponse>;
    public getFeaturedItems(options: getFeaturedItemsFetchOptions): Promise<APIResponse>;
    public getOffers(): Promise<APIResponse>;
    public getVersion(options: getVersionFetchOptions): Promise<APIResponse>;
    public getWebsite(options: getWebsiteFetchOptions): Promise<APIResponse>;
    public getCrosshair(options: getCrosshairFetchOptions): Promise<APIResponse>;
}

export interface _fetch {
    url: string;
    type: string;
}

export interface APIResponse {
    status: number;
    data: object | null;
    ratelimits: RateLimit;
    error: ErrorObject | null;
}

export interface ErrorObject {
    message: string;
}

export interface RateLimit {
    used: number;
    remaining: number;
    reset: number;
}

export interface AccountFetchOptions {
    name: string;
    tag: string;
    force?: boolean;
}

export interface AccountFetchByPUUIDOptions {
    puuid: string;
    force?: boolean;
}

export interface getMMRByPUUIDFetchOptions {
    version: MMRVersions;
    region: Regions;
    puuid: string;
    filter?: Episodes;
}

export interface getMMRHistoryByPUUIDFetchOptions {
    region: Regions;
    puuid: string;
}

export interface getMatchesByPUUIDFetchOptions {
    region: Regions;
    puuid: string;
    filter?: Modes;
    map?: Maps;
    size?: number;
}

export interface getContentFetchOptions {
    locale?: Locales;
}

export interface getLeaderboardOptions {
    version: LeaderboardVersions;
    region: Regions;
    name?: string;
    tag?: string;
    puuid?: string;
    season?: LeaderboardEpisodes;
}

export interface getMatchesFetchOptions {
    region: Regions;
    name: string;
    tag: string;
    filter?: Modes;
    map?: Maps;
    size?: number;
}

export interface getMatchFetchOptions {
    match_id: string;
}

export interface getMMRHistoryFetchOptions {
    region: Regions;
    name: string;
    tag: string;
}

export interface getMMRFetchOptions {
    version: MMRVersions;
    region: Regions;
    name: string;
    tag: string;
    filter?: Episodes;
}

export interface getRawFetchOptions {
    type: RawTypes;
    uuid: string;
    region: Regions;
    queries: string;
}

export interface getStatusFetchOptions {
    region: Regions;
}

export interface getVersionFetchOptions {
    region: Regions;
}

export interface getWebsiteFetchOptions {
    country_code: CCRegions;
    filter?: string;
}

export interface getCrosshairFetchOptions {
    code: string;
    size?: number;
}

export interface getFeaturedItemsFetchOptions {
    version: FeaturedItemsVersion;
}
