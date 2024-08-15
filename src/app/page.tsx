import Commitment from "@/components/sections/home/Commitment";
import Intro from "@/components/sections/home/Intro";
import Minerals from "@/components/sections/home/Minerals";
import HomeHero from "@/components/sliders/HomeHero";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <HomeHero />
      <Intro />
      <Minerals />
      <Commitment />
    </main>
  );
}
