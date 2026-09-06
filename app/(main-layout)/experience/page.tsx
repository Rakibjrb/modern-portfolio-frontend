import { Metadata } from "next";
import Experience from "@/components/ui/pages/experience/Experience";
import { getExperience } from "@/helper/fetchData";

export const metadata: Metadata = {
    title: "Planet | Experience - Rakibul Hasan Portfolio",
    description: "Communicate with Rakibul Hasan",
};

const ExperiencePage = async () => {
    const experienceData = await getExperience();

    return (
        <Experience experienceData={experienceData} />
    )
};

export default ExperiencePage;