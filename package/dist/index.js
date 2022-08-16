import axios from "axios";
const baseUrl = "https://api.henrikdev.xyz/valorant";
export default class {
    token;
    /**
     * You must call `initUtils()` before using this!
     */
    rankImages;
    /**
     * You must call `initUtils()` before using this!
     */
    mapImages;
    /**
     * The main class to call API functions from
     * @param {string} token - The token (optional). Get one from https://discord.gg/wXNMnqzvAD
     */
    constructor(token) {
        this.token = token;
    }
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
    _parseBody(body) {
        if (body.errors)
            return body.errors;
        return body.status ? body.data : body;
    }
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
     * Make sure each key in {@param input} has a non `null` or `undefined` value
     * @param {{ [key: string]: any }} input - Arguments to check
     */
    async _validateArgs(input) {
        Object.keys(input).forEach(key => {
            if (input[key] === null || input[key] === undefined)
                throw new TypeError(`Missing parameter: "${key}"`);
        });
    }
    /**
     * Get a visualization of a valorant crosshair by its code
     * @param {string} code - Valorant crosshair code
     * @param {number} size - Image size (default: `1024`)
     * @returns {Buffer} Image buffer for the preview
     */
    async getCrosshair(code, size) {
        this._validateArgs({ code });
        return this._fetch("v1/crosshair/generate", { id: code, size }, {
            responseType: "arraybuffer"
        });
    }
    /**
     * Get all announcements from the valorant website of a country
     * @param {string} countryCode - Country code of website. Cane be `en-us`, `en-gb`, `de-de`, `es-es`, `es-mx`, `fr-fr`, `it-it`, `ja-jp`, `ko-kr`, `pt-br`, `ru-ru`, `tr-tr`, or `vi-vn`
     */
    async getAnnouncements(countryCode) {
        this._validateArgs({ countryCode });
        return this._fetch(`v1/website/${countryCode}`);
    }
    /**
     * Get information about valorant in a region
     * @param {Region} region - Region to get info about
     */
    async getVersion(region) {
        this._validateArgs({ region });
        return this._fetch(`v1/version/${region}`);
    }
    /**
     * Get a list of featured items in Valorant
     */
    async getFeaturedItems() {
        // ! v2 is bugged for some reason
        return this._fetch("v1/store-featured");
    }
    /**
     * Get a list of all in-app-purchases for valorant
     * ! find out wtf this actually does
     */
    async getIAPs() {
        return this._fetch("v1/store-offers");
    }
    /**
     * Will get information about the current maintenances and incidents about a region
     * @param {Region} region - Region to get info about
     */
    async getStatus(region) {
        this._validateArgs({ region });
        return this._fetch(`v1/status/${region}`);
    }
    /**
     * Gets raw data for a match from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * - Use `getMatch` instead
     * @param {string} matchID - The match ID to get details about
     * @param {Region} region - Region of the match
     * @param {any} queries - Extra queries
     */
    async getRawMatchDetails(matchID, region, queries) {
        this._validateArgs({ matchID, region });
        return await this._fetch("v1/raw", null, {
            data: { type: "matchdetails", value: matchID, region, queries },
            method: "POST"
        });
    }
    /**
     * Gets raw data for a players match history from the valorant API. **(Not formatted, use only if you know what you are doing)**
     * - Use `getMatches` instead
     * @param {string} puuid - The match ID to get details about
     * @param {Region} region - Region of the player
     * @param {any} queries - Extra queries
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
     * - Use `getMMRHistory` instead
     * @param {string} puuid - The match ID to get details about
     * @param {Region} region - Region of the player
     * @param {any} queries - Extra queries
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
     * - Use `getMMR` instead
     * @param {string} puuid - The match ID to get details about
     * @param {Region} region - Region of the player
     * @param {any} queries - Extra queries
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
     * @param {string} name - The Riot ID username of the player
     * @param {string} tag - The Riot tag username of the player
     * @param {Region} region - The player's region
     */
    async getMMRHistory(name, tag, region) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v1/mmr-history/${region}/${name}/${tag}`);
    }
    /**
     * Get a list of rr changes of a player by their PUUID
     * @param {string} name - The PUUID of the player
     * @param {Region} region - The player's region
    */
    async getMMRHistoryByPUUID(puuid, region) {
        this._validateArgs({ puuid, region });
        return this._fetch(`v1/by-puuid/mmr-history/${region}/${puuid}`);
    }
    /**
     * Get information about a match
     * @param {string} matchID - The match's ID
     */
    async getMatch(matchID) {
        this._validateArgs({ matchID });
        return this._fetch(`v2/match/${matchID}`);
    }
    /**
     * Get the leaderboard of a region
     * @param {Region} region - Region to get leaderboard from
     * @param {number} start - (optional) Get 1000 leaderboard players starting from the given start value
     * @param {number} end - (optional) Limit the amount of leaderboard players returned
     * @param {{ name: string, tag: string }} riotID - Search for a specific player by their Riot ID
     * @param {string} puuid - Search for a specific player by their PUUID
     * @param {Season} season - Get leaderboard from a specific season
     */
    async getLeaderboard(region, start, end, riotID, puuid, season) {
        if (riotID && puuid)
            throw new TypeError("Too many parameters: You can't search for a Riot ID and puuid at the same time, please decide between Riot ID and puuid");
        this._validateArgs({ region });
        return this._fetch(`v2/leaderboard/${region}`, { start, end, name: riotID?.name, tag: riotID?.tag, puuid, season });
    }
    /**
     * Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game
     * @param {Locale} locale - If this is set, instead of all translations, it will return just translations for this language
     */
    async getTranslations(locale) {
        return this._fetch("v1/content", { locale });
    }
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
    async getMMR(name, tag, region, seasonFilter) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v2/mmr/${region}/${name}/${tag}`, { filter: seasonFilter });
    }
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
    async getMMRByPUUID(puuid, region, seasonFilter) {
        this._validateArgs({ puuid, region });
        return this._fetch(`v2/by-puuid/mmr/${region}/${puuid}`, { filter: seasonFilter });
    }
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
    async getMatches(name, tag, region, gamemodeFilter, mapFilter, size) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v3/matches/${region}/${name}/${tag}`, { filter: gamemodeFilter, map: mapFilter, size });
    }
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
    async getMatchesByPUUID(puuid, region, gamemodeFilter, mapFilter, size) {
        this._validateArgs({ name: puuid, region });
        return this._fetch(`by-puuid/matches/${region}/${puuid}`, { filter: gamemodeFilter, map: mapFilter, size });
    }
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
    async getProfile(name, tag, force) {
        this._validateArgs({ name, tag });
        return this._fetch(`v1/account/${name}/${tag}`, { force });
    }
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
    async getProfileByPUUID(puuid, force) {
        this._validateArgs({ name: puuid });
        return this._fetch(`v1/by-puuid/account/${puuid}`, { force });
    }
}
//# sourceMappingURL=index.js.map