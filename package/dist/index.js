import axios from "axios";
/**
 * Base API endpoint
 */
const baseUrl = "https://api.henrikdev.xyz/valorant";
class VAPI {
    token;
    /**
     * Images for every {@link Rank | Valorant rank}
     *
     * @remarks
     * You must call {@link initUtils} before using this!
     */
    rankImages;
    /**
     * Images for every {@link ValorantMap | Valorant Map}
     *
     * @remarks
     * You must call {@link initUtils} before using this!
     */
    mapImages;
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
    constructor(token) {
        this.token = token;
    }
    /**
     * Creates {@link VAPI.rankImages} and {@link VAPI.mapImages} by pulling the images from {@link https://valorant-api.com}
     *
     * @remarks
     * Must be called before using {@link VAPI.rankImages} and {@link VAPI.mapImages}
     */
    async initUtils() {
        const mapsReq = (await axios({ url: "https://valorant-api.com/v1/maps" }).catch(() => null))?.data?.data;
        if (mapsReq) {
            this.mapImages = {};
            mapsReq.forEach((map) => (this.mapImages[map.displayName] = {
                splash: map.splash,
                minimap: map.displayIcon,
                landscape: map.listViewIcon
            }));
        }
        const tiersReq = (await axios({ url: "https://valorant-api.com/v1/competitivetiers" }).catch(() => null))?.data?.data;
        if (tiersReq) {
            const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
            this.rankImages = {};
            tiersReq[tiersReq.length - 1].tiers.forEach((rank) => (this.rankImages[capitalize(rank.tierName.toLowerCase())] = {
                large: rank.largeIcon,
                small: rank.smallIcon,
                triangleUp: rank.rankTriangleUpIcon,
                triangleDown: rank.rankTriangleDownIcon
            }));
        }
    }
    /**
     * @internal
     *
     * Parses the body of an axios response
     */
    _parseBody(body) {
        if (body.errors)
            return body.errors;
        return body.status ? body.data : body;
    }
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
    async _fetch(url, searchParams, config = {}) {
        // Format search params into `?something=like&this`
        const queryParams = searchParams ? Object.keys(searchParams).reduce((acc, cur) => {
            const value = searchParams[cur];
            if (value === null || value === undefined)
                return acc;
            return acc === ""
                ? `?${cur}=${value}`
                : acc + `&${cur}=${value}`;
        }, "") : "";
        // Main request
        const req = await axios({
            url: encodeURI(`${baseUrl}/${url}${queryParams}`),
            responseType: "json",
            headers: this.token
                ? { Authorization: this.token, "User-Agent": "unofficial-valorant-api/node.js/2.3.0", }
                : { "User-Agent": "unofficial-valorant-api/node.js/2.3.0", },
            ...config
        }).catch(error => error);
        // Formatting response
        return {
            status: req.response ? req.response.status : req.status,
            data: req.response ? null : !req.config.headers["Content-Type"] ? this._parseBody(req.data) : req.data,
            rateLimits: {
                used: Number(req.response ? req.response.headers["x-ratelimit-limit"] : req.headers["x-ratelimit-limit"]),
                remaining: Number(req.response ? req.response.headers["x-ratelimit-remaining"] : req.headers["x-ratelimit-remaining"]),
                reset: Number(req.response ? req.response.headers["x-ratelimit-reset"] : req.headers["x-ratelimit-reset"]),
            },
            error: req.response ? this._parseBody(req.response.data) : null,
            url: req.config.url
        };
    }
    /**
     * @internal
     *
     * Make sure each key has a non empty value
     * @param input - Object to check for non empty values
     *
     * @throws {@link TypeError} - Only if there is a empty value to a key
     */
    async _validateArgs(input) {
        Object.keys(input).forEach(key => {
            if (input[key] === null || input[key] === undefined)
                throw new TypeError(`Missing parameter: "${key}"`);
        });
    }
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
    async getCrosshair(code, size) {
        this._validateArgs({ code });
        return this._fetch("v1/crosshair/generate", { id: code, size }, {
            responseType: "arraybuffer"
        });
    }
    /**
     * Get all announcements from the valorant website of a country
     * @param countryCode - Country code of website
     * @returns List of announcements from the valorant website
     */
    async getAnnouncements(countryCode) {
        this._validateArgs({ countryCode });
        return this._fetch(`v1/website/${countryCode}`);
    }
    /**
     * Get information about valorant in a region, such as the client version, branch, and server version
     * @param region - Region of valorant to get info about
     * @returns Information about a regions valorant
     */
    async getVersion(region) {
        this._validateArgs({ region });
        return this._fetch(`v1/version/${region}`);
    }
    /**
     * Get all of the featured items in the current valorant store
     * @returns Featured items in the current valorant store
     */
    async getFeaturedItems() {
        // ! v2 is bugged for some reason
        return this._fetch("v1/store-featured");
    }
    /**
     * Get a list of all in-app-purchases for valorant, such as Radianite and VP
     * @returns List of IAPs in valorant
     */
    async getIAPs() {
        // ! find out wtf this actually does
        return this._fetch("v1/store-offers");
    }
    /**
     * Will get information about the current maintenances and incidents about a region
     * @param region - Region to get info about
     * @returns Info about undergoing maintenances and incidents in a region of valorant
     */
    async getStatus(region) {
        this._validateArgs({ region });
        return this._fetch(`v1/status/${region}`);
    }
    /**
     * Gets raw data for a match from the valorant API. (Not formatted, use only if you know what you are doing)
     * @see {@link VAPI.getMatch} for an easier response to use
     * @param matchID - The match ID to get details about
     * @param region - Region of the match
     * @param queries - Extra queries
     * @returns Information about the match
     */
    async getRawMatchDetails(matchID, region, queries) {
        this._validateArgs({ matchID, region });
        return await this._fetch("v1/raw", null, {
            data: { type: "matchdetails", value: matchID, region, queries },
            method: "POST"
        });
    }
    /**
     * Gets raw data for a players match history from the valorant API. (Not formatted, use only if you know what you are doing)
     * @see {@link VAPI.getMatches} for an easier response to use
     * @param puuid - The match ID to get details about
     * @param region - Region of the player
     * @param queries - Extra queries
     * @returns Information about the players match history
     */
    async getRawMatchHistory(puuid, region, queries) {
        this._validateArgs({ puuid, region });
        return await this._fetch("v1/raw", null, {
            data: { type: "matchhistory", value: puuid, region, queries },
            method: "POST"
        });
    }
    /**
     * Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * @see {@link VAPI.getMMRHistory} for an easier response to use
     * @param puuid - The match ID to get details about
     * @param region - Region of the player
     * @param queries - Extra queries
     * @returns Information about the players rr history
     */
    async getRawCompetitiveUpdates(puuid, region, queries) {
        this._validateArgs({ puuid, region });
        return await this._fetch("v1/raw", null, {
            data: { type: "mmr", value: puuid, region, queries },
            method: "POST"
        });
    }
    /**
     * Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * @see {@link VAPI.getMMR} for an easier response to use
     * @param puuid - The match ID to get details about
     * @param region - Region of the player
     * @param queries - Extra queries
     * @returns Information about the players mmr
     */
    async getRawMMR(puuid, region, queries) {
        this._validateArgs({ puuid, region });
        return await this._fetch("v1/raw", null, {
            data: { type: "competitiveupdates", value: puuid, region, queries },
            method: "POST"
        });
    }
    /**
     * Get a list of rr changes of a player by their Riot ID
     * @param name - The Riot ID username of the player
     * @param tag - The Riot tag username of the player
     * @param region - The players region
     * @return List of rr changes (recent competitive games)
     */
    async getMMRHistory(name, tag, region) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v1/mmr-history/${region}/${name}/${tag}`);
    }
    /**
     * Get a list of rr changes of a player by their PUUID
     * @param puuid - The PUUID of the player
     * @param region - The players region
     * @return List of rr changes (recent competitive games)
    */
    async getMMRHistoryByPUUID(puuid, region) {
        this._validateArgs({ puuid, region });
        return this._fetch(`v1/by-puuid/mmr-history/${region}/${puuid}`);
    }
    /**
     * Get information about a match
     * @param matchID - The matchs ID
     * @returns Information about the match
     */
    async getMatch(matchID) {
        this._validateArgs({ matchID });
        return this._fetch(`v2/match/${matchID}`);
    }
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
    async getLeaderboard(region, start, end, riotID, puuid, season) {
        if (riotID && puuid)
            throw new TypeError("Too many parameters: You can't search for a Riot ID and puuid at the same time, please decide between Riot ID and puuid");
        this._validateArgs({ region });
        return this._fetch(`v2/leaderboard/${region}`, { start, end, name: riotID?.name, tag: riotID?.tag, puuid, season });
    }
    /**
     * Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game
     * @param locale - If this is set, instead of all translations, it will return just translations for this language
     */
    async getTranslations(locale) {
        return this._fetch("v1/content", { locale });
    }
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
    async getMMR(name, tag, region, seasonFilter) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v2/mmr/${region}/${name}/${tag}`, { filter: seasonFilter });
    }
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
    async getMMRByPUUID(puuid, region, seasonFilter) {
        this._validateArgs({ puuid, region });
        return this._fetch(`v2/by-puuid/mmr/${region}/${puuid}`, { filter: seasonFilter });
    }
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
    async getMatches(name, tag, region, gamemodeFilter, mapFilter, size) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v3/matches/${region}/${name}/${tag}`, { filter: gamemodeFilter, map: mapFilter, size });
    }
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
    async getMatchesByPUUID(puuid, region, gamemodeFilter, mapFilter, size) {
        this._validateArgs({ name: puuid, region });
        return this._fetch(`by-puuid/matches/${region}/${puuid}`, { filter: gamemodeFilter, map: mapFilter, size });
    }
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
    async getProfile(name, tag, force) {
        this._validateArgs({ name, tag });
        return this._fetch(`v1/account/${name}/${tag}`, { force });
    }
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
    async getProfileByPUUID(puuid, force) {
        this._validateArgs({ name: puuid });
        return this._fetch(`v1/by-puuid/account/${puuid}`, { force });
    }
}
export default VAPI;
//# sourceMappingURL=index.js.map