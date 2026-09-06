// Type for Social Link items
export interface ISocialLink {
    _id: string;
    name: string;
    url: string;
    iconUrl: string;
}

// Type for Skill items
export interface ISkill {
    _id: string;
    name: string;
    iconUrl: string;
}

// Type for Contacts object
export interface IContacts {
    _id?: string;
    phone: string;
    email: string;
}

// Main Profile/User Data Interface
export interface IAbout {
    _id: string;
    name: string;
    designation: string;
    currentRole: string;
    experience: number;
    completedProjects: number;
    techstack: string;
    description: string;
    quote: string;
    image: string;
    cvlink: string;
    contacts: IContacts;
    socialsLinks: ISocialLink[];
    skills: ISkill[];
    createdAt: string;
    updatedAt: string;
}