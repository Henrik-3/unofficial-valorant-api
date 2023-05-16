import {PremierConferences, PremierSeasonEventTypes, PremierSeasonEventMapSelectionTypes, ValorantMap, Region} from './general';

export type V1PremierLeaderboard = {
    id: string;
    name: string;
    tag: string;
    conference: PremierConferences;
    division: number;
    affinity: Region;
    region: 'eu' | 'na' | 'kr' | 'ap';
    losses: number;
    wins: number;
    score: number;
    ranking: number;
    customization: {
        icons: string;
        image: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
}[];
