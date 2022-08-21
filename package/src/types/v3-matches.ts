import type { Characters, Mode, Rank, Region, ValorantMap, Weapon } from "./general";

export interface Player {
    puuid: string;
    name: string;
    tag: string;
    team: "Red" | "Blue";
    level: number;
    character: Characters;
    currenttier: number;
    currenttier_patched: Rank;
    player_card: string;
    player_title: string;
    party_id: string;
    session_playtime: {
        minutes?: number | null;
        seconds?: number | null;
        milliseconds?: number | null;
    };
    behavior: {
        afk_rounds: number;
        friendly_fire: {
            incoming: number;
            outgoing: number;
        };
        rounds_in_spawn: number;
    };
    platform: {
        type: string;
        os: {
            name: string;
            version: string;
        };
    };
    ability_casts: {
        c_cast: number;
        q_cast: number;
        e_cast: number;
        x_cast: number;
    };
    assets: {
        card: {
            small: string;
            large: string;
            wide: string;
        };

        agent: {
            small: string;
            bust: string;
            full: string;
            killfeed: string;
        };
    };
    stats: {
        score: number;
        kills: number;
        deaths: number;
        assists: number;
        bodyshots: number;
        headshots: number;
        legshots: number;
    };
    economy: {
        spent: {
            overall: number;
            average: number;
        };
        loadout_value: {
            overall: number;
            average: number;
        };
    };
    damage_made: number;
    damage_received: number;
}

export type PlayerLocation = { x: number, y: number };

export interface PlayerLocationOnEvent {
    player_puuid: string;
    player_display_name: string;
    player_team: "Red" | "Blue";
    location: PlayerLocation;
    view_radians: number;
}

export interface KillEvent {
    kill_time_in_round: number;
    kill_time_in_match: number;
    killer_puuid: string;
    killer_display_name: string;
    killer_team: "Red" | "Blue";
    victim_puuid: string;
    victim_display_name: string;
    victim_team: "Red" | "Blue";
    victim_death_location: PlayerLocation;
    damage_weapon_id: string;
    damage_weapon_name?: Weapon | null;
    damage_weapon_assets: {
        display_icon?: string | null;
        killfeed_icon?: string | null;
    };
    secondary_fire_mode: boolean;
    player_locations_on_kill: PlayerLocationOnEvent[];
    assistants: {
        assistant_puuid: string;
        assistant_display_name: string;
        assistant_team: "Red" | "Blue";
    }[];
}

export interface Round {
    winning_team: "Red" | "Blue";
    end_type: "Eliminated" | "Bomb defused" | "Bomb detonated" | "Round timer expired" | "Surrendered";
    bomb_planted: boolean;
    bomb_defused: boolean;
    plant_events: {
        plant_location?: PlayerLocation | null;
        planted_by?: {
            puuid: string;
            display_name: string;
            team: "Red" | "Blue";
        } | null;
        plant_site?: "A" | "B" | "C" | null;
        plant_time_in_round?: number | null;
        player_locations_on_plant?: PlayerLocationOnEvent[] | null;
    };
    defuse_events: {
        defuse_location?: PlayerLocation | null;
        defused_by?: {
            puuid: string;
            display_name: string;
            team: "Red" | "Blue";
        } | null;
        defuse_time_in_round?: number | null;
        player_locations_on_defuse?: PlayerLocationOnEvent[] | null;
    };
    player_stats: {
        ability_casts: {
            c_cast?: number | null;
            q_cast?: number | null;
            e_cast?: number | null;
            x_cast?: number | null;
        };
        player_puuid: string;
        player_display_name: string;
        player_team: "Red" | "Blue";
        damage_events: {
            receiver_puuid: string;
            receiver_display_name: string;
            receiver_team: "Red" | "Blue";
            bodyshots: number;
            damage: number;
            headshots: number;
            legshots: number;
        }[];
        damage: number;
        headshots: number;
        bodyshots: number;
        legshots: number;
        kill_events: KillEvent[];
        kills: number;
        score: number;
        economy: {
            loadout_value: number;
            weapon: {
                id?: string | null;
                name?: Weapon | null;
                assets: {
                    display_icon?: string | null;
                    killfeed_icon?: string | null;
                };
            };
            armor: {
                id?: string | null;
                name?: "Heavy Shields" | "Light Shields" | null;
                assets: {
                    display_icon?: string | null;
                };
            };
            remaining: number;
            spent: number;
        };
        was_afk: boolean;
        was_penalized: boolean;
        stayed_in_spawn: boolean;
    }[];
}

export interface KillEventMatch extends KillEvent {
    round: number;
}

export interface Match {
    metadata: {
        map: ValorantMap;
        game_version: string;
        game_length: number;
        game_start: number;
        game_start_patched: string;
        rounds_played: number;
        mode: Mode;
        queue: string;
        season_id: string;
        platform: string;
        matchid: string;
        region: Region;
        cluster: string;
    };
    players: {
        all_players: Player[];
        red: Player[];
        blue: Player[];
    };
    teams: {
        red: {
            has_won: boolean;
            rounds_won: number;
            rounds_lost: number;
        };
        blue: {
            has_won: boolean;
            rounds_won: number;
            rounds_lost: number;
        };
    };
    rounds: Round[];
    kills: KillEventMatch[];
}

export type V3MatchesResponse = Match[];
