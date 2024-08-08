"use client"
import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      className="h-screen relative flex flex-col"
      style={{ backgroundColor: "#FDD8CB" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <div className="flex-grow relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute bottom-0" style={{
            background: "linear-gradient(0deg, #fffaf5 0%, rgba(255, 250, 245, 0) 100%)",
            height: "100px",
            width: "100%",
          }}></div>
        </motion.div>
        <motion.div
          className="relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <main className="flex-grow -pt-52 flex items-start justify-center w-full">
            <div className="text-center flex-col items-center">
              <motion.div
                className="inline-block border border-black text-black rounded-full px-4 py-1 mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <div className="flex justify-center items-center gap-4">
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <circle cx="8" cy="8" r="8" fill="#FF966B" />
                  </motion.svg>
                  <span>Newsletter by <a className="" href="https://vikra.substack.com/" rel="noopener"><span className="underline">Vikra Vardhan</span></a></span>
                </div>
              </motion.div>
              <motion.h1
                className="text-6xl font-serif flex items-center justify-center pt-14 pb-24 px-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Image decoding="async" height={600} width={600} src="https://framerusercontent.com/images/CqiivuhRcIaXznetbDxw4Cf6w4.svg" alt="" style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectPosition: "center",
                  objectFit: "cover",
                  imageRendering: "auto"
                }} />
              </motion.h1>
              <motion.div
                className="w-full flex justify-center items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                {/* increase line height of paragraph */}
                <p className="max-w-2xl text-xl font-bold pb-12 md:text-4xl leading[20]">
                  700+ writers, creators, and freelancers actively read Cognition every week
                  to create better
 <span className="text-black py-1 px-4 rounded-full relative">
                    content systems
                    <motion.span
                      className="absolute md:top-0 -top-2 -left-12 md:left-0 md:right-0 -z-10 -scale-75 md:scale-100 transform -translate-x-1/11 -translate-y-1/5 md:translate-x-0 md:translate-y-0 opacity-40"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                    >
                      <svg width={320} height={62} viewBox="0 0 367 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{ mixBlendMode: 'screen' }}>
                          <motion.path
                            d="M27 27C97.7192 28.6469 168.368 32.3811 239.086 33.9574C263.192 34.4947 287.355 35.2531 311.47 34.917C316.526 34.8465 320.424 34.5522 325.146 33.4776C330.14 32.3408 335.242 32.9322 340 31.3184"
                            stroke="#FF4A09"
                            strokeWidth={40}
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </motion.span>
                  </span>
                  <br />
                  and 
                  <span className="text-black py-1 px-4 rounded-full relative">
                    reverse engineer strategies
                    <motion.span
                      className="absolute md:top-0 -top-2 -left-12 md:left-0 md:right-0 -z-10 -scale-75 md:scale-100 transform -translate-x-1/11 -translate-y-1/5 md:translate-x-0 md:translate-y-0 opacity-40"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                    >
                      <svg width={325} height={62} viewBox="0 0 367 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{ mixBlendMode: 'screen' }}>
                          <motion.path
                            d="M27 27C97.7192 28.6469 168.368 32.3811 239.086 33.9574C263.192 34.4947 287.355 35.2531 311.47 34.917C316.526 34.8465 320.424 34.5522 325.146 33.4776C330.14 32.3408 335.242 32.9322 340 31.3184"
                            stroke="#FF4A09"
                            strokeWidth={40}
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </motion.span>
                  </span>
                </p>
              </motion.div>
              <motion.button
                className="bg-[#FEBDA2] text-black border-black border shadow-[4px_8px_0_#000000] px-6 py-3 rounded-full text-lg font-semibold"
                whileHover={{ scale: 1.05, boxShadow: "6px 10px 0 #000000" }}
                whileTap={{ scale: 0.95, boxShadow: "2px 4px 0 #000000" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                Signup Now
              </motion.button>
            </div>
          </main>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;