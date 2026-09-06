import Skills from "@/components/ui/pages/skills/Skills";
import { getAbout } from "@/helper/fetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planet | Skills - Rakibul Hasan Portfolio",
    description: "Skills of Rakibul Hasan",
};

const SkillsPage = async () => {
    const data = await getAbout();

    return (
        <Skills skills={data.skills} />
    )
}

export default SkillsPage;