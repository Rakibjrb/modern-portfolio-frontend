import type { Metadata } from "next";
import About from "@/components/ui/pages/about/About";

export const metadata: Metadata = {
    title: "History | About Me",
    description: "About Rakibul Hasan",
};

const AboutPage = () => {
    return (
        <About />
    )
}

export default AboutPage;