export type v1EsportsSchedule = {
    date: string;
    state: string;
    type: string;
    vod: string | null;
    league: {
        name: string;
        identifier: string;
        icon: string;
        region: string;
    };
    tournament: {
        name: string;
        season: string;
    };
    match: {
        id: string;
        game_type: {
            type: 'playAll' | 'bestOf' | null;
            count: number | null;
        };
        teams: {
            name: string;
            code: string;
            icon: string;
            has_won: boolean;
            game_wins: number;
            record: {
                wins: number;
                losses: number;
            };
        }[];
    };
}[];
