import { Region } from "../general"

interface WinsByTier {
	[tier: number]: number
}

interface SeasonalInfoBySeasonID {
	SeasonID: string
	NumberOfWins: number
	NumberOfWinsWithPlacements: number
	NumberOfGames: number
	Rank: number
	CapstoneWins: number
	LeaderboardRank: number
	CompetitiveTier: number
	RankedRating: number
	WinsByTier: WinsByTier
	GamesNeededForRating: number
	TotalWinsNeededForRank: number
}

interface Queue {
	TotalGamesNeededForRating: number
	TotalGamesNeededForLeaderboard: number
	CurrentSeasonGamesNeededForRating: number
	SeasonalInfoBySeasonID: SeasonalInfoBySeasonID
}

interface QueueSkills {
	competitive: Queue
	custom: Queue
	deathmatch: Queue
	ggteam: Queue
	onefa: Queue
	seeding: Queue
	snowball: Queue
	spikerush: Queue
	unrated: Queue
}

interface LatestCompetitiveUpdate {
	MatchID: string
	MapID: string
	SeasonID: string
	MatchStartTime: number
	TierAfterUpdate: number
	TierBeforeUpdate: number
	RankedRatingAfterUpdate: number
	RankedRatingBeforeUpdate: number
	RankedRatingEarned: number
	RankedRatingPerformanceBonus: number
	CompetitiveMovement: string
	AFKPenalty: number
}

export interface RawMMRResponse {
	Version: number
	Subject: string
	NewPlayerExperienceFinished: boolean
	QueueSkills: QueueSkills
	LatestCompetitiveUpdate: LatestCompetitiveUpdate
	IsLeaderboardAnonymized: boolean
	IsActRankBadgeHidden: boolean
	region: Region
}
