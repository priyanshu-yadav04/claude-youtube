"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/dashboard/sidebar"; // Reuse sidebar content for mobile

export function Header() {
    return (
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white/80 px-6 backdrop-blur-md dark:bg-black/80 lg:pl-0">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                    {/* We can refactor Sidebar to be more reusable, but for now just basic nav */}
                    <div className="p-6">
                        <span className="font-bold text-lg">VidSync</span>
                        {/* Mobile nav content would go here, or we reuse the Sidebar component if refactored to accept props */}
                    </div>
                </SheetContent>
            </Sheet>

            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                        <Input
                            type="search"
                            placeholder="Search projects..."
                            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-zinc-950"
                        />
                    </div>
                </form>
            </div>
            <UserButton afterSignOutUrl="/" />
        </header>
    );
}
