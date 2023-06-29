export interface V2StoreOffersResponse {
    offers: {
        offer_id: string;
        cost: number;
        name: string;
        icon: string;
        type: string;
        skin_id: string;
        content_tier: {
            name: string;
            dev_name: string;
            icon: string;
        };
    }[];
}
