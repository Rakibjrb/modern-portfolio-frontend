import type { Metadata } from "next";
import ChangePage from "@/components/shared/ChangePage";
import ExploreSolarSystem from "@/components/ui/pages/explore/ExploreSolarSystem";

export const metadata: Metadata = {
    title: "Explore The Solar System",
    description: "Explore the solar system | Rakibul Hasan",
};

const Explore = () => {
    return (
        <ChangePage destination="The Orbit">
            <ExploreSolarSystem />
        </ChangePage>
    )
}

export default Explore;