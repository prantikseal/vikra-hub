"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollableBg = () => {
    const [isSticky, setIsSticky] = useState(false);
    const stickyRef = useRef(null);
    const imageRef = useRef(null);
    

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current || imageRef.current) {
                const stickyRect = stickyRef.current.getBoundingClientRect();
                const imageRect = imageRef.current.getBoundingClientRect();
                setIsSticky(true);
            }
        };
        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            <div className="" /> {/* Spacer to allow scrolling */}
            <div
                ref={stickyRef}
                className={`${isSticky ? 'sticky top-0' : ''} z-10`}
            >
                <div className={`flex items-center justify-center max-w-4xl md:max-w-6xl mx-auto ${
                    isSticky ? ' pt-80 pb-80' : 'pt-0'
                    }`}>
                    <div className="p-4 rounded mx-6">
                        <p className="text-center text-3xl md:text-6xl font-bold" id="harper-bold">
                            You will just love to open your mailbox on <br /> <span className="relative">every Saturday
                                <span className="absolute md:top-0 -top-2 -left-12 md:left-0 md:right-0 -z-10 -scale-75 md:scale-100 transform -translate-x-1/11 -translate-y-1/5 md:translate-x-0 md:translate-y-0 opacity-40">
                                    <svg width={367} height={62} viewBox="0 0 367 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g style={{ mixBlendMode: 'screen' }}>
                                            <path d="M27 27C97.7192 28.6469 168.368 32.3811 239.086 33.9574C263.192 34.4947 287.355 35.2531 311.47 34.917C316.526 34.8465 320.424 34.5522 325.146 33.4776C330.14 32.3408 335.242 32.9322 340 31.3184" stroke="#FF4A09" strokeWidth={53} strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </span>
                            </span>.
                        </p>
                    </div>
                </div>
            </div>
            <motion.div
                transition={{ duration: 2, ease: 'easeInOut' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            ref={imageRef} className="flex justify-center w-full h-screen md:h-[1900px]">
                <div className="flex justify-center container w-full">
                    <Image
                        width={1912}
                        height={1000}
                        src="/images/newsletter-bg.png"
                        alt="bg"
                        className=" mx-56"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ScrollableBg;