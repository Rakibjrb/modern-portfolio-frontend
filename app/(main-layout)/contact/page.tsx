import type { Metadata } from "next";
import Contact from "@/components/ui/pages/contact/Contact";
import { APIResponse } from "@/types/api.response.types";
import { IAbout, IContacts, ISocialLink } from "@/types/about.interface";

export const metadata: Metadata = {
    title: "Transmit | Contact - Rakibul Hasan Portfolio",
    description: "Communicate with Rakibul Hasan",
};

const getContact = async (): Promise<APIResponse> => {
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


const ContactPage = async () => {
    let contactData: { contacts: IContacts, socialLinks: ISocialLink[] } | any;
    try {
        const response: IAbout = (await getContact()).data;
        contactData = {
            contacts: response.contacts,
            socialLinks: response.socialsLinks
        }
    } catch { }

    return (
        <Contact contactData={contactData} />
    )
};

export default ContactPage;