export interface BaseItem {
	ItemTypeID: string
	ItemID: string
	Amount: number
}

export interface Item {
	Item: BaseItem
	BasePrice: number
	CurrencyID: string
	DiscountPercent: number
	DiscountedPrice: number
	IsPromoItem: boolean
}

export interface Bundle {
	ID: string
	DataAssetID: string
	CurrencyID: string
	Items: Item[]
	DurationRemainingInSeconds: number
	WholesaleOnly: boolean
}

export interface FeaturedBundle {
	Bundle: Bundle
	Bundles: Bundle[]
	BundleRemainingDurationInSeconds: number
}

export interface FeaturedItemsResponse {
	FeaturedBundle: FeaturedBundle
}
