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
                        Ditch surface-level information 👎
                    </motion.h2>

                    <motion.div
                        className="flex justify-center w-full"
                        variants={itemVariants}
                    >
                        <p className="max-w-4xl text-lg font-semibold text-center mt-8 text-gray-500 px-4">
                            Average length of each Cognition issue = tightly packed ~1200 words. Imagine the depth.
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
                            Start diving
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default NewsletterSubscriptionSection;
