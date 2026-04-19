"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Lineup from "@/components/Lineup";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import HowToBuy from "@/components/HowToBuy";
import TrustBadges from "@/components/TrustBadges";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FictionalModal from "@/components/FictionalModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Hero onPurchase={() => setModalOpen(true)} />
      <Stats />
      <Story />
      <Features />
      <Lineup />
      <Gallery />
      <Reviews />
      <HowToBuy />
      <TrustBadges />
      <CTA onPurchase={() => setModalOpen(true)} />
      <FAQ />
      <Footer />
      {modalOpen && <FictionalModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
