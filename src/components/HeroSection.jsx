"use client"
import React from 'react';
import NavBar from './NavBar'; // Assuming you have a NavBar component
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

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
        <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <main className="flex-grow -pt-52 flex items-start justify-center w-full ">
            <div className="text-center flex-col items-center">
              <div className="inline-block border border-black text-black rounded-full px-4 py-1 mb-4">
                <div className="flex justify-center items-center gap-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#FF966B" />
                  </svg>

                  <span>Newsletter by <a className="" href="https://vikra.substack.com/" rel="noopener"><span className="underline">Vikra Vardhan</span></a></span>
                </div>
              </div>
              <h1 className="text-6xl font-serif flex items-center justify-center pt-14 pb-24 px-12">
                <Image decoding="async" height={600} width={600} src="https://framerusercontent.com/images/CqiivuhRcIaXznetbDxw4Cf6w4.svg" alt="" style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectPosition: "center",
                  objectFit: "cover",
                  imageRendering: "auto"
                }} />
              </h1>
              <div className="w-full flex justify-center items-center">
                <p className="max-w-lg text-2xl font-bold pb-12 md:text-4xl leading-relaxed">
                  A newsletter entirely based on <span className=" text-black py-1 px-4 rounded-full relative">Applied Knowledge
                    {/* make it darker */}
                    <span className="absolute md:top-0 -top-2 -left-12 md:left-0 md:right-0 -z-10 -scale-75 md:scale-100 transform -translate-x-1/11 -translate-y-1/5 md:translate-x-0 md:translate-y-0 opacity-40">
                      <svg width={367} height={62} viewBox="0 0 367 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{ mixBlendMode: 'screen' }}>
                          <path d="M27 27C97.7192 28.6469 168.368 32.3811 239.086 33.9574C263.192 34.4947 287.355 35.2531 311.47 34.917C316.526 34.8465 320.424 34.5522 325.146 33.4776C330.14 32.3408 335.242 32.9322 340 31.3184" stroke="#FF4A09" strokeWidth={53} strokeLinecap="round" />
                        </g>
                      </svg>
                    </span>
                  </span>
                </p>
              </div>
              <button className="bg-[#FEBDA2] text-black border-black border shadow-[4px_8px_0_#000000] px-6 py-3 rounded-full text-lg font-semibold">
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
