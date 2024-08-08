"use client"
import Image from 'next/image';
import React from 'react';
import { motion, useInView } from 'framer-motion';

const NewsletterSubscriptionSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const members = Array(8).fill().map((_, i) => ({
        id: i,
        image: `/images/profile.png`
    }));
    const members1 = Array(7).fill().map((_, i) => ({
        id: i,
        image: `/images/profile.png`
    }));

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
            ref={ref}
            className="my-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="flex justify-center w-full">
                <div className="container max-w-5xl overflow-hidden">
                    <motion.h2
                        className="text-center text-2xl md:text-6xl"
                        id="harper-bold"
                        variants={itemVariants}
                    >
                        Join <span className="font-oswald font-black text-[#e98255]">700+</span>
                        readers who prefer depth and details over
                        <br />
                        <span className="relative">
                            surface-level information
                            <motion.span
                                className="absolute md:top-0 -top-6 -left-52 md:left-0 md:right-0 -z-10 -scale-50 md:scale-100 transform -translate-x-5/11 -translate-y-1/5 md:translate-x-0 md:translate-y-0"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            >
                                <svg width={700} height={79} viewBox="0 0 877 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g style={{ mixBlendMode: 'plus-darker' }}>
                                        <motion.path
                                            d="M37.06 36.7839C53.6976 37.2307 69.1198 38.0217 85.5979 39.5656C110.154 41.8662 135.373 41.0294 160.029 41.6915C233.251 43.6578 306.078 38.7494 379.327 40.7165C408.351 41.4959 437.266 40.279 466.271 40.7633C517.937 41.626 571.094 41.9518 622.679 38.6079C694.868 33.9285 768.209 39.7196 840.47 41.6601"
                                            stroke="#FCD8CB"
                                            strokeWidth={73}
                                            strokeLinecap="round"
                                        />
                                    </g>
                                </svg>
                            </motion.span>
                        </span>
                    </motion.h2>
                    <motion.div
                        className="flex justify-center w-full"
                        variants={itemVariants}
                    >
                        <p className="max-w-4xl text-lg font-semibold text-center mt-8 text-gray-500 px-4">
                            The average word count of a Cognition&apos;s full-fledged issue is tightly packed ~1200 words. Imagine the depth
                        </p>
                    </motion.div>

                    <motion.div
                        className="image-section scale-90 flex-col justify-center mt-8"
                        variants={containerVariants}
                    >
                        {[members, members1, members].map((memberGroup, groupIndex) => (
                            <motion.div
                                key={groupIndex}
                                className="flex justify-center w-full gap-12 mb-8"
                                variants={containerVariants}
                            >
                                {memberGroup.map((member) => (
                                    <motion.div
                                        key={member.id}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Image
                                            width={200}
                                            height={200}
                                            src={member.image}
                                            alt={`Member ${member.id}`}
                                            className="max-w-24 max-h-24 rounded-full object-cover border-2 border-[#e98255]"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="mx-auto w-full"
                variants={itemVariants}
            >
                <div className="flex justify-center mt-8">
                    <motion.div
                        className="border rounded-3xl border-[#FEBDA2] bg-white flex scale-100 md:scale-150"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <input type="email" placeholder="Get into not usual club" className="h-14 px-4 rounded-3xl active:border-none focus:outline-none" />
                        <motion.button
                            className="bg-[#FEBDA2] font-semibold h-14 px-4 rounded-3xl"
                            whileHover={{ backgroundColor: "#e98255" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Signup Now
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default NewsletterSubscriptionSection