import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-sm font-medium text-zinc-800 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-200">
                        <Sparkles className="mr-2 h-4 w-4 text-primary" />
                        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-bold">
                            New: AI Video Scheduling
                        </span>
                        <span className="ml-2">is here</span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                        Automate Your Video Strategy with <span className="text-primary">AI Power</span>
                    </h1>

                    <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        Generate and schedule viral short-form videos for YouTube, Instagram, and Email campaigns in seconds. consistent growth, zero burnout.
                    </p>

                    <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <Button size="lg" className="gap-2 h-12 px-8 text-base">
                            Start Generating Free <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-base">
                            <Play className="h-4 w-4" /> Watch Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
