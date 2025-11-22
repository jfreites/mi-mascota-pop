import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function getUserOrRedirect() {
    const user = await getUserOrNull();

    if (!user) {
        redirect('/login')
    }

    return user
}

export async function getUserOrNull() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return user || null;
}