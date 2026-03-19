
import { syncUser } from "@/actions/user";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Sync user to Supabase on first visit to dashboard
    const user = await syncUser();

    if (!user) {
        // If sync fails or user is not logged in, redirect to home
        redirect("/");
    }

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            <Sidebar />
            <div className="flex-1 lg:ml-64">
                <Header />
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
