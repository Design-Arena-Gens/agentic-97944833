import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Arrivals from "@/components/Arrivals";
import Departures from "@/components/Departures";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Arrivals />
        <Departures />
        <Info />
      </main>
      <Footer />
    </>
  );
}