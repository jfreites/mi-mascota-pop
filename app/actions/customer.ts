'use server';

import { createClient } from "@/utils/supabase/server";

export type CustomerData = {
    email: string;
    full_name: string;
    address_line1: string;
    address_line2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone?: string;
};

export async function createCustomer(data: CustomerData) {
    const supabase = await createClient();

    try {
        const { data: customer, error } = await supabase
            .from("customers")
            .insert([
                {
                    email: data.email,
                    full_name: data.full_name,
                    address_line1: data.address_line1,
                    address_line2: data.address_line2,
                    city: data.city,
                    state: data.state,
                    postal_code: data.postal_code,
                    country: data.country,
                    phone: data.phone,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error("Error creating customer:", error);
            return { success: false, error: error.message };
        }

        return { success: true, customer };
    } catch (error) {
        console.error("Unexpected error:", error);
        return { success: false, error: "An unexpected error occurred" };
    }
}
