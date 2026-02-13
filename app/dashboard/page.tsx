
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <UserButton />
            </div>
            <p className="text-zinc-500">Welcome to your dashboard!</p>
        </div>
    );
}
