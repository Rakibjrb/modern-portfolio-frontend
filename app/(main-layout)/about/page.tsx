import type { Metadata } from "next";
import About from "@/components/ui/pages/about/About";
import { APIResponse } from "@/types/api.response.types";

export const metadata: Metadata = {
    title: "Planet | History - Rakibul Hasan Portfolio",
    description: "About Rakibul Hasan",
};

const getAbout = async (): Promise<APIResponse> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/about`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    return res.json();
};

const AboutPage = async () => {
    const aboutData = await getAbout();

    return (
        <About aboutData={aboutData} />
    )
}

export default AboutPage;