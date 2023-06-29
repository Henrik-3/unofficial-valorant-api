import {PremierConferences, Region} from './general';

export type V1PremierConferences = {
    id: string;
    affinity: Region;
    pods: {
        pod: string;
        name: string;
    }[];
    region: 'eu' | 'na' | 'ap' | 'kr';
    timezone: string;
    name: PremierConferences;
    icon: string;
};
