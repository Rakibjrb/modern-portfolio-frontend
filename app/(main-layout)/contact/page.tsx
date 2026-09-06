import type { Metadata } from "next";
import ChangePage from "@/components/shared/ChangePage";
import Contact from "@/components/ui/pages/contact/Contact";

export const metadata: Metadata = {
    title: "Transmit | Contact - Rakibul Hasan Portfolio",
    description: "Communicate with Rakibul Hasan",
};

const ContactPage = () => {
    return (
        <Contact />
    )
};

export default ContactPage;