import { Locale } from "./general"

export type LocalizedNames = {
	[language in Locale]: string
}

export interface Asset {
	name: string
	localizedNames?: LocalizedNames
	id: string
	assetName: string
}

export interface AssetWithPath extends Asset {
	assetPath: string
}

export interface Act {
	id: string
	parentId: string
	type: string
	name: string
	localizedNames?: LocalizedNames
	isActive: boolean
}

export interface ContentResponse {
	version: string
	characters: Asset[]
	maps: AssetWithPath[]
	chromas: Asset[]
	skins: Asset[]
	skinLevels: Asset[]
	equips: Asset[]
	gameModes: AssetWithPath[]
	sprays: Asset[]
	sprayLevels: Asset[]
	charms: Asset[]
	charmLevels: Asset[]
	playerCards: Asset[]
	playerTitles: Asset[]
	acts: Act[]
	ceremonies: Asset[]
}
