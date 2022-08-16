import { Rank, Season } from "./general.js"

export interface SeasonMMR {
	error?: "No data available"
	wins: number
	number_of_games: number
	final_rank: number
	final_rank_patched: Rank
	act_rank_wins: {
		patched_tier: Rank
		tier: number
	}[]
}

export interface MMRResponse {
	name: string
	tag: string
	puuid: string
	current_data: {
		currenttier: number
		currenttierpatched: Rank
		images: {
			small: string
			large: string
			triangle_up: string
			triangle_down: string
		}
		ranking_in_tier: number
		mmr_change_to_last_game: number
		elo: number
		games_needed_for_rating: number
		old: boolean
	}

	by_season: {
		[key in Season]: SeasonMMR
	}
}
