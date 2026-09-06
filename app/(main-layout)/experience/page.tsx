import { Metadata } from "next";
import Experience from "@/components/ui/pages/experience/Experience";
import { APIResponse } from "@/types/api.response.types";

export const metadata: Metadata = {
    title: "Planet | Experience - Rakibul Hasan Portfolio",
    description: "Communicate with Rakibul Hasan",
};

const getExperience = async (): Promise<APIResponse> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/experiences`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    return res.json();
};

const ExperiencePage = async () => {
    const experienceData = await getExperience();

    return (
        <Experience experienceData={experienceData} />
    )
};

export default ExperiencePage;