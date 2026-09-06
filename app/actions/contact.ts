// app/actions/contact.ts
'use server';

import { z } from 'zod';

// Form validation schema using Zod
const contactSchema = z.object({
    name: z.string().min(3, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validate inputs
    const validation = contactSchema.safeParse({ name, email, message });

    if (!validation.success) {
        return {
            success: false,
            errors: validation.error.flatten().fieldErrors,
        };
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) throw new Error('Failed to send message');

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        return { success: false, error: 'Something went wrong. Please try again.' };
    }
}