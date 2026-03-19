
'use server'

import { currentUser } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function syncUser() {
    try {
        const user = await currentUser();

        if (!user) {
            return null;
        }

        console.log("[syncUser] Starting sync for user:", user.id);

        // Check if user already exists in database
        const { data: existingUser, error: selectError } = await supabaseAdmin
            .from("users")
            .select("*")
            .eq("clerk_id", user.id)
            .single();

        if (selectError && selectError.code !== "PGRST116") {
            // PGRST116 = "no rows found", expected for new users
            console.error("[syncUser] Error checking user:", selectError);
            return null;
        }

        if (existingUser) {
            console.log("[syncUser] User already synced:", existingUser.id);
            return existingUser;
        }

        console.log("[syncUser] creating new user in DB...");

        // Create new user
        const { data: newUser, error: insertError } = await supabaseAdmin
            .from("users")
            .insert({
                clerk_id: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
            })
            .select()
            .single();

        if (insertError) {
            console.error("[syncUser] Error creating user:", insertError);
            return null;
        }

        console.log("[syncUser] User created successfully:", newUser.id);
        return newUser;
    } catch (error) {
        console.error("[syncUser] Unexpected error:", error);
        return null;
    }
}
