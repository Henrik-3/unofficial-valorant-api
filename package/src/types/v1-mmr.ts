import type { Rank } from "./general";

export interface V1MMRResponse {
    name: string;
    tag: string;
    currenttier: number;
    currenttierpatched: Rank;
    images: {
        small: string;
        large: string;
        triangle_up: string;
        triangle_down: string;
    };
    ranking_in_tier: number;
    mmr_change_to_last_game: number;
    elo: number;
    old: boolean;
}
