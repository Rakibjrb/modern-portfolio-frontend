// Interface for Professional Experience Item
export interface IProfessionalExperience {
    _id: string;
    title: string;
    organization: string;
    description: string;
    startDate: Date;
    endDate: Date;
    responsibilities: string[];
    achievements: string[];
    location: string;
    type: string;
}

// Interface for Academic Qualification Item
export interface IAcademicQualification {
    _id: string;
    title: string;
    organization: string;
    description: string;
    startDate: Date;
    endDate: Date;
    degree: string;
    fieldOfStudy: string;
    result: string;
    location: string;
}

// Main Experience/Resume Interface
export interface IExperience {
    _id: string;
    professional: IProfessionalExperience[];
    academic: IAcademicQualification[];
    createdAt: string;
    updatedAt: string;
}