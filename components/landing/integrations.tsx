import { Mail } from "lucide-react";

export function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Connect Once, Post Everywhere
                    </h2>
                    <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        Seamlessly integrate with your favorite platforms and manage your entire video presence from one hub.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale transition-all duration-500 hover:grayscale-0">
                    {/* YouTube Logo Representation */}
                    <div className="flex items-center gap-2 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                        <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>
                        <span>YouTube Shorts</span>
                    </div>

                    {/* Instagram Logo Representation */}
                    <div className="flex items-center gap-2 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white shadow-lg">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        <span>Instagram Reels</span>
                    </div>

                    {/* Email Logo Representation */}
                    <div className="flex items-center gap-2 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                            <Mail className="h-7 w-7" />
                        </div>
                        <span>Email Marketing</span>
                    </div>
                </div>

                <div className="mt-16 rounded-2xl bg-zinc-900 p-8 md:p-12 text-center text-white dark:bg-zinc-100 dark:text-zinc-900">
                    <h3 className="text-2xl font-bold mb-4">Ready to go viral?</h3>
                    <p className="mb-8 opacity-80 max-w-lg mx-auto">Join 10,000+ creators who are saving 20+ hours a week with VidSync.</p>
                    <button className="h-12 px-8 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                        Get Started for Free
                    </button>
                </div>
            </div>
        </section>
    );
}
