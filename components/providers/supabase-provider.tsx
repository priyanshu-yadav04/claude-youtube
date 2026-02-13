'use client'

import { createClient } from '@supabase/supabase-js'
import { createContext, useContext, useState } from 'react'
import type { SupabaseClient } from '@supabase/supabase-js'

type SupabaseContext = {
    supabase: SupabaseClient
}

const Context = createContext<SupabaseContext | undefined>(undefined)

function createBrowserClient() {
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

export default function SupabaseProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [supabase] = useState(() => createBrowserClient())

    return (
        <Context.Provider value={{ supabase }}>
            {children}
        </Context.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(Context)
    if (context === undefined) {
        throw new Error('useSupabase must be used within a SupabaseProvider')
    }
    return context
}
