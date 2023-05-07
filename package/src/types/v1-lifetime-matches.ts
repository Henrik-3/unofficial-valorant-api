import {Characters, Mode, Region, Season, ValorantMap} from './general';

export interface LifetimeMatch {
    meta: {
        id: string;
        map: {
            id: string;
            name: ValorantMap;
        };
        version: string;
        mode: Mode;
        started_at: string;
        season: {
            id: string;
            short: Season;
        };
        region: Region | null;
        cluster: string | null;
    };
    stats: {
        puuid: string;
        team: string;
        level: number;
        character: {
            id: string;
            name: Characters;
        };
        tier: number;
        score: number;
        kills: number;
        deaths: number;
        assists: number;
        shots: {
            head: number;
            body: number;
            leg: number;
        };
        damage: {
            made: number;
            received: number;
        };
    };
    teams: {
        red: number | null;
        blue: number | null;
    };
}

export type V1LifetimeMatchesResponse = LifetimeMatch[];
