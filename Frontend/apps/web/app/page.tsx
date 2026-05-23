import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Zentry
        </h1>
      </section>
    </main>
  );
}