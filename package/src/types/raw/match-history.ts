import { Region } from "../general"

interface History {
	MatchID: string
	GameStartTime: any
	QueueID: string
}

export interface RawMatchHistoryResponse {
	Subject: string
	BeginIndex: number
	EndIndex: number
	Total: number
	History: History[]
	region: Region
}
