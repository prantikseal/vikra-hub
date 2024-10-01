"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from 'framer-motion';

const WhyCognitionSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const pillars = [
        {
            emoji: "🧠",
            title: "For Content Creators",
            content:
                "Everyone creates. Only the real ones make money from content. We share the curriculum on turning content into a business.",
        },
        {
            emoji: "👩‍💻",
            title: "For Freelancers",
            content:
                "Service is only 10% of running a service-based business. I share the other 90% - systems, SOPs, mistakes, hiring, lead generation, etc.",
        },
        {
            emoji: "📝",
            title: "For Writers",
            content:
                "Most writers just use famous formulas. The downside? You follow the same rules, you write the same copy. But here, you will learn to break and form rules at will.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
            className="max-w-6xl mx-auto p-6 overflow-hidden mt-24"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1
                className="text-xl text-gray-400 text-center mb-8"
                variants={itemVariants}
            >
                Why Cognition? What&apos;s in it for you?
            </motion.h1>

            <motion.h2
                className="text-4xl md:text-6xl text-center mb-12"
                variants={itemVariants}
            >
                <span className="font-oswald font-extrabold">3</span> <span id="harper-bold">Pillars of Cognition</span>
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                variants={containerVariants}
            >
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-129 bg-opacity-40 p-6 rounded-lg relative"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-12 h-12 bg-orange-400 rounded-lg relative">
                            <span className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {pillar.emoji}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 mt-4">{pillar.title}</h3>
                        <p>{pillar.content}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                // className="grid grid-cols-1 md:grid-cols-2 gap-24"
                className="text-center"
                variants={containerVariants}
            >
                {/* <motion.div variants={itemVariants}> */}
                {/* <Image src="/images/normal-box.png" alt="Why Cognition 1" width={500} height={500} className="mb-4 w-full" /> */}
                {/* <h3 className="text-2xl font-bold mb-4">
                        Global Knowledge in your Inbox!
                    </h3>
                    <p className="mb-4">
                        We reach out to top content minds globally and ask them to share
                        their experience with you every week.
                    </p>
                    <p>
                        The content is subscriber-exclusive and is not published
                        elsewhere—not on socials, not on the web, only in your inbox.
                    </p>
                </motion.div> */}
                <motion.div variants={itemVariants}>
                    {/* <Image src="/images/normal-box.png" alt="Why Cognition 1" width={500} height={500} className="mb-4 w-full" /> */}
                    <h3 className="text-2xl font-bold mb-4">
                        Get your writing reviewed!
                    </h3>
                    <p className="">
                        Subscribe
                    </p>
                    <p className="">↓</p>
                    <p>
                        Reply to the welcome email with your writeup
                    </p>
                    <p className="">↓</p>
                    <p>
                        Get a detailed ~300-word review within 72 hours
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WhyCognitionSection;