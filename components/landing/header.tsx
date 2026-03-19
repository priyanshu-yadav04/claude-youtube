"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                        <Sparkles className="h-4 w-4 fill-current" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">VidSync</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <Link href="#features" className="hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="hover:text-primary transition-colors">
                        How it Works
                    </Link>
                    <Link href="#pricing" className="hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="#blog" className="hover:text-primary transition-colors">
                        Resources
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="hidden text-sm font-medium text-zinc-600 hover:text-primary hover:underline dark:text-zinc-400 md:block">
                                Log in
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button size="sm" className="hidden md:flex rounded-full px-5">
                                Get Started
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button size="sm" variant="outline" className="hidden md:flex rounded-full px-5 mr-4">
                                Dashboard
                            </Button>
                        </Link>
                        <UserButton />
                    </SignedIn>

                    {/* Mobile Menu Toggle (Simple placeholder for now) */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
