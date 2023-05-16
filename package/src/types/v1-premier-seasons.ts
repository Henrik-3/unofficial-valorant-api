import {PremierConferences, PremierSeasonEventTypes, PremierSeasonEventMapSelectionTypes, ValorantMap} from './general';

type PremierSeasonEvent = {
    id: string;
    type: PremierSeasonEventTypes;
    start_at: string;
    ends_at: string;
    conference_schedules: {
        conference: PremierConferences;
        starts_at: string;
        ends_at: string;
    }[];
    map_selection: {
        type: PremierSeasonEventMapSelectionTypes;
        maps: {
            name: ValorantMap;
            id: string;
        }[];
    };
    points_required_to_participate: number;
};

export type V1PremierSeasons = {
    id: string;
    championship_event_id: string;
    championship_points_required: number;
    starts_at: string;
    ends_at: string;
    enrollment_starts_at: string;
    enrollment_ends_at: string;
    events: PremierSeasonEvent[];
}[];
