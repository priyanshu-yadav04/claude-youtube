import { createClient } from '@supabase/supabase-js'

// Browser-side Supabase client for public data queries.
// Uses the anon key — all operations are subject to RLS.
export function createBrowserClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        }
    )
}
