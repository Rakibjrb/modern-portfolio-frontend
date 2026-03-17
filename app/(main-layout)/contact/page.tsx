import type { Metadata } from "next";
import ChangePage from "@/components/shared/ChangePage";
import Contact from "@/components/ui/pages/contact/Contact";

export const metadata: Metadata = {
    title: "Radio Station | Contact",
    description: "Communicate with Rakibul Hasan",
};

const ContactPage = () => {
    return (
        <ChangePage destination="Communication HUB">
            <Contact />
        </ChangePage>
    )
};

export default ContactPage;