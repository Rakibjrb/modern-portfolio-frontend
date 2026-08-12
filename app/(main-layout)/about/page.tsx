import type { Metadata } from "next";
import ChangePage from "@/components/shared/ChangePage";
import About from "@/components/ui/pages/about/About";

export const metadata: Metadata = {
    title: "History | About Me",
    description: "About Rakibul Hasan",
};

const AboutPage = () => {
    return (
        <ChangePage destination="Earth">
            <About />
        </ChangePage>
    )
}

export default AboutPage;