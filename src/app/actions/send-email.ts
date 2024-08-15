import { contactSchema } from '@/components/Contact/Form';
"use server"

import { ConsultancyEmail } from '@/components/Contact/Email';
import { Resend } from "resend";
// import 'dotenv/config'
import { z } from 'zod';

export async function submitMail(values: z.infer<typeof contactSchema>) {
    let resend: Resend;
    if (process.env.RESEND_API) {
        resend = new Resend(process.env.RESEND_API);
    } else {
        return ({
            "data": {
                "code": 400,
                "message": "Missing Enviroment Variable"
            }
        })
    }

    try {
        const { data } = await resend.emails.send({
            from: `Enquiries from Pure Earth <enquiries@pureearth.com.ng>`,
            to: ["pureearthng@proton.me", "jeremiahedavid@gmail.com", "eblaze301@gmail.com"],
            subject: values.subject,
            tags: [],
            react: ConsultancyEmail(
                {msg: values.message, name: values.name, email: values.email, mineral: values.minerals, quantity: values.quantity}
            )
        });
        return ({ "data": { "code": 200, "message": "Sent Successfully", "response": data } })
    } catch (error) {
        return ({ "data": { "code": 400, "message": error } })
    }
}