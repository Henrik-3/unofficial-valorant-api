export interface Post {
    banner_url: string;
    category: string;
    date: Date;
    external_link: string;
    title: string;
    url: string;
}

export interface Announcement {
    banner_url: string;
    category: string;
    date: Date;
    external_link?: string | null;
    title: string;
    url: string;
}

export type V1WebsiteResponse = Announcement[];
