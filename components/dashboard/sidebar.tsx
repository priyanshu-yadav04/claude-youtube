"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    Folder,
    Film,
    BookOpen,
    CreditCard,
    Settings,
    Sparkles,
    Plus,
    User,
    ArrowUpCircle
} from "lucide-react";
import Image from "next/image";

const sidebarNavItems = [
    {
        title: "Series",
        href: "/dashboard/series",
        icon: Folder,
    },
    {
        title: "Videos",
        href: "/dashboard/videos",
        icon: Film,
    },
    {
        title: "Guides",
        href: "/dashboard/guides",
        icon: BookOpen,
    },
    {
        title: "Billing",
        href: "/dashboard/billing",
        icon: CreditCard,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden border-r bg-zinc-50/40 dark:bg-zinc-900/40 lg:block lg:w-64 lg:fixed lg:inset-y-0 lg:z-50">
            <div className="flex h-full flex-col">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                        {/* Wrapper for placeholder logo */}
                        <div className="rounded-md bg-primary p-1">
                            <Sparkles className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">VidSync</span>
                    </Link>
                </div>

                <div className="p-4 pb-0">
                    <Button className="w-full justify-start gap-2 shadow-sm" size="lg">
                        <Plus className="h-4 w-4" />
                        Create New Series
                    </Button>
                </div>

                <div className="flex-1 overflow-auto py-6 px-4">
                    <nav className="grid items-start gap-2 text-sm font-medium">
                        {sidebarNavItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                        pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href))
                                            ? "bg-zinc-100 text-primary dark:bg-zinc-800"
                                            : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="mt-auto border-t p-4 space-y-2">
                    {/* Upgrade Option */}
                    <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-100 hover:text-primary cursor-pointer transition-all dark:text-zinc-400 dark:hover:bg-zinc-800">
                        <ArrowUpCircle className="h-4 w-4" />
                        <span>Upgrade Plan</span>
                    </div>

                    {/* Profile Settings */}
                    <Link
                        href="/dashboard/profile"
                        className={cn(
                            "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                            pathname === "/dashboard/profile"
                                ? "bg-zinc-100 text-primary dark:bg-zinc-800"
                                : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                        )}
                    >
                        <User className="h-4 w-4" />
                        <span>Profile Settings</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
