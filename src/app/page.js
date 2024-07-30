import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ScrollableBg from "@/components/ScrollableBg";
import SectionIntro from "@/components/SectionIntro";
import ServesBestSection from "@/components/ServesBestSection";
import SubscriberTestimonials from "@/components/SubscriberTestimonials";
import TestimonialSection from "@/components/TestimonialSection";
import WhyCognitionSection from "@/components/WhyCognitionSection";


export default function Home() {
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
    </>
  );
}
