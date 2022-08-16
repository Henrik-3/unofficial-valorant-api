export interface Player {
    PlayerCardID: string;
    TitleID: string;
    IsBanned: boolean;
    IsAnonymized: boolean;
    puuid: string;
    gameName: string;
    tagLine: string;
    leaderboardRank: number;
    rankedRating: number;
    numberOfWins: number;
    competitiveTier: number;
}
export interface LeaderboardResponse {
    last_update: number;
    next_update: number;
    total_players: number;
    radiant_threshold: number;
    immortal_3_threshold: number;
    immortal_2_threshold: number;
    immortal_1_threshold: number;
    players: Player[];
}
