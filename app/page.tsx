import { ClerkLoaded } from "@clerk/nextjs";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Integrations } from "@/components/landing/integrations";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <ClerkLoaded>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black pt-16">
        <Header />
        <Hero />
        <Features />
        <Integrations />
        <Footer />
      </main>
    </ClerkLoaded>
  );
}
