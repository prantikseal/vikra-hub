"use client"
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const profiles = [
    { name: 'Freelancers', color: 'bg-pink-100' },
    { name: 'Agency Owners', color: 'bg-yellow-100' },
    { name: 'Designers', color: 'bg-pink-100' },
    { name: 'Copywriters', color: 'bg-gray-100' },
    { name: 'Copywriters', color: 'bg-pink-100' },
    { name: 'Copywriters', color: 'bg-yellow-100' },
    { name: 'Content writers', color: 'bg-gray-100' },
    { name: 'Biz Owners', color: 'bg-pink-100' },
    { name: 'Freelancers', color: 'bg-pink-100' },
    { name: 'Agency Owners', color: 'bg-yellow-100' },
    { name: 'Designers', color: 'bg-pink-100' },
    { name: 'Copywriters', color: 'bg-gray-100' },
    { name: 'Copywriters', color: 'bg-pink-100' },
    { name: 'Copywriters', color: 'bg-yellow-100' },
    { name: 'Content writers', color: 'bg-gray-100' },
    { name: 'Biz Owners', color: 'bg-pink-100' },
    { name: 'Freelancers', color: 'bg-pink-100' },
    { name: 'Agency Owners', color: 'bg-yellow-100' },
    { name: 'Designers', color: 'bg-pink-100' },
    { name: 'Copywriters', color: 'bg-gray-100' },
    { name: 'Copywriters', color: 'bg-pink-100' },
    { name: 'Copywriters', color: 'bg-yellow-100' },
    { name: 'Content writers', color: 'bg-gray-100' },
    { name: 'Biz Owners', color: 'bg-pink-100' },
];

const ServesBestSection = () => {
    const [visibleCards, setVisibleCards] = useState(4);
    const [animationDistance, setAnimationDistance] = useState(350 * visibleCards);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setVisibleCards(5)
                setAnimationDistance(350 * 5)
            }
            else if (width >= 992) {
                setVisibleCards(4)
                setAnimationDistance(400 * 4)
            }
            else if (width >= 768) {
                setVisibleCards(5)
                setAnimationDistance(500 * 5)
            }
            else {
                setVisibleCards(3)
                setAnimationDistance(550 * 3)
            };
        };

        window.addEventListener('resize', updateVisibleCards);
        updateVisibleCards();

        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const duplicatedProfiles = [...profiles, ...profiles];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="flex justify-center"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="container mx-auto p-6">
                <motion.h2
                    className="text-3xl md:text-6xl text-center"
                    id="harper-bold"
                    variants={itemVariants}
                >
                    Cognition serves best for
                </motion.h2>
                <motion.div
                    className="flex justify-center relative"
                    variants={itemVariants}
                >
                    <div className="carousel-div relative overflow-hidden px-0 mx-0 md:px-40 container max-w-7xl md:mx-40">
                        {/* Left Gradient */}
                        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#fffaf5] to-transparent pointer-events-none z-10 hidden md:block"></div>
                        {/* Right Gradient */}
                        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#fffaf5] to-transparent pointer-events-none z-10 hidden md:block"></div>

                        <motion.div
                            className="flex mt-12"
                            animate={{
                                x: [-900, -animationDistance],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedProfiles.map((profile, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex-shrink-0 ${profile.color} rounded-full px-4 py-2 mx-2 border border-black`}
                                    style={{ width: '200px' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Image width={100} height={100} src={`/images/profile.png`} alt="Profile" className="w-8 h-8 rounded-full" />
                                        <span className="text-sm font-medium whitespace-nowrap">{profile.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex mt-12"
                            animate={{
                                x: [-animationDistance, -900],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedProfiles.map((profile, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex-shrink-0 ${profile.color} rounded-full px-4 py-2 mx-2 border border-black`}
                                    style={{ width: '200px' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Image height={100} width={100} src={`/images/profile.png`} alt="Profile" className="w-8 h-8 rounded-full" />
                                        <span className="text-sm font-medium whitespace-nowrap">{profile.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ServesBestSection;