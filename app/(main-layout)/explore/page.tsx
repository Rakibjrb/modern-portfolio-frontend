import type { Metadata } from "next";
import ExploreSolarSystem from "@/components/ui/pages/explore/ExploreSolarSystem";

export const metadata: Metadata = {
    title: "Explore The Solar System",
    description: "Explore the solar system | Rakibul Hasan",
};

const Explore = () => {
    return (
        <ExploreSolarSystem />
    )
}

export default Explore;