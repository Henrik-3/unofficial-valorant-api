const axios = require('axios');

module.exports = {
    links: ["raw", "leaderboard", "content"],
    returndata: async function(url, type, data) {
        if(url == "matchuuidvalidation") return {status: null, data: null, ratelimits: null, error: {message: " Match UUID Validation failed, make sure you entered a valid Match UUID"}}
        if(url == "puuidvalidation") return {status: null, data: null, ratelimits: null, error: {message: "PUUID Validation failed, make sure you entered a valid PUUID"}}
        const response = url == "https://api.henrikdev.xyz/valorant/v1/raw" ? await axios.post(url, data).catch(error => {return error}) : await axios.get(url).catch(error => {return error})
        if(response.response) return {status: response.response.status, data: response.response.data, ratelimits: {used: response.response.headers["x-ratelimit-limit"], remaining: response.response.headers["x-ratelimit-remaining"], reset: response.response.headers["x-ratelimit-reset"]}, error: null}
        return this.links.includes(type) ? {status: response.status, data: response.data, ratelimits: {used: response.headers["x-ratelimit-limit"], remaining: response.headers["x-ratelimit-remaining"], reset: response.headers["x-ratelimit-reset"]}, error: null} : {status: response.status, data: response.data.data, ratelimits: {used: response.headers["x-ratelimit-limit"], remaining: response.headers["x-ratelimit-remaining"], reset: response.headers["x-ratelimit-reset"]}, error: null}
    },
    /**
     * Get account details
     * @param {String} name Name of the player
     * @param {String} tag Tag of the player
     */
    getAccount: async function(name, tag) {
        return this.returndata(`https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}`, "account")
    },
    /**
     * Get MMR Data
     * @param {("v1" | "v2")} version - Version of the API Endpoint
     * @param {("eu" | "na" | "ap" | "kr")} region - Cluster Region (eu, na, ap, kr)
     * @param {String} name - Name of the player
     * @param {String} tag - Tag of the player
     * @param {("e3a2" | "e3a1" | "e2a3" | "e2a2" | "e2a1" | "e1a3" | "e1a2" | "e1a1")} [filter] - Optional filter for season (Only v2)
     */
    getMMR: async function(version, region, name, tag, filter)  {
        return this.returndata(`https://api.henrikdev.xyz/valorant/${version}/mmr/${region}/${encodeURI(name)}/${encodeURI(tag)}${filter != undefined ? `?filter=${filter}` : ""}`, "mmr")
    },
    /**
     * Get MMR History
     * @param {("eu" | "na" | "ap" | "kr")} region Cluster Region (eu, na, ap, kr)
     * @param {String} name Name of the player
     * @param {String} tag Tag of the player
     */
    getMMRHistory: async function(region, name, tag) {
        return this.returndata(`https://api.henrikdev.xyz/valorant/v1/mmr-history/${region}/${encodeURI(name)}/${encodeURI(tag)}`, "mmr")
    },
    /**
     * Get MMR by PUUID
     * @param {("v1" | "v2")} version - Version of the API Endpoint
     * @param {("eu" | "na" | "ap" | "kr")} region - Cluster Region (eu, na, ap, kr)
     * @param {String} puuid - PUUID of the Player
     * @param {("e3a2" | "e3a1" | "e2a3" | "e2a2" | "e2a1" | "e1a3" | "e1a2" | "e1a1")} [filter] - Optional filter for season (Only v2)
     */
    getMMRByPUUID: async function(version, region, puuid, filter) {
        if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(puuid)) return this.returndata(`https://api.henrikdev.xyz/valorant/${version}/by-puuid/mmr/${region}/${puuid}${filter != undefined ? `?filter=${filter}` : ""}`, "mmr") 
        return this.returndata("puuidvalidation")
    },
    /**
     * Get MMR History by PUUID
     * @param {("eu" | "na" | "ap" | "kr")} region - Cluster Region (eu, na, ap, kr)
     * @param {String} puuid - PUUID of the Player
     */
    getMMRHistoryByPUUID: async function(region, puuid) {
        if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(puuid)) return this.returndata(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr-history/${region}/${puuid}`, "mmr")
        return this.returndata("puuidvalidation")
    },
    /**
     * Get Match by ID
     * @param {String} uuid - UUID of the match
     */
    getMatch: async function(uuid) {
        if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid)) return this.returndata(`https://api.henrikdev.xyz/valorant/v2/match/${uuid}`, "matches")
        return this.returndata("matchuuidvalidation")
    },
    /**
     * Get Match History 
     * @param {("eu" | "na" | "ap" | "kr")} region Cluster Region (eu, na, ap, kr)
     * @param {String} name Name of the player
     * @param {String} tag Tag of the player
     * @param {("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10")} [size] Count of matches that should be returned
     * @param {("escalation" | "spikerush" | "deathmatch" | "competitive" | "unrated" | "replication")} [filter] Filter for only games with the specific type
     */
    getMatches: async function(region, name, tag, size, filter) {
        return this.returndata(`https://api.henrikdev.xyz/valorant/v3/matches/${region}/${encodeURI(name)}/${encodeURI(tag)}${size ? `?size=${size}` : ""}${filter ? `?filter=${filter}` : ""}`, "matches")
    },
    /**
     * Get Match History by PUUID
     * @param {("eu" | "na" | "ap" | "kr")} region Cluster Region (eu, na, ap, kr)
     * @param {String} puuid - PUUID of the Player
     * @param {("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10")} [size] Count of matches that should be returned
     * @param {("escalation" | "spikerush" | "deathmatch" | "competitive" | "unrated" | "replication")} [filter] Filter for only games with the specific type
     */
    getMatchesByPUUID: async function(region, puuid, size, filter) {
        if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(puuid)) return this.returndata(`https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${region}/${puuid}${size != undefined && filter == undefined ? `?size=${size}` : size == undefined && filter != undefined ? `?filter=${filter}` : size != undefined && filter != undefined ? `?filter=${filter}&size=${size}` : ""}`, "matches")
        return this.returndata("puuidvalidation")
    },
    /**
     * Get Leaderboard
     * @param {("eu" | "na" | "ap" | "kr")} region Cluster Region (eu, na, ap, kr)
     * @param {String} [name] Name of the player
     * @param {String} [tag] Tag of the player
     */
    getLeaderboard: async function(region, name, tag) {
        return this.returndata(`https://api.henrikdev.xyz/valorant/v1/leaderboard/${region}${name != undefined && tag == undefined ? "" : name == undefined && tag != undefined ? "" : name != undefined && tag != undefined ? `?name=${encodeURI(name)}&tag=${encodeURI(tag)}` : ""}`, "leaderboard")
    },
    /**
     * Get Status
     * @param {("eu" | "na" | "ap" | "kr")} region Cluster Region (eu, na, ap, kr)
     */
    getStatus: async function(region) {
        return this.returndata(`https://api.henrikdev.xyz/valorant/v1/status/${region}`, "status")
    },
    /**
     * Get Content
     */
    getContent: async function() {
        return this.returndata("https://api.henrikdev.xyz/valorant/v1/content", "content")
    },
    /**
     * Get Store Offers
     */
    getOffers: async function() {
        return this.returndata("https://api.henrikdev.xyz/valorant/v1/store-offers", "store")
    },
    /**
     * Get Store Featured Items
     */
    getFeaturedItems: async function() {
        return this.returndata("https://api.henrikdev.xyz/valorant/v1/store-featured", "store")
    },
    /**
     * Get Website Content
     * @param {("en-us" | "en-gb" | "de-de" | "es-es" | "fr-fr" | "it-it" | "ru-ru" | "tr-tr" | "es-mx" | "ja-jp" | "ko-kr" | "pt-br")} countrycode Articles of the given countrycode
     * @param {("game_updates" | "dev" | "esports" | "announcments")} [filter] Filter for specific articles on the Website
     */
    getWebsiteContent: async function(countrycode, filter) {
        return this.returndata(`https://api.henrikdev.xyz/valorant/v1/website/${countrycode}${filter != undefined ? `?filter=${filter}` : ""}`, "website")
    },
    /**
     * Get Raw Source Server Response
     * @param {("competitiveupdates" | "mmr" | "matchdetails" | "matchhistory")} type Type of the request
     * @param {(String)} uuid PUUID or MatchID 
     * @param {("eu" | "na" | "ap" | "kr")} region Cluster Region (eu, na, ap, kr)
     * @param {String} [queries] Queries for the request (https://github.com/Henrik-3/unofficial-valorant-api/releases/tag/v1.7.1)
     */
    getRawData: async function(type, uuid, region, queries) {
        return this.returndata("https://api.henrikdev.xyz/valorant/v1/raw", {type: type, value: uuid, region: region, queries: queries})
    }
}
