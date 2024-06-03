'use server';

import { Resend } from 'resend';
import { validateString } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('senderMessage');
    const senderEmail = formData.get('senderEmail');

    //server side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email',
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message',
        };
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'cdiazit5@gmail.com',
            subject: '',
            text: message as string,
            reply_to: senderEmail as string,
        });
    } catch (error: unknown) {
        console.log(error)
    }
};
