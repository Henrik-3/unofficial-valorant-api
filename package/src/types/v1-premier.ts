import {PremierConferences} from './general';

export type V1Premier = {
    id: string;
    name: string;
    tag: string;
    enrolled: boolean;
    stats: {
        wins: number;
        matches: number;
        losses: number;
    };
    placement: {
        points: number;
        conference: PremierConferences;
        division: number;
        place: number;
    };
    customization: {
        icon: string;
        image: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
    member: {
        puuid: string;
        name: string;
        tag: string;
    }[];
};
