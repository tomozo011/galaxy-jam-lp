"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FictionalModal from "@/components/FictionalModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Hero onPurchase={() => setModalOpen(true)} />
      <Features />
      <Reviews />
      <CTA onPurchase={() => setModalOpen(true)} />
      <FAQ />
      <Footer />
      {modalOpen && <FictionalModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
