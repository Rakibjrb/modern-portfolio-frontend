import { Metadata } from "next";
import Experience from "@/components/ui/pages/experience/Experience";

export const metadata: Metadata = {
    title: "Planet | Experience - Rakibul Hasan Portfolio",
    description: "Communicate with Rakibul Hasan",
};

const ExperiencePage = () => {
    return (
        <Experience />
    )
};

export default ExperiencePage;