const examplePUUID = "d55c3688-5a9b-5a5d-b49e-80d7e5ff6b2a";
const exampleMatchID = "50ec10e0-2752-4a6a-a7ef-b63dacd5a6a9";
const exampleRegion = "na";
const exampleName = "jameslinimk";
const exampleTag = "8868";

export const argParams: {
    [method: string]: {
        args?: { [name: string]: any };
        type: string;
        aliases?: string[];
    };
} = {
    getCrosshair: {
        args: {
            code: "0;P;t;2;o;1;d;1;f;0;0t;10;0l;3;0a;1;0f;0;1b;0",
            size: 256
        },
        type: "V1CrosshairResponse"
    },
    getWebsite: {
        args: {
            countryCode: "en-us"
        },
        type: "V1WebsiteResponse",
        aliases: ["getAnnouncements"]
    },
    getVersion: {
        args: {
            region: "na"
        },
        type: "V1VersionResponse"
    },
    getFeaturedItems: {
        type: "V2StoreFeaturedResponse"
    },
    getOffers: {
        type: "V1StoreOffersResponse"
    },
    getStatus: {
        args: {
            region: "na"
        },
        type: "V1StatusResponse"
    },
    getRawMatchDetails: {
        args: {
            matchID: exampleMatchID,
            region: "na",
            queries: null
        },
        type: "RawMatchDetailsResponse"
    },
    getRawMatchHistory: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion,
            queries: null
        },
        type: "RawMatchHistoryResponse"
    },
    getRawCompetitiveUpdates: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion,
            queries: null
        },
        type: "RawCompetitiveUpdatesResponse"
    },
    getRawMMR: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion,
            queries: null
        },
        type: "RawMMRResponse"
    },
    getRawData: {
        args: {
            type: "mmr",
            value: examplePUUID,
            region: exampleRegion,
            queries: null
        },
        type: "RawMMRResponse"
    },
    getMMRHistory: {
        args: {
            name: exampleName,
            tag: exampleTag,
            region: exampleRegion
        },
        type: "V2MMRHistoryResponse"
    },
    getMMRHistoryByPUUID: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion
        },
        type: "V2MMRHistoryResponse"
    },
    getMatch: {
        args: {
            matchID: exampleMatchID
        },
        type: "V2MatchResponse"
    },
    getLeaderboard: {
        args: {
            region: exampleRegion,
            start: null,
            end: null,
            riotID: null,
            puuid: null,
            season: null,
            version: null
        },
        type: "V2LeaderboardResponse"
    },
    getTranslations: {
        args: {
            locale: null
        },
        type: "V1ContentResponse",
        aliases: ["getContent"]
    },
    getMMR: {
        args: {
            name: exampleName,
            tag: exampleTag,
            region: exampleRegion
        },
        type: "V2MMRResponse"
    },
    getMMRByPUUID: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion
        },
        type: "V2MMRResponse"
    },
    getMatches: {
        args: {
            name: exampleName,
            tag: exampleTag,
            region: exampleRegion
        },
        type: "V3MatchesResponse"
    },
    getMatchesByPUUID: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion
        },
        type: "V3MatchesResponse"
    },
    getAccount: {
        args: {
            name: exampleName,
            tag: exampleTag
        },
        type: "V1AccountResponse"
    },
    getAccountByPUUID: {
        args: {
            puuid: examplePUUID
        },
        type: "V1AccountResponse"
    }
};
