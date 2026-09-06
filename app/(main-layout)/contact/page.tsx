import type { Metadata } from "next";
import Contact from "@/components/ui/pages/contact/Contact";
import { IAbout } from "@/types/about.interface";
import { getAbout } from "@/helper/fetchData";

export const metadata: Metadata = {
    title: "Transmit | Contact - Rakibul Hasan Portfolio",
    description: "Communicate with Rakibul Hasan",
};

const ContactPage = async () => {
    const data: IAbout = await getAbout();
    const contactData = { contacts: data.contacts, socialLinks: data.socialsLinks };

    return (
        <Contact contactData={contactData} />
    )
};

export default ContactPage;