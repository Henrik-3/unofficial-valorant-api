export interface Item {
    uuid: string;
    name: string;
    image: string;
    type: string;
    amount: number;
    discount_percent: number;
    base_price: number;
    discounted_price: number;
    promo_item: boolean;
}

export interface FeaturedItems {
    bundle_uuid: string;
    items: Item[];
    seconds_remaining: number;
}

export type FeaturedItemsResponse = FeaturedItems[];

