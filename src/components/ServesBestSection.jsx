"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width >= 1200) {setVisibleCards(5)
                setAnimationDistance(350 * 5)
            }
            else if (width >= 992) {setVisibleCards(4)
                setAnimationDistance(400 * 4)
            }
            else if (width >= 768) {setVisibleCards(5)
                setAnimationDistance(500 * 5)
            }
            else {setVisibleCards(3)
                setAnimationDistance(550 * 3)
            };
        };

        window.addEventListener('resize', updateVisibleCards);
        updateVisibleCards();

        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const duplicatedProfiles = [...profiles, ...profiles];
    // const animationDistance = 350 * visibleCards;

    return (
        <div className="flex justify-center">
            <div className="container mx-auto p-6">
                <h2 className="text-3xl md:text-6xl text-center" id="harper-bold">
                    Cognition serves best for
                </h2>
                <div className="flex justify-center">
                    <div className="carousel-div relative overflow-hidden px-0 mx-0 md:px-40 container max-w-7xl md:mx-40 ">
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
                                <div
                                    key={index}
                                    className={`flex-shrink-0 ${profile.color} rounded-full px-4 py-2 mx-2 border border-black`}
                                    style={{ width: '200px' }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <img src={`/images/profile.png`} alt="Profile" className="w-8 h-8 rounded-full" />
                                        <span className="text-sm font-medium whitespace-nowrap">{profile.name}</span>
                                    </div>
                                </div>
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
                                <div
                                    key={index}
                                    className={`flex-shrink-0 ${profile.color} rounded-full px-4 py-2 mx-2 border border-black`}
                                    style={{ width: '200px' }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <img src={`/images/profile.png`} alt="Profile" className="w-8 h-8 rounded-full" />
                                        <span className="text-sm font-medium whitespace-nowrap">{profile.name}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServesBestSection;
