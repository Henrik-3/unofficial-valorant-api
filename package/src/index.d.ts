export declare enum Episodes {
    Episode1Act1 = 'e1a1',
    Episode1Act2 = 'e1a2',
    Episode1Act3 = 'e1a3',
    Episode2Act1 = 'e2a1',
    Episode2Act2 = 'e2a2',
    Episode2Act3 = 'e2a3',
    Episode3Act1 = 'e3a1',
    Episode3Act2 = 'e3a2',
    Episode3Act3 = 'e3a3',
    Episode4Act1 = 'e4a1',
    Episode4Act2 = 'e4a2',
    Episode4Act3 = 'e4a3',
    Episode5Act1 = 'e5a1',
    Episode5Act2 = 'e5a2',
    Episode5Act3 = 'e5a3',
}

export declare enum Modes {
    Escalation = 'escalation',
    SpikeRush = 'spikerush',
    Deathmatch = 'deathmatch',
    Competitive = 'competitive',
    Unrated = 'unrated',
    Replication = 'replication',
    Custom = 'custom',
    NewMap = 'newmap',
    Snowball = 'snowball',
}

export declare enum Maps {
    Ascent = 'ascent',
    Split = 'split',
    Fracture = 'fracture',
    Bind = 'bind',
    Breeze = 'breeze',
    Icebox = 'icebox',
    Haven = 'haven',
    Pearl = 'pearl',
}

export declare enum Locales {
    Arabic = 'ar-AE',
    German = 'de-DE',
    EnglishGB = 'en-GB',
    EnglishUS = 'en-US',
    Spanish = 'es-ES',
    Mexican = 'es-MX',
    French = 'fr-FR',
    Indonesian = 'id-ID',
    Italian = 'it-IT',
    Japanese = 'ja-JP',
    Korean = 'ko-KR',
    Polish = 'pl-PL',
    Portuguese = 'pt-BR',
    Russian = 'ru-RU',
    Thailand = 'th-TH',
    Turkish = 'tr-TR',
    Vietnamese = 'vi-VN',
    Czech = 'zn-CN',
    Taiwanese = 'zn-TW',
}

export declare enum MMRVersions {
    Version1 = 'v1',
    Version2 = 'v2',
}

export declare enum Regions {
    Europe = 'eu',
    NorthAmerica = 'na',
    Korea = 'kr',
    Asia = 'ap',
    LatinAmerica = 'latam',
    Brazil = 'br',
}

export class HenrikDevValorantAPI {
    private _parsebody(body: any): any;
    private _parseresponse(req: any): APIResponse;
    private _validate(input: any): any;
    private _fetch(options: _fetch): Promise<APIResponse>;
    public getAccount(options: AccountFetchOptions): Promise<APIResponse>;
    public getMMRByPUUID(options: getMMRByPUUIDFetchOptions): Promise<APIResponse>;
    public getMMRHistoryByPUUID(options: getMMRHistoryByPUUIDFetchOptions): Promise<APIResponse>;
    public getMatchesByPUUID(options: getMatchesByPUUIDFetchOptions): Promise<APIResponse>;
    public getContent(options: getContentFetchOptions): Promise<APIResponse>;
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

export interface getMMRByPUUIDFetchOptions {
    version: MMRVersions;
    region: Regions;
    puuid: string;
    filter?: Episodes;
}

export interface getMMRByPUUIDFetchOptions {
    region: Regions;
    puuid: string;
}

export interface getMatchesByPUUIDFetchOptions {
    region: Regions;
    puuid: string;
    filter?: Modes;
    map?: Maps;
    size?: int;
}

export interface getContentFetchOptions {
    locale?: Locales;
}
