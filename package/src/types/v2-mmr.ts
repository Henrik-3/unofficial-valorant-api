import type {Rank, Season} from './general';

export interface SeasonMMR {
    error?: 'No data available';
    wins: number;
    number_of_games: number;
    final_rank: number;
    final_rank_patched: Rank;
    act_rank_wins: {
        patched_tier: Rank;
        tier: number;
    }[];
}

export interface V2MMRResponse {
    name: string;
    tag: string;
    puuid: string;
    current_data: {
        currenttier: number | null;
        currenttierpatched: Rank | null;
        images: {
            small: string | null;
            large: string | null;
            triangle_up: string | null;
            triangle_down: string | null;
        };
        ranking_in_tier: number | null;
        mmr_change_to_last_game: number | null;
        elo: number | null;
        games_needed_for_rating: number;
        old: boolean;
    };
    highest_tier: {
        old: boolean;
        tier: number | null;
        patched_tier: string | null;
        season: string | null;
    };
    by_season: {
        [key in Season]: SeasonMMR;
    };
}
