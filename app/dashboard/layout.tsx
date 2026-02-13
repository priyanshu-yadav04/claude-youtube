
import { syncUser } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Sync user to Supabase on first visit to dashboard
    console.log("[DashboardLayout] calling syncUser...");
    const user = await syncUser();
    console.log("[DashboardLayout] syncUser result:", user ? "Success" : "Failed");

    if (!user) {
        // If sync fails or user is not logged in, redirect to home
        // (Middleware should handle auth protection, but double check here)
        redirect("/");
    }

    return (
        <div className="flex min-h-screen flex-col">
            {children}
        </div>
    );
}
