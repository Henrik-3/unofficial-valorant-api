export interface Title {
    content: string;
    locale: string;
}

export interface Update {
    created_at: Date;
    updated_at: Date;
    publish: boolean;
    id: number;
    translations: Title[];
    publish_locations: string[];
    author: string;
}

export interface Incident {
    created_at: Date;
    archive_at?: Date | null;
    updates: Update[];
    platforms: string[];
    updated_at?: Date | null;
    id: number;
    titles: Title[];
    maintenance_status?: string | null;
    incident_severity: string;
}

export interface V1StatusResponse {
    maintenances: Incident[];
    incidents: Incident[];
}
