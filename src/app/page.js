"use client"
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import NewsletterSubscriptionSection from "@/components/NewsletterSubscriptionSection";
import PartnerWithMe from "@/components/PartnerWithMe";
import ProductShowcase from "@/components/ProductShowcase";
import RecentPosts from "@/components/RecentPosts";
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
      <TestimonialSection other={true} personName="Tyler Denk" company="CEO, Beehiv" personImage="/images/profile/tyler-denk.jpeg" testimonial={`“ This is looking good Vikra! Just Subscribed”`} hoverImage="/images/tyler-denk.png"  />
      <ServesBestSection />
      <WhyCognitionSection />
      <TestimonialSection other={false} personName="Ayush Chaturvedi" company="Co-founder, Elephas.ai" personImage="/images/profile/ayush.jpeg" testimonial={`“ I never miss out on Cognition. Love Vikra's take on copywriting and how nuanced he gets when analysing copy. I think content marketing is an art form, and Vikra is a top-notch artist.”`} />
      <ScrollableBg />
      <SubscriberTestimonials />
      <RecentPosts />
      <NewsletterSubscriptionSection />
      <PartnerWithMe />
      <VikraWho />
      {/* <ProductShowcase /> */}
      <Footer />
    </>
  );
}
