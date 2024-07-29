import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import SectionIntro from "@/components/SectionIntro";
import TestimonialSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <>
  <div className="div">
        <HeroSection />
        <SectionIntro />
  </div>
      <div className=" mt-[600px]"></div>
      <TestimonialSection />
    </>
  );
}
