"use client"
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import NewsletterSubscriptionSection from "@/components/NewsletterSubscriptionSection";
import PartnerWithMe from "@/components/PartnerWithMe";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollableBg from "@/components/ScrollableBg";
import SectionIntro from "@/components/SectionIntro";
import ServesBestSection from "@/components/ServesBestSection";
import SubscriberTestimonials from "@/components/SubscriberTestimonials";
import TestimonialSection from "@/components/TestimonialSection";
import VikraWho from "@/components/VikraWho";
import WhyCognitionSection from "@/components/WhyCognitionSection";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  return (
    <>
  <div className="div">
        <HeroSection />
        <SectionIntro />
  </div>
      <div className=" mt-[600px]"></div>
      <TestimonialSection other={true} />
      <ServesBestSection />
      <WhyCognitionSection />
      <TestimonialSection other={false} />
      <ScrollableBg />
      <SubscriberTestimonials />
      <NewsletterSubscriptionSection />
      <PartnerWithMe />
      <VikraWho />
      {/* <ProductShowcase /> */}
      <Footer />
    </>
  );
}
