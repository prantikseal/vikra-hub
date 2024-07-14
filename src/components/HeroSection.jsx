import React from 'react';
import NavBar from './NavBar'; // Assuming you have a NavBar component
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="h-screen relative flex flex-col" style={{
      backgroundColor: "#FDD8CB",
    }}>
      <NavBar />
      <div className="flex-grow relative flex items-center justify-center">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "120%",
        }}>
          <div className="absolute bottom-0" style={{
            background: "linear-gradient(0deg, #fffaf5 0%, rgba(255, 250, 245, 0) 100%)",
            height: "100px",
            width: "100%",
          }}>
          </div>
        </div>
        <div className="relative z-10">
          <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block bg-white text-black rounded-full px-4 py-1 mb-4">
                Newsletter by Vikra Vardhan
              </div>
              <h1 className="text-6xl font-serif mb-4 flex items-center justify-center">
                <Image src="/images/cognition-logo.png" width={100} height={100} alt="Hero Logo" />
              </h1>
              <p className="text-xl mb-6">
                A newsletter entirely based<br />on Applied Knowledge
              </p>
              <button className="bg-[#E18D67] text-white px-6 py-3 rounded-full text-lg font-semibold">
                Signup Now
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;