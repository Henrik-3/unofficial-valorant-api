import type { FeaturedItems as V1FeaturedItems } from "./v1-store-featured.js";

export interface FeaturedItems extends V1FeaturedItems {
    whole_sale_only: boolean;
}

export type V2StoreFeaturedResponse = FeaturedItems[];
