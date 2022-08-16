import axios, { type AxiosRequestConfig } from "axios"
import type { Season, ValorantMap } from "./types/general.js"
import type { MMRResponse } from "./types/v2-mmr.js"
import type { MatchesResponse } from "./types/v3-matches.js"

interface APIResponse<dataType> {
	status: number
	/**
	 * Real response from API
	 */
    data?: dataType
	/**
	 * Information about current rate limits
	 */
    rateLimits: RateLimit
	/**
	 * Error object (if there is)
	 */
    error?: ErrorObject
	/**
	 * Original request URL
	 */
	url: string
}

interface ErrorObject {
	/**
	 * Error message
	 */
    message: string
	/** The response status of the API. Can be any of the following:
	 * - `1` 	Invalid API Key
	 * - `2` 	Forbidden endpoint
	 * - `3` 	Restricted endpoint
	 * - `101` 	No region found for this Player
	 * - `102` 	No matches found, can't get puuid
	 * - `103` 	Possible name change detected, can't get puuid. Please play one match, wait 1-2 minutes and try it again
	 * - `104` 	Invalid region
	 * - `105` 	Invalid filter
	 * - `106` 	Invalid gamemode
	 * - `107` 	Invalid map
	 * - `108` 	Invalid locale
	 * - `109` 	Missing name
	 * - `110` 	Missing tag
	 * - `111` 	Player not found in leaderboard
	 * - `112` 	Invalid raw type
	 * - `113` 	Invalid match or player id
	 * - `114` 	Invalid country code
	 * - `115` 	Invalid season
	 */
	code: number
	/**
	 * Error details to help fix the problem
	 */
	details: string
}

interface RateLimit {
	/**
	 * Number of used API requests per 60s. 
	 * - `30 req/min` on free accounts, and `60 req/min` on regular token
	 */
    used: number
	/**
	 * Remaining number of API requests per 60s.
	 * - `30 req/min` on free accounts, and `60 req/min` on regular token
	 */
    remaining: number
	/**
	 * In how many seconds (every 60s) your rate limit is going to reset.
	 * - `30 req/min` on free accounts, and `60 req/min` on regular token
	 */
    reset: number
}

export type Region = "eu" | "na" | "kr" | "ap" | "latam" | "br"

const baseUrl = "https://api.henrikdev.xyz/valorant"
export default class {
	/**
	 * The main class to call API functions from
	 * @param {string} token - The token (optional). Get one from https://discord.gg/wXNMnqzvAD
	 */
	constructor(private token?: string) {}

	private _parseBody(body: any) {
        if (body.errors) return body.errors
        return body.status ? body.data : body
    }

	private async _fetch<dataType>(url: string, searchParams?: { [key: string]: any }, config: AxiosRequestConfig = {}): Promise<APIResponse<dataType>> {
		// Format search params into `?something=like&this`
		const queryParams = searchParams ? Object.keys(searchParams).reduce((acc, cur) => {
			const value = searchParams[cur]
			if (value === null || value === undefined) return acc
			return acc === ""
				? `?${cur}=${value}`
				: acc + `&${cur}=${value}`
		}, "") : ""

		// Main request
		const req = await axios({
			url: encodeURI(`${baseUrl}/${url}${queryParams}`),
			responseType: "json",
			headers: this.token
				? { Authorization: this.token, "User-Agent": "unofficial-valorant-api/node.js/2.3.0", }
				: { "User-Agent": "unofficial-valorant-api/node.js/2.3.0", },
			...config
		}).catch(error => error)

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
        }
	}

	/**
	 * Make sure each key in {@param input} has a non `null` or `undefined` value
	 * @param {{ [key: string]: any }} input - Arguments to check
	 */
	private async _validateArgs(input: { [key: string]: any }) {
		Object.keys(input).forEach(key => {
			if (input[key] === null || input[key] === undefined) throw new TypeError(`Missing parameter: "${key}"`)
		})
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
    async getMMR(name: string, tag: string, region: Region, filter?: Season) {
        this._validateArgs({ name, tag, region })
        return this._fetch<MMRResponse>(`v2/mmr/${region}/${name}/${tag}`, { filter })
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
	async getMatches(name: string, tag: string, region: Region, filter?: Season, map?: ValorantMap, size?: any) {
        this._validateArgs({ name, tag, region })
        return this._fetch<MatchesResponse>(`v2/mmr/${region}/${name}/${tag}`, { filter, map, size })
    }
}
