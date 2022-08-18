const examplePUUID = "d55c3688-5a9b-5a5d-b49e-80d7e5ff6b2a";
const exampleMatchID = "50ec10e0-2752-4a6a-a7ef-b63dacd5a6a9";
const exampleRegion = "na";
const exampleName = "jameslinimk";
const exampleTag = "8868";
export const argParams = {
    getCrosshair: {
        args: {
            code: "0;P;t;2;o;1;d;1;f;0;0t;10;0l;3;0a;1;0f;0;1b;0",
            size: 256
        },
        type: "CrosshairResponse"
    },
    getWebsite: {
        args: {
            countryCode: "en-us"
        },
        type: "WebsiteResponse"
    },
    getVersion: {
        args: {
            region: "na"
        },
        type: "VersionResponse"
    },
    getFeaturedItems: {
        type: "FeaturedItemsResponse"
    },
    getOffers: {
        type: "StoreOffersResponse"
    },
    getStatus: {
        args: {
            region: "na"
        },
        type: "StatusResponse"
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
    getMMRHistory: {
        args: {
            name: exampleName,
            tag: exampleTag,
            region: exampleRegion
        },
        type: "MMRHistoryResponse"
    },
    getMMRHistoryByPUUID: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion
        },
        type: "MMRHistoryResponse"
    },
    getMatch: {
        args: {
            matchID: exampleMatchID
        },
        type: "MatchResponse"
    },
    getLeaderboard: {
        args: {
            region: exampleRegion
        },
        type: "LeaderboardResponse"
    },
    getLeaderboardV1: {
        args: {
            region: exampleRegion,
            start: null,
            end: null,
            riotID: null,
            puuid: null,
            season: null,
            version: null
        },
        type: "V1LeaderboardResponse"
    },
    getTranslations: {
        args: {
            locale: null
        },
        type: "ContentResponse"
    },
    getMMR: {
        args: {
            name: exampleName,
            tag: exampleTag,
            region: exampleRegion
        },
        type: "MMRResponse"
    },
    getMMRByPUUID: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion
        },
        type: "MMRResponse"
    },
    getMatches: {
        args: {
            name: exampleName,
            tag: exampleTag,
            region: exampleRegion
        },
        type: "MatchesResponse"
    },
    getMatchesByPUUID: {
        args: {
            puuid: examplePUUID,
            region: exampleRegion
        },
        type: "MatchesResponse"
    },
    getAccount: {
        args: {
            name: exampleName,
            tag: exampleTag
        },
        type: "AccountResponse"
    },
    getAccountByPUUID: {
        args: {
            puuid: examplePUUID
        },
        type: "AccountResponse"
    }
};
//# sourceMappingURL=testOptions.js.map