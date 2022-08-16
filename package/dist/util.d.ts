import type { Rank, ValorantMap } from "./types/general.js";
/**
 * Extra util. Useful for displaying info about a certain map
 */
export declare const mapImages: {
    [key in ValorantMap]: {
        splash: string;
        minimap: string;
        landscape: string;
    };
};
/**
 * Extra util. Useful for calls such as `matches` that don't include rank images on players
 */
export declare const rankImages: {
    [key in Rank]: {
        large: string;
        small: string;
    };
};
