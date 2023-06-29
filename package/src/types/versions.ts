/* eslint-disable @typescript-eslint/indent */
import type {RawCompetitiveUpdatesResponse} from './raw/competitive-updates.js';
import type {RawMatchDetailsResponse} from './raw/match-details.js';
import type {RawMatchHistoryResponse} from './raw/match-history.js';
import type {RawMMRResponse} from './raw/mmr.js';
import type {V1LeaderboardResponse} from './v1-leaderboard.js';
import type {V1MMRResponse} from './v1-mmr.js';
import type {V1StoreFeaturedResponse} from './v1-store-featured.js';
import {V1StoreOffersResponse} from './v1-store-offers.js';
import type {V2LeaderboardResponse} from './v2-leaderboard.js';
import type {V2MMRResponse} from './v2-mmr.js';
import type {V2StoreFeaturedResponse} from './v2-store-featured.js';
import {V2StoreOffersResponse} from './v2-store-offers.js';

export type LeaderboardResponse<T> = T extends 'v1' ? V1LeaderboardResponse : T extends 'v2' ? V2LeaderboardResponse : V2LeaderboardResponse;

export type MMRResponse<T> = T extends 'v1' ? V1MMRResponse : T extends 'v2' ? V2MMRResponse : V2MMRResponse;

export type StoreFeaturedResponse<T> = T extends 'v1' ? V1StoreFeaturedResponse : T extends 'v2' ? V2StoreFeaturedResponse : V2StoreFeaturedResponse;

export type StoreOffersResponse<T> = T extends 'v1' ? V1StoreOffersResponse : T extends 'v2' ? V2StoreOffersResponse : V2StoreOffersResponse;

export type RawResponse<T> = T extends 'matchdetails'
    ? RawMatchDetailsResponse
    : T extends 'matchhistory'
    ? RawMatchHistoryResponse
    : T extends 'mmr'
    ? RawMMRResponse
    : T extends 'competitiveupdates'
    ? RawCompetitiveUpdatesResponse
    : never;
