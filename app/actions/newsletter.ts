'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';

const schema = z.object({
    email: z.email({ message: 'Por favor ingresa un correo electrónico válido' }),
});

export type NewsletterState = {
    success: boolean;
    message: string;
    errors?: {
        email?: string[];
    };
};

export async function subscribeToNewsletter(prevState: NewsletterState, formData: FormData): Promise<NewsletterState> {
    const email = formData.get('email');

    const validatedFields = schema.safeParse({
        email,
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Error de validación',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const supabase = await createClient();

    try {
        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert({ email: validatedFields.data.email });

        if (error) {
            if (error.code === '23505') { // Unique violation
                return {
                    success: false,
                    message: 'Este correo ya está registrado en nuestra lista.',
                };
            }
            console.error('Supabase error:', error);
            return {
                success: false,
                message: 'Hubo un error al guardar tu correo. Por favor intenta de nuevo.',
            };
        }

        return {
            success: true,
            message: 'Gracias por unirte a la comunidad más pop',
        };
    } catch (error) {
        console.error('Unexpected error:', error);
        return {
            success: false,
            message: 'Ocurrió un error inesperado. Por favor intenta de nuevo.',
        };
    }
}
