import { Wand2, CalendarClock, Share2, Layers, BarChart, Zap } from "lucide-react";

const features = [
    {
        title: "AI Video Generation",
        description: "Turn text prompts into engaging short-form videos instantly using our advanced AI models.",
        icon: Wand2,
    },
    {
        title: "Smart Auto-Scheduling",
        description: "Schedule weeks of content in advance. Our AI picks the best times for maximum engagement.",
        icon: CalendarClock,
    },
    {
        title: "Multi-Platform Sync",
        description: "Post simultaneously to YouTube Shorts, Instagram Reels, and Email campaigns with one click.",
        icon: Share2,
    },
    {
        title: "Brand Consistency",
        description: "Maintain your unique voice and visual style across all generated content automatically.",
        icon: Layers,
    },
    {
        title: "Growth Analytics",
        description: "Track performance across all platforms in a single dashboard to optimize your strategy.",
        icon: BarChart,
    },
    {
        title: "Lightning Fast",
        description: "Generate dozens of variations in minutes, not hours. Scale your content production effortlessly.",
        icon: Zap,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Everything you need to <br className="hidden md:block" />
                        dominate short-form video
                    </h2>
                    <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        Powerful tools designed for creators and marketers who want to scale without sacrificing quality.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                {feature.description}
                            </p>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
