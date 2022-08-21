export interface Cost {
    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": number;
}

export interface Reward {
    ItemTypeID: string;
    ItemID: string;
    Quantity: number;
}

export interface Offer {
    OfferID: string;
    IsDirectPurchase: boolean;
    StartDate: Date;
    Cost: Cost;
    Rewards: Reward[];
}

export interface UpgradeCurrencyOffer {
    OfferID: string;
    StorefrontItemID: string;
}

export interface V1StoreOffersResponse {
    Offers: Offer[];
    UpgradeCurrencyOffers: UpgradeCurrencyOffer[];
}
