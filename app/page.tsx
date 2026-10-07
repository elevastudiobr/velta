import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedModel from "@/components/FeaturedModel";
import ModelShowcase from "@/components/ModelShowcase";
import Performance from "@/components/Performance";
import Technology from "@/components/Technology";
import Experience from "@/components/Experience";
import Lifestyle from "@/components/Lifestyle";
import Brand from "@/components/Brand";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050608]">
      <Navbar />

      <Hero />
      <Intro />
      <FeaturedModel />
      <ModelShowcase />
      <Performance />
      <Technology />
      <Experience />
      <Lifestyle />
      <Brand />
      <FinalCTA />
      <Footer />
    </main>
  );
}