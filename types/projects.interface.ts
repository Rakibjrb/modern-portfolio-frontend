export interface IProject {
    category: string;
    createdAt: string;
    featured: boolean;
    fullDescription?: string;
    images?: string[];
    order: number;
    shortDescription?: string;
    slug: string;
    technologies?: string[];
    thumbnail: string;
    title: string;
    updatedAt: string;
    url: { live: string; githubClient?: string; githubServer?: string };
    _id: string;
}