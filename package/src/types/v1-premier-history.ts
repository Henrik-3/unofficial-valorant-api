export type V1PremierHistory = {
    league_matches: {
        id: string;
        points_before: number;
        points_after: number;
        started_at: string;
    }[];
    tournament_matches: {
        tournament_id: string;
        placement: number;
        placement_league_bonus: number;
        points_before: number;
        points_after: number;
        matches: string[];
    }[];
};
