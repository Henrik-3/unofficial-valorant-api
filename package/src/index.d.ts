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

export declare enum getMMRByPUUIDVersions {
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
    private _parseresponse;
    public getAccount(options: AccountFetchOptions): Promise<APIResponse>;
    public getMMRByPUUID(options: getMMRByPUUIDFetchOptions): Promise<APIResponse>;
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
}

export interface getMMRByPUUIDFetchOptions {
    version: getMMRByPUUIDVersions;
    region: Regions;
    puuid: string;
    filter?: string;
}
