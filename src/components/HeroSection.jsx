"use client"
import React from 'react';
import NavBar from './NavBar'; // Assuming you have a NavBar component
import Image from 'next/image';
import { AnimatePresence , motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <div className="h-screen relative flex flex-col -z-10" style={{
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
        <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <main className="flex-grow pt-52 flex items-start justify-center h-screen w-full">
            <div className="text-center flex-col items-center">
              <div className="inline-block border border-black text-black rounded-full px-4 py-1 mb-4">
                <div className="flex justify-center items-center gap-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#FF966B" />
                  </svg>

                  <span>Newsletter by <a className="" href="https://vikra.substack.com/" rel="noopener"><span className=" underline">Vikra Vardhan</span></a></span>
                </div>
              </div>
              <h1 className="text-6xl font-serif flex items-center justify-center pt-14 pb-24">
                <Image decoding="async" height={600} width={600} src="https://framerusercontent.com/images/CqiivuhRcIaXznetbDxw4Cf6w4.svg" alt="" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto" />
              </h1>
              <div className="w-full flex justify-center items-center">
                <p className=" max-w-lg text-4xl font-bold pb-12">
                  A newsletter entirely based on Applied Knowledge
                </p>
              </div>
              <button className="bg-[#E18D67] text-white px-6 py-3 rounded-full text-lg font-semibold">
                Signup Now
              </button>
            </div>
          </main>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;