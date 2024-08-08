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
                    isSticky ? ' p-4 md:p-16' : 'pt-0'
                    }`}>
                    <div className="p-4 rounded mx-6">
                        <p className="text-center text-3xl md:text-6xl font-bold" id="harper-bold">
                            Streaming Netflix, Hanging out with friends, and Cognition emails…What’s common in the three?
                            <br /><br /><br />


                            You look forward to them
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