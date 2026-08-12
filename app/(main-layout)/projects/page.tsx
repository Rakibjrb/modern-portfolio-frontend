import type { Metadata } from "next";
import ChangePage from "@/components/shared/ChangePage";
import Projects from "@/components/ui/pages/projects/Projects";

export const metadata: Metadata = {
    title: "Planet Venus | Projects",
    description: "Work showcase | Rakibul Hasan",
};

const ProjectsPage = () => {
    return (
        <ChangePage destination="Venus">
            <Projects />
        </ChangePage>
    )
};

export default ProjectsPage;