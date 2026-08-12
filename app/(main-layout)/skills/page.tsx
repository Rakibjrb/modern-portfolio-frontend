import Skills from "@/components/ui/pages/skills/Skills";
import ChangePage from "@/components/shared/ChangePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills | Rakibul Hasan",
    description: "Skills of Rakibul Hasan",
};

const SkillsPage = () => {
    return (
        <ChangePage destination="The Sun">
            <Skills />
        </ChangePage>
    )
}

export default SkillsPage;