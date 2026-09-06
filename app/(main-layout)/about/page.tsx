import type { Metadata } from "next";
import About from "@/components/ui/pages/about/About";
import { getAbout } from "@/helper/fetchData";

export const metadata: Metadata = {
    title: "Planet | History - Rakibul Hasan Portfolio",
    description: "About Rakibul Hasan",
};

const AboutPage = async () => {
    const aboutData = await getAbout();

    return (
        <About aboutData={aboutData} />
    )
}

export default AboutPage;