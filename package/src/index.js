import axios from "axios";
const baseUrl = "https://api.henrikdev.xyz/valorant";
export default class {
    token;
    /**
     * The main class to call API functions from
     * @param {string} token - The token (optional). Get one from https://discord.gg/wXNMnqzvAD
     */
    constructor(token) {
        this.token = token;
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
     * Gets general info about a player by their Riot ID
     * - **Returns:**
     * - Current rank and info about their rank
     * - RR change on their last game
     * - Their PUUID
     * - Their peak rank from every season
     * @param {string} name - The Riot ID username of the player
     * @param {string} tag - The Riot ID tag of the player
     * @param {Region} region - The region of the player
     * @param {Season} filter - Filter results based on episode and act
     */
    async getMMR(name, tag, region, filter) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v2/mmr/${region}/${name}/${tag}`, { filter });
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
     * @param {Season} filter - Filter results based on episode and act
     * @param {ValorantMap} map - Filter results based on map **(needs testing)**
     * @param {any} size - Filter results based on size **{needs testing)**
    */
    async getMatches(name, tag, region, filter, map, size) {
        this._validateArgs({ name, tag, region });
        return this._fetch(`v2/mmr/${region}/${name}/${tag}`, { filter, map, size });
    }
}
//# sourceMappingURL=index.js.map