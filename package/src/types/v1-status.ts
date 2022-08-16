import { Locale } from "./general"

export interface Title {
	content: string
	locale: Locale
}

export interface Update {
	created_at: Date
	updated_at: Date
	publish: boolean
	id: number
	translations: Title[]
	publish_locations: string[]
	author: string
}

export interface Incident {
	created_at: Date
	archive_at: Date
	updates: Update[]
	platforms: string[]
	updated_at: Date
	id: number
	titles: Title[]
	maintenance_status: string
	incident_severity: string
}

export interface StatusResponse {
	maintenances: Incident[]
	incidents: Incident[]
}
