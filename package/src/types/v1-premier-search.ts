import {PremierConferences, Region} from './general';

export type V1PremierSearch = {
    id: string;
    name: string;
    tag: string;
    conference: PremierConferences;
    division: number;
    region: 'eu' | 'na' | 'ap' | 'kr';
    affinity: Region;
    losses: number;
    wins: number;
    score: number;
    ranking: number;
    customization: {
        icon: string;
        image: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
};
